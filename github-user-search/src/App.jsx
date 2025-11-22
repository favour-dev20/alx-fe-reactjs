import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import { fetchGithubUser } from "./services/github";

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (username) => {
    setError("");
    setUser(null);
    try {
      const data = await fetchGithubUser(username);
      setUser(data);
    } catch (err) {
      setError(err.message || "User not found");
    }
  };

  return (
    <div style={{ maxWidth: 800, margin: "24px auto", padding: "0 16px" }}>
      <h1 style={{ textAlign: "center" }}>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p style={{ color: "crimson" }}>{error}</p>}
      {user && <UserCard user={user} />}
      {!user && !error && <p>Search for a GitHub username above.</p>}
    </div>
  );
}

export default App;