import React from 'react';
import { Link } from 'react-router-dom';
import { User, Folder, Briefcase, Award, FileBadge, BookOpen, Mail, BookText } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-prompt" style={{ textDecoration: 'none' }}>
        {'>'}. polash@portfolio:~$
      </Link>
      
      <div className="nav-links">
        <Link to="/about" className="nav-item">
          <User size={16} /> About
        </Link>
        <Link to="/projects" className="nav-item">
          <Folder size={16} /> Projects
        </Link>
        <Link to="/experience" className="nav-item">
          <Briefcase size={16} /> Experience
        </Link>
        <Link to="/achievements" className="nav-item">
          <Award size={16} /> Achievements
        </Link>
        <Link to="/publications" className="nav-item">
          <BookText size={16} /> Publications
        </Link>
        <Link to="/education" className="nav-item">
          <BookOpen size={16} /> Education
        </Link>
        <Link to="/contact" className="nav-item">
          <Mail size={16} /> Contact
        </Link>
      </div>

      <div className="nav-status">
        <div className="status-dot"></div>
        Available
      </div>
    </nav>
  );
};

export default Navbar;
