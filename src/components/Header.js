import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <svg viewBox='0 0 1000 160'>
          <text x="50%" y="50%" dy=".32em" textAnchor="middle" className="text-body">
            THIAGO COSTA
          </text>
        </svg>
        
      </div>
      <nav id="navbar">
        <ul>
          
          <li><a href="#skills">Skills</a></li>
          <li><a href="#certificates">Certificates</a></li>
          <li><a href="#projects">Projects</a></li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;
