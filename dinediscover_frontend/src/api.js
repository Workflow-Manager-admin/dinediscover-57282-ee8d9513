//
// api.js: Utility for calling the backend proxy to fetch restaurant data from Yelp
//

/**
 * PUBLIC_INTERFACE
 * Fetch restaurants from the backend proxy.
 * Adds debug logging for analysis of request and response.
 */
export async function fetchRestaurants({ location, cuisine, rating, price, distance }) {
  // Compose REST query for the backend proxy.
  // Backend endpoint: /api/restaurants?location=...&cuisine=...&rating=...&price=...&distance=...
  const params = new URLSearchParams();

  if (location) params.append("location", location);
  if (cuisine && cuisine !== "Other") params.append("cuisine", cuisine);
  if (rating) params.append("rating", rating);
  if (price) params.append("price", price);
  if (distance) params.append("distance", distance);

  // DEBUG: Output outgoing parameters to backend in browser console
  // eslint-disable-next-line no-console
  console.log("[Frontend/api.js] Fetching /api/restaurants with params:", Object.fromEntries(params.entries()));

  // Extra debug: Also log raw query string for test purposes
  // eslint-disable-next-line no-console
  console.log("[Frontend/api.js] QueryString for backend:", params.toString());

  const resp = await fetch(`/api/restaurants?${params.toString()}`, {
    method: "GET",
    headers: {
      "Accept": "application/json"
    }
  });

  if (!resp.ok) {
    const msg = await resp.text();
    // eslint-disable-next-line no-console
    console.error("[Frontend/api.js] Backend responded with error:", resp.status, msg);
    throw new Error(msg || resp.statusText);
  }
  const json = await resp.json();
  // DEBUG: Output what was returned from backend
  if (json && typeof window !== "undefined") {
    // eslint-disable-next-line no-console
    console.log(`[Frontend/api.js] Received ${Array.isArray(json.businesses) ? json.businesses.length : 0} businesses`);
    if (Array.isArray(json.businesses) && json.businesses.length > 0) {
      console.log("[Frontend/api.js] Sample business:", json.businesses[0]?.name, json.businesses[0]?.id);
      // Extra debug: Log entire first business object for diagnosis
      console.log("[Frontend/api.js] Full sample business:", json.businesses[0]);
    }
  }
  return json;
}
