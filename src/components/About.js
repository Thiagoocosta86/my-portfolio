import React from 'react';
import {aboutText} from '../data/dataText';

import profilePic from "../assets/img/profile-pic.png";


const About = () => {
  return (
    <section  className="hero">
      <div className='container'>
        <div className="profile__container">
        
            
          <div className="about-text" dangerouslySetInnerHTML={{ __html: aboutText }} />
          
          <div className="profile-pic">
              
              <img src={profilePic} alt="Another Profile of Me" title="Me" width="612" height="612" />
          </div>
          
        </div>
        
      </div>    
    </section>
  );
};

export default About;
