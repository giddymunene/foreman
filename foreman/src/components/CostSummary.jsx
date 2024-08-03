import React from 'react';

function CostSummary({ site, totalCost, costs = { materials: 0, transportation: 0, accommodation: 0, labour: 0 }, currency, warning }) {
  const totalUsed = Object.values(costs).reduce((a, b) => a + b, 0);

  return (
    <div className="summary">
      <h2>Summary for {site}</h2>
      <p>Total Cost: {totalCost} {currency}</p>
      <p>Materials: {costs.materials} {currency}</p>
      <p>Transportation: {costs.transportation} {currency}</p>
      <p>Accommodation: {costs.accommodation} {currency}</p>
      <p>Labour: {costs.labour} {currency}</p>
      <p>Total Used: {totalUsed} {currency}</p>
      {warning && <p className="warning">Warning: 60% of the total cost has been used!</p>}
    </div>
  );
}

export default CostSummary;
