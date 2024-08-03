import React, { useState } from 'react';

function CostForm({ onTotalCostChange, onCurrencyChange, onCostsChange }) {
  const [totalCost, setTotalCost] = useState(0);
  const [currency, setCurrency] = useState('USD');
  const [costs, setCosts] = useState({
    materials: 0,
    transportation: 0,
    accommodation: 0,
    labour: 0
  });

  const handleTotalCostChange = (e) => {
    const amount = parseFloat(e.target.value);
    setTotalCost(amount);
    onTotalCostChange(amount);
  };

  const handleCurrencyChange = (e) => {
    const selectedCurrency = e.target.value;
    setCurrency(selectedCurrency);
    onCurrencyChange(selectedCurrency);
  };

  const handleCostsChange = (e) => {
    const { name, value } = e.target;
    const newCosts = { ...costs, [name]: parseFloat(value) };
    setCosts(newCosts);
    onCostsChange(newCosts);
  };

  return (
    <form>
      <label>
        Total Project Cost:
        <input type="number" value={totalCost} onChange={handleTotalCostChange} />
      </label>
      <label>
        Currency:
        <select value={currency} onChange={handleCurrencyChange}>
          <option value="USD">USD</option>
          <option value="KES">Kenyan Shilling (KES)</option>
          <option value="EUR">Euro (EUR)</option>
          <option value="GBP">British Pound (GBP)</option>
        </select>
      </label>
      <h3>Cost Breakdown</h3>
      <label>
        Materials:
        <input type="number" name="materials" value={costs.materials} onChange={handleCostsChange} />
      </label>
      <label>
        Transportation:
        <input type="number" name="transportation" value={costs.transportation} onChange={handleCostsChange} />
      </label>
      <label>
        Accommodation:
        <input type="number" name="accommodation" value={costs.accommodation} onChange={handleCostsChange} />
      </label>
      <label>
        Labour:
        <input type="number" name="labour" value={costs.labour} onChange={handleCostsChange} />
      </label>
    </form>
  );
}

export default CostForm;
