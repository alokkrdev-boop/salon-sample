import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = ({ onBookingRequest }) => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(
      'YOUR_SERVICE_ID', 
      'YOUR_TEMPLATE_ID', 
      form.current, 
      'YOUR_PUBLIC_KEY'
    )
    .then(() => {
        setIsSending(false);
        onBookingRequest();
        e.target.reset();
    }, () => {
        setIsSending(false);
        alert("Submission failed. Check your EmailJS keys!");
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-wrapper">
        <div className="contact-header">
          <span className="gold-text">Reservation</span>
          <h2>Make An Appointment</h2>
          <p>Experience the art of luxury hair styling.</p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="appointment-form">
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

          <button type="submit" className="confirm-btn" disabled={isSending}>
            {isSending ? "SENDING..." : "CONFIRM APPOINTMENT"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;