import React, { useState, useEffect } from 'react';
import { cvData } from '../data';

import bulklyImg from '../assets/projects/Bulkly.png';
import calciumHealthImg from '../assets/projects/CalciumHealth.png';
import conquestAirImg from '../assets/projects/ConquestAir.png';
import fishinPuntacanaImg from '../assets/projects/FishinPuntacana.png';
import helloPrePayImg from '../assets/projects/HelloPrePay.png';
import ourstoryzImg from '../assets/projects/ourstoryz.png';
import ngoImg from '../assets/projects/NGO.png';
import placeholderImg from '../assets/projects/placeholder.png';
import reportPortalImg from '../assets/projects/report_portal.png';

const projectImages = {
  'Financial Report Submission Portal': reportPortalImg,
  'NGO Affairs Bureau Digital Transformation & e-Governance System': ngoImg,
  'Bulkly': bulklyImg,
  'CalciumHealth': calciumHealthImg,
  'ConquestAir': conquestAirImg,
  'FishinPuntacana': fishinPuntacanaImg,
  'HelloPrePay': helloPrePayImg,
  'Ourstoryz': ourstoryzImg,
};

const getDeviconClass = (tech) => {
  const t = tech.toLowerCase().trim();
  if (t.includes('react')) return 'devicon-react-original colored';
  if (t.includes('laravel')) return 'devicon-laravel-original colored';
  if (t.includes('php')) return 'devicon-php-plain colored';
  if (t.includes('js') || t.includes('javascript')) return 'devicon-javascript-plain colored';
  if (t.includes('mysql')) return 'devicon-mysql-plain colored';
  if (t.includes('wordpress')) return 'devicon-wordpress-plain colored';
  if (t.includes('bootstrap')) return 'devicon-bootstrap-plain colored';
  if (t.includes('vue')) return 'devicon-vuejs-plain colored';
  if (t.includes('html')) return 'devicon-html5-plain colored';
  if (t.includes('css')) return 'devicon-css3-plain colored';
  if (t.includes('java') && !t.includes('javascript')) return 'devicon-java-plain colored';
  if (t.includes('c#') || t.includes('c sharp')) return 'devicon-csharp-plain colored';
  if (t.includes('c') && !t.includes('c#') && !t.includes('css')) return 'devicon-c-plain colored';
  if (t.includes('android')) return 'devicon-android-plain colored';
  if (t.includes('python')) return 'devicon-python-plain colored';
  if (t.includes('django')) return 'devicon-django-plain colored';
  if (t.includes('postgres')) return 'devicon-postgresql-plain colored';
  if (t.includes('tailwind')) return 'devicon-tailwindcss-plain colored';
  if (t.includes('docker')) return 'devicon-docker-plain colored';
  return '';
};

const ProjectRow = ({ project, isLive, index }) => {
  const indexFormatted = String(index + 1).padStart(2, '0') + '.';

  return (
    <div className="project-row fade-in-up">
      {/* Hover Image Reveal & Large Description Panel */}
      <div className="project-preview-panel">
        <div className="project-hover-image">
          <img src={projectImages[project.name] || placeholderImg} alt={`${project.name} Preview`} />
        </div>
        <div className="project-large-desc">
          <strong>About this project:</strong>
          <br />
          {project.desc}
        </div>
      </div>

      <div className="project-info-large">
        <div className="project-number">{indexFormatted}</div>
        <div className="project-content">
          <div className="project-title-wrapper-large">
            <span className="project-title-large">{project.name}</span>
            {project.isGovt && (
              <span className="govt-badge">
                [ Govt_Project ]
              </span>
            )}
            {isLive && project.url && (
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="run-btn-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="run-btn-icon github-icon" title="View Source Code">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
            )}
          </div>
          
          <div className="project-tech-inline">
            {project.tech.split(',').map((tag, i, arr) => {
              const iconClass = getDeviconClass(tag);
              return (
                <React.Fragment key={i}>
                  <span className="tech-item-inline">
                    {iconClass && <i className={iconClass}></i>}
                    {tag.trim()}
                  </span>
                  {i < arr.length - 1 && <span className="tech-dot">•</span>}
                </React.Fragment>
              );
            })}
          </div>
          
          {/* We hide the desc in CSS by default, or keep it subtle */}
          <p className="project-desc-subtle">{project.desc}</p>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState('ongoing');
  const [visibleItems, setVisibleItems] = useState([]);

  let currentProjects = cvData.projects.live;
  if (activeTab === 'academic') currentProjects = cvData.projects.academic;
  if (activeTab === 'ongoing') currentProjects = cvData.projects.ongoing;

  useEffect(() => {
    setVisibleItems([]); 
    let timeoutIds = [];
    currentProjects.forEach((proj, index) => {
      const id = setTimeout(() => {
        setVisibleItems((prev) => [...prev, proj]);
      }, 150 * (index + 1));
      timeoutIds.push(id);
    });

    return () => {
      timeoutIds.forEach(clearTimeout);
    };
  }, [activeTab]); 

  return (
    <section id="projects" className="section">
      <div className="terminal-tabs">
        <button 
          className={`tab-btn ${activeTab === 'ongoing' ? 'active' : ''}`} 
          onClick={() => setActiveTab('ongoing')}
        >
          [ ongoing_projects.sh ]
        </button>
        <button 
          className={`tab-btn ${activeTab === 'live' ? 'active' : ''}`} 
          onClick={() => setActiveTab('live')}
        >
          [ live_projects.sh ]
        </button>
        <button 
          className={`tab-btn ${activeTab === 'academic' ? 'active' : ''}`} 
          onClick={() => setActiveTab('academic')}
        >
          [ academic_projects.sh ]
        </button>
      </div>

      <div className="projects-list">
        {visibleItems.length === 0 && (
          <div className="loading-text" style={{ padding: '2rem', color: 'var(--secondary)' }}>
            &gt; Fetching project data...<span className="blinking-cursor"></span>
          </div>
        )}
        {visibleItems.map((project, index) => (
          <ProjectRow key={`${activeTab}-${project.name}`} project={project} isLive={activeTab === 'live' || activeTab === 'ongoing'} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
