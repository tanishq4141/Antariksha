import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Components/Home';
import ISS from './Components/ISS';
import Navbar from './Components/Navbar';
import News from './Components/News';
import PlanetExplorer from './Components/PlanetExplorer';
import APOD from './Components/APOD';
import TestScene from './Components/TestScene';
import SimpleTest from './Components/SimpleTest';

function App() {
  

  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/iss-tracker" element={<ISS />} />
        <Route path="/planet-explorer" element={<PlanetExplorer />} />
        <Route path="/apod" element={<APOD />} />
        <Route path="/test-scene" element={<TestScene />} />
        <Route path="/simple-test" element={<SimpleTest />} />
      </Routes>
    </Router>
  );
}

export default App




