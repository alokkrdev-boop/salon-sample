import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials'; // Missing import
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import SuccessModal from './components/SuccessModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Services />
      
      {/* Testimonials ko yahan add kiya hai */}
      <Testimonials /> 
      
      <Gallery />
      
      {/* Contact form modal ko trigger karega */}
      <Contact onBookingRequest={() => setIsModalOpen(true)} />
      
      {/* Success Modal logic */}
      <SuccessModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}

export default App;