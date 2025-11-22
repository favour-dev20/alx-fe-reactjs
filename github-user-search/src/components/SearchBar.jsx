import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [q, setQ] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!q.trim()) return;
    onSearch(q.trim());
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8, marginBottom: 16 }}>
      <input
        type="text"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Enter GitHub username (e.g. octocat)"
        style={{ flex: 1, padding: 8 }}
      />
      <button type="submit" style={{ padding: "8px 12px" }}>Search</button>
    </form>
  );
};

export default SearchBar;