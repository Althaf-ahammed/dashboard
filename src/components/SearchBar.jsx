import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <input
      type="text"
      placeholder="Search widgets..."
      value={query}
      onChange={handleSearch}
      className="border rounded-full px-4 py-2 text-sm focus:outline-none"
    />
  );
};

export default SearchBar;
