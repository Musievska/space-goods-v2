import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export const SearchBar = ({ onSearch, initialQuery = "" }) => {
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  const handleChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="relative flex w-full max-w-xs">
      <input
        type="text"
        placeholder="Search Space Goods..."
        value={searchQuery}
        onChange={handleChange}
        className="pl-10 pr-4 py-2 border border-red-500 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 w-full"
      />
      <MagnifyingGlassIcon
        className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-red-500"
        style={{ pointerEvents: "none" }} // Prevent the icon from capturing clicks
      />
    </div>
  );
};
