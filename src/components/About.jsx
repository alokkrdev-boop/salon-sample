import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1000" alt="Our Salon" />
          <div className="experience-badge">
            <h3>15+</h3>
            <p>Years of Luxury</p>
          </div>
        </div>
        <div className="about-text">
          <span className="subtitle">Our Story</span>
          <h2>The Art of Beauty & Elegance</h2>
          <p>
            At Aurum, we believe that hair is the ultimate form of self-expression. 
            Our master stylists combine decades of experience with the finest products 
            to create a personalized experience.
          </p>
          <ul className="about-features">
            <li>✓ Certified Master Stylists</li>
            <li>✓ Premium Ammonia-Free Products</li>
            <li>✓ Private Consultation Rooms</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;