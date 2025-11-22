import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import { fetchUserData } from "./services/githubService"; // ensure filename matches

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // add loading state

  const handleSearch = async (username) => {
    if (!username) return;
    setError("");
    setUser(null);
    setLoading(true);

    try {
      const data = await fetchGithubUser(username);
      setUser(data);
    } catch (err) {
      setError(err.message || "Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 800, margin: "24px auto", padding: "0 16px" }}>
      <h1 style={{ textAlign: "center" }}>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "crimson" }}>{error}</p>}
      {user && <UserCard user={user} />}
      {!user && !error && !loading && <p>Search for a GitHub username above.</p>}
    </div>
  );
}

export default App;