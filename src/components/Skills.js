import React, { useState } from 'react';
import { ReactComponent as NextIcon } from '../assets/icons/forwardIcon.svg';
import { ReactComponent as BackIcon } from '../assets/icons/backIcon.svg';

const Skills = () => {
  const [currentPanel, setCurrentPanel] = useState(0);

  const handleNextPanel = () => {
    setCurrentPanel((prevPanel) => (prevPanel === 0 ? 1 : 0));
  };

  const handlePreviousPanel = () => {
    setCurrentPanel((prevPanel) => (prevPanel === 1 ? 0 : 1));
  };

  return (
    <section className="skills">
      <div className="skills-header">
        <div className="icon-wrapper left">
          <BackIcon className="icon back-icon" onClick={handlePreviousPanel} width="32" height="32" title="Back" />
        </div>

        <h2>Skills</h2>

        <div className="icon-wrapper right">
          <NextIcon className="icon next-icon" onClick={handleNextPanel} width="32" height="32" title="Next" />
        </div>
      </div>

      <div className="skills-container">
        {currentPanel === 0 && (
          <div className="skills-column soft-skills-panel">
            <h3>Soft Skills</h3>
            <ul className="soft-skills">
              <li>Team Player</li>
              <li>Resilient</li>
              <li>Hard-Worker</li>
              <li>#</li>
              <li>#</li>
            </ul>
          </div>
        )}

        {currentPanel === 1 && (
          <div className="skills-column hard-skills-panel">
            <div className="frontend-column">
              <h3>Frontend</h3>
              <ul className="frontend-skills">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Vue.js</li>
              </ul>
            </div>

            <div className="backend-column">
              <h3>Backend</h3>
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
        )}
      </div>
    </section>
  );
};

export default Skills;
