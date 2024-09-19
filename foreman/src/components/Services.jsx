import React from 'react';
import ServiceCard from './ServiceCard';
import { FaTools, FaHome, FaWrench, FaPaintRoller } from 'react-icons/fa';

const Services = () => {
  return (
    <section className="container mx-auto py-20">
      <h2 className="text-3xl font-bold text-center mb-10">Our Service Areas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <ServiceCard
          icon={<FaTools />}
          title="Electrical Services"
          description="Professional roof renovation services to restore the original look of your roof."
        />
        <ServiceCard
          icon={<FaHome />}
          title="Construction"
          description="Quality roofing services for your home renovation needs."
        />
        <ServiceCard
          icon={<FaWrench />}
          title="Plumbing"
          description="Expert roof renovation services to ensure durability and aesthetics."
        />
        <ServiceCard
          icon={<FaPaintRoller />}
          title="Painting"
          description="Comprehensive roof renovation services including painting and repairs."
        />
      </div>
    </section>
  );
};

export default Services;
