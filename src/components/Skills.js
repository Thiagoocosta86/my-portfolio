import React, {useState}from 'react';

const Skills = () => {

  const [currentPanel, setCurrentPanel] = useState(0);

  
  const handleNextPanel = () => {
    setCurrentPanel((prevPanel) => (prevPanel === 0 ? 1 : 0));
  };
  
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skills-column">
          <h3>Soft Skills</h3>
          <ul className="soft-skills">
            <li>Team Player</li>
            <li>Resilient</li>
            <li>Hard-Worker</li>
            <li>#</li>
            <li>#</li>
          </ul>
        </div>
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
