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
      <nav className="navbar">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/projects">
          Projects
        </Link>
          <Link className="nav-link" to="/experience">
          Experience
        </Link>
          <Link className="nav-link" to="/skills">
          Skills
        </Link>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
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
