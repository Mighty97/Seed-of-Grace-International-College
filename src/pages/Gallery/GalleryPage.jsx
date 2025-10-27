import React, { useState } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import './GalleryPage.css'

export function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryData = {
    'campus': {
      title: 'Campus Life',
      date: 'Year 2024-2025',
      images: [
        { url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop', caption: 'Main Campus Building' },
        { url: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop', caption: 'Library Interior' },
        { url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop', caption: 'Student Common Area' },
        { url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop', caption: 'Outdoor Learning Space' },
        { url: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&h=600&fit=crop', caption: 'Science Laboratory' },
        { url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop', caption: 'Computer Lab' }
      ]
    },
    'events': {
      title: 'School Events',
      date: 'Recent Activities',
      images: [
        { url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop', caption: 'Annual Day Celebration' },
        { url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop', caption: 'Science Fair Exhibition' },
        { url: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&h=600&fit=crop', caption: 'Cultural Festival' },
        { url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop', caption: 'Sports Day' },
        { url: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop', caption: 'Graduation Ceremony' },
        { url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop', caption: 'Art Exhibition' }
      ]
    },
    'sports': {
      title: 'Sports & Athletics',
      date: 'Champions in Action',
      images: [
        { url: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop', caption: 'Football Championship' },
        { url: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=600&fit=crop', caption: 'Basketball Tournament' },
        { url: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=800&h=600&fit=crop', caption: 'Track and Field' },
        { url: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&h=600&fit=crop', caption: 'Swimming Competition' },
        { url: 'https://images.unsplash.com/photo-1593766787879-e8c78e09cec5?w=800&h=600&fit=crop', caption: 'Tennis Match' },
        { url: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&h=600&fit=crop', caption: 'Volleyball Game' }
      ]
    },
    'achievements': {
      title: 'Achievements & Awards',
      date: 'Pride & Excellence',
      images: [
        { url: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&h=600&fit=crop', caption: 'National Award Ceremony' },
        { url: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&h=600&fit=crop', caption: 'Academic Excellence' },
        { url: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800&h=600&fit=crop', caption: 'Trophy Collection' },
        { url: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop', caption: 'Community Service Award' },
        { url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop', caption: 'STEM Competition Winners' },
        { url: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=600&fit=crop', caption: 'Debate Championship' }
      ]
    }
  };

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'campus', label: 'Campus Life' },
    { id: 'events', label: 'Events' },
    { id: 'sports', label: 'Sports' },
    { id: 'achievements', label: 'Achievements' }
  ];

  const getAllImages = () => {
    let allImages = [];
    Object.keys(galleryData).forEach(category => {
      galleryData[category].images.forEach(img => {
        allImages.push({ ...img, category });
      });
    });
    return allImages;
  };

  const getFilteredImages = () => {
    if (activeCategory === 'all') {
      return getAllImages();
    }
    return galleryData[activeCategory]?.images.map(img => ({ ...img, category: activeCategory })) || [];
  };

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const filteredImages = getFilteredImages();
    const newIndex = (currentImageIndex + 1) % filteredImages.length;
    setCurrentImageIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  const prevImage = () => {
    const filteredImages = getFilteredImages();
    const newIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentImageIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <>
     

      <div className="gallery-page">
        {/* Hero Section */}
        <section className="gallery-hero">
          <div className="hero-content">
            <h1 className="hero-title">Photo Gallery</h1>
            <p className="hero-subtitle">
              Capturing moments, celebrating memories
            </p>
          </div>
        </section>

        {/* Gallery Container */}
        <div className="gallery-container">
          {/* Filter Tabs */}
          <div className="filter-tabs">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-tab ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Gallery Sections */}
          {activeCategory === 'all' ? (
            Object.keys(galleryData).map(sectionKey => (
              <div key={sectionKey} className="gallery-section">
                <div className="section-header">
                  <h2 className="section-title">{galleryData[sectionKey].title}</h2>
                  <div className="section-date">
                    <Calendar size={18} />
                    {galleryData[sectionKey].date}
                  </div>
                </div>
                <div className="gallery-grid">
                  {galleryData[sectionKey].images.map((image, index) => (
                    <div
                      key={index}
                      className="gallery-item"
                      onClick={() => openLightbox({ ...image, category: sectionKey }, index)}
                    >
                      <img src={image.url} alt={image.caption} className="gallery-image" />
                      <div className="gallery-overlay">
                        <div className="gallery-caption">{image.caption}</div>
                      </div>
                      <div className="zoom-icon">
                        <ZoomIn size={20} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="gallery-section">
              <div className="section-header">
                <h2 className="section-title">{galleryData[activeCategory]?.title}</h2>
                <div className="section-date">
                  <Calendar size={18} />
                  {galleryData[activeCategory]?.date}
                </div>
              </div>
              <div className="gallery-grid">
                {galleryData[activeCategory]?.images.map((image, index) => (
                  <div
                    key={index}
                    className="gallery-item"
                    onClick={() => openLightbox({ ...image, category: activeCategory }, index)}
                  >
                    <img src={image.url} alt={image.caption} className="gallery-image" />
                    <div className="gallery-overlay">
                      <div className="gallery-caption">{image.caption}</div>
                    </div>
                    <div className="zoom-icon">
                      <ZoomIn size={20} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="lightbox" onClick={closeLightbox}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button className="lightbox-close" onClick={closeLightbox}>
                <X size={24} />
              </button>
              <button className="lightbox-nav prev" onClick={prevImage}>
                <ChevronLeft size={24} />
              </button>
              <img src={selectedImage.url} alt={selectedImage.caption} className="lightbox-image" />
              <button className="lightbox-nav next" onClick={nextImage}>
                <ChevronRight size={24} />
              </button>
              <div className="lightbox-caption">{selectedImage.caption}</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

