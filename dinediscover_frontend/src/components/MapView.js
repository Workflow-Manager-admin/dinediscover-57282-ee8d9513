import React from "react";

/**
 * MapView component: Embeds a Google Maps view for a given address or coordinates.
 * Uses the Google Maps "no API key needed" public embed for address or lat/lng.
 * Integrates with a modern dark card UI.
 * 
 * Props:
 *   address (string): full address string to locate restaurant on map (preferred if no lat/lng)
 *   lat (number): latitude (optional, preferred if both lat & lng are present)
 *   lng (number): longitude (optional, preferred if both lat & lng are present)
 *   height (number|string): height of the map (default 220)
 */
//
// PUBLIC_INTERFACE
function MapView({ address, lat, lng, height = 220 }) {
  let mapUrl = "";
  if (typeof lat === "number" && typeof lng === "number") {
    // Google Maps embed with coordinates
    mapUrl = `https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`;
  } else if (address) {
    // Google Maps embed with address query, URL encode address
    const encodedAddress = encodeURIComponent(address);
    mapUrl = `https://www.google.com/maps?q=${encodedAddress}&z=15&output=embed`;
  } else {
    // Fallback: Don't render
    return null;
  }

  return (
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
          filter: "invert(0.93) hue-rotate(180deg) contrast(1.1) brightness(0.85)", // Fake dark mode for Google Map tiles
          minHeight: 140,
        }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default MapView;
