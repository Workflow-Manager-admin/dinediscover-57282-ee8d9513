//
// api.js: Utility for calling the backend proxy to fetch restaurant data from Yelp
//

// PUBLIC_INTERFACE
export async function fetchRestaurants({ location, cuisine, rating, price, distance }) {
  // Compose REST query for the backend proxy.
  // Backend endpoint: /api/restaurants?location=...&cuisine=...&rating=...&price=...&distance=...
  const params = new URLSearchParams();

  if (location) params.append("location", location);
  if (cuisine && cuisine !== "Other") params.append("cuisine", cuisine);
  if (rating) params.append("rating", rating);
  if (price) params.append("price", price);
  if (distance) params.append("distance", distance);

  const resp = await fetch(`/api/restaurants?${params.toString()}`, {
    method: "GET",
    headers: {
      "Accept": "application/json"
    }
  });

  if (!resp.ok) {
    const msg = await resp.text();
    throw new Error(msg || resp.statusText);
  }
  return resp.json();
}
