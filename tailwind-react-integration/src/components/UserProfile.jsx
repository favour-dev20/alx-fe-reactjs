function UserProfile() {
  return (
    <div style={{ 
      maxWidth: "350px",
      margin: "20px auto",
      padding: "20px",
      borderRadius: "12px",
      backgroundColor: "#f5f5f5",
      textAlign: "center",
    }}>
      <img 
        src="https://via.placeholder.com/150"
        alt="User"
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "15px"
        }}
      />

      <h2 style={{ 
        fontSize: "1.5rem",
        marginBottom: "10px"
      }}>
        John Doe
      </h2>

      <p style={{ 
        color: "#555",
        lineHeight: "1.5"
      }}>
        A passionate developer learning React and building awesome UI components.
      </p>
    </div>
  );
}

export default UserProfile;