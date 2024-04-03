import Navbarbox from '../src/components/Navbarbox';
import Announements from '../src/components/Announements';
import './App.css';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
         <Navbarbox />
         <Announements /> 
         <Hero />
         <Footer />
    </div>
  );
}

export default App;
