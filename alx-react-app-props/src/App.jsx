import './App.css';
import UserContext from './UserContext';
import UserProfile from './components/UserProfile';

function App() {
  const userData = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
  };

  return (
    <UserContext.Provider value={userData}>
      <div className="App">
        <UserProfile />
      </div>
    </UserContext.Provider>
  );
}

export default App;