import React from "react";
import ProfilePage from "./ProfilePage";
import UserContext from "./UserContext";

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage userData={userData} />  {/* You can remove prop if you refactor */}
    </UserContext.Provider>
  );
}

export default App;
