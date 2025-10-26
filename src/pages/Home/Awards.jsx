import React, { useState, useEffect } from 'react';
import { Award, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import './Awards.css'

export function AwardsTestimonialsQuotes() {
  const [currentAward, setCurrentAward] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentQuote, setCurrentQuote] = useState(0);

  const awards = [
    {
      id: 1,
      title: "Excellence in Education Award 2024",
      image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&h=400&fit=crop",
      year: "2024"
    },
    {
      id: 2,
      title: "Best STEM Program Recognition",
      image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=600&h=400&fit=crop",
      year: "2023"
    },
    {
      id: 3,
      title: "National Sports Achievement Award",
      image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=600&h=400&fit=crop",
      year: "2023"
    },
    {
      id: 4,
      title: "Outstanding Community Service",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
      year: "2022"
    },
    {
      id: 5,
      title: "Innovation in Teaching Methods",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
      year: "2022"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      text: "The dedication of the teachers and staff is truly remarkable. My daughter has flourished academically and personally since joining this school. The holistic approach to education makes all the difference.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop"
    },
    {
      id: 2,
      name: "James Patterson",
      text: "As a parent, I couldn't be happier with the quality of education my son receives. The school's commitment to excellence and individual attention to each student is outstanding.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop"
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      text: "The school has created a nurturing environment where children thrive. The facilities are excellent, and the extracurricular programs have helped my children discover their passions.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
    }
  ];

  const quotes = [
    {
      id: 1,
      text: "Education is the most powerful weapon which you can use to change the world.",
      author: "Nelson Mandela"
    },
    {
      id: 2,
      text: "The function of education is to teach one to think intensively and to think critically.",
      author: "Martin Luther King Jr."
    },
    {
      id: 3,
      text: "Education is not preparation for life; education is life itself.",
      author: "John Dewey"
    },
    {
      id: 4,
      text: "The beautiful thing about learning is that no one can take it away from you.",
      author: "B.B. King"
    },
    {
      id: 5,
      text: "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
      author: "Malcolm X"
    }
  ];

  useEffect(() => {
    const awardInterval = setInterval(() => {
      setCurrentAward((prev) => (prev + 1) % awards.length);
    }, 4000);

    return () => clearInterval(awardInterval);
  }, [awards.length]);

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 6000);

    return () => clearInterval(quoteInterval);
  }, [quotes.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
     

      <section className="three-section-container">
        <div className="three-section-wrapper">
          {/* Column 1 - Awards */}
          <div className="awards-column">
            <div className="awards-image-wrapper">
              <img 
                key={currentAward}
                src={awards[currentAward].image} 
                alt={awards[currentAward].title}
                className="awards-image"
              />
              <div className="award-badge">
                <Award size={32} />
              </div>
            </div>
            <div className="awards-content">
              <div className="awards-header">
                <div className="awards-icon">
                  <Award size={24} />
                </div>
                <div className="awards-label">Our Awards</div>
              </div>
              <h3 key={`title-${currentAward}`} className="award-title">
                {awards[currentAward].title}
              </h3>
              <p className="award-year">{awards[currentAward].year}</p>
              <div className="awards-indicators">
                {awards.map((_, index) => (
                  <div
                    key={index}
                    className={`indicator-dot ${currentAward === index ? 'active' : ''}`}
                    onClick={() => setCurrentAward(index)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Column 2 - Testimonials */}
          <div className="testimonials-column">
            <div className="testimonial-header">
              <h3 className="testimonial-title">Parent Testimonials</h3>
              <p className="testimonial-subtitle">What our parents say about us</p>
            </div>
            <div className="testimonial-content">
              <Quote size={80} className="testimonial-quote-icon" />
              <p key={`text-${currentTestimonial}`} className="testimonial-text">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div key={`author-${currentTestimonial}`} className="testimonial-author">
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].name}
                  className="author-image"
                />
                <div className="author-info">
                  <div className="author-name">{testimonials[currentTestimonial].name}</div>
                  <div className="author-role">Parent</div>
                </div>
              </div>
            </div>
            <div className="testimonial-nav">
              <button className="nav-btn" onClick={prevTestimonial}>
                <ChevronLeft size={20} />
              </button>
              <button className="nav-btn" onClick={nextTestimonial}>
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Column 3 - Quotes */}
          <div className="quotes-column">
            <Quote size={100} className="quote-icon-large" />
            <div key={currentQuote} className="quote-content">
              <p className="quote-text">"{quotes[currentQuote].text}"</p>
              <p className="quote-author">— {quotes[currentQuote].author}</p>
            </div>
            <div className="quote-indicators">
              {quotes.map((_, index) => (
                <div
                  key={index}
                  className={`quote-dot ${currentQuote === index ? 'active' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};


