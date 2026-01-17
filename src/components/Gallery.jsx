import React from 'react';
import './Gallery.css';

const images = [
  // Link badalne ke liye bas in "" ke beech apna naya link paste karein
  "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800",
  "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=800",
  "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=800",
  "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?q=80&w=800",
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=800", 
  "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800"
];

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <div className="section-header">
        <span className="subtitle">Visual Inspiration</span>
        <h2>The Aurum Gallery</h2>
      </div>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div key={index} className="gallery-item">
            <img 
              src={img} 
              alt={`Salon Work ${index + 1}`} 
              onError={(e) => { e.target.src = "https://via.placeholder.com/400x500?text=Image+Loading..."; }} 
            />
            <div className="gallery-overlay">
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;