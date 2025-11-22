import React, { useState } from "react";
import { fetchGithubUser } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username) return;

    setLoading(true);
    setError("");
    setUserData(null);

    try {
      const data = await fetchGithubUser(username);
      setUserData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
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
        {error && <p>Looks like we can't find the user</p>}
        {userData && (
          <div>
            <img src={userData.avatar_url} alt={userData.login} width="100" />
            <h3>{userData.name || userData.login}</h3>
            <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
              View GitHub Profile
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;