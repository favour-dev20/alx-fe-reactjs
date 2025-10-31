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
      <Footer />
    </div>
  );
}

export default App;