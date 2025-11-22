import axios from "axios";

export const API_BASE = "https://api.github.com";

export const fetchGithubUser = async (username) => {
  if (!username) throw new Error("username required");

  const GITHUB_TOKEN = import.meta.env.VITE_APP_GITHUB_API_KEY;
  const headers = GITHUB_TOKEN ? { Authorization: `token ${GITHUB_TOKEN}` } : {};

  const url = `${API_BASE}/users/${encodeURIComponent(username)}`;

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