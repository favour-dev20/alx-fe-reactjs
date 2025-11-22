import axios from "axios";

export const API_BASE = "https://api.github.com";

const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;
const headers = GITHUB_API_KEY ? { Authorization: token ${GITHUB_API_KEY} } : {};

/**
 * Task 1: Fetch a single GitHub user by username
 * Returns a single user object
 */
export const fetchSingleUser = async (username) => {
  if (!username) throw new Error("username required");

  const url = ${API_BASE}/users/${encodeURIComponent(username)};

  try {
    const res = await axios.get(url, { headers });
    return res.data;
  } catch (err) {
    if (err.response && err.response.status === 404) {
      throw new Error("User not found");
    }
    throw new Error("Failed to fetch user");
  }
};

/**
 * Task 2: Fetch users using GitHub Search API with advanced filters
 * Returns an array of users
 */
export const fetchUserData = async (username, location, minRepos) => {
  if (!username) throw new Error("username required");

  // Construct query string
  let query = username;
  if (location) query += +location:${location};
  if (minRepos) query += +repos:>=${minRepos};

  const url = ${API_BASE}/search/users?q=${encodeURIComponent(query)};

  try {
    const res = await axios.get(url, { headers });
    return res.data.items || [];
  } catch (err) {
    throw new Error(err.response?.data?.message || "Failed to fetch users");
  }
};