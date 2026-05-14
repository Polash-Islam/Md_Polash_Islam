import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Publications from './components/Publications';
import Education from './components/Education';
import Contact from './components/Contact';
import { cvData } from './data';
import TransitionWrapper from './components/TransitionWrapper';
import MatrixBackground from './components/MatrixBackground';

import About from './components/About';

function App() {
  return (
    <div className="app-container">
      <MatrixBackground />
      <div className="ambient-glow-1"></div>
      <div className="ambient-glow-2"></div>
      <Navbar />
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<TransitionWrapper><Home /></TransitionWrapper>} />
          <Route path="/about" element={<TransitionWrapper><About /></TransitionWrapper>} />
          <Route path="/projects" element={<TransitionWrapper><Projects /></TransitionWrapper>} />
          <Route path="/experience" element={<TransitionWrapper><Experience /></TransitionWrapper>} />
          <Route path="/achievements" element={<TransitionWrapper><Achievements /></TransitionWrapper>} />
          <Route path="/publications" element={<TransitionWrapper><Publications /></TransitionWrapper>} />
          <Route path="/education" element={<TransitionWrapper><Education /></TransitionWrapper>} />
          <Route path="/contact" element={<TransitionWrapper><Contact /></TransitionWrapper>} />
        </Routes>
      </main>

      <footer className="footer">
        <div>
          <span className="footer-brand">© {cvData.personalInfo.name}</span> | {new Date().getFullYear()}
        </div>
        <div className="social-links">
          <a href={`https://github.com/${cvData.personalInfo.github}`} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={`https://linkedin.com/in/${cvData.personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
