import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import SchoolLogo from '../assets/sgiclogo.jpg'
import './Header.css'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="logo-section">
              <link to="/"> <img className="logo" src={SchoolLogo} alt="" /></link>
            <div className="brand-text"> Seed of Grace <br />  <span className='intl'> International College </span></div>
          </div>

          <nav>
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#admission">Admission</a></li>
              <li><a href="#portal">E-Portal</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>

          <div className="button-group">
            <button className="btn btn-primary">Apply Now</button>
            <button className="btn btn-secondary">E-Portal</button>
          </div>

          <button className="mobile-menu-btn" onClick={toggleMenu}>
            <Menu size={28} />
          </button>
        </div>

        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-header">
            <div className="logo-section">
              <img className="logo" src={SchoolLogo} alt="" />
              <div className="brand-text">Seed of Grace Intl. College</div>
            </div>
            <button className="mobile-menu-btn" onClick={toggleMenu}>
              <X size={28} />
            </button>
          </div>

          <ul className="mobile-nav-links">
            <li><a href="#home" onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" onClick={toggleMenu}>About Us</a></li>
            <li><a href="#admission" onClick={toggleMenu}>Admission</a></li>
            <li><a href="#portal" onClick={toggleMenu} >E-Portal</a></li>
            <li><a href="#blog" onClick={toggleMenu} >Blog</a></li>
            <li><a href="#gallery" onClick={toggleMenu}>Gallery</a></li>
            <li><a href="#contact" onClick={toggleMenu} >Contact</a></li>
            
          </ul>

          <div className="mobile-button-group">
            <button className="btn btn-primary" onClick={toggleMenu}>Apply Now</button>
            <button className="btn btn-secondary" onClick={toggleMenu}>E-Portal</button>
          </div>
        </div>
      </header>
    </>
  );
};

