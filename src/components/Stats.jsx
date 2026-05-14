import React, { useState, useEffect } from 'react';
import { cvData } from '../data';

const StatCounter = ({ stat }) => {
  const [count, setCount] = useState(0);
  const target = parseInt(stat.value.replace(/[^0-9]/g, '')) || 0;
  const suffix = stat.value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (target === 0) return;
    
    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className={`stat-value ${stat.color}`}>
      {target > 0 ? `${count}${suffix}` : stat.value}
    </div>
  );
};

const Stats = () => {
  return (
    <div className="stats-grid">
      {cvData.stats.map((stat, index) => (
        <div key={index} className="stat-card">
          <StatCounter stat={stat} />
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
