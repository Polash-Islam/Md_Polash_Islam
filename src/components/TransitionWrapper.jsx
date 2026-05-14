import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const TransitionWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [log, setLog] = useState([]);
  const location = useLocation();
  const pathName = location.pathname === '/' ? 'home' : location.pathname.replace('/', '');

  useEffect(() => {
    // Start loading sequence on route change
    setLoading(true);
    setLog([`> Executing /bin/${pathName}...`]);
    
    const t1 = setTimeout(() => {
      setLog(prev => [...prev, `[ OK ] Initializing environment...`]);
    }, 200);

    const t2 = setTimeout(() => {
      setLog(prev => [...prev, `[ OK ] Mounting ${pathName} module...`]);
    }, 450);

    const t3 = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [location.pathname]);

  if (loading) {
    return (
      <div className="terminal-loader" style={{ padding: '2rem', fontFamily: "'Fira Code', monospace", color: 'var(--success)' }}>
        {log.map((line, i) => (
          <div key={i} style={{ marginBottom: '0.75rem', opacity: 0.8 }}>
            {line.startsWith('>') ? <span className="text-primary">{line}</span> : line}
          </div>
        ))}
        <div className="blinking-cursor" style={{ display: 'inline-block', width: '10px', height: '20px', backgroundColor: 'var(--success)', marginTop: '0.5rem' }}></div>
      </div>
    );
  }

  return (
    <div className="fade-in-up">
      {children}
    </div>
  );
};

export default TransitionWrapper;
