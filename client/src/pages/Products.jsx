import { useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { ProductCard } from "../components/ProductCard";
import { ProductCardSkeleton } from "../ui/ProductCardSkeleton";
import { getProducts } from "../service";
import { Pagination } from "../components/Pagination";
import { useProductFilters } from "../hooks/useProductFilters";
import { FilterProducts } from "../components/FilterProducts";
import { SearchBar } from "../components/SearchBar";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const { filters, updateFilters } = useProductFilters();

  useEffect(() => {
    loadProducts();
  }, [filters]);

  const loadProducts = async () => {
    setIsLoading(true);
    try {
      const response = await getProducts(
        filters.page,
        filters.category,
        filters.sort,
        filters.search
      );
      if (response && response.products) {
        setProducts(response.products);
        setTotalPages(response.totalPages);
      } else {
        setError("Unexpected response format from API");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const clearFilters = () => {
    updateFilters({
      page: 1,
      category: "",
      sort: "",
      search: "",
    });
  };

  let searchDebounceTimeout;

  const handleSearch = (query) => {
    clearTimeout(searchDebounceTimeout);
    searchDebounceTimeout = setTimeout(() => {
      updateFilters({ ...filters, search: query, page: 1 });
    }, 1000);
  };

  const handlePaginationChange = (newPage) => {
    updateFilters({ page: newPage });
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10 justify-items-center">
        {new Array(6).fill(0).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="flex p-10 justify-center ">
        <SearchBar
          className="search-bar"
          onSearch={handleSearch}
          initialQuery={filters.search}
        />
      </div>
      <div className="flex p-4 justify-center md:justify-end justify-tems-center gap-3 rounded-lg">
        <FilterProducts
          className="filter-products"
          updateFilters={updateFilters}
          currentFilters={filters}
        />
        <button onClick={clearFilters} className="clear-filters-btn justify-center">
          <XMarkIcon className="text-red-500 h-8 w-8 justify-center" />
        </button>
      </div>
      {products.length === 0 && (
        <div className="no-results-message">
          No results found for "{filters.search}"
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10 justify-items-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={filters.page}
        onPageChange={handlePaginationChange}
      />
    </>
  );
};
