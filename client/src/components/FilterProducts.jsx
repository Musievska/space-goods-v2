import { FilterDropdown } from "../ui/FilterDropdown";
import { categoryOptions, sortOptions } from "../utils/filterOptions";

export const FilterProducts = ({ updateFilters, currentFilters }) => {
  
  const handleCategoryChange = (event) => {
    updateFilters({ category: event.target.value, page: 1 });
  };

  const handleSortChange = (event) => {
    updateFilters({ sort: event.target.value, page: 1 });
  };

  return (
    <>
      <FilterDropdown
        options={categoryOptions}
        value={currentFilters.category} // Add this
        onChange={handleCategoryChange}
      />
      <FilterDropdown
        options={sortOptions}
        value={currentFilters.sort} // Add this
        onChange={handleSortChange}
      />
    </>
  );
};
