import React, { useState } from 'react';
import { ReactComponent as Html } from '../assets/icons/html-colour.svg';
import { ReactComponent as Css } from '../assets/icons/css-colour.svg';
import { ReactComponent as JavaScript } from '../assets/icons/javascript-colour.svg';
import { ReactComponent as ReactIcon } from '../assets/icons/react-colour.svg';


const Skills = () => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <section className="skills">
      {/* Tab Navigation */}
      <div className="tab-header">
        <button
          className={`tab-button ${currentTab === 0 ? 'active' : ''}`}
          onClick={() => setCurrentTab(0)}
        >
          Skills
        </button>
        <button
          className={`tab-button ${currentTab === 1 ? 'active' : ''}`}
          onClick={() => setCurrentTab(1)}
        >
          Certificates
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {currentTab === 0 && (
          <div className="skills-panel">
            <h3>Skills</h3>
            <div className="skills-column hard-skills-panel">
              <div className="frontend-column">
                <h4>Frontend</h4>
                <ul className="frontend-skills">
                  <li>
                    <Html title="HTML" width="24" height="24" alt="HTML Icon" className="tech-icon" />
                    HTML
                    <div className="knowledge-level">
                      <div className="progress-bar" style={{ width: '85%' }}></div>
                    </div>
                  </li>
                  <li>
                    <Css title="CSS" width="24" height="24" alt="CSS Icon" className="tech-icon" />
                      CSS
                    <div className="knowledge-level">
                      <div className="progress-bar" style={{ width: '45%' }}></div>
                    </div>
                  </li>
                  <li>
                    <JavaScript title="JavaScript" width="24" height="24" alt="JavaScript Icon" className="tech-icon" />
                      JavaScript
                    <div className="knowledge-level">
                      <div className="progress-bar" style={{ width: '40%' }}></div>
                    </div>
                  </li>
                  <li>
                    <ReactIcon title="React" width="24" height="24" alt="React Icon" className="tech-icon" />
                      React
                    <div className="knowledge-level">
                      <div className="progress-bar" style={{ width: '35%' }}></div>
                    </div>
                  </li>
                  
                </ul>
              </div>

              <div className="backend-column">
                <h4>Backend</h4>
                <ul className="backend-skills">
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                  <li>MySQL</li>
                  <li>PHP</li>
                  <li>Java</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {currentTab === 1 && (
          <div className="certificates-panel">
            <h3>Certificates</h3>
            {/* Certificates details to be added later */}
            <p>List certifications.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
