import React from 'react';

import {carCrashWebApp} from '../data/dataText';


import carCrashWebAppPic from "../assets/img/carCrashWebAppPic.png";
import { ReactComponent as GithubIcon2 } from "../assets/icons/logo-github.svg";
import { ReactComponent as TopIcon } from "../assets/icons/arrowhead-up.svg";
import { ReactComponent as CodingImg } from "../assets/img/underConstruction.svg";

const Projects = () => {
  return (
    <section id="projects"className="projects">
      <h3>Projects</h3>
      <div class="projects__content grid filters__active " data-content id="projects">
            <article class="projects__card">
                <img src={carCrashWebAppPic} alt="codingImg" title="" width="128" height="128" />
                <div className="top-icon">
                    <TopIcon width="30" height="30" title="" alt="Top Icon" />
                </div>
                <div class="projects__modal">
                    <div>
                        <span class="projects__subtitle">Web/ML</span>
                        <h3 class="projects__title">Car Crash Fault Prediction</h3>
                        <a href="https://github.com/Thiagoocosta86/carCrashFaultPredictionApp.git"
                            class="projects__button button button__small GithubIcon2" target="_blank" rel="noopener noreferrer">
                            <GithubIcon2 width="40" title="GitHub" height="40" alt="GitHub" />
                        </a>
                    </div>
                </div>
                <div className="projects__description">
                    <p dangerouslySetInnerHTML={{ __html: carCrashWebApp }} />
                </div>
            </article>
            <article class="projects__card">
                <CodingImg className="coding-img" title="Under Construction" width="128" height="128" />
                <div className="top-icon">
                    <TopIcon width="30" height="30" title="" alt="Top Icon" />
                </div>
                <div class="projects__modal">
                    <div>
                        <span class="projects__subtitle">Java</span>
                        <h3 class="projects__title">RentACar</h3>
                        <a href="https://github.com/Thiagoocosta86/RentACar.git"
                            class="projects__button button button__small GithubIcon2" target="_blank" rel="noopener noreferrer">
                            <GithubIcon2 width="40" title="GitHub" height="40" alt="GitHub" />
                        </a>
                    </div>
                </div>
                <div className="projects__description">
                    <p>###</p>
                </div>
            </article>
            <article class="projects__card">
                <CodingImg className="coding-img" title="Under Construction" width="128" height="128" />
                <div className="top-icon">
                    <TopIcon width="30" height="30" title="" alt="Top Icon" />
                </div>
                <div class="projects__modal">
                    <div>
                        <span class="projects__subtitle">XML-Node.js - ServerSide</span>
                        <h3 class="projects__title">ssp-ca3</h3>
                        <a href="https://github.com/Thiagoocosta86/ssp-ca3.git"
                            class="projects__button button button__small GithubIcon2" target="_blank" rel="noopener noreferrer">
                            <GithubIcon2 width="40" title="GitHub" height="40" alt="GitHub" />
                        </a>
                    </div>
                </div>
                <div className="projects__description">
                    <p>###</p>
                </div>
            </article>
            <article class="projects__card">
                <CodingImg className="coding-img" title="Under Construction" width="128" height="128" />
                <div className="top-icon">
                    <TopIcon width="30" height="30" title="" alt="Top Icon" />
                </div>
                <div class="projects__modal">
                    <div>
                        <span class="projects__subtitle">Web</span>
                        <h3 class="projects__title">Electricity-Bill Calculator</h3>
                        <a href="https://github.com/tahrodriguess/Eletricity-Bill.git"
                            class="projects__button button button__small GithubIcon2" target="_blank" rel="noopener noreferrer">
                            <GithubIcon2 width="40" title="GitHub" height="40" alt="GitHub" />
                        </a>
                    </div>
                </div>
                <div className="projects__description">
                    <p>###</p>
                </div>
            </article>
      </div>
    </section>
  );
};

export default Projects;
