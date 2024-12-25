import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

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
  useEffect(() => {
    const sr = ScrollReveal({
      
      distance: '50px',
      duration: 800,
      delay: 200,
      reset: true, 
    });

    sr.reveal('#html', { origin: 'left', delay: 200 });
    sr.reveal('#css', { origin: 'left', delay: 400 });
    sr.reveal('#javascript', { origin: 'left', delay: 600 });
    sr.reveal('#react', { origin: 'left', delay: 800 });
    sr.reveal('#java', { origin: 'right', delay: 200 });
    sr.reveal('#python', { origin: 'right', delay: 400 });
    sr.reveal('#nodejs', { origin: 'right', delay: 600 });
    sr.reveal('#aws', { origin: 'right', delay: 800 });
    sr.reveal('#mongodb', { origin: 'right', delay: 1000 });
    sr.reveal('#mysql', { origin: 'right', delay: 1200 });
  }, []);

  return (
    <section id="skills" className="skills">
      <div className="skills-panel">
        <h3>Skills</h3>
        <div className="skills-column">
          <div className="frontend-column">
            <h4>Frontend</h4>
            <ul className="frontend-skills">
              <li id= "html">
                <Html title="HTML" width="24" height="24" alt="HTML Icon" className="tech-icon" />
                HTML
              </li>
              <li id= "css">
                <Css title="CSS" width="24" height="24" alt="CSS Icon" className="tech-icon" />
                CSS
              </li>
              <li id= "javascript">
                <JavaScript title="JavaScript" width="24" height="24" alt="JavaScript Icon" className="tech-icon" />
                JavaScript
              </li>
              <li id= "react">
                <ReactIcon title="REACT" width="24" height="24" alt="React Icon" className="tech-icon" />
                React
              </li>
            </ul>
          </div>

          <div className="backend-column">
            <h4>Backend</h4>
            <ul className="backend-skills">
              <li id= "java">
                <Java title="Java" width="24" height="24" alt="Java Icon" className="tech-icon" />
                Java
              </li>
              <li id= "python">
                <Python title="Python" width="24" height="24" alt="Python Icon" className="tech-icon" />
                Python
              </li>
              <li id= "nodejs">
                <Nodejs title="NodeJs" width="24" height="24" alt="Nodejs Icon" className="tech-icon" />
                Nodejs
              </li>
              <li id= "aws">
                <Aws title="AWS" width="24" height="24" alt="AWS Icon" className="tech-icon" />
                AWS
              </li>
              <li id= "mongodb">
                <Mongodb title="MongoDB" width="24" height="24" alt="Mongodb Icon" className="tech-icon" />
                Mongodb
              </li>
              <li id= "mysql">
                <Mysql title="MySql" width="24" height="24" alt="MySql Icon" className="tech-icon" />
                Mysql
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
