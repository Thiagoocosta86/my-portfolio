import React from 'react';

import { ReactComponent as EmailIcon } from "../assets/icons/logo-email.svg";
import { ReactComponent as LinkedInIcon2 } from "../assets/icons/logo-linkedin.svg";
import { ReactComponent as WhatsappIcon } from "../assets/icons/logo-whatsapp.svg";
import { ReactComponent as GithubIcon2 } from "../assets/icons/logo-github.svg";

const Contact = () => {
  return (
    <section id="contact"className="contact">
      
      <div className="floating-contact">
          <ul className="contact-links">
              <a className="social__profile-link LinkedInIcon" href="https://www.linkedin.com/in/thiagodeodacosta" target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon2 title="Linkedin" width="32" height="32" alt="LinkedIn" />
              </a>
              <a className="social__profile-link GithubIcon" href="https://github.com/Thiagoocosta86" target="_blank" rel="noopener noreferrer">
                  <GithubIcon2 width="32" title="GitHub" height="32" alt="GitHub" />
              </a>
              <a className="social__profile-link EmailIcon" href="mailto:thiagodeodacosta@gmail.com" target="_blank" rel="noopener noreferrer">
                <EmailIcon className="email-icon" width="32" title="thiagodeodacosta@gmail.com" height="32" alt="Email" />
              </a>
              <a className="social__profile-link WhatsappIcon" href="https://api.whatsapp.com/send?phone=353871720557&text=Hello, more information!" target="_blank" rel="noopener noreferrer">
                  <WhatsappIcon title="Whatsapp" width="32" height="32" alt="Whatsapp"/>
              </a>
          </ul>
        </div>
    </section>
  );
};

export default Contact;
