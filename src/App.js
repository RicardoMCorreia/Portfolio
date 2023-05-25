
import './App.css';
import PersonalProjects from './components/PersonalProjects/PersonalProjects';
import HeroSection from './components/HeroSection/HeroSection';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
    <NavBar />
    <HeroSection />
    <PersonalProjects />
    </div>
  );
}

export default App;
