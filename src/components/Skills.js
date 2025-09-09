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

/*SoftSkills Icons*/
import { ReactComponent as Adaptability } from '../assets/icons/adaptability.svg';
import { ReactComponent as ProblemSolving } from '../assets/icons/problem-solving.svg';
import { ReactComponent as Creativity } from '../assets/icons/creativity.svg';
import { ReactComponent as TeamWork } from '../assets/icons/teamwork.svg';

/*Tools Icons*/
import { ReactComponent as AWS } from '../assets/icons/aws.svg';
import { ReactComponent as VsCode } from '../assets/icons/vscode.svg';
import { ReactComponent as GoogleCloud } from '../assets/icons/google-cloud.svg';


const Skills = () => {
  useEffect(() => {
    if (window.innerWidth > 768) {
      const sr = ScrollReveal({
        distance: '150px',
        duration: 800,
        delay: 200,
        reset: true, 
        easing: 'linear',
      });

      const skills = [
        { id: 'html', origin: 'left', delay: 800 },
        { id: 'css', origin: 'left', delay: 600 },
        { id: 'javascript', origin: 'left', delay: 400 },
        { id: 'react', origin: 'left', delay: 200 },
        { id: 'java', origin: 'right', delay: 200 },
        { id: 'python', origin: 'right', delay: 400 },
        { id: 'nodejs', origin: 'right', delay: 600 },
        { id: 'aws', origin: 'right', delay: 800 },
        { id: 'mongodb', origin: 'right', delay: 1000 },
        { id: 'mysql', origin: 'right', delay: 1200 },
        { id: 'creativity', origin: 'right', delay: 200 },
        { id: 'problemSolving', origin: 'right', delay: 400 },
        { id: 'adaptability', origin: 'right', delay: 600 },
        { id: 'teamWork', origin: 'right', delay: 800 },
        { id: 'aws2', origin: 'left', delay: 600 },
        { id: 'vscode', origin: 'left', delay: 400 },
        { id: 'googleCloud', origin: 'left', delay: 200 },
      ];
    
      skills.forEach(skill => {
        sr.reveal(`#${skill.id}`, { origin: skill.origin, delay: skill.delay });
      });
    }
  }, []);

  return (
    <section id="skills" className="skills">
      <div className="skills-panel">
        <h3>Skills</h3>
        <div className="skills-column">
          <div className="frontend-column skills-box">
            <h4>Frontend</h4>
            <ul className="frontend-skills">
              <li id= "html" aria-label="HTML">
                <Html title="HTML" width="24" height="24" alt="HTML Icon" className="tech-icon" />
                HTML
              </li>
              <li id= "css" aria-label="CSS">
                <Css title="CSS" width="24" height="24" alt="CSS Icon" className="tech-icon" />
                CSS
              </li>
              <li id= "javascript" aria-label="JavaScript">
                <JavaScript title="JavaScript" width="24" height="24" alt="JavaScript Icon" className="tech-icon" />
                JavaScript
              </li>
              <li id= "react" aria-label="React">
                <ReactIcon title="REACT" width="24" height="24" alt="React Icon" className="tech-icon" />
                React
              </li>
            </ul>
          </div>
          <div className="softSkills-column skills-box">
            <h4>Soft-Skills</h4>
            <ul className="soft-skills">
              <li id= "creativity" aria-label="Creativity">
                <Creativity title="Creativity" width="24" height="24" alt="Creativity Icon" className="tech-icon" />
                Creativity
              </li>
              <li id= "problemSolving" aria-label="Problem-Solving">
                <ProblemSolving title="ProblemSolving" width="24" height="24" alt="ProblemSolving Icon" className="tech-icon" />
                Problem-Solving
              </li>
              <li id= "adaptability" aria-label="Adaptability">
                <Adaptability title="Adaptability" width="24" height="24" alt="Adaptability Icon" className="tech-icon" />
                Adaptability
              </li>
              <li id= "teamWork" aria-label="TeamWork">
                <TeamWork title="Team-Work" width="24" height="24" alt="Team-Work Icon" className="tech-icon" />
                Team-Work
              </li>
            </ul>
          </div>
          <div className="tools-column skills-box">
            <h4>Tools</h4>
            <ul className="tools-skills">
              <li id= "aws2" aria-label="HTML">
                <AWS title="AWS" width="24" height="24" alt="AWS Icon" className="tech-icon" />
                AWS Cloud
              </li>
              <li id= "vscode" aria-label="CSS">
                <VsCode title="VSCode" width="24" height="24" alt="VSCode Icon" className="tech-icon" />
                VSCode
              </li>
              <li id= "googleCloud" aria-label="JavaScript">
                <GoogleCloud title="GoogleCloud" width="24" height="24" alt="Google Cloud Icon" className="tech-icon" />
                Google Cloud
              </li>
              
            </ul>
          </div>
          <div className="backend-column skills-box">
            <h4>Backend</h4>
            <ul className="backend-skills">
              <li id= "java" aria-label="Java">
                <Java title="Java" width="24" height="24" alt="Java Icon" className="tech-icon" />
                Java
              </li>
              <li id= "python" aria-label="Python">
                <Python title="Python" width="24" height="24" alt="Python Icon" className="tech-icon" />
                Python
              </li>
              <li id= "nodejs" aria-label="NodeJs">
                <Nodejs title="NodeJs" width="24" height="24" alt="Nodejs Icon" className="tech-icon" />
                Nodejs
              </li>
              <li id= "aws" aria-label="AWS">
                <Aws title="AWS" width="24" height="24" alt="AWS Icon" className="tech-icon" />
                AWS
              </li>
              <li id= "mongodb" aria-label="MongoDB">
                <Mongodb title="MongoDB" width="24" height="24" alt="Mongodb Icon" className="tech-icon" />
                Mongodb
              </li>
              <li id= "mysql" aria-label="MySQL">
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
