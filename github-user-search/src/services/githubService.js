import axios from "axios";

export const API_BASE = "https://api.github.com";

// fetch multiple users using GitHub Search API
export const fetchUserData = async (username, location, minRepos) => {
  if (!username) throw new Error("Username required");

  const apiToken = import.meta.env.VITE_APP_GITHUB_API_KEY;
  const headers = apiToken ? { Authorization: token ${apiToken} } : {};

  // Build the search query
  let query = ${username} in:login;
  if (location) query += +location:${location};
  if (minRepos) query += +repos:>=${minRepos};

  const url = ${API_BASE}/search/users?q=${encodeURIComponent(query)};

  try {
    const res = await axios.get(url, { headers });
    return res.data.items || []; // always return an array
  } catch (err) {
    throw new Error(err.response?.data?.message || "Failed to fetch users");
  }
};