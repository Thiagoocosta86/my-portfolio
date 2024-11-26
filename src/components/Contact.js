import React from 'react';

import { ReactComponent as EmailIcon } from "../assets/icons/logo-email.svg";
import { ReactComponent as LinkedInIcon2 } from "../assets/icons/logo-linkedin.svg";
import { ReactComponent as WhatsappIcon } from "../assets/icons/logo-whatsapp.svg";

const Contact = () => {
  return (
    <section id="contact"className="contact">
      <h3>Contact</h3>
      <div className='social-media-links'>
          <ul className="social__profile">
              <a className="social__profile-link LinkedInIcon" href="https://www.linkedin.com/in/thiago-costa-04443bb9/" target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon2 title="Linkedin" width="32" height="32" alt="LinkedIn" />
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
