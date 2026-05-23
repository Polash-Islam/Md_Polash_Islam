import React from 'react';
import { cvData } from '../data';
import { GraduationCap, Calendar, MapPin, Star, FileText, Download } from 'lucide-react';
import profileImg from '../assets/IMG_3118.png';
import resumePdf from '../assets/MD POLASH ISLAM.pdf';

const About = () => {
  return (
    <div className="about-container">
      
      {/* Page Header */}
      <div className="page-header">
        <span className="prompt-prefix">polash@portfolio:~$</span>
        <span className="prompt-command">About</span>
      </div>

      {/* whoami Section */}
      <div className="about-section">
        <div className="command-header">
          $ whoami
        </div>
        
        <div className="whoami-grid">
          {/* Bio Card */}
          <div className="bio-text">
            <span className="text-cyan">Full-Stack Software Engineer</span> with expertise in scalable web development, <span className="text-yellow">AI/ML, and competitive programming</span>. An <span className="text-error">8x Inter University Programming Contest (IUPC) Regionalist</span> with <span className="text-yellow">1400+ solved problems</span> across multiple online judges. Currently working as a <span className="text-magenta">Full Stack Software Engineer (IT Consultant)</span> at the <span className="text-cyan">Financial Reporting Council</span> under the Finance Ministry, Finance Division, contributing to enterprise financial systems. Experienced in building AI-powered solutions, including an <span className="text-magenta">Intelligent Financial Document Processing</span> pipeline using <span className="text-green">PaddleOCR, RAG, LLMs, prompt engineering, embeddings, vector search, and fine-tuning</span> techniques for automated financial report understanding and generation. Passionate about combining software engineering with artificial intelligence to build <span className="text-error">intelligent systems</span>.
          </div>

          {/* Image Box */}
          <div className="profile-image-container">
            <div className="image-wrapper">
              <img 
                src={profileImg} 
                alt="MD POLASH ISLAM" 
                className="profile-img"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<span class="image-missing">[ profile image missing ]</span>';
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* skills.json Section */}
      <div className="about-section">
        <div className="command-header">
          $ cat skills.json
        </div>

        <div className="skills-terminal">
          <div><span className="text-error">const</span> <span className="text-cyan">developerSkills</span> <span className="text-error">=</span> {'{'}</div>
          
          <div className="skills-terminal-body">
            <SkillRow category="languages" items={cvData.skills.languages} />
            <SkillRow category="frontend" items={cvData.skills.frontend} />
            <SkillRow category="backend" items={cvData.skills.backend} />
            <SkillRow category="databases" items={cvData.skills.databases} />
            <SkillRow category="ai_ml" items={cvData.skills.ai_ml} />
            <SkillRow category="tools" items={cvData.skills.tools} />
            <SkillRow category="interests" items={cvData.skills.interests} isLast />
          </div>

          <div>{'}'}<span className="text-muted">;</span></div>
        </div>
      </div>

      {/* education.log Section */}
      <div className="about-section">
        <div className="command-header">
          $ cat education.log
        </div>
        
        <div className="education-list">
          {cvData.education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-icon-wrapper">
                <GraduationCap color="var(--primary)" size={24} />
              </div>
              <div className="education-info-wrapper">
                <div className="education-institution">{edu.institution}</div>
                <div className="education-degree">{edu.degree}</div>
                <div className="education-meta">
                  <span className="meta-item"><Calendar size={14} /> {edu.period}</span>
                  <span className="meta-item"><MapPin size={14} color="#ff5f56" /> Dhaka, BD</span>
                  <span className="meta-item"><Star size={14} color="var(--primary)" /> CGPA {edu.cgpa}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* resume.md Section */}
      <div className="about-section">
        <div className="command-header">
          $ cat resume.md
        </div>

        <div className="resume-card">
          <div className="resume-icon-wrapper">
            <FileText color="var(--primary)" size={28} />
          </div>
          <div className="resume-info-wrapper">
            <div className="resume-title">{cvData.personalInfo.name} — Resume</div>
            <div className="resume-meta">
              <span className="meta-item"><Calendar size={14} /> Last Updated: May 2026</span>
              <span className="meta-item">PDF • 1 Page</span>
            </div>
            <div className="resume-desc">
              Full-Stack Software Engineer | IUPC Regionalist | 1400+ Problems Solved
            </div>
            <div className="resume-actions">
              <a href={resumePdf} download="MD_POLASH_ISLAM_Resume.pdf" className="btn btn-primary-filled">
                <Download size={18} /> Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

const SkillRow = ({ category, items, isLast }) => {
  return (
    <div className="skill-row">
      <span className="skill-category">"{category}"</span>
      <span className="skill-colon">:</span>
      <span className="skill-bracket">[</span>
      <div className="skill-items-container">
        {items.map((item, idx) => (
          <span key={idx} className="skill-badge">
            "{item}"{idx < items.length - 1 ? <span className="skill-comma">,</span> : ''}
          </span>
        ))}
      </div>
      <span className="skill-bracket skill-bracket-end">]</span>
      {!isLast && <span className="skill-comma">,</span>}
    </div>
  );
};

export default About;
