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


import awsFoundations from "../assets/img/aws-academy-cloud-foundations.png";
import awsGetStarted from "../assets/img/aws-getting-started-with-cloud-ops.png";
import awsGetStartedCompute from "../assets/img/aws-getting-started-with-compute.png";
import awsGetStartedNetworking from "../assets/img/aws-getting-started-with-networking.png";
import awsGetStartedSecurity from "../assets/img/aws-getting-started-with-security.png";
import awsGetStartedServerless from "../assets/img/aws-getting-started-with-serverless.png";
import awsGetStartedStorage from "../assets/img/aws-getting-started-with-storage.png";
import awsIntroCloud101 from "../assets/img/aws-introduction-to-cloud-101.png";
import awsFoundationsCertificate from "../assets/img/AWS-graduate-Academy-Cloud-Foundations.png";




const Skills = () => {
  const [currentTab, setCurrentTab] = useState(0);

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash === 'certificates') {
      setCurrentTab(1);
    } else {
      setCurrentTab(0);
    }
  }, []);    

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
      <div id="skills" className={`tab-content ${currentTab === 0 ? 'active' : ''}`}>
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
                      <div className="progress-bar" style={{ width: '85%' }} data-percentage="85%"></div>
                    </div>
                  </li>
                  <li>
                    <Css title="CSS" width="24" height="24" alt="CSS Icon" className="tech-icon" />
                      CSS
                    <div className="knowledge-level">
                      <div className="progress-bar" style={{ width: '45%' }} data-percentage="45%"></div>
                    </div>
                  </li>
                  <li>
                    <JavaScript title="JavaScript" width="24" height="24" alt="JavaScript Icon" className="tech-icon" />
                      JavaScript
                    <div className="knowledge-level">
                      <div className="progress-bar" style={{ width: '40%' }} data-percentage="40%"></div>
                    </div>
                  </li>
                  <li>
                    <ReactIcon title="React" width="24" height="24" alt="React Icon" className="tech-icon" />
                      React
                    <div className="knowledge-level">
                      <div className="progress-bar" style={{ width: '35%' }} data-percentage="35%"></div>
                    </div>
                  </li>
                  
                </ul>
              </div>

              <div className="backend-column">
                <h4>Backend</h4>
                <ul className="backend-skills">
                  <li>
                    <Java title="Java" width="24" height="24" alt="Java Icon" className="tech-icon" />
                      Java
                    <div className="knowledge-level">
                      <div className="progress-bar" style={{ width: '55%' }} data-percentage="55%"></div>
                    </div>
                  </li>
                  <li>
                    <Python title="Python" width="24" height="24" alt="Python Icon" className="tech-icon" />
                      Python
                    <div className="knowledge-level">
                      <div className="progress-bar" style={{ width: '55%' }} data-percentage="55%"></div>
                    </div>
                  </li>
                  <li>
                    <Nodejs title="NodeJS" width="24" height="24" alt="NodeJS Icon" className="tech-icon" />
                      NodeJS
                    <div className="knowledge-level">
                      <div className="progress-bar" style={{ width: '35%' }} data-percentage="35%"></div>
                    </div>
                  </li>
                  <li>
                    <Aws title="AWS" width="24" height="24" alt="AWS Icon" className="tech-icon" />
                      AWS
                    <div className="knowledge-level">
                      <div className="progress-bar" style={{ width: '67%' }} data-percentage="67%"></div>
                    </div>
                  </li>
                  <li>
                    <Mongodb title="MongoDB" width="24" height="24" alt="MongoDB Icon" className="tech-icon" />
                      MongoDB
                    <div className="knowledge-level">
                      <div className="progress-bar" style={{ width: '50%' }} data-percentage="50%"></div>
                    </div>
                  </li>
                  <li>
                    <Mysql title="MySQL" width="24" height="24" alt="MySQL Icon" className="tech-icon" />
                      MySQL
                    <div className="knowledge-level">
                      <div className="progress-bar" style={{ width: '52%' }} data-percentage="52%"></div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
        </div>
        <div id="certificates" className={`tab-content ${currentTab === 1 ? 'active' : ''}`}>
          {currentTab === 1 && (
            <div className="certificates-panel">
              <h3>Certificates</h3>
              
              <ul className="certificates">
                <li>
                  <a href="https://www.credly.com/badges/5c975e2a-5829-4b5f-9fd0-81e33e00a7d5/public_url" target="_blank" rel="noopener noreferrer"> 
                  <img src={awsFoundations} alt="AWS Foundations" title="AWS Foundations" width="128" height="128" /></a>
                </li>
                <li>
                  <a href="https://www.credly.com/badges/ea5a1b5c-d9d6-400e-8e9a-d5ccbc792683/public_url" target="_blank" rel="noopener noreferrer">
                  <img src={awsGetStarted} alt="AWS Getting Started Cloud Ops" title="AWS Getting Started with Cloud Operations" width="128" height="128" /></a>
                </li>
                <li>
                  <a href="https://www.credly.com/badges/18bde2d6-8ec9-4129-8f07-055e143c25f3/public_url" target="_blank" rel="noopener noreferrer">
                  <img src={awsGetStartedCompute} alt="AWS Getting Started Compute" title="AWS Getting Started with Compute" width="128" height="128" /></a>
                </li>
                <li>
                  <a href="https://www.credly.com/badges/81de56b8-be2e-4f18-8105-c65296abe6ed/public_url" target="_blank" rel="noopener noreferrer">
                  <img src={awsGetStartedNetworking} alt="AWS Get Started Networking" title="AWS Getting Started with Networking" width="128" height="128" /></a>
                </li>
                <li>
                  <a href="https://www.credly.com/badges/c23da6a1-9d7f-40d4-8d06-f6b922ef92a6/public_url" target="_blank" rel="noopener noreferrer">
                  <img src={awsGetStartedSecurity} alt="AWS Get Started Security" title="AWS Getting Started with Security" width="128" height="128" /></a>
                </li>
                <li>
                <a href="https://www.credly.com/badges/64b4c12f-8146-405f-9e28-8303c78f5240/public_url" target="_blank" rel="noopener noreferrer">
                  <img src={awsGetStartedServerless} alt="AWS Get Started Serverless" title="AWS Getting Started with Serverless" width="128" height="128" /></a>
                </li>
                <li>
                  <a href="https://www.credly.com/badges/1221e47b-ae36-4275-8a42-3962a528afb1/public_url" target="_blank" rel="noopener noreferrer">
                  <img src={awsGetStartedStorage} alt="AWS Get Started Storage" title="AWS Getting Started with Storage" width="128" height="128" /></a>
                </li>
                <li>
                  <a href="https://www.credly.com/badges/51091672-5109-43af-9e85-efdcf9ac4274/public_url" target="_blank" rel="noopener noreferrer">
                  <img src={awsIntroCloud101} alt="AWS Intro to Cloud 101" title="AWS Introduction to Cloud 101" width="128" height="128" /></a>
                </li>
                <li>
                  <a href="https://www.credly.com/badges/5c975e2a-5829-4b5f-9fd0-81e33e00a7d5/public_url" target="_blank" rel="noopener noreferrer">
                  <img src={awsFoundationsCertificate} alt="AWS Foundations Certificate" title="AWS Foundations Certificate" width="200" height="150" /></a>
                </li>
              </ul>
            </div>
          )}
        </div>
    </section>
  );
};

export default Skills;
