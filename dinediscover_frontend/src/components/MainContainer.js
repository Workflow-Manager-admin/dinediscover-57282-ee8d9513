import React, { useState } from "react";
import "../App.css";

/**
 * MainContainer component for DineDiscover.
 * Enhanced with modern, accessible filters: rating, price, and distance.
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
  const [suggestion, setSuggestion] = useState("");

  // PUBLIC_INTERFACE
  const handleSuggest = async (e) => {
    e.preventDefault();
    setPending(true);
    setSuggestion("");
    setTimeout(() => {
      // Dummy suggestion for mockup.
      setSuggestion(
        `Try a${cuisine ? ` ${cuisine}` : ""}${rating || price || distance ? ", filters applied!" : ""} restaurant near ${location || "you"}!`
      );
      setPending(false);
    }, 950);
  };

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
          {pending ? "Thinking..." : "Suggest"}
        </button>
      </form>

      {suggestion && (
        <div className="suggestion-box" style={{
          background: "#222226",
          color: "#fff",
          borderRadius: "13px",
          boxShadow: "0 2px 20px 0 rgba(232,122,65,0.13)",
          padding: "1.7em 1.2em",
          marginTop: "2.5em",
          textAlign: "center",
          fontSize: "1.18em",
          fontWeight: 600,
          border: "1.5px solid var(--kavia-orange)"
        }}>
          {suggestion}
        </div>
      )}

      <footer style={{ marginTop: "3em", textAlign: "center", color: "var(--text-secondary)", fontSize: "0.99em" }}>
        <span role="img" aria-label="Lock">🔒</span> We don’t store your location or data.
      </footer>
    </div>
  );
}
