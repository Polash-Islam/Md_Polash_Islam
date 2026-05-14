import React, { useState } from 'react';
import { cvData } from '../data';
import { Send, Terminal } from 'lucide-react';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // This is a visual placeholder. In a real app, you'd send the data to an API like Formspree.
    alert('Message sent successfully! (Visual Demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section" style={{ display: 'flex', flexDirection: 'column', gap: '3rem', maxWidth: '1200px', margin: '0 auto' }}>
      
      <div className="page-header" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.5rem', fontWeight: 'bold' }}>
        <span style={{ color: 'var(--primary)' }}>polash@portfolio:~$</span>
        <span style={{ color: 'var(--primary)' }}>Contact</span>
      </div>

      <div className="contact-description card" style={{ padding: '2rem', border: '1px solid rgba(255,255,255,0.05)' }}>
        <p style={{ color: '#8b949e', lineHeight: '1.6', fontSize: '1.05rem', margin: 0 }}>
          Have a project in mind or want to discuss competitive programming? Feel free to reach out through any of the channels below, or drop me a message using the form.
        </p>
      </div>

      <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
        
        {/* Left Column: Social Links */}
        <div className="social-column" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Let's Connect Box */}
          <div className="card fade-in-up" style={{ padding: '2rem', backgroundColor: 'rgba(22, 27, 34, 0.5)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <Terminal size={18} color="var(--primary)" />
              <h3 style={{ color: 'var(--primary)', margin: 0, fontSize: '1.25rem' }}>Let's Connect!</h3>
            </div>
            <p style={{ color: '#8b949e', lineHeight: '1.6', marginBottom: '2rem' }}>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of something great. The best way to reach me is via LinkedIn – feel free to send a connection request with a message!
            </p>
            <a 
              href={`https://linkedin.com/in/${cvData.personalInfo.linkedin}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn"
              style={{ backgroundColor: 'var(--primary)', color: '#0d1117', padding: '0.75rem 1.5rem', borderRadius: '4px', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', textDecoration: 'none' }}
            >
              <FaLinkedin size={18} /> Connect on LinkedIn
            </a>
          </div>

          <div className="command-header" style={{ color: 'var(--primary)', fontSize: '1.1rem', fontFamily: "'Fira Code', monospace" }}>
            $ cat social_links.txt
          </div>
          
          <div className="social-links-list fade-in-up" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', animationDelay: '0.1s' }}>
            
            <a href={`https://linkedin.com/in/${cvData.personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="card social-card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.25rem', textDecoration: 'none', transition: 'border-color 0.2s', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <FaLinkedin size={24} color="#0a66c2" />
              <div>
                <div style={{ color: '#8b949e', fontSize: '0.85rem', marginBottom: '0.25rem', fontFamily: "'Fira Code', monospace" }}>$ linkedin</div>
                <div style={{ color: '#c9d1d9' }}>linkedin.com/in/{cvData.personalInfo.linkedin}</div>
              </div>
            </a>

            <a href={`https://github.com/${cvData.personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="card social-card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.25rem', textDecoration: 'none', transition: 'border-color 0.2s', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <FaGithub size={24} color="#ffffff" />
              <div>
                <div style={{ color: '#8b949e', fontSize: '0.85rem', marginBottom: '0.25rem', fontFamily: "'Fira Code', monospace" }}>$ github</div>
                <div style={{ color: '#c9d1d9' }}>github.com/{cvData.personalInfo.github}</div>
              </div>
            </a>

            <a href={`https://facebook.com/${cvData.personalInfo.facebook}`} target="_blank" rel="noopener noreferrer" className="card social-card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.25rem', textDecoration: 'none', transition: 'border-color 0.2s', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <FaFacebook size={24} color="#1877f2" />
              <div>
                <div style={{ color: '#8b949e', fontSize: '0.85rem', marginBottom: '0.25rem', fontFamily: "'Fira Code', monospace" }}>$ facebook</div>
                <div style={{ color: '#c9d1d9' }}>facebook.com/{cvData.personalInfo.facebook}</div>
              </div>
            </a>

          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="form-column fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="command-header" style={{ marginBottom: '1.5rem', color: 'var(--primary)', fontSize: '1.1rem', fontFamily: "'Fira Code', monospace" }}>
            $ nano message.txt
          </div>
          
          <div className="card" style={{ padding: '2rem', backgroundColor: 'rgba(22, 27, 34, 0.5)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              <div className="form-group">
                <label htmlFor="name" style={{ display: 'block', color: 'var(--primary)', marginBottom: '0.5rem', fontFamily: "'Fira Code', monospace", fontSize: '0.9rem' }}>name:</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name" 
                  required
                  style={{ width: '100%', padding: '0.8rem 1rem', backgroundColor: 'rgba(13, 17, 23, 0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', color: '#c9d1d9', outline: 'none', fontFamily: "'Fira Code', monospace" }}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" style={{ display: 'block', color: 'var(--primary)', marginBottom: '0.5rem', fontFamily: "'Fira Code', monospace", fontSize: '0.9rem' }}>email:</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com" 
                  required
                  style={{ width: '100%', padding: '0.8rem 1rem', backgroundColor: 'rgba(13, 17, 23, 0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', color: '#c9d1d9', outline: 'none', fontFamily: "'Fira Code', monospace" }}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" style={{ display: 'block', color: 'var(--primary)', marginBottom: '0.5rem', fontFamily: "'Fira Code', monospace", fontSize: '0.9rem' }}>message:</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..." 
                  required
                  rows="6"
                  style={{ width: '100%', padding: '0.8rem 1rem', backgroundColor: 'rgba(13, 17, 23, 0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', color: '#c9d1d9', outline: 'none', fontFamily: "'Fira Code', monospace", resize: 'vertical' }}
                />
              </div>

              <button 
                type="submit" 
                className="btn"
                style={{ backgroundColor: 'transparent', color: 'var(--primary)', border: '1px solid var(--primary)', padding: '0.8rem 1.5rem', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.2s', marginTop: '1rem' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 215, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <Send size={18} /> Send Message
              </button>

            </form>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
        .social-card:hover {
          border-color: var(--primary) !important;
          transform: translateY(-2px);
        }
        input:focus, textarea:focus {
          border-color: var(--primary) !important;
          box-shadow: 0 0 0 1px var(--primary);
        }
      `}</style>
    </section>
  );
};

export default Contact;
