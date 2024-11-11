import React from 'react';

import codingImg from "../assets/img/coding.jpg";
import { ReactComponent as GithubIcon } from "../assets/icons/logo-github2.svg";

const Projects = () => {
  return (
    <section className="projects">
      <h3>Projects</h3>
      <div class="projects__content grid filters__active " data-content id="projects">
            <article class="projects__card">
                <img src={codingImg} alt="codingImg" title="" width="128" height="128" />
                <div class="projects__modal">
                    <div>
                        <span class="projects__subtitle">Web</span>
                        <h3 class="projects__title">Menu Calculator</h3>
                        <a href="https://github.com/Thiagoocosta86/ca3ClientSideProgramming.git"
                            class="projects__button button button__small">
                            <GithubIcon width="40" title="GitHub" height="40" alt="GitHub" />
                        </a>
                    </div>
                </div>
                <div className="projects__description">
                    <p>###</p>
                </div>
            </article>
            <article class="projects__card">
                <img src={codingImg} alt="codingImg" title="" width="128" height="128" />
                <div class="projects__modal">
                    <div>
                        <span class="projects__subtitle">Java</span>
                        <h3 class="projects__title">RentACar</h3>
                        <a href="https://github.com/Thiagoocosta86/RentACar.git"
                            class="projects__button button button__small">
                            <GithubIcon width="40" title="GitHub" height="40" alt="GitHub" />
                        </a>
                    </div>
                </div>
                <div className="projects__description">
                    <p>###</p>
                </div>
            </article>
            <article class="projects__card">
                <img src={codingImg} alt="codingImg" title="" width="128" height="128" />
                <div class="projects__modal">
                    <div>
                        <span class="projects__subtitle">XML-Node.js - ServerSide</span>
                        <h3 class="projects__title">ssp-ca3</h3>
                        <a href="https://github.com/Thiagoocosta86/ssp-ca3.git"
                            class="projects__button button button__small">
                            <GithubIcon width="40" title="GitHub" height="40" alt="GitHub" />
                        </a>
                    </div>
                </div>
                <div className="projects__description">
                    <p>###</p>
                </div>
            </article>
            <article class="projects__card">
                <img src={codingImg} alt="codingImg" title="" width="128" height="128" />
                <div class="projects__modal">
                    <div>
                        <span class="projects__subtitle">Web</span>
                        <h3 class="projects__title">Electricity-Bill Calculator</h3>
                        <a href="https://github.com/tahrodriguess/Eletricity-Bill.git"
                            class="projects__button button button__small">
                            <GithubIcon width="40" title="GitHub" height="40" alt="GitHub" />
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
