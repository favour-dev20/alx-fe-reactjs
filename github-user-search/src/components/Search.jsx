import React, { useState } from "react";
import { fetchSingleUser, fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setError("");
    setUserData([]);

    try {
      let results = [];

      // If filters are applied, use advanced search
      if (location || minRepos) {
        results = await fetchUserData(username, location, minRepos);
      } else {
        // Task 1: fetch single user
        const user = await fetchSingleUser(username);
        results = [user]; // normalize single object to array
      }

      if (results.length === 0) {
        setError("Looks like we cant find the user");
      } else {
        setUserData(results);
      }
    } catch (err) {
      setError(err.message || "Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap gap-2 mb-4"
      >
        <input
          type="text"
          placeholder="GitHub username (required)"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border rounded flex-1 min-w-[150px]"
        />
        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 border rounded flex-1 min-w-[120px]"
        />
        <input
          type="number"
          placeholder="Min repos (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="p-2 border rounded w-32"
        />
        <button
          type="submit"
          className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {userData.length > 0 && (
        <div className="grid gap-4">
          {userData.map((user) => (
            <div
              key={user.id}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 border rounded"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-20 h-20 rounded"
              />
              <div>
                <h3 className="font-semibold text-lg">{user.name || user.login}</h3>
                {user.bio && <p className="text-gray-700">{user.bio}</p>}
                <p>
                  Followers: {user.followers || 0} • Following: {user.following || 0}
                </p>
                {user.location && <p>Location: {user.location}</p>}
                <p>Repos: {user.public_repos || 0}</p>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && !error && userData.length === 0 && (
        <p className="text-gray-500">Search for a GitHub username above.</p>
      )}
    </div>
  );
};

export default Search;