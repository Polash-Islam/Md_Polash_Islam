import React from 'react';
import { cvData } from '../data';
import { Code, Layout, Server, Database, PenTool, Brain, Bot, GraduationCap, Calendar, MapPin, Star, FileText, Download } from 'lucide-react';
import profileImg from '../assets/IMG_3118.PNG';
import resumePdf from '../assets/MD POLASH ISLAM.pdf';

const About = () => {
  return (
    <div className="about-container" style={{ display: 'flex', flexDirection: 'column', gap: '3rem', width: '100%', maxWidth: '1000px', margin: '0 auto', paddingBottom: '4rem' }}>
      
      {/* Page Header */}
      <div className="page-header" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.5rem', fontWeight: 'bold' }}>
        <span style={{ color: 'var(--primary)' }}>polash@portfolio:~$</span>
        <span style={{ color: 'var(--primary)' }}>About</span>
      </div>

      {/* whoami Section */}
      <div className="about-section">
        <div className="command-header" style={{ marginBottom: '1.5rem', color: 'var(--primary)', fontSize: '1.1rem', fontFamily: "'Fira Code', monospace" }}>
          $ whoami
        </div>
        
        <div className="whoami-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '2rem', alignItems: 'center', backgroundColor: 'rgba(13, 17, 23, 0.6)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '12px', padding: '2rem' }}>
          {/* Bio Card */}
          <div style={{ lineHeight: '1.8', color: '#8b949e', fontSize: '0.95rem', fontFamily: "'Fira Code', monospace" }}>
            <span style={{ color: '#00e5ff' }}>Full-Stack Software Engineer</span> with expertise in scalable web development, <span style={{ color: '#f2cc60' }}>AI/ML, and competitive programming</span>. An <span style={{ color: '#ff7b72' }}>8x Inter University Programming Contest (IUPC) Regionalist</span> with <span style={{ color: '#f2cc60' }}>1400+ solved problems</span> across multiple online judges. Currently working as a <span style={{ color: '#d2a8ff' }}>Full Stack Software Engineer (IT Consultant)</span> at the <span style={{ color: '#00e5ff' }}>Financial Reporting Council</span> under the Finance Ministry, Finance Division, contributing to enterprise financial systems. Experienced in building AI-powered solutions, including an <span style={{ color: '#d2a8ff' }}>Intelligent Financial Document Processing</span> pipeline using <span style={{ color: '#7ee787' }}>PaddleOCR, RAG, LLMs, prompt engineering, embeddings, vector search, and fine-tuning</span> techniques for automated financial report understanding and generation. Passionate about combining software engineering with artificial intelligence to build <span style={{ color: '#ff7b72' }}>intelligent systems</span>.
          </div>

          {/* Image Box */}
          <div className="profile-image-container" style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div className="image-wrapper" style={{ 
              width: '100%', 
              maxWidth: '254px',
              borderRadius: '12px', 
              overflow: 'hidden',
              border: '1px solid rgba(88, 166, 255, 0.4)',
              boxShadow: '0 0 30px rgba(88, 166, 255, 0.25)',
              backgroundColor: 'rgba(13, 17, 23, 0.8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img 
                src={profileImg} 
                alt="MD POLASH ISLAM" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<span style="color: var(--secondary); opacity: 0.5;">[ profile image missing ]</span>';
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* skills.json Section */}
      <div className="about-section">
        <div className="command-header" style={{ marginBottom: '1.5rem', color: 'var(--primary)', fontSize: '1.1rem', fontFamily: "'Fira Code', monospace" }}>
          $ cat skills.json
        </div>

        <div className="skills-terminal" style={{
          backgroundColor: 'rgba(13, 17, 23, 0.7)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '8px',
          padding: '1.5rem',
          fontFamily: "'Fira Code', monospace",
          fontSize: '0.95rem',
          color: '#c9d1d9',
          lineHeight: '1.6'
        }}>
          <div><span style={{ color: '#ff7b72' }}>const</span> <span style={{ color: '#79c0ff' }}>developerSkills</span> <span style={{ color: '#ff7b72' }}>=</span> {'{'}</div>
          
          <div style={{ paddingLeft: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', margin: '1rem 0' }}>
            <SkillRow category="languages" items={cvData.skills.languages} color="#f2cc60" />
            <SkillRow category="frontend" items={cvData.skills.frontend} color="#00e5ff" />
            <SkillRow category="backend" items={cvData.skills.backend} color="#d2a8ff" />
            <SkillRow category="databases" items={cvData.skills.databases} color="#ff9f43" />
            <SkillRow category="ai_ml" items={cvData.skills.ai_ml} color="#ff4081" />
            <SkillRow category="tools" items={cvData.skills.tools} color="#ff5f56" />
            <SkillRow category="interests" items={cvData.skills.interests} color="#27c93f" isLast />
          </div>

          <div>{'}'}<span style={{ color: '#c9d1d9' }}>;</span></div>
        </div>
      </div>

      {/* education.log Section */}
      <div className="about-section">
        <div className="command-header" style={{ marginBottom: '1.5rem', color: 'var(--primary)', fontSize: '1.1rem', fontFamily: "'Fira Code', monospace" }}>
          $ cat education.log
        </div>
        
        <div className="education-list" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {cvData.education.map((edu, index) => (
            <div key={index} className="education-card" style={{ padding: '1.5rem', backgroundColor: 'rgba(22, 27, 34, 0.5)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '8px', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div style={{ width: '48px', height: '48px', backgroundColor: 'rgba(13, 17, 23, 0.8)', border: '1px solid var(--primary)', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0 }}>
                <GraduationCap color="var(--primary)" size={24} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#c9d1d9' }}>{edu.institution}</div>
                <div style={{ color: 'var(--primary)', fontSize: '0.95rem' }}>{edu.degree}</div>
                <div style={{ display: 'flex', gap: '1.5rem', color: '#8b949e', fontSize: '0.85rem', marginTop: '0.25rem', flexWrap: 'wrap' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Calendar size={14} /> {edu.period}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MapPin size={14} color="#ff5f56" /> Dhaka, BD</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Star size={14} color="var(--primary)" /> CGPA {edu.cgpa}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* resume.md Section */}
      <div className="about-section">
        <div className="command-header" style={{ marginBottom: '1.5rem', color: 'var(--primary)', fontSize: '1.1rem', fontFamily: "'Fira Code', monospace" }}>
          $ cat resume.md
        </div>

        <div className="resume-card" style={{ padding: '2rem', backgroundColor: 'rgba(22, 27, 34, 0.5)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '8px', display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ width: '56px', height: '56px', backgroundColor: 'rgba(13, 17, 23, 0.8)', border: '1px solid var(--primary)', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0 }}>
            <FileText color="var(--primary)" size={28} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1, minWidth: '250px' }}>
            <div style={{ fontWeight: 'bold', fontSize: '1.25rem', color: '#c9d1d9' }}>{cvData.personalInfo.name} — Resume</div>
            <div style={{ display: 'flex', gap: '1.5rem', color: '#8b949e', fontSize: '0.85rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Calendar size={14} /> Last Updated: May 2026</span>
              <span>PDF • 1 Page</span>
            </div>
            <div style={{ color: '#8b949e', fontSize: '0.95rem', marginTop: '0.25rem' }}>
              Full-Stack Software Engineer | IUPC Regionalist | 1400+ Problems Solved
            </div>
            <div style={{ marginTop: '1rem' }}>
              <a href={resumePdf} download="MD_POLASH_ISLAM_Resume.pdf" className="btn" style={{ backgroundColor: 'var(--primary)', color: '#0d1117', padding: '0.75rem 1.5rem', borderRadius: '4px', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', border: 'none', transition: 'transform 0.2s', textDecoration: 'none' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <Download size={18} /> Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

const SkillRow = ({ category, items, color, isLast }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', flexWrap: 'wrap' }}>
      <span style={{ color: '#7ee787', minWidth: '120px' }}>"{category}"</span>
      <span style={{ color: '#c9d1d9', marginRight: '0.5rem' }}>:</span>
      <span style={{ color: '#c9d1d9', marginRight: '0.5rem' }}>[</span>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center', flex: 1 }}>
        {items.map((item, idx) => (
          <span key={idx} style={{ 
            color: '#a5d6ff', 
            backgroundColor: 'rgba(56, 139, 253, 0.1)', 
            border: `1px solid rgba(56, 139, 253, 0.2)`,
            padding: '0.1rem 0.5rem', 
            borderRadius: '4px',
            fontSize: '0.85rem'
          }}>
            "{item}"{idx < items.length - 1 ? <span style={{color: '#c9d1d9'}}>,</span> : ''}
          </span>
        ))}
      </div>
      <span style={{ color: '#c9d1d9', alignSelf: 'flex-end', marginLeft: '0.5rem', marginTop: '0.5rem' }}>]</span>
      {!isLast && <span style={{ color: '#c9d1d9', alignSelf: 'flex-end' }}>,</span>}
    </div>
  );
};

export default About;
