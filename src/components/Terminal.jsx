import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { cvData } from '../data';

const Terminal = () => {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState('');
  const bodyRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const welcomeText = 'Welcome to polash-islam-os v1.0.0 🚀';
    let currentText = '';
    let i = 0;
    
    const typingInterval = setInterval(() => {
      if (i < welcomeText.length) {
        currentText += welcomeText.charAt(i);
        setHistory([{ type: 'output', content: currentText }]);
        i++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setHistory(prev => [...prev, { type: 'output', content: "Type 'help' to see available commands." }]);
        }, 300);
      }
    }, 40);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToBottom = () => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const handleCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    let output = '';

    if (trimmedCmd === '') {
      return;
    }

    switch (trimmedCmd) {
      case 'help':
        output = `Available commands:
- Navigation: home, about, projects, experience, achievements, education
- Info: whoami, skills, contact
- System: clear`;
        break;
      case 'whoami':
      case 'about':
        output = `Navigating to about...`;
        setTimeout(() => navigate('/about'), 500);
        break;
      case 'skills':
        output = `Languages: ${cvData.skills.languages.join(', ')}\nTechnologies: ${cvData.skills.technologies.join(', ')}`;
        break;
      case 'contact':
        output = `Email: ${cvData.personalInfo.email}\nPhone: ${cvData.personalInfo.phone}\nLinkedIn: ${cvData.personalInfo.linkedin}\nGitHub: ${cvData.personalInfo.github}`;
        break;
      case 'clear':
        setHistory([]);
        return;
      case 'home':
        output = `Navigating to home...`;
        setTimeout(() => navigate('/'), 500);
        break;
      case 'projects':
      case 'experience':
      case 'achievements':
      case 'education':
        output = `Navigating to ${trimmedCmd}...`;
        setTimeout(() => navigate(`/${trimmedCmd}`), 500);
        break;
      default:
        output = `Command not found: ${trimmedCmd}. Type 'help' to see available commands.`;
    }

    setHistory(prev => [
      ...prev,
      { type: 'input', content: cmd },
      { type: 'output', content: output }
    ]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <div className="terminal-wrapper">
      <div className="terminal-header">
        <div className="terminal-dots">
          <div className="dot red"></div>
          <div className="dot yellow"></div>
          <div className="dot green"></div>
        </div>
        <div className="terminal-title">polash@portfolio:~</div>
      </div>
      <div className="terminal-body" ref={bodyRef} onClick={() => document.getElementById('terminal-input').focus()}>
        {history.map((line, index) => (
          <div key={index} className="terminal-line">
            {line.type === 'input' ? (
              <div>
                <span className="text-yellow">guest@polash-os:~$</span> {line.content}
              </div>
            ) : (
              <div style={{ whiteSpace: 'pre-wrap' }} className="text-muted">{line.content}</div>
            )}
          </div>
        ))}
        <div className="terminal-input-line">
          <span className="text-yellow">guest@polash-os:~$</span>
          <input
            id="terminal-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="terminal-input"
            autoComplete="off"
            spellCheck="false"
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
