import React, { useEffect, useRef } from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';
import './Staff.css'

export function MeetStaff() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 1;

    const autoScroll = () => {
      scrollPosition += scrollSpeed;
      
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
    };

    const intervalId = setInterval(autoScroll, 30);

    return () => clearInterval(intervalId);
  }, []);

  const mainStaff = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      position: "Principal & Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
      email: "sarah.j@school.com",
      phone: "+1 234 567 8900"
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      position: "Head of Academics",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
      email: "michael.c@school.com",
      phone: "+1 234 567 8901"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      position: "Dean of Students",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop",
      email: "emily.r@school.com",
      phone: "+1 234 567 8902"
    }
  ];

  const otherStaff = [
    {
      id: 4,
      name: "James Wilson",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop"
    },
    {
      id: 5,
      name: "Maria Garcia",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=300&fit=crop"
    },
    {
      id: 6,
      name: "David Lee",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop"
    },
    {
      id: 7,
      name: "Sophie Martin",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop"
    },
    {
      id: 8,
      name: "Robert Taylor",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop"
    },
    {
      id: 9,
      name: "Amanda White",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop"
    },
    {
      id: 10,
      name: "Chris Brown",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300&h=300&fit=crop"
    },
    {
      id: 11,
      name: "Lisa Anderson",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&h=300&fit=crop"
    }
  ];

  return (
    <>
    

      <section className="staff-section">
        <div className="staff-container">
          <div className="staff-header">
            <h2 className="staff-title">Meet Our Staff</h2>
            <p className="staff-subtitle">Dedicated professionals committed to excellence</p>
          </div>

          {/* Main Staff - 3 Big Cards */}
          <div className="main-staff-grid">
            {mainStaff.map((staff) => (
              <div key={staff.id} className="main-staff-card">
                <div className="main-staff-image-wrapper">
                  <img 
                    src={staff.image} 
                    alt={staff.name} 
                    className="main-staff-image"
                  />
                  <div className="main-staff-overlay">
                    <div className="staff-social">
                      <div className="social-icon">
                        <Mail size={16} />
                      </div>
                      <div className="social-icon">
                        <Phone size={16} />
                      </div>
                      <div className="social-icon">
                        <Linkedin size={16} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="main-staff-info">
                  <h3 className="main-staff-name">{staff.name}</h3>
                  <p className="main-staff-position">{staff.position}</p>
                  <div className="main-staff-contact">
                    <div className="contact-item">
                      <Mail size={14} />
                      <span>{staff.email}</span>
                    </div>
                    <div className="contact-item">
                      <Phone size={14} />
                      <span>{staff.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Section Divider */}
          <div className="section-divider">
            <h3 className="divider-title">Our Team</h3>
            <div className="divider-line"></div>
          </div>

          {/* Other Staff - Auto Scrolling */}
          <div className="other-staff-section">
            <div className="scroll-container">
              <div className="scroll-wrapper" ref={scrollRef}>
                <div className="scroll-content">
                  {[...otherStaff, ...otherStaff].map((staff, index) => (
                    <div key={`${staff.id}-${index}`} className="other-staff-card">
                      <div className="other-staff-image-wrapper">
                        <img 
                          src={staff.image} 
                          alt={staff.name} 
                          className="other-staff-image"
                        />
                        <div className="other-staff-name-overlay">
                          <div className="other-staff-name">{staff.name}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};


