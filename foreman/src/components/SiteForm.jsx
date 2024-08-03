import React, { useState } from 'react';

function SiteForm({ onSiteChange }) {
  const [siteName, setSiteName] = useState('');

  const handleChange = (e) => {
    setSiteName(e.target.value);
    onSiteChange(e.target.value);
  };

  return (
    <form>
      <label>
        Site Name:
        <input type="text" value={siteName} onChange={handleChange} />
      </label>
    </form>
  );
}

export default SiteForm;
