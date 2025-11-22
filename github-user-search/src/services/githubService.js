import axios from "axios";

const API_BASE = "https://api.github.com";

export const fetchGithubUser = async (username) => {
  if (!username) throw new Error("username required");

  const githubToken = import.meta.env.VITE_APP_GITHUB_API_KEY;
  const headers = githubToken ? { Authorization: `token ${githubToken}` } : {};

  try {
    const response = await axios.get(`${API_BASE}/users/${username}`, { headers });
    return response.data;
  } catch (err) {
    if (err.response && err.response.status === 404) {
      throw new Error("User not found");
    }
    throw new Error("Failed to fetch user");
  }
};