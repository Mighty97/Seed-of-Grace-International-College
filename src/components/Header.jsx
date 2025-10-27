import React, { useState } from 'react';
import { Link } from 'react-router'
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
          <div className="logo-section" >
              <Link to="/"> <img className="logo" src={SchoolLogo} alt="" /></Link>
            <div className="brand-text"> Seed of Grace <br />  <span className='intl'> International College </span></div>
          </div>

          <nav>
            <ul className="nav-links">
              <li><Link to='/' >Home</Link></li>
              <li><Link to="about">About Us</Link></li>
              <li><Link to="admission">Admission</Link></li>
              <li><Link to='Portal'>E-Portal</Link></li>
              <li><Link to="blog">Blog</Link></li>
              <li><Link to="gallery">Gallery</Link></li>
              <li><Link to="contact">Contact</Link></li>
            </ul>
          </nav>

          <div className="button-group">
            <button className="btn btn-primary"><Link to='admission'> Apply Now </Link></button>
            <button className="btn btn-secondary"><Link to='E-Portal'> E-Portal</Link></button>
          </div>

          <button className="mobile-menu-btn" onClick={toggleMenu}>
            <Menu size={28} />
          </button>
        </div>

        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-header">
            <div className="logo-section">
              <Link to='/'><img className="logo" src={SchoolLogo} alt="" /></Link>
              <div className="brand-text">Seed of Grace Intl. College</div>
            </div>
            <button className="mobile-menu-btn" onClick={toggleMenu}>
              <X size={28} />
            </button>
          </div>

          <ul className="mobile-nav-links">
            <li><Link to="home" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="about" onClick={toggleMenu}>About Us</Link></li>
            <li><Link to="admission" onClick={toggleMenu}>Admission</Link></li>
            <li><Link to='Portal' onClick={toggleMenu} >E-Portal</Link></li>
            <li><Link to="blog" onClick={toggleMenu} >Blog</Link></li>
            <li><Link to="gallery" onClick={toggleMenu}>Gallery</Link></li>
            <li><Link to="contact" onClick={toggleMenu} >Contact</Link></li>
            
          </ul>

          <div className="mobile-button-group">
            <button className="btn btn-primary" onClick={toggleMenu}><Link to='admission'> Apply Now </Link></button>
            <button className="btn btn-secondary" onClick={toggleMenu}><Link to='E-Portal'> E-Portal</Link></button>
          </div>
        </div>
      </header>
    </>
  );
};

