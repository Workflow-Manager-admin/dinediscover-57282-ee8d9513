import React, { useState } from "react";
import "../App.css";

/**
 * MainContainer for DineDiscover restaurant suggestion generator.
 *
 * Renders a form to accept zip code, radius, price range, cuisine, and minimum rating,
 * plus a placeholder for the restaurant suggestion.
 */
// PUBLIC_INTERFACE
function MainContainer() {
  // Form field states
  const [zip, setZip] = useState("");
  const [radius, setRadius] = useState("10");
  const [price, setPrice] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [rating, setRating] = useState("0");

  // Future: add result and error display logic

  // PUBLIC_INTERFACE
  const handleSubmit = (e) => {
    e.preventDefault();
    // No real API: only stub
    // Would send { zip, radius, price, cuisine, rating }
  };

  return (
    <div className="container" style={{ maxWidth: 540, margin: "48px auto" }}>
      <form
        onSubmit={handleSubmit}
        style={{
          background: "rgba(0,0,0,0.55)",
          borderRadius: 12,
          padding: 32,
          boxShadow: "0 3px 20px 3px #0008",
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
        aria-label="Restaurant Suggestion Form"
      >
        <h2
          className="title"
          style={{
            margin: 0,
            fontSize: "2rem",
            textAlign: "left",
            color: "var(--base-light)",
          }}
        >
          Find Where to Eat
        </h2>

        {/* Zip Code */}
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <label htmlFor="zip" style={{ color: "var(--text-secondary)" }}>
            Zip Code
          </label>
          <input
            id="zip"
            name="zip"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={10}
            required
            value={zip}
            onChange={e => setZip(e.target.value.replace(/[^\d]/g, ""))}
            style={{
              border: "1px solid var(--border-color)",
              background: "rgba(255,255,255,0.02)",
              color: "var(--text-color)",
              borderRadius: 4,
              fontSize: "1rem",
              padding: "8px 12px",
              outline: "none",
            }}
            placeholder="e.g., 90210"
            autoComplete="postal-code"
          />
        </div>

        {/* Radius */}
        <div style={{ display: "flex", gap: 18 }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
            <label htmlFor="radius" style={{ color: "var(--text-secondary)" }}>
              Search Radius
            </label>
            <select
              id="radius"
              name="radius"
              value={radius}
              onChange={e => setRadius(e.target.value)}
              style={{
                border: "1px solid var(--border-color)",
                background: "rgba(255,255,255,0.02)",
                color: "var(--text-color)",
                borderRadius: 4,
                fontSize: "1rem",
                padding: "8px 12px",
                outline: "none",
                appearance: "none",
              }}
            >
              <option value="10">10 mi</option>
              <option value="25">25 mi</option>
              <option value="50">50 mi</option>
            </select>
          </div>

          {/* Price Range */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
            <label htmlFor="price" style={{ color: "var(--text-secondary)" }}>
              Price Range
            </label>
            <select
              id="price"
              name="price"
              value={price}
              onChange={e => setPrice(e.target.value)}
              style={{
                border: "1px solid var(--border-color)",
                background: "rgba(255,255,255,0.02)",
                color: "var(--text-color)",
                borderRadius: 4,
                fontSize: "1rem",
                padding: "8px 12px",
                outline: "none",
                appearance: "none",
              }}
            >
              <option value="">Any</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
            </select>
          </div>
        </div>

        {/* Cuisine */}
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <label htmlFor="cuisine" style={{ color: "var(--text-secondary)" }}>
            Cuisine (type one or more)
          </label>
          <input
            id="cuisine"
            name="cuisine"
            type="text"
            value={cuisine}
            onChange={e => setCuisine(e.target.value)}
            style={{
              border: "1px solid var(--border-color)",
              background: "rgba(255,255,255,0.02)",
              color: "var(--text-color)",
              borderRadius: 4,
              fontSize: "1rem",
              padding: "8px 12px",
              outline: "none",
            }}
            placeholder="e.g., Sushi, Mexican, Pizza"
            autoComplete="off"
          />
        </div>

        {/* Minimum Rating */}
        <div style={{ display: "flex", gap: 18 }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
            <label htmlFor="rating" style={{ color: "var(--text-secondary)" }}>
              Minimum Rating
            </label>
            <select
              id="rating"
              name="rating"
              value={rating}
              onChange={e => setRating(e.target.value)}
              style={{
                border: "1px solid var(--border-color)",
                background: "rgba(255,255,255,0.02)",
                color: "var(--text-color)",
                borderRadius: 4,
                fontSize: "1rem",
                padding: "8px 12px",
                outline: "none",
                appearance: "none",
              }}
            >
              <option value="0">Any</option>
              <option value="3.5">3.5+</option>
              <option value="4">4.0+</option>
              <option value="4.5">4.5+</option>
            </select>
          </div>
          <div style={{ flex: 1 }} />
        </div>

        {/* Button */}
        <button
          className="btn btn-large"
          type="submit"
          style={{ marginTop: 6, width: "100%" }}
        >
          Suggest a Restaurant
        </button>
      </form>

      {/* Placeholder for suggestion result */}
      <div
        role="region"
        aria-live="polite"
        style={{
          marginTop: 40,
          background: "rgba(255,255,255,0.04)",
          borderRadius: 8,
          minHeight: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--text-secondary)",
          fontSize: "1.1rem",
          border: "1px solid var(--border-color)",
          boxShadow: "0 1px 10px 1px #0005",
        }}
      >
        {/* Will populate with actual suggestion in API-connected version */}
        <span>
          <em>Restaurant suggestion will appear here.</em>
        </span>
      </div>
    </div>
  );
}

export default MainContainer;
