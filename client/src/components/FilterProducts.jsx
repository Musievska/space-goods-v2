import { FilterDropdown } from "../ui/FilterDropdown";
import { useCategoryOptions, useSortOptions } from "../utils/filterOptions";

export const FilterProducts = ({ updateFilters, currentFilters }) => {
  const categoryOptions = useCategoryOptions();
  const sortOptions = useSortOptions();

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
        value={currentFilters.category} 
        onChange={handleCategoryChange}
      />
      <FilterDropdown
        options={sortOptions}
        value={currentFilters.sort} 
        onChange={handleSortChange}
      />
    </>
  );
};
