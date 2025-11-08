import React, { useState } from "react";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState(""); // store plain answer
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setAnswer("");

    try {
      const response = await fetch("http://localhost:5678/webhook-test/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }), // send user query to workflow
      });

      const data = await response.json();
      console.log("Workflow response:", data);

      // assume workflow returns: { answer: "Your plain answer here" }
      if (data.answer) {
        setAnswer(data.answer);
      } else {
        setError("No response from workflow.");
      }
    } catch (err) {
      console.error(err);
      setError("Error fetching response.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <form onSubmit={handleSearch} style={{ display: "flex", gap: "10px" }}>
        <input
          type="text"
          placeholder="Ask me anything..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
          style={{
            flex: 1,
            padding: "8px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "8px 16px",
            borderRadius: "8px",
            border: "none",
            background: "#007bff",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Ask
        </button>
      </form>

      {loading && <p style={{ marginTop: "10px" }}>Processing...</p>}
      {error && <p style={{ marginTop: "10px", color: "red" }}>{error}</p>}
      {answer && (
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            borderRadius: "8px",
            background: "#f1f1f1",
          }}
        >
          {answer}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
