import React from "react";


function RoadmapCard({ title, onClick }) {
  return (
    <div
      className="roadmap-card"
      onClick={onClick}            // ✅ make sure this is here
      style={{
        cursor: "pointer",         // make it clear it’s clickable
        padding: "15px",
        margin: "10px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <h3>{title}</h3>
    </div>
  );
}

export default RoadmapCard;