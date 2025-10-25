import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
//import CarouselImageOne from  '../assets/one.jpg'
import CarouselImageTwo from '../assets/two.jpg'
import CarouselImageThree from '../assets/three.jpg'
import CarouselImageFour from '../assets/four.jpg'
import './Carousel.css'

export function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      image: 'https://imgur.com/a/uxplx1c',
      title: 'Welcome to Our College',
      description: 'Empowering minds and shaping futures through excellence in education and innovation.'
    },
    {
      image: CarouselImageTwo,
      title: 'World-Class Education',
      description: 'Join our diverse community of learners and discover endless opportunities for growth and success.'
    },
    {
      image: CarouselImageThree,
      title: 'Modern Campus Facilities',
      description: 'Experience state-of-the-art facilities designed to enhance your learning experience.'
    },
    {
      image: CarouselImageFour,
      title: 'Global Opportunities',
      description: 'Connect with students worldwide and prepare for a successful international career.'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <>
     

      <div 
        className="carousel-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div 
          className="carousel-slides"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="carousel-slide">
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="carousel-image"
              />
              <div className="carousel-content">
                <h1 className="carousel-title" >{slide.title}</h1>
                <p className="carousel-description">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-nav-btn prev" onClick={prevSlide}>
          <ChevronLeft size={30} />
        </button>
        <button className="carousel-nav-btn next" onClick={nextSlide}>
          <ChevronRight size={30} />
        </button>

        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${currentSlide === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};


