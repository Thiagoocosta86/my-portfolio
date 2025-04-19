import React, { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

import {awsMyPortfolio, carCrashWebApp, s3Config, iamConfig} from '../data/dataText';
import {myPortfolio} from '../data/dataText';

import carCrashWebAppPic from "../assets/img/carCrashWebAppPic.png";
import myPortfolioPic from "../assets/img/my-portfolioMobile.png";
import wineShop from "../assets/img/wineShop.png";





import { ReactComponent as GithubIcon2 } from "../assets/icons/logo-github.svg";
import { ReactComponent as VideoIcon } from "../assets/icons/videoIcon.svg";
import { ReactComponent as TopIcon } from "../assets/icons/arrowhead-up.svg";
import { ReactComponent as CodingImg } from "../assets/img/underConstruction.svg";
import { ReactComponent as InfoIcon } from "../assets/icons/info.svg";

const Projects = () => {

    const extra1_1 = "https://myportfolio-img.s3.eu-west-1.amazonaws.com/AWSDeploymentArchitecture.png";
    const extra1_2 = "https://myportfolio-img.s3.eu-west-1.amazonaws.com/Amplify-hostingDomain-thiagodeodacosta.png";
    const extra1_3 = "https://myportfolio-img.s3.eu-west-1.amazonaws.com/AmplifyOverview-myportfolio.png";
    const extra1_4 = "https://myportfolio-img.s3.eu-west-1.amazonaws.com/Route53Dashboard-thiagodeodacosta.png";
    const extra1_5 = "https://myportfolio-img.s3.eu-west-1.amazonaws.com/my-portfoliocvS3.png";

    const extra2_1 = "https://myportfolio-img.s3.eu-west-1.amazonaws.com/currentS3Buckets.png";
    const extra2_2 = "https://myportfolio-img.s3.eu-west-1.amazonaws.com/my-portfoliocvS3.png";
    const extra2_3 = "https://myportfolio-img.s3.eu-west-1.amazonaws.com/myportfolio-img.png";
    const extra2_4 = "https://myportfolio-img.s3.eu-west-1.amazonaws.com/S3bucketPolicy.png";

    const extra3_1 = "https://myportfolio-img.s3.eu-west-1.amazonaws.com/IAM-Dashbord.png";
    const extra3_2 = "https://myportfolio-img.s3.eu-west-1.amazonaws.com/IAM-UserConfig.png";
    const extra3_3 = "https://myportfolio-img.s3.eu-west-1.amazonaws.com/IAM-UserConfig2.png";
    const extra3_4 = "https://myportfolio-img.s3.eu-west-1.amazonaws.com/IAM-Users.png";
    

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
                            <a href="https://drive.google.com/file/d/1cToCMIpF-VTHQT4VXrwnvZ4-PB8BgOIW/view?usp=drive_link"
                                class="projects__button button button__small VideoIcon" target="_blank" rel="noopener noreferrer">
                                <VideoIcon width="40" title="VideoIcon" height="40" alt="VideoIcon" />
                            </a>
                        </div>
                    </div>
                    <div className="projects__description">
                        <p dangerouslySetInnerHTML={{ __html: myPortfolio }} />
                    </div>
                </article>
                <article id="project3" class="projects__card">
                    <img src={wineShop} alt="codingImg" title="" width="128" height="128" />
                    <div className="top-icon">
                        <TopIcon width="30" height="30" title="" alt="Top Icon" />
                    </div>
                    <div class="projects__modal">
                        <div>
                            <span class="projects__subtitle">Under Construction</span>
                            <h3 class="projects__title">WineShop Retail / ecommerce System</h3>
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
                            <span class="projects__subtitle">Under Construction</span>
                            <h3 class="projects__title">Coming Soon</h3>
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
        <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true, dynamicBullets: true }}
      modules={[Navigation, Pagination]}
      className="projects-swiper"
    >
      {/* Slide 1 - AWS Cloud Deployment */}
      <SwiperSlide>
        <div>
          <h5>AWS Cloud Deployment - My Portfolio</h5>
          <article id="extra1" className="projects__extras">
            <button className="Info-button" title= "Info" onClick={() => setIsModalOpen(true)}>
              <InfoIcon />
            </button>
            <img src={extra1_1} alt="AWS Deployment Architecture" />
            <img src={extra1_2} alt="Amplify Hosting Domain" />
            <img src={extra1_3} alt="Amplify Overview" />
            <img src={extra1_4} alt="Route 53 Dashboard" />
            <img src={extra1_5} alt="Portfolio CV on S3" />

            {isModalOpen && (
              <div className="modal active">
                <button className="modal-close" onClick={() => setIsModalOpen(false)}>X</button>
                <p dangerouslySetInnerHTML={{ __html: awsMyPortfolio }} />
              </div>
            )}
          </article>
        </div>
      </SwiperSlide>

      {/* Slide 2 - AWS S3 Config */}
      <SwiperSlide>
        <div>
          <h5>AWS Cloud S3 Bucket Configurations</h5>
          <article id="extra2" className="projects__extras">
            <button className="Info-button" title= "Info" onClick={() => setIsModalOpen(true)}>
              <InfoIcon />
            </button>
            <img src={extra2_1} alt="AWS currentS3Buckets" />
            <img src={extra2_2} alt="AWS my-portfoliocvS3" />
            <img src={extra2_3} alt="AWS myportfolio-img" />
            <img src={extra2_4} alt="AWS S3bucketPolicy" />
            

            {isModalOpen && (
              <div className="modal active">
                <button className="modal-close" onClick={() => setIsModalOpen(false)}>X</button>
                <p dangerouslySetInnerHTML={{ __html: s3Config }} />
              </div>
            )}
          </article>
        </div>
      </SwiperSlide>

      {/* Slide 2 - AWS IAM Config */}
      <SwiperSlide>
        <div>
          <h5>AWS Cloud IAM Configurations</h5>
          <article id="extra3" className="projects__extras">
            <button className="Info-button" title= "Info" onClick={() => setIsModalOpen(true)}>
              <InfoIcon />
            </button>
            <img src={extra3_1} alt="AWS IAM-Dashbord" />
            <img src={extra3_2} alt="IAM-UserConfig" />
            <img src={extra3_3} alt="IAM-UserConfig2" />
            <img src={extra3_4} alt="IAM-Users" />
            

            {isModalOpen && (
              <div className="modal active">
                <button className="modal-close" onClick={() => setIsModalOpen(false)}>X</button>
                <p dangerouslySetInnerHTML={{ __html: iamConfig }} />
              </div>
            )}
          </article>
        </div>
      </SwiperSlide>
    </Swiper>
             
        </div>
       

    </section>
  );
};

export default Projects;
