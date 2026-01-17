import React from 'react';
import './Testimonials.css';

const reviews = [
  { 
    id: 1, 
    name: "Sarah Jenkins", 
    role: "Regular Guest",
    text: "The best balayage I've ever had. The atmosphere is pure luxury and the attention to detail is unmatched.", 
    rating: 5 
  },
  { 
    id: 2, 
    name: "Michael Ross", 
    role: "Premium Member",
    text: "Professional and high-quality grooming. The scalp therapy is a game changer for my weekend routine.", 
    rating: 5 
  },
  { 
    id: 3, 
    name: "Elena White", 
    role: "New Client",
    text: "I felt like a queen from the moment I walked in. The stylists truly understand modern elegance.", 
    rating: 5 
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-container">
        <div className="section-header">
          <span className="subtitle">Client Stories</span>
          <h2>Voices of Luxury</h2>
        </div>
        
        <div className="testimonials-grid">
          {reviews.map((review) => (
            <div key={review.id} className="testimonial-card">
              <div className="quote-mark">“</div>
              <div className="stars">
                {[...Array(review.rating)].map((_, i) => <span key={i}>★</span>)}
              </div>
              <p className="review-text">{review.text}</p>
              <div className="client-info">
                <h4>{review.name}</h4>
                <span>{review.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;