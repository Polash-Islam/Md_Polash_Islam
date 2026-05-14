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
          <div className="cp-profiles-grid" style={{ marginBottom: '2rem' }}>
            <div className="command-header" style={{ marginBottom: '1.5rem', color: 'var(--primary)', fontSize: '1.1rem', fontFamily: "'Fira Code', monospace" }}>
              $ cat cp_profiles.json
            </div>
            
            <div style={{ backgroundColor: 'rgba(22, 27, 34, 0.5)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '8px', padding: '1.5rem', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontSize: '1.5rem', fontWeight: 'bold' }}>
                  <Code size={24} /> {cvData.cpProfiles.totalProblems}
                </div>
                <div style={{ color: '#8b949e', fontSize: '0.85rem', marginTop: '0.25rem', fontFamily: "'Fira Code', monospace" }}>Problems Solved</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#d2a8ff', fontSize: '1.5rem', fontWeight: 'bold' }}>
                  <Trophy size={24} /> {cvData.cpProfiles.totalContests}
                </div>
                <div style={{ color: '#8b949e', fontSize: '0.85rem', marginTop: '0.25rem', fontFamily: "'Fira Code', monospace" }}>Contests</div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
              {cvData.cpProfiles.profiles.map((profile, idx) => (
                <a key={idx} href={profile.url} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1.5rem 1rem', backgroundColor: 'rgba(13, 17, 23, 0.8)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '8px', textDecoration: 'none', transition: 'border-color 0.2s', textAlign: 'center' }} className="social-card">
                  <div style={{ fontWeight: 'bold', color: '#c9d1d9', marginBottom: '0.5rem' }}>{profile.platform}</div>
                  <div style={{ color: '#8b949e', fontSize: '0.75rem', marginBottom: '1rem' }}>{profile.username}</div>
                  <div style={{ color: 'var(--primary)', fontSize: '1.25rem', fontWeight: 'bold' }}>{profile.rating}</div>
                  <div style={{ color: '#8b949e', fontSize: '0.75rem', marginTop: '0.25rem', letterSpacing: '1px' }}>{profile.rank}</div>
                </a>
              ))}
              <a href="#" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1.5rem 1rem', backgroundColor: 'rgba(13, 17, 23, 0.8)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '8px', textDecoration: 'none', transition: 'border-color 0.2s', textAlign: 'center' }} className="social-card">
                <Code size={24} color="var(--primary)" style={{ marginBottom: '0.5rem' }} />
                <div style={{ color: 'var(--primary)', fontSize: '0.9rem', fontWeight: 'bold' }}>View Complete<br/>Stats</div>
              </a>
            </div>
          </div>
        )}

        {visibleItems.length === 0 && (
          <div className="loading-text" style={{ padding: '1rem', color: 'var(--secondary)' }}>
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
