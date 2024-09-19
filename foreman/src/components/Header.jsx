import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">FOREMAN</div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-gray-300">Home</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-gray-300">Services</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-300">Contact</Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-gray-300">Login</Link>
            </li>
            <li>
              <Link to="/signup" className="hover:text-gray-300">Signup</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
