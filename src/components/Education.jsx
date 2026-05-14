import React from 'react';
import { cvData } from '../data';

const Education = () => {
  return (
    <section id="education" className="section">
      <h2 className="section-header">Education</h2>
      <div className="cards-list">
        {cvData.education.map((edu, index) => (
          <div key={index} className="card">
            <div className="card-header">
              <div>
                <h3 className="card-title">{edu.institution}</h3>
                <div className="card-subtitle">{edu.degree}</div>
              </div>
              <div className="card-date">{edu.period}</div>
            </div>
            <p className="card-desc">CGPA: <span className="text-primary">{edu.cgpa}</span></p>
          </div>
        ))}
      </div>

      <h2 className="section-header" style={{ marginTop: '3rem' }}>Publications</h2>
      <div className="card">
        <ul className="bullet-list">
          {cvData.publications.map((pub, index) => (
            <li key={index}>{pub}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Education;
