import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Components/Home';
import ISS from './Components/ISS';
import Navbar from './Components/Navbar';
import News from './Components/News';
import PlanetExplorer from './Components/PlanetExplorer';
import APOD from './Components/APOD';

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
      </Routes>
    </Router>
  );
}

export default App




