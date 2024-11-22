import React from 'react';

import { ReactComponent as EmailIcon } from "../assets/icons/logo-email.svg";
import { ReactComponent as LinkedInIcon2 } from "../assets/icons/logo-linkedin.svg";
import { ReactComponent as WhatsappIcon } from "../assets/icons/logo-whatsapp.svg";

const Contact = () => {
  return (
    <section className="contact">
      <h3>Contact</h3>
      <div className='social-media-links'>
          <ul className="social__profile">
              <a className="social__profile-link LinkedInIcon" href="https://www.linkedin.com/in/thiago-costa-04443bb9/">
                  <LinkedInIcon2 title="Linkedin" width="32" height="32" alt="LinkedIn" />
              </a>
              <a className="social__profile-link EmailIcon" href="mailto:thiagodeodacosta@gmail.com">
                  <EmailIcon width="32" title="Email" height="32" alt="Email" />
              </a>
              <a className="social__profile-link WhatsappIcon" href="https://api.whatsapp.com/send?phone=353871720557&text=Hello, more information!">
                  <WhatsappIcon title="Whatsapp" width="32" height="32" alt="Whatsapp"/>
              </a>
          </ul>
        </div>
    </section>
  );
};

export default Contact;
