import React from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';  
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Chess from './pages/Chess';
import 'bootstrap/dist/css/bootstrap.min.css'
import PageLayout from './components/PageLayout';
import './App.css';
  // App component
  // This component sets up the main structure of the application with routing
  // It uses BrowserRouter for routing and includes a Navbar component and different pages
  // The Routes component defines the different routes available in the application
  // Each Route specifies a path and the corresponding component to render

  

function App() {

    return (
    <div className="app-root">
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
    );
}

export default App;