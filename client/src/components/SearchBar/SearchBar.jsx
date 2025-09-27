import React from "react";
import { HiLocationMarker } from "react-icons/hi";

const SearchBar = ({ filter, setFilter, onSearch }) => {
  return (
    <div className="flexCenter search-bar">
      <HiLocationMarker color="var(--blue)" size={25} />
      <input
        placeholder="Search by title/city/country..."
        type="text"
        value={filter || ""} // Ensure default value is an empty string
        onChange={(e) => setFilter(e.target.value)}
      />
      <button className="button" onClick={onSearch}>Search</button> {/* Add onClick handler */}
    </div>
  );
};

export default SearchBar;
