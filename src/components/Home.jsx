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
    <div className="home-container" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '1000px', margin: '0 auto' }}>
      {/* Hero Text */}
      <div className="hero-text" style={{ width: '100%', textAlign: 'left' }}>
        <div className="hero-greeting" style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#8b949e' }}>Hi, I'm</div>
        <h1 className="hero-name text-gradient" style={{ fontSize: '4rem', marginBottom: '1rem', fontWeight: 'bold' }}>{cvData.personalInfo.name}</h1>
        <div className="hero-title" style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)' }}>
          <span style={{ color: '#27c93f' }}>{'>'}</span> 
          <span className="blinking-cursor" style={{ color: 'var(--primary)' }}>{cvData.personalInfo.title}</span>
        </div>
        <p className="hero-bio" style={{ fontSize: '1.05rem', color: '#8b949e', lineHeight: '1.7', maxWidth: '850px' }}>
          {cvData.bio} Let's create something <span className="text-magenta">amazing</span> together.
        </p>
      </div>
      {/* Terminal */}
      <div style={{ width: '100%' }}>
        <Terminal />
      </div>

       

      {/* Stats */}
      <div style={{ width: '100%' }}>
        <Stats />
      </div>

      {/* Actions and Socials */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'flex-start' }}>
          <div className="cta-buttons" style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <Link to="/contact" className="btn" style={{ backgroundColor: 'var(--primary)', color: '#0d1117', padding: '0.75rem 1.5rem', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', textDecoration: 'none' }}>
              <Mail size={18} /> Contact Me
            </Link>
            <a href={resumePdf} download="MD_POLASH_ISLAM_Resume.pdf" className="btn btn-outline" style={{ border: '1px solid var(--primary)', color: 'var(--primary)', padding: '0.75rem 1.5rem', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', textDecoration: 'none' }}>
              <Download size={18} /> Resume
            </a>
          </div>

        {/* Social Links */}
        <div className="social-links" style={{ display: 'flex', gap: '0.75rem' }}>
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
