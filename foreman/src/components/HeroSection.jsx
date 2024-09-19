import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleGetInTouchClick = () => {
    navigate('/contact');
  };

  return (
    <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url(/path/to/your/hero-image.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto flex flex-col items-center justify-center h-full relative z-10 text-white text-center">
        <h1 className="text-5xl font-bold mb-4">We Can Bring Your Dreams Into With Our Great Construction Skills</h1>
        <button
          onClick={handleGetInTouchClick}
          className="bg-red-600 px-6 py-3 text-xl font-semibold rounded"
        >
          Get In Touch
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
