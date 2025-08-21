import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience.js";
import Contact from "./pages/Contact";
import "./App.css";

export default function App() {
  return (
    <Router>
      <nav className="navbar" style={{ display: 'flex', alignItems: 'center', gap: '0', justifyContent: 'flex-start', background: 'rgba(34, 34, 34, 0.95)', backdropFilter: 'blur(10px)' }}>
        <Link to="/" className="logo-link" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Portfolio Logo" className="portfolio-logo" />
        </Link>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', gap: '30px' }}>
          <Link className="nav-link" to="/" style={{ position: 'relative' }}>
            Home
          </Link>
          <Link className="nav-link" to="/projects" style={{ position: 'relative' }}>
            Projects
          </Link>
          <Link className="nav-link" to="/experience" style={{ position: 'relative' }}>
            Experience
          </Link>
          <Link className="nav-link" to="/skills" style={{ position: 'relative' }}>
            Skills
          </Link>
          <Link className="nav-link" to="/contact" style={{ position: 'relative' }}>
            Contact
          </Link>
        </div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <a 
            href="https://github.com/ethiyor" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              color: '#fff', 
              fontSize: '1.2rem', 
              textDecoration: 'none',
              padding: '8px',
              borderRadius: '6px',
              transition: 'all 0.3s'
            }}
            title="GitHub Profile"
          >
            GitHub
          </a>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
