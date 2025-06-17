import React, { useState } from "react";

/**
 * MapView component: Embeds a Google Maps view for a given address or coordinates,
 * and provides a "Get Directions" button that opens Google Maps Directions
 * (optionally prefilled with user's geolocation as the start).
 * 
 * Props:
 *   address (string): Address string of the restaurant
 *   lat (number): Latitude, optional (preferred if both lat & lng are present)
 *   lng (number): Longitude, optional (preferred if both lat & lng are present)
 *   height (number|string): Map embed height (default 220)
 * 
 * Fits modern dark theme, follows app style.
 */
// PUBLIC_INTERFACE
function MapView({ address, lat, lng, height = 220 }) {
  const [locationLoading, setLocationLoading] = useState(false);

  let mapUrl = "";
  let googleDirectionsBase = "https://www.google.com/maps/dir/?api=1";
  let destinationParam = "";

  if (typeof lat === "number" && typeof lng === "number") {
    mapUrl = `https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`;
    destinationParam = `destination=${lat},${lng}`;
  } else if (address) {
    const encodedAddress = encodeURIComponent(address);
    mapUrl = `https://www.google.com/maps?q=${encodedAddress}&z=15&output=embed`;
    destinationParam = `destination=${encodedAddress}`;
  } else {
    // Nothing to show
    return null;
  }

  // PUBLIC_INTERFACE
  function handleGetDirections() {
    // Try browser geolocation, fallback to just destination
    setLocationLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        pos => {
          const origin = `${pos.coords.latitude},${pos.coords.longitude}`;
          window.open(
            `${googleDirectionsBase}&${destinationParam}&origin=${origin}&travelmode=driving`,
            "_blank"
          );
          setLocationLoading(false);
        },
        () => {
          // Geolocation failed/denied
          window.open(
            `${googleDirectionsBase}&${destinationParam}&travelmode=driving`,
            "_blank"
          );
          setLocationLoading(false);
        },
        { timeout: 6500 }
      );
    } else {
      window.open(
        `${googleDirectionsBase}&${destinationParam}&travelmode=driving`,
        "_blank"
      );
      setLocationLoading(false);
    }
  }

  // Button styling to match modern dark theme
  const buttonStyle = {
    marginTop: "0.85em",
    marginBottom: "0.1em",
    padding: "0.7em 1.4em",
    borderRadius: 9,
    background: "linear-gradient(90deg,#E87A41 60%,#FF5722 100%)",
    color: "#fff",
    fontWeight: 700,
    letterSpacing: ".01em",
    fontSize: "1.09em",
    border: "none",
    boxShadow: "0 2px 12px 0 rgba(232,122,65,0.19)",
    cursor: locationLoading ? "not-allowed" : "pointer",
    opacity: locationLoading ? 0.7 : 1,
    transition: "background 0.18s, box-shadow 0.18s, opacity 0.13s"
  };

  return (
    <div style={{ width: "100%" }}>
      <div
        className="map-view-embed"
        style={{
          width: "100%",
          height,
          background: "linear-gradient(90deg, #1d1b24 60%, #191722 100%)",
          borderRadius: "0 0 21px 21px",
          overflow: "hidden",
          boxShadow: "0 1.5px 12px 2px rgba(40,40,80,0.10)",
          border: "1.5px solid var(--kavia-orange)",
          marginTop: "-7px",
          marginBottom: "0.2em",
          zIndex: 1
        }}
      >
        <iframe
          title="Map location"
          src={mapUrl}
          width="100%"
          height="100%"
          style={{
            border: "none",
            filter: "invert(0.93) hue-rotate(180deg) contrast(1.1) brightness(0.85)",
            minHeight: 140
          }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div style={{ width: "100%", textAlign: "center", marginTop: "0.4em" }}>
        {/* PUBLIC_INTERFACE: Get Directions button */}
        <button
          className="btn"
          style={buttonStyle}
          onClick={handleGetDirections}
          disabled={locationLoading}
          aria-label="Get Directions to this restaurant"
        >
          {locationLoading ? "Getting your location..." : <><span role="img" aria-label="Directions">🧭</span> Get Directions</>}
        </button>
      </div>
    </div>
  );
}

export default MapView;
