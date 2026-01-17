import React from 'react';
import './SuccessModal.css';

const SuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="success-icon">✓</div>
        <h2>Request Received</h2>
        <p>Thank you for choosing Aurum. Our concierge will text you within 15 minutes to confirm your luxury experience.</p>
        <button onClick={onClose} className="close-btn">Perfect</button>
      </div>
    </div>
  );
};

export default SuccessModal;