import React, { useState } from 'react';

function GifSearch({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Search Giphy:
        <input type="text" value={searchTerm} onChange={handleChange} />
      </label>
      <button type="submit">Search</button>
    </form>
  );
}

export default GifSearch;
