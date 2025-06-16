import React, { useState } from "react";
import "../App.css";
import restaurantsData from "../restaurantsData";
import MapView from "./MapView";

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

/**
 * Returns miles between two points using a placeholder.
 * In production, geocode and calculate. Here, static data contains distance values from downtown Chicago.
 */
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
  const handleSuggest = (e) => {
    e.preventDefault();
    setPending(true);
    setError(null);
    setRestaurants([]);
    setSuggestionIndex(null);

    // Simulate instant "API" with static data
    setTimeout(() => {
      let filtered = restaurantsData;

      // Only require location field for now; filter on others
      // In a real app, you'd geocode location, but here we just ensure it's filled
      if (!location.trim()) {
        setError("Please enter a location.");
        setPending(false);
        return;
      }

      if (cuisine && cuisine !== "Other") {
        filtered = filtered.filter(r =>
          r.cuisine && r.cuisine.toLowerCase().includes(cuisine.toLowerCase())
        );
      }
      if (rating) {
        filtered = filtered.filter(r => Number(r.rating) >= Number(rating));
      }
      if (price) {
        filtered = filtered.filter(r => r.price && r.price.startsWith(price));
      }
      if (distance) {
        filtered = filtered.filter(r => r.distance && Number(r.distance) <= Number(distance));
      }

      // DEBUG: Output filter pass count and sample
      // eslint-disable-next-line no-console
      if (typeof window !== "undefined") {
        console.log("[MainContainer] Filtered restaurants:", filtered.length, filtered[0]);
      }
      if (!filtered.length) {
        setRestaurants([]);
        setError("No restaurants found with the selected criteria.");
        setPending(false);
        return;
      }

      setRestaurants(filtered);
      setSuggestionIndex(Math.floor(Math.random() * filtered.length));
      setPending(false);
    }, 200); // Simulate network

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
        <div className="restaurant-card" style={{
          maxWidth: 520,
          margin: "2.2em auto",
          border: "2.5px solid var(--kavia-orange)",
          boxShadow: "0 8px 32px 2px rgba(232,122,65,0.19), 0 4px 18px 0 #000c"
        }}>
          <div className="restaurant-card-inner" style={{ display: "flex", flexDirection: "column" }}>
            {/* Large Image Section */}
            {suggestion.image_url ? (
              <div
                className="restaurant-photo-wrap"
                style={{
                  width: "100%",
                  maxHeight: 275,
                  overflow: "hidden",
                  borderRadius: "22px 22px 0 0",
                  boxShadow: "0 4px 30px 0 rgba(232,122,65,0.16)"
                }}
              >
                <img
                  src={suggestion.image_url}
                  alt={suggestion.name}
                  className="restaurant-photo"
                  loading="lazy"
                  style={{
                    borderRadius: "22px 22px 0 0",
                    width: "100%",
                    height: 275,
                    objectFit: "cover",
                    boxShadow: "0 2px 14px 0 rgba(40,30,20,0.11)"
                  }}
                />
              </div>
            ) : (
              <div
                className="restaurant-photo-placeholder"
                style={{
                  height: 185,
                  background: "linear-gradient(90deg,#27292e 60%,#232327)",
                  borderRadius: "22px 22px 0 0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#E87A41",
                  fontSize: "3.1em",
                  fontWeight: 700
                }}
              >
                <span role="img" aria-label="Restaurant">🍽️</span>
              </div>
            )}

            {/* --- Map Integration --- */}
            {/* Try coordinates if available; else fallback to address string. */}
            <MapView
              address={
                // If location.display_address is present, join; else fallback to .address property.
                suggestion.location && suggestion.location.display_address
                  ? suggestion.location.display_address.join(", ")
                  : suggestion.address || ""
              }
              // You may extend static data with 'lat' & 'lng' fields in future, here only if present:
              lat={suggestion.lat}
              lng={suggestion.lng}
              height={200}
            />

            <div className="restaurant-card-content" style={{ paddingTop: "1.3em", paddingBottom: "0.8em" }}>
              <h2 className="restaurant-card-title" style={{
                fontSize: "1.7em",
                color: "var(--kavia-orange)",
                marginBottom: "0.32em"
              }}>{suggestion.name}</h2>

              <div className="restaurant-meta-row" style={{
                fontSize: "1.12em",
                marginBottom: "0.75em",
                gap: "0.6em"
              }}>
                {suggestion.price && (
                  <span className="card-pill card-pill-price" style={{
                    fontSize: "1.08em", padding: "0.25em 1em"
                  }}>{suggestion.price}</span>
                )}
                {typeof suggestion.rating !== "undefined" && (
                  <span className="card-pill card-pill-rating" title={`${suggestion.rating} stars`} style={{ fontWeight: 700, fontSize: "1.1em" }}>
                    <span style={{ color: "#FFC107", marginRight: 2 }}>★</span>
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

              {suggestion.location && suggestion.location.display_address && (
                <div className="restaurant-card-address" style={{
                  marginBottom: "0.8em",
                  fontSize: "1.04em",
                  fontWeight: 500,
                  color: "#E0DFDC"
                }}>
                  {suggestion.location.display_address.join(", ")}
                </div>
              )}

              {suggestion.categories && suggestion.categories.length > 0 && (
                <div className="restaurant-card-cuisines" style={{
                  display: "flex", flexWrap: "wrap", fontSize: "1.08em", marginBottom: "0.66em"
                }}>
                  {suggestion.categories.map((cat, i) =>
                    <span key={cat.alias || cat.title} className="card-pill card-pill-cuisine" style={{
                      background: "#251b16",
                      color: "#E87A41",
                      fontWeight: 600,
                      border: "1.2px solid #E87A41aa",
                      marginRight: "6px"
                    }}>
                      {cat.title}{i < suggestion.categories.length - 1 ? " · " : ""}
                    </span>
                  )}
                </div>
              )}

              {/* Comments/Reviews Section, only if `comments` exists */}
              {Array.isArray(suggestion.comments) && suggestion.comments.length > 0 && (
                <div
                  style={{
                    margin: "1.21em 0 0.75em 0",
                    padding: "1em 0.9em 1em 0.85em",
                    background: "linear-gradient(90deg, #221e20 0%, #221a1b 95%)",
                    borderRadius: "12px",
                    boxShadow: "0 1.5px 12px 1px rgba(255,140,60,0.045)",
                    border: "1.2px solid var(--border-color)"
                  }}
                >
                  <div style={{
                    color: "#FFA040", fontWeight: 600, marginBottom: "0.55em",
                    fontSize: "1.09em", letterSpacing: "0.01em"
                  }}>
                    User Reviews
                  </div>
                  <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.65em",
                  }}>
                    {suggestion.comments.slice(0, 2).map((comment, idx) => (
                      <div
                        key={idx}
                        style={{
                          background: "#181a1e",
                          borderRadius: "7px",
                          fontSize: "1em",
                          color: "#fff",
                          padding: "0.63em 1em",
                          border: "1px solid #35323A",
                          boxShadow: "0 1px 3px 0 #0005",
                          marginBottom: "0.05em"
                        }}
                      >
                        <span style={{ color: "#F57C25", fontWeight: 500, marginRight: "0.38em" }}>
                          {comment.user}:
                        </span>
                        <span style={{ color: "var(--text-secondary)" }}>
                          {comment.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Yelp Link */}
              <div className="restaurant-yelp-row" style={{ marginBottom: "0.65em", marginTop: "0.5em" }}>
                <a
                  href={suggestion.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="yelp-link"
                  title="See more on Yelp"
                  style={{
                    background: "none", border: "none", fontWeight: 700, fontSize: "1.13em"
                  }}
                >
                  <img
                    src="https://s3-media0.fl.yelpcdn.com/assets/public/default.yji-244a366398a129ec.svg"
                    alt="Yelp logo"
                    style={{
                      height: 18,
                      verticalAlign: "middle",
                      marginRight: 5,
                      filter: "drop-shadow(0 1px 0 #111) brightness(1.2)"
                    }}
                  />
                  <span style={{ color: "#E87A41", fontWeight: 700, letterSpacing: "0.01em" }}>View on Yelp</span>
                </a>
              </div>
              {/* Re-Roll */}
              <button
                className="btn btn-reroll"
                style={{
                  marginTop: '1.23em',
                  width: "100%",
                  borderRadius: 13,
                  fontSize: "1.21em",
                  fontWeight: "bold"
                }}
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
