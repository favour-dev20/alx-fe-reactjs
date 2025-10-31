import UserProfile from './components/UserProfile';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage';

function App() {
  return (
    <div className="App">
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