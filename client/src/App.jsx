import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Chess from './pages/Chess';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageLayout from './components/PageLayout';
import './App.css';
import RINGS from 'vanta/dist/vanta.rings.min'; // ✅ no src
import * as THREE from 'three';
  // App component
  // This component sets up the main structure of the application with routing
  // It uses BrowserRouter for routing and includes a Navbar component and different pages
  // The Routes component defines the different routes available in the application
  // Each Route specifies a path and the corresponding component to render

  

  function App() {
    const vantaRef = useRef(null);
    const vantaEffect = useRef(null);
  
    useEffect(() => {
      if (!vantaEffect.current) {
        vantaEffect.current = RINGS({
          el: vantaRef.current,
          THREE: THREE,
          minHeight: 100.0,
          minWidth: 100.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x8eff,
          backgroundColor: 0x000000,
          backgroundAlpha: 1,
        });
      }
  
      return () => {
        if (vantaEffect.current) {
          vantaEffect.current.destroy();
          vantaEffect.current = null;
        }
      };
    }, []);
  
    return (
      <>
      {vantaEffect  && (
      < div className="app-root" ref={vantaRef}>
      <Router>
        <Routes>
            <Route element={<PageLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/chess" element={<Chess />} />
                <Route path="/contact" element={<Contact />} />
            </Route>
        </Routes>
      </Router>
    </div>
    )}
    </>
    );
}

export default App;