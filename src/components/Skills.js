import React, { useState, useEffect } from 'react';

/*Frontend Icons*/
import { ReactComponent as Html } from '../assets/icons/html-colour.svg';
import { ReactComponent as Css } from '../assets/icons/css-colour.svg';
import { ReactComponent as JavaScript } from '../assets/icons/javascript-colour.svg';
import { ReactComponent as ReactIcon } from '../assets/icons/react-colour.svg';

/*Backend Icons*/
import { ReactComponent as Java } from '../assets/icons/java-colour.svg';
import { ReactComponent as Python } from '../assets/icons/python-colour.svg';
import { ReactComponent as Nodejs } from '../assets/icons/nodejs-colour.svg';
import { ReactComponent as Aws } from '../assets/icons/aws-colour.svg';
import { ReactComponent as Mongodb } from '../assets/icons/mongodb-colour.svg';
import { ReactComponent as Mysql } from '../assets/icons/mysql-colour.svg';

const Skills = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="skills" className="skills">
      <div className="skills-panel">
        <h3>Skills</h3>
        <div className="skills-column hard-skills-panel">
          <div className="frontend-column">
            <h4>Frontend</h4>
            <ul className="frontend-skills">
              <li>
                <Html title="HTML" width="24" height="24" alt="HTML Icon" className="tech-icon" />
                HTML
                {!isMobile && (
                  <div className="knowledge-level">
                    <div className="progress-bar" style={{ width: '85%' }} data-percentage="85%"></div>
                  </div>
                )}
              </li>
              <li>
                <Css title="CSS" width="24" height="24" alt="CSS Icon" className="tech-icon" />
                CSS
                {!isMobile && (
                  <div className="knowledge-level">
                    <div className="progress-bar" style={{ width: '45%' }} data-percentage="45%"></div>
                  </div>
                )}
              </li>
              <li>
                <JavaScript title="CSS" width="24" height="24" alt="JavaScript Icon" className="tech-icon" />
                JavaScript
                {!isMobile && (
                  <div className="knowledge-level">
                    <div className="progress-bar" style={{ width: '40%' }} data-percentage="40%"></div>
                  </div>
                )}
              </li>
              <li>
                <ReactIcon title="CSS" width="24" height="24" alt="React Icon" className="tech-icon" />
                React
                {!isMobile && (
                  <div className="knowledge-level">
                    <div className="progress-bar" style={{ width: '35%' }} data-percentage="35%"></div>
                  </div>
                )}
              </li>
              {/* Repeat for other skills */}
            </ul>
          </div>

          <div className="backend-column">
            <h4>Backend</h4>
            <ul className="backend-skills">
              <li>
                <Java title="Java" width="24" height="24" alt="Java Icon" className="tech-icon" />
                Java
                {!isMobile && (
                  <div className="knowledge-level">
                    <div className="progress-bar" style={{ width: '55%' }} data-percentage="55%"></div>
                  </div>
                )}
              </li>
              <li>
                <Python title="Java" width="24" height="24" alt="Python Icon" className="tech-icon" />
                Python
                {!isMobile && (
                  <div className="knowledge-level">
                    <div className="progress-bar" style={{ width: '55%' }} data-percentage="55%"></div>
                  </div>
                )}
              </li>
              <li>
                <Nodejs title="Java" width="24" height="24" alt="Nodejs Icon" className="tech-icon" />
                Nodejs
                {!isMobile && (
                  <div className="knowledge-level">
                    <div className="progress-bar" style={{ width: '35%' }} data-percentage="35%"></div>
                  </div>
                )}
              </li>
              <li>
                <Aws title="Java" width="24" height="24" alt="AWS Icon" className="tech-icon" />
                AWS
                {!isMobile && (
                  <div className="knowledge-level">
                    <div className="progress-bar" style={{ width: '67%' }} data-percentage="67%"></div>
                  </div>
                )}
              </li>
              <li>
                <Mongodb title="Java" width="24" height="24" alt="Mongodb Icon" className="tech-icon" />
                Mongodb
                {!isMobile && (
                  <div className="knowledge-level">
                    <div className="progress-bar" style={{ width: '50%' }} data-percentage="50%"></div>
                  </div>
                )}
              </li>
              <li>
                <Mysql title="Java" width="24" height="24" alt="MySql Icon" className="tech-icon" />
                Mysql
                {!isMobile && (
                  <div className="knowledge-level">
                    <div className="progress-bar" style={{ width: '52%' }} data-percentage="52%"></div>
                  </div>
                )}
              </li>
              {/* Repeat for other skills */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
