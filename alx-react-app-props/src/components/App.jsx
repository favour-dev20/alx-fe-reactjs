import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import UserProfile from "./components/UserProfile";
import WelcomeMessage from "./components/WelcomeMessage";
import UserContext from "./components/UserContext";
import UserDetails from "./components/UserDetails";
import UserInfo from "./components/UserInfo";
import ProfilePage from "./components/ProfilePage";

function App() {
  const userData = {
    name: "John Doe",
    email: "john@example.com",
  };
  return (
    <>
      <Header />
      <MainContent />
      <WelcomeMessage />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <UserContext.Provider value={userData}>
        <ProfilePage />
        <UserDetails />
        <UserInfo />
      </UserContext.Provider>
      <Footer />
    </>
  );
}

export default App;