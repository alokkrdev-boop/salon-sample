import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Experience Luxury.<br/>Define Your Style.</h1>
        <p>Where timeless elegance meets contemporary beauty. Book your premium salon experience today.</p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={() => document.getElementById('contact').scrollIntoView({behavior: 'smooth'})}>
            Book Appointment
          </button>
          <button className="btn-secondary">View Services</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;