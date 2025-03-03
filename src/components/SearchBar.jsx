import React from "react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search"
      />
    </div>
  );
};

export default SearchBar;
