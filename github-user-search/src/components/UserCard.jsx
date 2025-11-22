import React from "react";

const UserCard = ({ user }) => {
  if (!user) return null;
  return (
    <div style={{ display: "flex", gap: 16, border: "1px solid #ddd", padding: 16, borderRadius: 8 }}>
      <img src={user.avatar_url} alt={user.login} style={{ width: 110, height: 110, borderRadius: 8 }} />
      <div>
        <h2 style={{ margin: 0 }}>{user.name || user.login}</h2>
        {user.bio && <p style={{ margin: "4px 0" }}>{user.bio}</p>}
        <p style={{ margin: "4px 0" }}>Followers: {user.followers} • Following: {user.following}</p>
        <p style={{ margin: "4px 0" }}>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </p>
      </div>
    </div>
  );
};

export default UserCard;