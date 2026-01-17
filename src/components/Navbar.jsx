import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">AURUM<span>SALON</span></div>

      <div className={`nav-links ${open ? 'open' : ''}`}>
        <a onClick={() => setOpen(false)} href="#about">About</a>
        <a onClick={() => setOpen(false)} href="#services">Services</a>
        <a onClick={() => setOpen(false)} href="#testimonials">Reviews</a>
        <a onClick={() => setOpen(false)} href="#gallery">Gallery</a>

        <button
          className="nav-book-btn"
          onClick={() => {
            setOpen(false);
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Book Now
        </button>
      </div>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
