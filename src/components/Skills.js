import React, { useState } from 'react';

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
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Vue.js</li>
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
