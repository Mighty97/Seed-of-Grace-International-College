import React, { useState } from 'react';
import { Calendar, Clock, MapPin, User, ArrowRight, Tag } from 'lucide-react';
import './News.css'

export function NewsEvents() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const newsItems = [
    {
      id: 1,
      title: "Annual Science Fair Showcases Student Innovation",
      excerpt: "Students from all grades presented groundbreaking projects that impressed judges and parents alike...",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop",
      category: "Events",
      author: "John Smith",
      date: "October 20, 2025",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "New STEM Laboratory Opens for Students",
      excerpt: "State-of-the-art facilities now available for hands-on learning in science and technology...",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop",
      category: "Facilities",
      author: "Sarah Johnson",
      date: "October 18, 2025",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Students Win National Debate Competition",
      excerpt: "Our debate team secured first place in the national championship, showcasing exceptional skills...",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
      category: "Achievement",
      author: "Michael Chen",
      date: "October 15, 2025",
      readTime: "3 min read"
    },
    {
      id: 4,
      title: "Community Service Day Makes Impact",
      excerpt: "Students and teachers volunteer for local charities, making a positive difference in the community...",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
      category: "Community",
      author: "Emma Davis",
      date: "October 12, 2025",
      readTime: "4 min read"
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Parent-Teacher Conference",
      date: "November 5, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Main Auditorium",
      type: "Meeting",
      color: "#667eea"
    },
    {
      id: 2,
      title: "Annual Sports Day",
      date: "November 12, 2025",
      time: "8:00 AM - 4:00 PM",
      location: "School Stadium",
      type: "Sports",
      color: "#f093fb"
    },
    {
      id: 3,
      title: "Winter Concert Performance",
      date: "November 20, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Theater Hall",
      type: "Cultural",
      color: "#4facfe"
    },
    {
      id: 4,
      title: "College Fair 2025",
      date: "November 25, 2025",
      time: "10:00 AM - 3:00 PM",
      location: "Gymnasium",
      type: "Academic",
      color: "#43e97b"
    },
    {
      id: 5,
      title: "Holiday Celebration",
      date: "December 15, 2025",
      time: "11:00 AM - 2:00 PM",
      location: "School Grounds",
      type: "Celebration",
      color: "#fa709a"
    }
  ];

  return (
    <>
      <section className="news-events-section">
        <div className="news-events-container">
          <div className="section-header">
            <h2 className="section-title">News & Events</h2>
            <p className="section-subtitle">Stay updated with our latest news and upcoming events</p>
          </div>

          <div className="two-column-grid">
            {/* Column 1 - Recent News */}
            <div className="news-column">
              <div className="column-header">
                <h3 className="column-title">Recent News</h3>
                <button className="view-all-btn">
                  View All
                  <ArrowRight size={16} />
                </button>
              </div>

              <div className="news-list">
                {newsItems.map((news) => (
                  <div key={news.id} className="news-card">
                    <div className="news-image-wrapper">
                      <img 
                        src={news.image} 
                        alt={news.title}
                        className="news-image"
                      />
                    </div>
                    <div className="news-content">
                      <span className="news-category">
                        {news.category}
                      </span>
                      <h4 className="news-title">{news.title}</h4>
                      <p className="news-excerpt">{news.excerpt}</p>
                      <div className="news-meta">
                        <div className="meta-item">
                          <User size={14} />
                          <span>{news.author}</span>
                        </div>
                        <div className="meta-item">
                          <Calendar size={14} />
                          <span>{news.date}</span>
                        </div>
                        <div className="meta-item">
                          <Clock size={14} />
                          <span>{news.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2 - Upcoming Events */}
            <div className="events-column">
              <div className="column-header">
                <h3 className="column-title">Upcoming Events</h3>
              </div>

              <div className="events-list">
                {upcomingEvents.map((event) => (
                  <div 
                    key={event.id} 
                    className="event-card"
                    style={{ borderLeftColor: event.color }}
                  >
                    <span className="event-type">{event.type}</span>
                    <div className="event-content">
                      <h4 className="event-title">{event.title}</h4>
                      <div className="event-details">
                        <div className="event-detail-item">
                          <Calendar size={16} className="event-icon" />
                          <span>{event.date}</span>
                        </div>
                        <div className="event-detail-item">
                          <Clock size={16} className="event-icon" />
                          <span>{event.time}</span>
                        </div>
                        <div className="event-detail-item">
                          <MapPin size={16} className="event-icon" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <div className="event-date-badge">
                        <Calendar size={16} />
                        Mark Your Calendar
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};


