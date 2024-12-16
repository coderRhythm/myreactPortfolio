import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import resumepdf from'../assets/resume.pdf'
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="navbar-container">
        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? (
            <span className="close-icon">&times;</span>
          ) : (
            <span className="hamburger-icon">&#9776;</span>
          )}
        </div>

        {/* Navigation Bar */}
        <nav>
          <h1>My Site</h1>

          {/* Side Menu */}
          <div className={`nav-inner-container ${isMenuOpen ? 'show-menu' : ''}`}>
            <Link to="/" className="Link" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/about" className="Link" onClick={toggleMenu}>
              About
            </Link>
            {/* <Link to = "/contact" className = "Link"> Contact us form to event</Link> */}
            <Link to="/projects" className="Link" onClick={toggleMenu}>
              Projects
            </Link>
            <Link to="/contact" className="Link" onClick={toggleMenu}>
              Contact Me
            </Link>
          </div>

          {/* CV Download Button */}
          <a
          href={resumepdf}
          // Correctly references the public folder
  download='Rhythm_sethiya_resume' // Renames the file during download
  className="project-button" // Applies the button styling
>
  Download CV
</a>

        </nav>
      </header>
    </div>
  );
};

export default Navbar;
