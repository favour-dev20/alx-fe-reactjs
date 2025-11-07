// src/App.jsx
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile';
import UserContext from './UserContext';

function App() {
  const userData = {
    name: "John Doe",
    age: "30",
    bio: "Frontend dev & coffee enthusiast"
  };

  return (
    <UserContext.Provider value={userData}>
      <div className="App">
        <Header />
        <WelcomeMessage />
        <MainContent />
        <UserProfile />
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;