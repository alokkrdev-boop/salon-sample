import React, { useRef } from 'react';
import './Contact.css';

const Contact = ({ onBookingRequest }) => {
  const form = useRef();

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    // Form se data nikalna
    const data = new FormData(form.current);
    const name = data.get('from_name');
    const phone = data.get('user_phone');
    const service = data.get('selected_service');
    const note = data.get('message') || "None";

    // --- DHAYAN SE: Apna 10-digit number 91 ke sath yahan likhein ---
    // Example: "919876543210"
    const myWhatsAppNumber = "919204781140"; 

    // Message ko format karna (Bold text ke liye * use kiya hai)
    const messageBody = `*AURUM SALON BOOKING*%0A` + 
                        `--------------------%0A` +
                        `*Customer:* ${name}%0A` +
                        `*Phone:* ${phone}%0A` +
                        `*Service:* ${service}%0A` +
                        `*Note:* ${note}%0A` +
                        `--------------------`;

    // Sabse reliable WhatsApp link format
    const whatsappURL = `https://wa.me/${myWhatsAppNumber}?text=${messageBody}`;

    // Success Modal trigger karna
    if(onBookingRequest) onBookingRequest();

    // Mobile par direct WhatsApp open karne ke liye
    window.location.href = whatsappURL;
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-wrapper">
        <div className="contact-header">
          <span className="gold-text">Reservation</span>
          <h2>Make An Appointment</h2>
          <p>Experience the art of luxury hair styling.</p>
        </div>

        <form ref={form} onSubmit={handleWhatsAppSubmit} className="appointment-form">
          <div className="form-row">
            <input type="text" name="from_name" placeholder="Full Name" required />
            <input type="email" name="user_email" placeholder="Email Address" required />
          </div>
          
          <div className="form-row">
            <input type="tel" name="user_phone" placeholder="Mobile Number" required />
            <select name="selected_service" required>
              <option value="">Select Service</option>
              <option value="Signature Haircut">Signature Haircut</option>
              <option value="Balayage Artistry">Balayage Artistry</option>
              <option value="Scalp Therapy">Scalp Therapy</option>
            </select>
          </div>

          <textarea name="message" placeholder="Special Requests (Optional)"></textarea>

          <button type="submit" className="confirm-btn">
            BOOK AN APPOINTMENT
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;