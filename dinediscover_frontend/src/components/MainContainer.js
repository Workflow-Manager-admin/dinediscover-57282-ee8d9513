import React, { useState } from "react";
import "../App.css";
import { fetchRestaurants } from "../api";

/**
 * MainContainer component for DineDiscover.
 * Implements asynchronous data fetching from a backend proxy (Yelp Fusion API) using modern React state management.
 * User filters (location, cuisine, price, rating, distance) are sent as GET params.
 * Handles all loading, error, and empty result states for a smooth UX.
 * Maps backend data to the display UI format.
 * API key is managed ONLY in the backend proxy via environment variable for security.
 */
const CUISINE_OPTIONS = [
  "",
  "Italian",
  "Chinese",
  "Mexican",
  "American",
  "Thai",
  "Indian",
  "Other"
];

const RATING_OPTIONS = [
  { value: "", label: "Any rating" },
  { value: "3", label: "3+ Stars" },
  { value: "4", label: "4+ Stars" },
  { value: "4.5", label: "4.5+ Stars" }
];

const PRICE_OPTIONS = [
  { value: "", label: "Any price" },
  { value: "$", label: "$" },
  { value: "$$", label: "$$" },
  { value: "$$$", label: "$$$" },
  { value: "$$$$", label: "$$$$" }
];

const DISTANCE_OPTIONS = [
  { value: "", label: "Any distance" },
  { value: "10", label: "Within 10 miles" },
  { value: "25", label: "Within 25 miles" },
  { value: "50", label: "Within 50 miles" }
];

// PUBLIC_INTERFACE
export default function MainContainer() {
  const [location, setLocation] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");
  const [distance, setDistance] = useState("");
  const [pending, setPending] = useState(false);
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState(null);
  const [suggestionIndex, setSuggestionIndex] = useState(null);

  // PUBLIC_INTERFACE
  const handleSuggest = async (e) => {
    e.preventDefault();
    setPending(true);
    setError(null);
    setRestaurants([]);
    setSuggestionIndex(null);

    try {
      const resp = await fetchRestaurants({
        location,
        cuisine,
        rating,
        price,
        distance
      });

      // DEBUG: Output full API response to browser console
      // eslint-disable-next-line no-console
      console.log("[MainContainer] fetchRestaurants() raw response:", resp);

      const results = Array.isArray(resp.businesses) ? resp.businesses : [];

      // DEBUG: Output how many businesses after any (client side) filtering
      // eslint-disable-next-line no-console
      console.log(`[MainContainer] Businesses after frontend parsing: ${results.length}`);
      if (results.length) {
        // Print sample business for confirmation
        console.log("[MainContainer] Sample business:", results[0]);
      } else {
        // Enhanced debug: If backend responded but zero business, print out the full backend response for deeper analysis
        console.warn("[MainContainer] WARNING: Backend responded, but businesses array is empty (printing full backend response):", resp);
        if (typeof window !== "undefined" && window && window.localStorage) {
            window.localStorage.setItem("__dinediscover_last_backend_response__", JSON.stringify(resp));
        }
      }
      if (!results.length) {
        setRestaurants([]);
        setPending(false);
        return;
      }
      setRestaurants(results);
      setSuggestionIndex(Math.floor(Math.random() * results.length));
      setPending(false);

    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("[MainContainer] Error during fetchRestaurants:", err);
      setError(err.message || "Failed to load restaurant data.");
      setPending(false);
    }
  };

  function rerollSuggestion() {
    if (restaurants.length > 1) {
      let idx;
      do {
        idx = Math.floor(Math.random() * restaurants.length);
      } while (idx === suggestionIndex && restaurants.length > 1);
      setSuggestionIndex(idx);
    }
  }

  const suggestion = 
    (restaurants.length && suggestionIndex !== null) ? restaurants[suggestionIndex] : null;

  return (
    <div className="container" style={{ marginTop: "3rem", maxWidth: 480 }}>
      <h1 className="title" style={{ textAlign: "center", fontWeight: 700 }}>
        Discover Your Next Meal
      </h1>
      <p className="subtitle" style={{ textAlign: "center", color: "var(--text-secondary)" }}>
        Not sure where to eat? Tell us your location and preferred cuisine.<br />We’ll suggest something fun!
      </p>

      <form
        className="restaurant-form"
        onSubmit={handleSuggest}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.2em",
          marginTop: "2.2em"
        }}
      >
        <input
          className="input"
          type="text"
          placeholder="Enter location (e.g. city, ZIP, or address)"
          value={location}
          autoFocus
          onChange={e => setLocation(e.target.value)}
          aria-label="Location"
          required
        />

        <select
          className="input cuisine-select"
          value={cuisine}
          onChange={e => setCuisine(e.target.value)}
          aria-label="Cuisine"
        >
          <option value="">Cuisine (optional)</option>
          <option value="Italian">Italian</option>
          <option value="Chinese">Chinese</option>
          <option value="Mexican">Mexican</option>
          <option value="American">American</option>
          <option value="Thai">Thai</option>
          <option value="Indian">Indian</option>
          <option value="Other">Other</option>
        </select>

        {/* RATING FILTER */}
        <select
          className="input modern-select"
          value={rating}
          onChange={e => setRating(e.target.value)}
          aria-label="Minimum Rating"
        >
          {RATING_OPTIONS.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>

        {/* PRICE FILTER */}
        <select
          className="input modern-select"
          value={price}
          onChange={e => setPrice(e.target.value)}
          aria-label="Price Range"
        >
          {PRICE_OPTIONS.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>

        {/* DISTANCE FILTER */}
        <select
          className="input modern-select"
          value={distance}
          onChange={e => setDistance(e.target.value)}
          aria-label="Distance"
        >
          {DISTANCE_OPTIONS.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>

        <button
          className="btn btn-hero suggest-btn"
          type="submit"
          disabled={pending}
        >
          {pending ? "Searching..." : "Suggest"}
        </button>
      </form>

      {/* Loading State */}
      {pending && (
        <div className="suggestion-box" style={{
          background: "#222226",
          color: "#fff",
          borderRadius: "13px",
          boxShadow: "0 2px 20px 0 rgba(232,122,65,0.13)",
          padding: "1.7em 1.2em",
          marginTop: "2.5em",
          textAlign: "center",
          fontSize: "1.15em",
          fontWeight: 500,
          border: "1.5px solid var(--kavia-orange)"
        }}>
          Finding delicious places near you...
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="suggestion-box" style={{
          background: "#312014",
          color: "#fff",
          borderRadius: "13px",
          boxShadow: "0 2px 20px 0 rgba(255,50,0,0.13)",
          padding: "1.5em 1.2em",
          marginTop: "2.3em",
          textAlign: "center",
          fontSize: "1.14em",
          fontWeight: 500,
          border: "2px solid #E87A41"
        }}>
          {error}
        </div>
      )}

      {/* No Result State */}
      {!pending && !error && restaurants.length === 0 && suggestionIndex === null && (
        <div className="suggestion-box" style={{
          background: "#1A2328",
          color: "#fff",
          borderRadius: "13px",
          boxShadow: "0 2px 18px 0 rgba(80,90,120,0.09)",
          padding: "1.5em 1.2em",
          marginTop: "2.3em",
          textAlign: "center",
          fontSize: "1.08em",
          fontWeight: 500,
          border: "1.5px solid var(--kavia-orange)"
        }}>
          Enter your info and hit Suggest to begin!
        </div>
      )}

      {/* Actual Suggestion State */}
      {suggestion && (
        <div className="restaurant-card">
          <div className="restaurant-card-inner">
            {/* Image Section */}
            {suggestion.image_url ? (
              <div className="restaurant-photo-wrap">
                <img
                  src={suggestion.image_url}
                  alt={suggestion.name}
                  className="restaurant-photo"
                  loading="lazy"
                  style={{ borderRadius: "12px 12px 0 0", width: "100%", maxHeight: 184, objectFit: "cover" }}
                />
              </div>
            ) : (
              <div
                className="restaurant-photo-placeholder"
                style={{
                  height: 128,
                  background: "linear-gradient(90deg,#222226 60%,#232327)",
                  borderRadius: "12px 12px 0 0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#E87A41",
                  fontSize: "2.6em"
                }}
              >
                <span role="img" aria-label="Restaurant">🍽️</span>
              </div>
            )}

            <div className="restaurant-card-content">
              <h2 className="restaurant-card-title">{suggestion.name}</h2>
              {/* Price and Rating Row */}
              <div className="restaurant-meta-row">
                {suggestion.price && (
                  <span className="card-pill card-pill-price">{suggestion.price}</span>
                )}
                {typeof suggestion.rating !== "undefined" && (
                  <span className="card-pill card-pill-rating" title={`${suggestion.rating} stars`}>
                    <span style={{ color: "#FFC107", marginRight: 2, fontWeight: 700 }}>★</span>
                    {suggestion.rating}
                  </span>
                )}
                {suggestion.review_count && (
                  <span className="card-pill card-pill-reviewcount" title="Review count">
                    <span style={{ marginRight: 2 }}>💬</span>
                    {suggestion.review_count}
                  </span>
                )}
              </div>
              {/* Address */}
              {suggestion.location && suggestion.location.display_address && (
                <div className="restaurant-card-address">{suggestion.location.display_address.join(", ")}</div>
              )}

              {/* Cuisine */}
              {suggestion.categories && suggestion.categories.length > 0 && (
                <div className="restaurant-card-cuisines">
                  {suggestion.categories.map((cat, i) =>
                    <span key={cat.alias || cat.title} className="card-pill card-pill-cuisine">
                      {cat.title}{i < suggestion.categories.length - 1 ? " · " : ""}
                    </span>
                  )}
                </div>
              )}

              {/* Yelp Link */}
              <div className="restaurant-yelp-row">
                <a
                  href={suggestion.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="yelp-link"
                  title="See more on Yelp"
                >
                  <img
                    src="https://s3-media0.fl.yelpcdn.com/assets/public/default.yji-244a366398a129ec.svg"
                    alt="Yelp logo"
                    style={{
                      height: 18,
                      verticalAlign: "middle",
                      marginRight: 5,
                      filter: "drop-shadow(0 1px 0 #111) brightness(1.3)"
                    }}
                  />
                  <span style={{ color: "#E87A41", fontWeight: 600, letterSpacing: "0.01em" }}>View on Yelp</span>
                </a>
              </div>
              {/* Re-Roll */}
              <button
                className="btn btn-reroll"
                style={{ marginTop: '1.1em', width: "100%", borderRadius: 9 }}
                onClick={rerollSuggestion}
                disabled={restaurants.length <= 1}
                type="button"
              >Re-roll</button>
            </div>
          </div>
        </div>
      )}

      <footer style={{ marginTop: "3em", textAlign: "center", color: "var(--text-secondary)", fontSize: "0.99em" }}>
        <span role="img" aria-label="Lock">🔒</span> We don’t store your location or data.
      </footer>
    </div>
  );
}
