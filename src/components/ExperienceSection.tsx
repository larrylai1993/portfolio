import React, { useState } from 'react';
import { experiences } from '../data/experiences';
import './ExperienceSection.css'; // We'll create a specific CSS file for this to keep it modular

const ExperienceSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section id="experience" className="experience-section" aria-label="Work experience">
      <h2>experience</h2>
      
      <div className="timeline-container">
        {experiences.map((exp) => (
          <div 
            key={exp.id} 
            className={`timeline-item ${activeId === exp.id ? 'active' : ''}`}
            onMouseEnter={() => setActiveId(exp.id)}
            onMouseLeave={() => setActiveId(null)}
          >
            {/* Left: Date & Marker */}
            <div className="timeline-left">
              <div className="timeline-date">{exp.date}</div>
              <div className="timeline-marker"></div>
              <div className="timeline-connector"></div>
            </div>

            {/* Right: Content Card */}
            <div className="timeline-content">
              <div className="job-header">
                <div>
                  <h3 className="job-title">{exp.title}</h3>
                  <div className="job-company">
                    @{exp.company} <span className="mobile-date"> // {exp.date}</span>
                  </div>
                </div>
              </div>

              <div className="job-description">
                <span className="comment-syntax">// {exp.description}</span>
              </div>

              {/* Impact Grid / Architecture Blocks */}
              {exp.achievements.length > 0 && (
                <div className="impact-grid">
                  {exp.achievements.map((ach, i) => (
                    <div key={i} className="impact-card">
                      <div className="impact-header">
                        <span className="method-name">{ach.title}</span><span className="paren">()</span>
                      </div>
                      <p className="impact-desc">{ach.description}</p>
                      {ach.metric && (
                        <div className="impact-metric">
                          <span className="metric-arrow">=&gt;</span> <span className="metric-value">{ach.metric}</span>
                        </div>
                      )}
                      {ach.tags && (
                        <div className="impact-tags">
                          {ach.tags.map(t => <span key={t} className="mini-tag">{t}</span>)}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Tech Stack Footer */}
              <div className="job-tech">
                <span className="keyword-const">const</span> <span className="variable-stack">stack</span> = [
                {exp.tech.map((t, i) => (
                  <span key={i} className="tech-item">
                    "{t}"{i < exp.tech.length - 1 ? ',' : ''}
                  </span>
                ))}
                ]
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
