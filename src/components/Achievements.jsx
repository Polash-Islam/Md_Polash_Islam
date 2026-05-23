import React, { useState, useEffect } from 'react';
import { cvData } from '../data';
import { Code, Trophy } from 'lucide-react';

const Achievements = () => {
  const [activeTab, setActiveTab] = useState('cp');
  const [visibleItems, setVisibleItems] = useState([]);

  let currentItems = cvData.cp;
  if (activeTab === 'participations') currentItems = cvData.participations;

  useEffect(() => {
    setVisibleItems([]); 
    let timeoutIds = [];
    currentItems.forEach((item, index) => {
      const id = setTimeout(() => {
        setVisibleItems((prev) => [...prev, item]);
      }, 100 * (index + 1));
      timeoutIds.push(id);
    });

    return () => {
      timeoutIds.forEach(clearTimeout);
    };
  }, [activeTab, currentItems]);

  return (
    <section id="achievements" className="section">
      <h2 className="section-header">Achievements</h2>

      <div className="terminal-tabs">
        <button 
          className={`tab-btn ${activeTab === 'cp' ? 'active' : ''}`} 
          onClick={() => setActiveTab('cp')}
        >
          [ competitive_programming.sh ]
        </button>
        <button 
          className={`tab-btn ${activeTab === 'participations' ? 'active' : ''}`} 
          onClick={() => setActiveTab('participations')}
        >
          [ participations.sh ]
        </button>
      </div>

      <div className="card fade-in-up">
        {activeTab === 'cp' && (
          <div className="cp-profiles-container">
            <div className="command-header">
              $ cat cp_profiles.json
            </div>
            
            <div className="cp-stats-box">
              <div className="cp-stat-item">
                <div className="cp-stat-value text-yellow">
                  <Code size={24} /> {cvData.cpProfiles.totalProblems}
                </div>
                <div className="cp-stat-label">Problems Solved</div>
              </div>
              <div className="cp-stat-item">
                <div className="cp-stat-value text-magenta">
                  <Trophy size={24} /> {cvData.cpProfiles.totalContests}
                </div>
                <div className="cp-stat-label">Contests</div>
              </div>
            </div>

            <div className="cp-profiles-grid">
              {cvData.cpProfiles.profiles.map((profile, idx) => (
                <a key={idx} href={profile.url} target="_blank" rel="noopener noreferrer" className="cp-profile-card">
                  <div className="cp-profile-platform">{profile.platform}</div>
                  <div className="cp-profile-user">{profile.username}</div>
                  <div className="cp-profile-rating">{profile.rating}</div>
                  <div className="cp-profile-rank">{profile.rank}</div>
                </a>
              ))}
              <a href="#" className="cp-profile-card cp-profile-all">
                <Code size={24} color="var(--primary)" />
                <div className="cp-profile-platform">View Complete<br/>Stats</div>
              </a>
            </div>
          </div>
        )}

        {visibleItems.length === 0 && (
          <div className="loading-text">
            &gt; Loading data...<span className="blinking-cursor"></span>
          </div>
        )}
        {visibleItems.length > 0 && (
          <ul className="bullet-list">
            {visibleItems.map((item, index) => (
              <li 
                key={`${activeTab}-${index}`} 
                className="fade-in-up" 
                style={{ animationDelay: `${index * 0.05}s` }}
                dangerouslySetInnerHTML={{ __html: item }}
              />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Achievements;
