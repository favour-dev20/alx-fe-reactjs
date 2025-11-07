const UserProfile = (props) => {
  return (
    <div style={{ border: '1px solid gray', padding: '15px', margin: '20px auto', width: '300px', borderRadius: '10px', boxShadow: '2px 2px 10px rgba(0,0,0,0.1)' }}>
      <h2 style={{ color: 'blue', textAlign: 'center' }}>{props.name}</h2>
      <p style={{ fontSize: '16px', textAlign: 'center' }}>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
      <p style={{ textAlign: 'center' }}>{props.bio}</p>
    </div>
  );
};

export default UserProfile;