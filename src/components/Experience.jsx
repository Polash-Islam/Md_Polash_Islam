import React, { useState, useEffect } from 'react';
import { cvData } from '../data';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('fullTime');
  const [visibleItems, setVisibleItems] = useState([]);

  let currentExperiences = cvData.experience.fullTime;
  if (activeTab === 'internship') currentExperiences = cvData.experience.internship;
  if (activeTab === 'volunteer') currentExperiences = cvData.experience.volunteer;

  useEffect(() => {
    setVisibleItems([]); 
    let timeoutIds = [];
    currentExperiences.forEach((exp, index) => {
      const id = setTimeout(() => {
        setVisibleItems((prev) => [...prev, exp]);
      }, 150 * (index + 1));
      timeoutIds.push(id);
    });

    return () => {
      timeoutIds.forEach(clearTimeout);
    };
  }, [activeTab]);

  return (
    <section id="experience" className="section">
      <h2 className="section-header">Work Experience</h2>

      <div className="terminal-tabs">
        <button 
          className={`tab-btn ${activeTab === 'fullTime' ? 'active' : ''}`} 
          onClick={() => setActiveTab('fullTime')}
        >
          [ full_time.sh ]
        </button>
        <button 
          className={`tab-btn ${activeTab === 'internship' ? 'active' : ''}`} 
          onClick={() => setActiveTab('internship')}
        >
          [ internship.sh ]
        </button>
        <button 
          className={`tab-btn ${activeTab === 'volunteer' ? 'active' : ''}`} 
          onClick={() => setActiveTab('volunteer')}
        >
          [ volunteer.sh ]
        </button>
      </div>

      <div className="cards-list">
        {visibleItems.length === 0 && (
          <div className="loading-text" style={{ padding: '2rem', color: 'var(--secondary)' }}>
            &gt; Fetching experience data...<span className="blinking-cursor"></span>
          </div>
        )}
        {visibleItems.map((exp, index) => (
          <div key={`${activeTab}-${index}`} className="card fade-in-up">
            <div className="card-header">
              <div>
                <h3 className="card-title">{exp.title}</h3>
                <div className="card-subtitle">{exp.company}</div>
              </div>
              <div className="card-date">{exp.period}</div>
            </div>
            <p className="card-desc">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
