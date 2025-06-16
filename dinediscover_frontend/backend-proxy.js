//
// backend-proxy.js
// Lightweight backend proxy for forwarding filtered requests from frontend to Yelp Fusion API securely
//
const express = require("express");
const fetch = require("node-fetch");
const app = express();

const YELP_API_KEY = process.env.YELP_API_KEY || ""; // Set via environment variable
const YELP_API_URL = "https://api.yelp.com/v3/businesses/search";

/**
 * Convert query parameters appropriately (miles to meters, etc)
 * Adds debug logging for diagnosis
 */
function buildYelpQuery(params) {
  const out = {};
  // Always need 'location'
  out.location = params.location;
  if (params.cuisine && params.cuisine !== "Other") out.term = params.cuisine + " restaurant";
  // Price is one of: $, $$, $$$, $$$$; Yelp expects "1", "2", "3", "4"
  if (params.price) {
    let priceNum = params.price.length;
    out.price = priceNum.toString();
  }
  // Rating filter: we filter client-side (Yelp API has no 'min_rating'), but we can sort by rating
  out.sort_by = "best_match";
  if (params.rating) out.rating = params.rating; // Used only on frontend for filtering
  // Limit: only show 20 results
  out.limit = 20;
  // Distance: Yelp uses meters, max 40000 (25 miles)
  if (params.distance) {
    let miles = Number(params.distance);
    out.radius = Math.min(Math.round(miles * 1609.34), 40000); // in meters, 1 mile ≈ 1609m
  }
  return out;
}

// PUBLIC_INTERFACE
app.get("/api/restaurants", async (req, res) => {
  // DEBUG: Log incoming params
  // eslint-disable-next-line no-console
  console.log("[Proxy] Received GET /api/restaurants with query:", req.query);

  if (!YELP_API_KEY) {
    res.status(500).json({ error: "Yelp API key not configured." });
    return;
  }

  const params = buildYelpQuery(req.query);
  // DEBUG: Log mapped Yelp query params
  // eslint-disable-next-line no-console
  console.log("[Proxy] Mapped Yelp query params:", params);

  try {
    const url = new URL(YELP_API_URL);
    Object.entries(params).forEach(([k, v]) => v !== undefined && url.searchParams.append(k, v));
    // DEBUG: Log Yelp API URL
    // eslint-disable-next-line no-console
    console.log("[Proxy] Yelp API URL:", url.toString());

    const yelpResp = await fetch(url.toString(), {
      headers: { Authorization: `Bearer ${YELP_API_KEY}` }
    });
    if (!yelpResp.ok) {
      const err = await yelpResp.text();
      // eslint-disable-next-line no-console
      console.error("[Proxy] Yelp API error: ", yelpResp.status, err);
      return res.status(yelpResp.status).json({ error: err });
    }
    const body = await yelpResp.json();

    // Optionally filter out by min rating on backend if specified
    let businesses = body.businesses || [];
    if (req.query.rating) {
      const minRating = Number(req.query.rating);
      businesses = businesses.filter(b => b.rating >= minRating);
    }

    // DEBUG: Output number of businesses and sample
    // eslint-disable-next-line no-console
    console.log(`[Proxy] Yelp returned ${Array.isArray(businesses) ? businesses.length : 0} businesses`);
    if (businesses.length) {
      // Display first restaurant name and id for sampling
      console.log("[Proxy] Sample business:", businesses[0]?.name, businesses[0]?.id);
      // Extra debug: Full dump of sample business
      console.log("[Proxy] Full sample business object:", JSON.stringify(businesses[0], null, 2));
    }

    res.json({ businesses });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("[Proxy] Handler threw error:", err);
    res.status(500).json({ error: err.message || "Request failed" });
  }
});

// Only start server if directly invoked
if (require.main === module) {
  const PORT = process.env.BACKEND_PORT || 8080;
  app.listen(PORT, () => console.log(`Backend proxy running on port ${PORT}`));
}

module.exports = app;
