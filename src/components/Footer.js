import React, { useEffect, useState } from "react";

import { ReactComponent as EmailIcon } from "../assets/icons/logo-email.svg";
import { ReactComponent as LinkedInIcon2 } from "../assets/icons/logo-linkedin.svg";
import { ReactComponent as WhatsappIcon } from "../assets/icons/logo-whatsapp.svg";
import { ReactComponent as GithubIcon2 } from "../assets/icons/logo-github.svg";
import arrowUp from "../assets/icons/arrow-up.svg";

const Footer = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.querySelector(".skills");
      const footerSection = document.querySelector("footer");
      const scrollTop = window.scrollY;
      const skillsTop = skillsSection.offsetTop;
      const footerTop = footerSection.offsetTop;

      // Show the button only between Skills and Footer
      if (scrollTop >= skillsTop && scrollTop <= footerTop) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
    
    <footer className="footer">
        {showArrow && (
        <button onClick={scrollToTop} aria-label="Scroll to top">
          <img className="arrow-up-btn" src={arrowUp} width="32" height="32" alt="arrow-up" />
        </button>
        )}
        <div id='contact' className="floating-contact">
          <div>
          <ul className="contact-links">
              <a className="social__profile-link LinkedInIcon" href="https://www.linkedin.com/in/thiagodeodacosta" aria-label="Visit my LinkedIn profile" target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon2 title="Linkedin" width="32" height="32" alt="LinkedIn" />
              </a>
              <a className="social__profile-link GithubIcon" href="https://github.com/Thiagoocosta86" aria-label="Visit my GitHub profile"target="_blank" rel="noopener noreferrer">
                  <GithubIcon2 width="32" title="GitHub" height="32" alt="GitHub" />
              </a>
              <a className="social__profile-link EmailIcon" href="mailto:thiagodeodacosta@gmail.com" aria-label="Get in touch by email" target="_blank" rel="noopener noreferrer">
                <EmailIcon className="email-icon" width="32" height="32" title="thiagodeodacosta@gmail.com"  alt="Email" />
              </a>
              <a className="social__profile-link WhatsappIcon" href="https://api.whatsapp.com/send?phone=353871720557&text=Hello, more information!" aria-label="Get in touch by Whatsapp" target="_blank" rel="noopener noreferrer">
                  <WhatsappIcon title="Whatsapp" width="32" height="32" alt="Whatsapp"/>
              </a>
          </ul>
          </div>
          
        </div>
      <p>&copy; Thiago Costa 2025</p>
    </footer>
    </>
  );
};

export default Footer;
