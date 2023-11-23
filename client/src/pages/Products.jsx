import { useEffect, useState } from "react";

import { ProductCard } from "../components/ProductCard";
import { ProductCardSkeleton } from "../ui/ProductCardSkeleton";
import { getProducts } from "../service";

export const Products = () => {
  const [products, setProducts] = useState([]); // Placeholder for 6 products
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

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
    <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10 justify-items-center">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} isLoading={isLoading} />
      ))}
    </div>
  );
};
