import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';
import './Contact.css'

export function ContactForm() {
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
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
  };

  const contactInfo = {
    address: "123 Education Street, Learning District, City 12345",
    emails: [
      "info@seedofgrace.edu",
      "admissions@seedofgrace.edu",
      "support@seedofgrace.edu"
    ],
    phones: [
      "+1 (234) 567-8900",
      "+1 (234) 567-8901",
      "+1 (234) 567-8902"
    ],
    socialMedia: [
      { name: 'Facebook', icon: Facebook, url: '#', color: '#1877F2' },
      { name: 'Twitter', icon: Twitter, url: '#', color: '#1DA1F2' },
      { name: 'Instagram', icon: Instagram, url: '#', color: '#E4405F' },
      { name: 'LinkedIn', icon: Linkedin, url: '#', color: '#0A66C2' }
    ]
  };

  return (
    <>
     

      <section className="contact-section">
        <div className="contact-container">
          <div className="section-header">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">We'd love to hear from you. Send us a message!</p>
          </div>

          <div className="contact-grid">
            {/* Column 1 - Contact Form */}
            <div className="form-column">
              <div className="form-header">
                <h3 className="form-title">Send us a Message</h3>
                <p className="form-description">Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      className="form-input"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
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
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
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
                      placeholder="Inquiry about admission"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Message *</label>
                  <textarea
                    name="message"
                    className="form-textarea"
                    placeholder="Tell us how we can help you..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="submit-btn">
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>

            {/* Column 2 - Contact Info */}
            <div className="info-column">
              {/* Address */}
              <div className="info-card">
                <div className="info-card-header">
                  <div className="info-icon">
                    <MapPin size={24} />
                  </div>
                  <h4 className="info-card-title">Our Location</h4>
                </div>
                <div className="info-content">
                  <p className="info-item">{contactInfo.address}</p>
                </div>
              </div>

              {/* Emails */}
              <div className="info-card">
                <div className="info-card-header">
                  <div className="info-icon">
                    <Mail size={24} />
                  </div>
                  <h4 className="info-card-title">Email Us</h4>
                </div>
                <div className="info-content">
                  {contactInfo.emails.map((email, index) => (
                    <a key={index} href={`mailto:${email}`} className="info-item info-link">
                      {email}
                    </a>
                  ))}
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="info-card">
                <div className="info-card-header">
                  <div className="info-icon">
                    <Phone size={24} />
                  </div>
                  <h4 className="info-card-title">Call Us</h4>
                </div>
                <div className="info-content">
                  {contactInfo.phones.map((phone, index) => (
                    <a key={index} href={`tel:${phone}`} className="info-item info-link">
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="social-media-card">
                <h4 className="social-header">Follow Us</h4>
                <div className="social-icons">
                  {contactInfo.socialMedia.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        className="social-icon-wrapper"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div
                          className="social-icon-circle"
                          style={{ background: social.color }}
                        >
                          <Icon size={24} />
                        </div>
                        <span className="social-icon-name">{social.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

