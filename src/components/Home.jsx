import React from 'react';
import { Link } from 'react-router-dom';
import Terminal from './Terminal';
import Stats from './Stats';
import { cvData } from '../data';
import resumePdf from '../assets/MD POLASH ISLAM.pdf';
import { Mail, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Text */}
      <div className="hero-text">
        <div className="hero-greeting">Hi, I'm</div>
        <h1 className="hero-name text-gradient">{cvData.personalInfo.name}</h1>
        <div className="hero-title">
          <span className="hero-prompt">{'>'}</span> 
          <span className="blinking-cursor hero-title-text">{cvData.personalInfo.title}</span>
        </div>
        <p className="hero-bio">
          {cvData.bio} Let's create something <span className="text-magenta">amazing</span> together.
        </p>
      </div>

      {/* Terminal */}
      <div className="terminal-container-home">
        <Terminal />
      </div>

      {/* Stats */}
      <div className="stats-container-home">
        <Stats />
      </div>

      {/* Actions and Socials */}
      <div className="actions-container-home">
        <div className="cta-buttons">
          <Link to="/contact" className="btn btn-primary-filled">
            <Mail size={18} /> Contact Me
          </Link>
          <a href={resumePdf} download="MD_POLASH_ISLAM_Resume.pdf" className="btn btn-outline">
            <Download size={18} /> Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="social-links-home">
          <a href={`https://github.com/${cvData.personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub size={18} />
          </a>
          <a href={`https://linkedin.com/in/${cvData.personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin size={18} />
          </a>
          <a href={`mailto:${cvData.personalInfo.email}`} className="social-icon">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
