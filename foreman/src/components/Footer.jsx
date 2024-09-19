import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">FOREMAN</div>
        
        <div className="space-x-4 flex items-center">
          {/* Social media icons */}
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </div>

        <div className="space-x-4">
          <Link to="/privacy-policy" className="hover:text-gray-300">Privacy Policy</Link>
          <Link to="/terms-of-service" className="hover:text-gray-300">Terms of Service</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
