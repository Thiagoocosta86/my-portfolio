import React, { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';

import {awsMyPortfolio, carCrashWebApp} from '../data/dataText';
import {myPortfolio} from '../data/dataText';

import carCrashWebAppPic from "../assets/img/carCrashWebAppPic.png";
import myPortfolioPic from "../assets/img/my-portfolioMobile.png";

import extra1_1 from "../assets/img/Amplify-generalSettings-myportfolio.png";
import extra1_2 from "../assets/img/Amplify-githubBranchSettings-myportfolio.png";
import extra1_3 from "../assets/img/Amplify-hostingDomain-thiagodeodacosta.png";
import extra1_4 from "../assets/img/AmplifyOverview-myportfolio.png";
import extra1_5 from "../assets/img/Route53Dashboard-thiagodeodacosta.png";

import { ReactComponent as GithubIcon2 } from "../assets/icons/logo-github.svg";
import { ReactComponent as VideoIcon } from "../assets/icons/videoIcon.svg";
import { ReactComponent as TopIcon } from "../assets/icons/arrowhead-up.svg";
import { ReactComponent as CodingImg } from "../assets/img/underConstruction.svg";
import { ReactComponent as BurgerIcon } from "../assets/icons/burger-menu.svg";

const Projects = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    useEffect(() => {
        if (window.innerWidth > 768) {
            const sr = ScrollReveal({
                
                distance: '350px',
                duration: 1000,
                delay: 200,
                reset: true,
                easing: 'ease', 
            });

            sr.reveal('#project1', { origin: 'left', delay: 1000 });
            sr.reveal('#project2', { origin: 'left', delay: 750 });
            sr.reveal('#project3', { origin: 'left', delay: 500 });
            sr.reveal('#project4', { origin: 'left', delay: 250 });
        }
    }, []);
  return (
    <section id="projects">
      <h3>Projects</h3>
        <div className="projects">
            <div class="projects__content grid filters__active " data-content id="projects">
                <article id="project1" class="projects__card">
                    <img src={carCrashWebAppPic} alt="codingImg" title="" width="128" height="128" />
                    <div className="top-icon">
                        <TopIcon width="30" height="30" title="CarCrashWebApp" alt="Top Icon" />
                    </div>
                    <div class="projects__modal">
                        <div class="project-type">
                            <span class="projects__subtitle">Web/ML</span>
                            <h3 class="projects__title">Car Crash Fault Prediction</h3>
                            <a href="https://github.com/Thiagoocosta86/carCrashFaultPredictionApp.git"
                                class="projects__button button button__small GithubIcon2" target="_blank" rel="noopener noreferrer">
                                <GithubIcon2 width="40" title="GitHub" height="40" alt="GitHub" />
                            </a>
                            <a href="https://drive.google.com/file/d/1iDp7LFQcnPfIPn-PFvAaPqY9eaxacPrt/view?usp=drive_link"
                                class="projects__button button button__small VideoIcon" target="_blank" rel="noopener noreferrer">
                                <VideoIcon width="40" title="VideoIcon" height="40" alt="VideoIcon" />
                            </a>
                        </div>
                    </div>
                    <div className="projects__description">
                        <p dangerouslySetInnerHTML={{ __html: carCrashWebApp }} />
                    </div>
                </article>
                <article id="project2" class="projects__card">
                    <img src={myPortfolioPic} alt="codingImg" title="" width="128" height="128" />
                    <div className="top-icon">
                        <TopIcon width="30" height="30" title="" alt="Top Icon" />
                    </div>
                    <div class="projects__modal">
                        <div>
                            <span class="projects__subtitle">React.js/AWS-Amplify/GitHub</span>
                            <h3 class="projects__title">My Portfolio</h3>
                            <a href="https://github.com/Thiagoocosta86/my-portfolio.git"
                                class="projects__button button button__small GithubIcon2" target="_blank" rel="noopener noreferrer">
                                <GithubIcon2 width="40" title="GitHub" height="40" alt="GitHub" />
                            </a>
                        </div>
                    </div>
                    <div className="projects__description">
                        <p dangerouslySetInnerHTML={{ __html: myPortfolio }} />
                    </div>
                </article>
                <article id="project3" class="projects__card">
                    <CodingImg className="coding-img" title="Under Construction" width="128" height="128" />
                    <div className="top-icon">
                        <TopIcon width="30" height="30" title="" alt="Top Icon" />
                    </div>
                    <div class="projects__modal">
                        <div>
                            <span class="projects__subtitle"></span>
                            <h3 class="projects__title">Under Construction</h3>
                            <a href="https://github.com/Thiagoocosta86"
                                class="projects__button button button__small GithubIcon2" target="_blank" rel="noopener noreferrer">
                                <GithubIcon2 width="40" title="GitHub" height="40" alt="GitHub" />
                            </a>
                        </div>
                    </div>
                    <div className="projects__description">
                        <p>Under Construction</p>
                    </div>
                </article>
                <article id="project4" class="projects__card">
                    <CodingImg className="coding-img" title="Under Construction" width="128" height="128" />
                    <div className="top-icon">
                        <TopIcon width="30" height="30" title="" alt="Top Icon" />
                    </div>
                    <div class="projects__modal">
                        <div>
                            <span class="projects__subtitle"></span>
                            <h3 class="projects__title">Under Construction</h3>
                            <a href="https://github.com/Thiagoocosta86"
                                class="projects__button button button__small GithubIcon2" target="_blank" rel="noopener noreferrer">
                                <GithubIcon2 width="40" title="GitHub" height="40" alt="GitHub" />
                            </a>
                        </div>
                    </div>
                    <div className="projects__description">
                        <p>Under Construction</p>
                    </div>
                </article>
            </div>
        </div>
      <h4>Extras</h4>
        <div className='extras_cards'>
            <div>
                <h5>AWS Cloud Deployment - My Portfolio</h5>
                <article id="extra1" className="projects__extras">
                    
                    <button className="burger-button" onClick={() => setIsModalOpen(true)}>
                        <BurgerIcon />
                    </button>
                    <img src={extra1_1} alt="codingImg" title="" />
                    <img src={extra1_2} alt="codingImg" title="" />
                    <img src={extra1_3} alt="codingImg" title="" />
                    <img src={extra1_4} alt="codingImg" title="" />
                    <img src={extra1_5} alt="codingImg" title="" />
                    {isModalOpen && (
                    <div className="modal active">
                        <button className="modal-close" onClick={() => setIsModalOpen(false)}>X</button>
                        <p dangerouslySetInnerHTML={{ __html: awsMyPortfolio }} />
                    </div>
                    )}
                
                </article>
            </div>
            {/* 
            <article id="extra2" className="projects__extras">
                <button className="burger-button" onClick={() => setIsModalOpen(true)}>
                    <BurgerIcon />
                </button>
                <img src={extra2_1} alt="codingImg" title="" />
                <img src={extra2_2} alt="codingImg" title="" />
                <img src={extra2_3} alt="codingImg" title="" />
                <img src={extra2_4} alt="codingImg" title="" />
                <img src={extra2_5} alt="codingImg" title="" />
                {isModalOpen && (
                <div className="modal active">
                    <button className="modal-close" onClick={() => setIsModalOpen(false)}>X</button>
                    <p>These slides showcase different Amplify(AWS) and Route53(AWS) settings and configurations for my portfolio.</p>
                </div>
                )}
            </article>
            */}
             
        </div>
       

    </section>
  );
};

export default Projects;
