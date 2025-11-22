import axios from "axios";

export const API_BASE = "https://api.github.com";

export const fetchUserData = async (username, location, minRepos) => {
  if (!username) throw new Error("username required");

  const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;
  const headers = apiKey ? { Authorization: `token ${apiKey}` } : {};

  // If location or minRepos is provided, use search API for advanced search
  if (location || minRepos) {
    let query = username;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;

    const url = `${API_BASE}/search/users?q=${encodeURIComponent(query)}`;

    try {
      const res = await axios.get(url, { headers });
      return res.data.items || [];
    } catch (err) {
      throw new Error(err.response?.data?.message || "Failed to fetch users");
    }
  }

  // Otherwise, fetch single user for Task 0 & 1
  const url = `${API_BASE}/users/${encodeURIComponent(username)}`;

  try {
    const res = await axios.get(url, { headers });
    return res.data; // return single user object
  } catch (err) {
    if (err.response && err.response.status === 404) {
      throw new Error("User not found");
    }
    throw new Error("Failed to fetch user");
  }
};