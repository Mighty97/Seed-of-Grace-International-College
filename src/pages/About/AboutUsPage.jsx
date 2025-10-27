import React, { useState, useEffect } from 'react';
import {
  BookOpen, Users, Target, Award, Building, Lightbulb,
  Trophy, Heart, Globe, Sparkles, CheckCircle, Star
} from 'lucide-react';
import { Header } from '../../components/Header'
import { ScrollToTop } from '../../components/ScrollUpButton'
import { Footer } from '../../components/Footer'
import './AboutUsPage.css'

export function AboutUsPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const offerings = [
    {
      icon: BookOpen,
      title: "Quality Education",
      description: "Comprehensive curriculum designed to foster academic excellence and critical thinking skills."
    },
    {
      icon: Users,
      title: "Experienced Faculty",
      description: "Dedicated and qualified teachers committed to nurturing every student's potential."
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "International curriculum preparing students for success in a globalized world."
    },
    {
      icon: Heart,
      title: "Holistic Development",
      description: "Focus on character building, emotional intelligence, and social responsibility."
    },
    {
      icon: Lightbulb,
      title: "Innovation & Technology",
      description: "State-of-the-art learning tools and modern teaching methodologies."
    },
    {
      icon: Trophy,
      title: "Sports & Arts",
      description: "Extensive extracurricular programs to discover and develop diverse talents."
    }
  ];

  const goals = [
    "Provide world-class education that prepares students for future challenges",
    "Foster critical thinking, creativity, and problem-solving skills",
    "Develop responsible, ethical, and compassionate global citizens",
    "Create an inclusive learning environment that celebrates diversity",
    "Encourage innovation and lifelong learning habits",
    "Build strong partnerships with parents and the community"
  ];

  const facilities = [
    {
      name: "Modern Classrooms",
      description: "Smart boards, air-conditioned rooms with ergonomic furniture",
      icon: Building,
      color: "#667eea"
    },
    {
      name: "Science Laboratories",
      description: "Well-equipped Physics, Chemistry, and Biology labs",
      icon: Sparkles,
      color: "#4facfe"
    },
    {
      name: "Library & Resource Center",
      description: "Extensive collection of books, journals, and digital resources",
      icon: BookOpen,
      color: "#43e97b"
    },
    {
      name: "Sports Complex",
      description: "Indoor and outdoor facilities for various sports activities",
      icon: Trophy,
      color: "#fa709a"
    },
    {
      name: "Arts & Music Studio",
      description: "Dedicated spaces for artistic expression and musical training",
      icon: Star,
      color: "#f093fb"
    },
    {
      name: "Computer Lab",
      description: "Latest technology and high-speed internet connectivity",
      icon: Globe,
      color: "#764ba2"
    }
  ];

  const awards = [
    {
      title: "Excellence in Education Award 2024",
      organization: "National Education Board",
      year: "2024"
    },
    {
      title: "Best STEM Program Recognition",
      organization: "Science & Technology Council",
      year: "2023"
    },
    {
      title: "Outstanding Community Service",
      organization: "Community Development Association",
      year: "2023"
    },
    {
      title: "Innovation in Teaching Award",
      organization: "Educational Innovation Forum",
      year: "2022"
    },
    {
      title: "Sports Excellence Award",
      organization: "National Sports Federation",
      year: "2022"
    }
  ];

  return (
    <>
      <ScrollToTop />
      <Header />
      <div className="about-page">
        {/* Hero Section */}
        <div className="about-hero">
          <div className="hero-content">
            <h1 className="hero-title">About Seed of Grace</h1>
            <p className="hero-subtitle">
              Nurturing excellence, inspiring innovation, and shaping future leaders
              through quality education and holistic development
            </p>
          </div>
        </div>

        {/* Brief History */}
        <section className="about-section">
          <div className="section-header">
            <h2 className="section-title">Our History</h2>
          </div>
          <div className="history-content">
            <p>
              Seed of Grace International College was established in 2005 with a vision to provide
              world-class education that nurtures young minds and prepares them for global challenges.
              What began as a small institution with just 50 students has now grown into a prestigious
              educational establishment serving over 2,000 students from diverse backgrounds.
            </p>
            <p>
              Over the years, we have consistently maintained our commitment to academic excellence,
              innovation in teaching methodologies, and holistic student development. Our journey has
              been marked by numerous achievements, recognition from educational bodies, and most
              importantly, the success stories of our alumni who are making significant contributions
              in various fields worldwide.
            </p>
            <p>
              Today, Seed of Grace stands as a beacon of quality education, combining traditional
              values with modern teaching techniques to create an environment where every child can
              discover their potential and pursue their dreams with confidence.
            </p>
          </div>
        </section>

        {/* What We Offer */}
        <section className="about-section" style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
          <div className="section-header">
            <h2 className="section-title">What We Offer</h2>
            <p className="section-description">
              Comprehensive programs designed to ensure holistic development of every student
            </p>
          </div>
          <div className="offerings-grid">
            {offerings.map((offering, index) => {
              const Icon = offering.icon;
              return (
                <div key={index} className={`offering-card ${isVisible ? 'visible' : ''}`}>
                  <div className="offering-icon">
                    <Icon size={40} />
                  </div>
                  <h3 className="offering-title">{offering.title}</h3>
                  <p className="offering-description">{offering.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Key Goals */}
        <section className="about-section">
          <div className="section-header">
            <h2 className="section-title">Our Key Goals</h2>
            <p className="section-description">
              Strategic objectives guiding our mission to excellence in education
            </p>
          </div>
          <div className="goals-list">
            {goals.map((goal, index) => (
              <div key={index} className="goal-item">
                <CheckCircle size={24} className="goal-icon" />
                <p className="goal-text">{goal}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Facilities */}
        <section className="about-section" style={{ background: '#f7fafc' }}>
          <div className="section-header">
            <h2 className="section-title">Our Facilities</h2>
            <p className="section-description">
              State-of-the-art infrastructure supporting academic and personal growth
            </p>
          </div>
          <div className="facilities-grid">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <div
                  key={index}
                  className="facility-card"
                  style={{ '--facility-color': facility.color }}
                >
                  <div
                    className="facility-icon"
                    style={{ background: facility.color }}
                  >
                    <Icon size={32} />
                  </div>
                  <h3 className="facility-name">{facility.name}</h3>
                  <p className="facility-description">{facility.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Awards */}
        <section className="about-section">
          <div className="section-header">
            <h2 className="section-title">Awards & Recognition</h2>
            <p className="section-description">
              Celebrating our achievements and commitment to educational excellence
            </p>
          </div>
          <div className="awards-grid">
            {awards.map((award, index) => (
              <div key={index} className="award-card">
                <div className="award-icon">
                  <Award size={32} />
                </div>
                <h3 className="award-title">{award.title}</h3>
                <div className="award-details">
                  <span>{award.organization}</span>
                  <span>{award.year}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};


