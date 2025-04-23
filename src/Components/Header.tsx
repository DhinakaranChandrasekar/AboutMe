import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './components.css';

const Header: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.body.className = isDark ? 'dark-theme' : 'light-theme';
  }, [isDark]);

  return (
    <header className="header">
      <div className="logo">
        <img 
          src={`${process.env.PUBLIC_URL}/DK.png`} 
          alt="DK Logo" 
          className={`logo-img ${isDark ? '' : 'dark-logo'}`} 
        />
      </div>

      <nav className="nav-menu">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        {/* <Link to="/projects" className="nav-link">Projects</Link> */}
        <Link to="/resume" className="nav-link">Resume</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>

      <button 
        className="theme-toggle" 
        onClick={() => setIsDark(!isDark)}
        aria-label="Toggle Theme"
      >
        {isDark ? 'Light' : 'Dark'}
      </button>
    </header>
  );
};

export default Header;
