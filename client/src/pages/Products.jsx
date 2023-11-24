import { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { ProductCardSkeleton } from "../ui/ProductCardSkeleton";
import { getProducts } from "../service";
import { Promo } from "../ui/Promo";
// import { Pagination } from "../components/Pagination";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(0); // Assuming your API provides this information

  const loadProducts = async () => {
    setIsLoading(true);
    try {
        const response = await getProducts();
        console.log('API Response:', response); // Log the full response

        // Assuming the response itself is the array of products
        if (response && Array.isArray(response)) {
            setProducts(response);
        } else {
            setError("Unexpected response format from API");
        }
    } catch (error) {
        setError(error.message);
    } finally {
        setIsLoading(false);
    }
};

  
  useEffect(() => {
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
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10 justify-items-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Promo />
      {/* <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} /> */}
    </>
  );
};
