import React from 'react';

const Skills = () => {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skills-column">
          <h3>Frontend</h3>
          <ul className="frontend-skills">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Vue.js</li>
          </ul>
        </div>
        <div className="skills-column">
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
    </section>
  );
};

export default Skills;
