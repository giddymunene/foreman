import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import PrivacyPolicy from './components/PrivacyPolicy'; // Import Privacy Policy component
import TermsOfService from './components/TermsOfService'; // Import Terms of Service component

const Home = () => (
  <>
    <HeroSection />
  </>
);

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} /> {/* Route for Privacy Policy */}
          <Route path="/terms-of-service" element={<TermsOfService />} /> {/* Route for Terms of Service */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
