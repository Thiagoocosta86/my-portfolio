import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="logo">
        <svg viewBox="0 0 1000 160">
          <text x="50%" y="50%" dy=".32em" textAnchor="middle" className="text-body">
            THIAGO COSTA
          </text>
        </svg>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
      <nav id="navbar" className={isMenuOpen ? 'open' : ''}>
        <ul>
          {isMenuOpen && (
              <li><a href="#home">Home</a></li>
            )}
          <li><a href="#skills">Skills</a></li>
          <li><a href="#certificates">Certificates</a></li>
          <li><a href="#projects">Projects</a></li>
          {isMenuOpen && (
              <li><a href="#contact">Contact</a></li>
            )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
