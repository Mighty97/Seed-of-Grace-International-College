import React from 'react';
import { 
  Facebook, Twitter, Instagram, Linkedin, Youtube, 
  Mail, Phone, MapPin, ArrowRight, Heart 
} from 'lucide-react';
import './Footer.css'

export function Footer() {
  const quickLinks = [
    { name: 'Home', url: '#home' },
    { name: 'About Us', url: '#about' },
    { name: 'Admissions', url: '#admissions' },
    { name: 'Academic Programs', url: '#programs' },
    { name: 'Contact Us', url: '#contact' }
  ];

  const resources = [
    { name: 'Student Portal', url: '#portal' },
    { name: 'Parent Portal', url: '#parent-portal' },
    { name: 'Staff Portal', url: '#staff-portal' },
    { name: 'Library', url: '#library' },
    { name: 'Career Guidance', url: '#career' }
  ];

  const academics = [
    { name: 'Primary School', url: '#primary' },
    { name: 'Secondary School', url: '#secondary' },
    { name: 'Curriculum', url: '#curriculum' },
    { name: 'Extracurricular', url: '#extracurricular' },
    { name: 'Results', url: '#results' }
  ];

  return (
    <>
     
      <footer className="footer">
        <div className="footer-content">
          {/* Footer Top */}
          <div className="footer-top">
            <div className="footer-grid">
              {/* About Section */}
              <div className="footer-about">
                <div className="footer-logo">
                  <div className="logo-icon">S</div>
                  <div className="logo-text">
                    <span className="logo-name">Seed of Grace</span>
                    <span className="logo-subtitle">International College</span>
                  </div>
                </div>
                <p className="footer-description">
                  Empowering minds and shaping futures through excellence in education. 
                  We are committed to providing world-class education that prepares students 
                  for a bright and successful future.
                </p>
                <div className="footer-contact-info">
                  <div className="contact-item">
                    <MapPin size={18} className="contact-icon" />
                    <span>123 Education Street, Learning District</span>
                  </div>
                  <div className="contact-item">
                    <Phone size={18} className="contact-icon" />
                    <span>+1 (234) 567-8900</span>
                  </div>
                  <div className="contact-item">
                    <Mail size={18} className="contact-icon" />
                    <span>info@seedofgrace.edu</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="footer-section">
                <h4 className="footer-title">Quick Links</h4>
                <div className="footer-links">
                  {quickLinks.map((link, index) => (
                    <a key={index} href={link.url} className="footer-link">
                      <ArrowRight size={14} className="link-arrow" />
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Academics */}
              <div className="footer-section">
                <h4 className="footer-title">Academics</h4>
                <div className="footer-links">
                  {academics.map((link, index) => (
                    <a key={index} href={link.url} className="footer-link">
                      <ArrowRight size={14} className="link-arrow" />
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Resources */}
              <div className="footer-section">
                <h4 className="footer-title">Resources</h4>
                <div className="footer-links">
                  {resources.map((link, index) => (
                    <a key={index} href={link.url} className="footer-link">
                      <ArrowRight size={14} className="link-arrow" />
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer Middle - Newsletter */}
          <div className="footer-middle">
            <div className="newsletter-section">
              <div className="newsletter-text">
                <h3 className="newsletter-title">Stay Updated</h3>
                <p className="newsletter-description">
                  Subscribe to our newsletter for the latest news and updates
                </p>
              </div>
              <div className="newsletter-form">
                <input 
                  type="email" 
                  className="newsletter-input" 
                  placeholder="Enter your email address"
                />
                <button className="newsletter-btn">
                  Subscribe
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="copyright">
              <span>© 2025 Seed of Grace International College. Made with</span>
              <span>All rights reserved.</span>
            </div>
            <div className="social-links">
              <a href="#" className="social-icon">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-icon">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-icon">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-icon">
                <Linkedin size={20} />
              </a>
              <a href="#" className="social-icon">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};