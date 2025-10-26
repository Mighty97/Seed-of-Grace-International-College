import React from 'react';
import { UserCircle, Users, FileText, GraduationCap, Heart, Zap } from 'lucide-react';
import PrincipalImage from '../../assets/principal.jpg'
import FounderImage from '../../assets/founder.jpg'
import CampusVideo from '../../assets/camp.mp4' 
import './Four.css'

export function FourColumnComponent(){
  return (
    <>
     

      <section className="four-column-section">
        <div className="four-column-container">
          {/* Column 1 - Principal */}
          <div className="principal-column">
            <div className="principal-image-wrapper">
              <img 
                src={PrincipalImage}
                alt="Principal" 
                className="principal-image"
              />
            </div>
            <div className="principal-content">
              <h3 className="principal-title">
                <UserCircle size={24} color="#667eea" />
                Pastor Olubude Mayowa
              </h3>
              <p className="principal-role">Principal</p>
              <p className="principal-message">
                Welcome to our College! It is my privilege to lead this community 
                of learners. We are committed to providing exceptional education that 
                prepares students for a bright future. Together, we create an 
                environment where every student can thrive and reach their full potential.
              </p>
            </div>
          </div>

          {/* Column 2 - Founder */}
          <div className="founder-column">
            <div className="founder-image-wrapper">
              <img 
                src={FounderImage}
                alt="Founder" 
                className="founder-image"
              />
            </div>
            <div className="founder-content">
              <h3 className="founder-title">
                <Users size={24} color="#667eea" />
                Dr. Bolaji Idowu
              </h3>
              <p className="founder-role">Founder & Chairman</p>
              <p className="founder-speech">
                Our vision was to create an institution that transforms lives through 
                education. Over the years, we have built a legacy of excellence and 
                innovation. I am proud to see our students grow into leaders who make 
                meaningful contributions to society and the world at large.
              </p>
            </div>
          </div>

          {/* Column 3 - Image Container */}
          <div className="image-column">
            <video 
              autoPlay
              muted
              loop
              playInline >
              <source src={CampusVideo} type='video/mp4' />
              </video>
            
            <div className="image-overlay">
              <p className="image-overlay-text">Experience Campus Life</p>
            </div>
          </div>

          {/* Column 4 - CTA Buttons */}
          <div className="cta-column">
            <button className="cta-button">
              <div className="cta-icon">
                <FileText size={24} color="white" />
              </div>
              <div className="cta-text">
                <div className="cta-title">Apply Now</div>
                <div className="cta-description">Start your journey with us</div>
              </div>
            </button>

            <button className="cta-button">
              <div className="cta-icon">
                <GraduationCap size={24} color="white" />
              </div>
              <div className="cta-text">
                <div className="cta-title">School Life</div>
                <div className="cta-description">Discover our community</div>
              </div>
            </button>

            <button className="cta-button">
              <div className="cta-icon">
                <Heart size={24} color="white" />
              </div>
              <div className="cta-text">
                <div className="cta-title">Extra Curricular</div>
                <div className="cta-description">Beyond the classroom</div>
              </div>
            </button>

            <button className="cta-button">
              <div className="cta-icon">
                <Zap size={24} color="white" />
              </div>
              <div className="cta-text">
                <div className="cta-title">Latest News</div>
                <div className="cta-description">Stay updated with us</div>
              </div>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};


