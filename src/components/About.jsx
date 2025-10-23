import React, { useState, useEffect } from 'react';
import { Book, Target, Eye, Award } from 'lucide-react';
import './About.css'

export function AboutUsFlip() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    const flipInterval = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 5000);

    return () => clearInterval(flipInterval);
  }, []);

  return (
    <>
      

      <section className="about-flip-section">
        <div className="about-flip-container">
          <div className="section-header">
            <h2>Know More About Us</h2>
            <p>Building a better future through quality education</p>
          </div>

          <div className="about-columns">
            {/* Column 1 - About Us */}
            <div className="about-card">
              <div className="card-icon">
                <Book size={35} color="white" />
              </div>
              <h3 className="card-title">About Us</h3>
              <p className="card-description">
                We are a leading educational institution dedicated to providing 
                world-class education and fostering intellectual growth. With over 
                two decades of excellence, we have shaped thousands of successful 
                careers and continue to inspire future generations through innovative 
                teaching methods and comprehensive curriculum. Our commitment to 
                academic excellence and holistic development sets us apart.
              </p>
            </div>

            {/* Column 2 - Mission/Vision Flip Card */}
            <div className="flip-card-container">
              <div 
                className={`flip-card ${isFlipped ? 'flipped' : ''}`}
                onClick={handleFlip}
              >
                {/* Front - Mission */}
                <div className="flip-card-face flip-card-front">
                  <div className="card-icon">
                    <Target size={35} color="white" />
                  </div>
                  <h3 className="card-title">Our Mission</h3>
                  <p className="card-description">
                    To deliver exceptional education that empowers students with 
                    knowledge, critical thinking, and ethical values. We are committed 
                    to providing a nurturing environment that encourages creativity, 
                    research, and holistic development, preparing students to excel 
                    in their chosen fields and become responsible global citizens.
                  </p>
                  <div className="flip-indicator">Click to see Vision →</div>
                </div>

                {/* Back - Vision */}
                <div className="flip-card-face flip-card-back">
                  <div className="card-icon">
                    <Eye size={35} color="white" />
                  </div>
                  <h3 className="card-title">Our Vision</h3>
                  <p className="card-description">
                    To be a globally recognized center of academic excellence that 
                    transforms lives through quality education. We envision creating 
                    leaders who will contribute meaningfully to society, drive innovation, 
                    and make a positive impact on the world through knowledge, skills, 
                    and values instilled during their academic journey with us.
                  </p>
                  <div className="flip-indicator">← Click to see Mission</div>
                </div>
              </div>
            </div>

            {/* Column 3 - Student of the Week Banner */}
            <div className="student-banner">
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop" 
                alt="Student of the Week" 
                className="student-banner-bg"
              />
              <div className="student-banner-overlay">
                <div className="student-badge">
                  <Award size={18} />
                  STUDENT OF THE WEEK
                </div>
                <h3 className="student-name">Emma Thompson</h3>
                <p className="student-grade">Grade 10 - Science Department</p>
                <p className="student-achievement">
                  Outstanding performance in the National Science Fair. 
                  Demonstrated exceptional leadership and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};