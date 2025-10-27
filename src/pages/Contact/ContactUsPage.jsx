import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, Send, Facebook, 
  Twitter, Instagram, Linkedin, MessageCircle, Globe
} from 'lucide-react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ScrollToTop } from '../../components/ScrollUpButton';
import './ContactUsPage.css'

export function ContactPage () {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Education Street", "Learning District, City 12345", "United States"],
      color: "#f56565"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (234) 567-8900", "+1 (234) 567-8901", "+1 (234) 567-8902"],
      color: "#48bb78"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@seedofgrace.edu", "admissions@seedofgrace.edu", "support@seedofgrace.edu"],
      color: "#4299e1"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 8:00 AM - 5:00 PM", "Saturday: 9:00 AM - 2:00 PM", "Sunday: Closed"],
      color: "#9f7aea"
    }
  ];

  const departments = [
    { name: "Admissions", email: "admissions@seedofgrace.edu", phone: "+1 (234) 567-8900" },
    { name: "Academic Affairs", email: "academics@seedofgrace.edu", phone: "+1 (234) 567-8901" },
    { name: "Finance", email: "finance@seedofgrace.edu", phone: "+1 (234) 567-8902" },
    { name: "Student Services", email: "students@seedofgrace.edu", phone: "+1 (234) 567-8903" }
  ];

  return (
    <>
    <Header />
    <ScrollToTop />
      
      <div className="contact-page">
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="hero-content">
            <h1 className="hero-title">Contact Us</h1>
            <p className="hero-subtitle">
              We'd love to hear from you. Get in touch with us today!
            </p>
          </div>
        </section>

        {/* Main Container */}
        <div className="contact-container">
          {/* Contact Info Cards */}
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="info-card">
                  <div 
                    className="info-icon-wrapper"
                    style={{ background: info.color }}
                  >
                    <Icon size={32} />
                  </div>
                  <h3 className="info-card-title">{info.title}</h3>
                  <div className="info-details">
                    {info.details.map((detail, idx) => (
                      <div key={idx} className="info-detail">{detail}</div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Form and Map */}
          <div className="main-content">
            {/* Contact Form */}
            <div className="contact-form-section">
              <h2 className="section-title">Send Us a Message</h2>
              <p className="section-description">
                Fill out the form below and we'll get back to you as soon as possible
              </p>

              <div>
                <div className="form-group">
                  <label className="form-label">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    className="form-input"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-input"
                    placeholder="+1 (234) 567-8900"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    className="form-input"
                    placeholder="What is this about?"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Message *</label>
                  <textarea
                    name="message"
                    className="form-textarea"
                    placeholder="Tell us how we can help you..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button className="submit-btn" onClick={handleSubmit}>
                  <Send size={20} />
                  Send Message
                </button>
              </div>
            </div>

            {/* Google Maps */}
            <div className="map-section">
              <iframe
                className="map-iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1635959542142!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
                title="School Location"
              ></iframe>
            </div>
          </div>

          {/* Departments Section */}
          <div className="departments-section">
            <h2 className="section-title">Contact by Department</h2>
            <p className="section-description">
              Reach out to specific departments for faster assistance
            </p>

            <div className="departments-grid">
              {departments.map((dept, index) => (
                <div key={index} className="department-card">
                  <h3 className="department-name">{dept.name}</h3>
                  <div className="department-contact">
                    <div className="department-info">
                      <Phone size={16} />
                      <a href={`tel:${dept.phone}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                        {dept.phone}
                      </a>
                    </div>
                    <div className="department-info">
                      <Mail size={16} />
                      <a href={`mailto:${dept.email}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                        {dept.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Media Section */}
          <div className="social-section">
            <div className="social-content">
              <h2 className="social-title">Connect With Us</h2>
              <p className="social-description">
                Follow us on social media for updates, news, and more
              </p>
              <div className="social-icons">
                <a href="#" className="social-icon">
                  <Facebook size={28} />
                </a>
                <a href="#" className="social-icon">
                  <Twitter size={28} />
                </a>
                <a href="#" className="social-icon">
                  <Instagram size={28} />
                </a>
                <a href="#" className="social-icon">
                  <Linkedin size={28} />
                </a>
                <a href="#" className="social-icon">
                  <MessageCircle size={28} />
                </a>
                <a href="#" className="social-icon">
                  <Globe size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

