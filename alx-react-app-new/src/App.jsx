import UserProfile from './components/UserProfile';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage';

function App() {
  return (
    <div
      className="App"
      style={{
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f9f9f9',
        minHeight: '100vh',
        margin: 0,
        padding: 0,
      }}
    >
      <Header />
      <WelcomeMessage />
      <MainContent />

      {/* UserProfile examples */}
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <UserProfile name="John Doe" age="30" bio="Frontend dev & coffee enthusiast" />

      <Footer />
    </div>
  );
}

export default App;