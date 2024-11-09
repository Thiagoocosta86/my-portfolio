import React from 'react';
import profilePic1 from "../assets/img/profile-pic1.png";
import profilePic2 from "../assets/img/profile-pic2.png";
import { ReactComponent as GithubIcon } from "../assets/icons/logo-github.svg";
import { ReactComponent as LinkedInIcon } from "../assets/icons/logo-linkedin.svg";
import { ReactComponent as WhatsappIcon } from "../assets/icons/logo-whatsapp.svg";

const About = () => {
  return (
    <section className="hero">
      <div className='container'>
        <div className="profile__container">
          <div className="profile-pic">
              <img src={profilePic1} alt="Profile of Me" title="Me" width="612" height="612" />
              <img src={profilePic2} alt="Another Profile of Me" title="Me" width="612" height="612" />
          </div>
          <div className="about-text">
            <h2>About Me</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div> 
        </div>
        <div className='social-media-links'>
          <ul className="social__profile">
              <a className="social__profile-link LinkedInIcon" href="https://www.linkedin.com/in/thiago-costa-04443bb9/">
                  <LinkedInIcon title="Linkedin" width="32" height="32" alt="LinkedIn" />
              </a>
              <a className="social__profile-link GithubIcon" href="https://github.com/Thiagoocosta86">
                  <GithubIcon width="32" title="GitHub" height="32" alt="GitHub" />
              </a>
              <a className="social__profile-link WhatsappIcon" href="https://api.whatsapp.com/send?phone=353871720557&text=Hello, more information!">
                  <WhatsappIcon title="Whatsapp" width="32" height="32" alt="Whatsapp"/>
              </a>
          </ul>
        </div>
      </div>    
    </section>
  );
};

export default About;
