import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useProductFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    page: parseInt(searchParams.get('page')) || 1,
    category: searchParams.get('category') || '',
    sort: searchParams.get('sort') || '',
    search: searchParams.get('search') || '',
  });

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    if (JSON.stringify(filters) !== JSON.stringify(currentParams)) {
      const params = new URLSearchParams();
      Object.keys(filters).forEach(key => {
        if (filters[key]) {
          params.set(key, filters[key]);
        } else {
          params.delete(key);
        }
      });
      setSearchParams(params);
    }
  }, [filters, setSearchParams]);

  const updateFilters = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  return { filters, updateFilters };
};
