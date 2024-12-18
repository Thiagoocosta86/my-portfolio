import React from 'react';
import {aboutText} from '../data/dataText';

import profilePic2 from "../assets/img/profile-pic.png";


const About = () => {
  return (
    <section  className="hero">
      <div className='container'>
        <div className="profile__container">
        <div className="about-text">
            
            <div className="about-text" dangerouslySetInnerHTML={{ __html: aboutText }} />
          </div> 
          <div className="profile-pic">
              
              <img src={profilePic2} alt="Another Profile of Me" title="Me" width="612" height="612" />
          </div>
          
        </div>
        
      </div>    
    </section>
  );
};

export default About;
