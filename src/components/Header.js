import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleResize = () => {
    const isMobile = window.innerWidth <= 768;
    setIsMobileView(isMobile);
    if (!isMobile) {
      setIsMenuOpen(false);
    }
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header >
      <div id="home" className="logo">
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
          {isMenuOpen && isMobileView && (
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
