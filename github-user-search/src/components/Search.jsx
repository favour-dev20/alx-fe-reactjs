import React, { useState } from "react";
import { fetchUserData } from "../services/githubService"; // updated import

const Search = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setError("");
    setUserData(null);

    try {
      const data = await fetchUserData(username); // updated function name
      setUserData(data);
    } catch (err) {
      setError(err.message || "Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ marginBottom: "16px" }}>
        <input
          type="text"
          placeholder="Enter GitHub username (e.g. octocat)"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: "8px", width: "250px" }}
        />
        <button type="submit" style={{ padding: "8px 12px", marginLeft: "8px" }}>
          Search
        </button>
      </form>

      <div style={{ marginTop: "16px" }}>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "crimson" }}>{error}</p>}
        {userData && (
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <img src={userData.avatar_url} alt={userData.login} width="100" style={{ borderRadius: "8px" }} />
            <div>
              <h3>{userData.name || userData.login}</h3>
              <p>{userData.bio}</p>
              <p>
                Followers: {userData.followers} • Following: {userData.following}
              </p>
              <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                View GitHub Profile
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;