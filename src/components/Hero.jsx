import React from 'react';
import Typewriter from 'typewriter-effect';
import resumePdf from '../assets/MD POLASH ISLAM.pdf';
import { Link } from 'react-router-dom';
import { cvData } from '../data';
import { Mail, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="about" className="hero">
      <div className="hero-greeting">Hi, I'm</div>
      <h1 className="hero-name">{cvData.personalInfo.name}</h1>
      <div className="hero-title">
        <span className="text-secondary">{'>'}</span> {cvData.personalInfo.title}
      </div>
      
      <p className="hero-bio">
        {cvData.bio} Let's create something <span className="text-magenta">amazing</span> together.
      </p>

      <div className="hero-actions">
        <Link to="/contact" className="btn">
          <Mail size={18} /> Contact Me
        </Link>
        <a href={resumePdf} download="MD_POLASH_ISLAM_Resume.pdf" className="btn btn-outline" style={{ textDecoration: 'none' }}>
          <Download size={18} /> Resume
        </a>
      </div>

      <div className="social-links">
        <a href={`https://github.com/${cvData.personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaGithub size={20} />
        </a>
        <a href={`https://linkedin.com/in/${cvData.personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaLinkedin size={20} />
        </a>
        <a href={`mailto:${cvData.personalInfo.email}`} className="social-icon">
          <Mail size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
