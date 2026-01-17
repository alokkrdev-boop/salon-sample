import React from 'react';
import './Services.css';

const servicesData = [
  { id: 1, name: "Signature Haircut", price: "$120", desc: "Precision styling and customized blow-dry." },
  { id: 2, name: "Balayage Artistry", price: "$250", desc: "Hand-painted highlights for a natural finish." },
  { id: 3, name: "Scalp Therapy", price: "$85", desc: "Deep rejuvenation and luxury massage." },
  { id: 4, name: "Silk Press", price: "$95", desc: "High-shine finish with heat protection." },
  { id: 5, name: "Luxury Color", price: "$180", desc: "Ammonia-free premium hair coloring." },
  { id: 6, name: "Bridal Styling", price: "Custom", desc: "Timeless hair artistry for your special day." }
];

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="section-header">
          <span className="subtitle">Our Expertise</span>
          <h2>The Aurum Collection</h2>
          <p className="header-desc">Experience luxury through our curated range of professional salon services.</p>
        </div>
        
        <div className="services-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-content">
                <span className="service-price">{service.price}</span>
                <h3>{service.name}</h3>
                <p>{service.desc}</p>
              </div>
              <button className="service-btn">Book Experience</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;