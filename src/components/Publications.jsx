import React, { useState, useEffect } from 'react';
import { cvData } from '../data';

const Publications = () => {
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    setVisibleItems([]); 
    let timeoutIds = [];
    cvData.publications.forEach((item, index) => {
      const id = setTimeout(() => {
        setVisibleItems((prev) => [...prev, item]);
      }, 100 * (index + 1));
      timeoutIds.push(id);
    });

    return () => {
      timeoutIds.forEach(clearTimeout);
    };
  }, []);

  return (
    <section id="publications" className="section">
      <h2 className="section-header">Publications</h2>
      <div className="card fade-in-up">
        {visibleItems.length === 0 && (
          <div className="loading-text" style={{ padding: '1rem', color: 'var(--secondary)' }}>
            &gt; Loading publications...<span className="blinking-cursor"></span>
          </div>
        )}
        {visibleItems.length > 0 && (
          <ul className="bullet-list">
            {visibleItems.map((item, index) => (
              <li 
                key={index} 
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

export default Publications;
