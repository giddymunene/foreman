import React, { useState } from 'react';
import SiteForm from './components/SiteForm';
import CostForm from './components/CostForm';
import CostSummary from './components/CostSummary';
import './App.css';

function App() {
  const [site, setSite] = useState('');
  const [totalCost, setTotalCost] = useState(0);
  const [currency, setCurrency] = useState('USD');
  const [costs, setCosts] = useState({
    materials: 0,
    transportation: 0,
    accommodation: 0,
    labour: 0
  });

  const handleSiteChange = (name) => {
    setSite(name);
  };

  const handleTotalCostChange = (amount) => {
    setTotalCost(amount);
  };

  const handleCurrencyChange = (selectedCurrency) => {
    setCurrency(selectedCurrency);
  };

  const handleCostsChange = (newCosts) => {
    setCosts(newCosts);
  };

  const totalUsed = Object.values(costs).reduce((a, b) => a + b, 0);
  const warning = totalUsed / totalCost >= 0.6;

  return (
    <div className="App">
      <h1>Construction Cost Tracker</h1>
      <SiteForm onSiteChange={handleSiteChange} />
      <CostForm
        onTotalCostChange={handleTotalCostChange}
        onCurrencyChange={handleCurrencyChange}
        onCostsChange={handleCostsChange}
      />
      <CostSummary
        site={site}
        totalCost={totalCost}
        costs={costs}
        currency={currency}
        warning={warning}
      />
    </div>
  );
}

export default App;
