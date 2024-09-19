import React, { useState } from 'react';

const ServiceCard = ({ icon, title, description }) => {
  // State to track user inputs
  const [siteName, setSiteName] = useState('');
  const [totalCost, setTotalCost] = useState(0);
  const [materialsCost, setMaterialsCost] = useState(0);
  const [transportationCost, setTransportationCost] = useState(0);
  const [accommodationCost, setAccommodationCost] = useState(0);
  const [labourCost, setLabourCost] = useState(0);

  // Calculate total usage
  const totalUsed = materialsCost + transportationCost + accommodationCost + labourCost;

  // Check if 60% of the total cost has been used
  const isSixtyPercentUsed = totalUsed / totalCost >= 0.6;

  // Handle form submission (you can modify this to suit your needs)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (totalCost === 0) {
      alert("Please input a valid total project cost.");
      return;
    }
    alert(`Project "${siteName}" has been updated. Total used: Ksh ${totalUsed}`);
  };

  return (
    <div className={`bg-white shadow-lg rounded-lg p-6 text-center ${isSixtyPercentUsed ? 'border-red-500 border-2' : ''}`}>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>

      {/* Project input form */}
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label className="block text-gray-700">Site Name</label>
          <input
            type="text"
            value={siteName}
            onChange={(e) => setSiteName(e.target.value)}
            className="border rounded px-4 py-2 mt-2 w-full"
            placeholder="Enter site name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Total Project Cost (Kshs)</label>
          <input
            type="number"
            value={totalCost}
            onChange={(e) => setTotalCost(Number(e.target.value))}
            className="border rounded px-4 py-2 mt-2 w-full"
            placeholder="Enter total project cost in Kshs"
          />
        </div>

        {/* Costs inputs */}
        <div className="mb-4">
          <label className="block text-gray-700">Materials Cost (Kshs)</label>
          <input
            type="number"
            value={materialsCost}
            onChange={(e) => setMaterialsCost(Number(e.target.value))}
            className="border rounded px-4 py-2 mt-2 w-full"
            placeholder="Enter materials cost in Kshs"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Transportation Cost (Kshs)</label>
          <input
            type="number"
            value={transportationCost}
            onChange={(e) => setTransportationCost(Number(e.target.value))}
            className="border rounded px-4 py-2 mt-2 w-full"
            placeholder="Enter transportation cost in Kshs"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Accommodation Cost (Kshs)</label>
          <input
            type="number"
            value={accommodationCost}
            onChange={(e) => setAccommodationCost(Number(e.target.value))}
            className="border rounded px-4 py-2 mt-2 w-full"
            placeholder="Enter accommodation cost in Kshs"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Total Labour Cost (Kshs)</label>
          <input
            type="number"
            value={labourCost}
            onChange={(e) => setLabourCost(Number(e.target.value))}
            className="border rounded px-4 py-2 mt-2 w-full"
            placeholder="Enter labour cost in Kshs"
          />
        </div>

        {/* Display total used and warning */}
        <div className="text-lg mb-4">
          <p>Total Amount Used: Ksh {totalUsed}</p>
          {isSixtyPercentUsed && (
            <p className="text-red-500 font-bold">Warning: You've used over 60% of the total cost!</p>
          )}
        </div>

        <button type="submit" className="mt-4 bg-gray-800 text-white px-4 py-2 rounded">
          Save Project Details
        </button>
      </form>
    </div>
  );
};

export default ServiceCard;
