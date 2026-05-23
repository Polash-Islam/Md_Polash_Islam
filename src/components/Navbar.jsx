import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Folder, Briefcase, Award, BookOpen, Mail, BookText, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-prompt" style={{ textDecoration: 'none' }} onClick={closeMenu}>
        {'>'}. polash@portfolio:~$
      </Link>
      
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="/about" className="nav-item" onClick={closeMenu}>
          <User size={16} /> About
        </Link>
        <Link to="/projects" className="nav-item" onClick={closeMenu}>
          <Folder size={16} /> Projects
        </Link>
        <Link to="/experience" className="nav-item" onClick={closeMenu}>
          <Briefcase size={16} /> Experience
        </Link>
        <Link to="/achievements" className="nav-item" onClick={closeMenu}>
          <Award size={16} /> Achievements
        </Link>
        <Link to="/publications" className="nav-item" onClick={closeMenu}>
          <BookText size={16} /> Publications
        </Link>
        <Link to="/education" className="nav-item" onClick={closeMenu}>
          <BookOpen size={16} /> Education
        </Link>
        <Link to="/contact" className="nav-item" onClick={closeMenu}>
          <Mail size={16} /> Contact
        </Link>
      </div>

      <div className="nav-status">
        <div className="status-dot"></div>
        Available
      </div>

      <button 
        className="mobile-menu-toggle" 
        onClick={toggleMenu} 
        aria-label="Toggle Navigation"
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
    </nav>
  );
};

export default Navbar;
