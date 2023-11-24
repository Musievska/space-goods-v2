import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getProductById } from "../service";
import { Promo } from "../ui/Promo";
import { ProductImage } from "../ui/ProductImage";
import { ProductIdSkeleton } from "../ui/ProductIdSkeleton";
import { AddToCartButton } from "../components/AddToCartButton";
import { AddToWishlistButton } from "../components/AddToWishlistButton";
import { NoUserModal } from "../ui/NoUserModal";

export const ProductId = () => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchProduct = async () => {
    setIsLoading(true);
    try {
      const data = await getProductById(id);
      setProduct(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleWishlistClick = () => {
    console.log('Wishlist button clicked');
    setIsModalOpen(true);
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (isLoading) return <ProductIdSkeleton />;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container mx-auto px-5 py-24">
        <div className="flex flex-wrap -mx-4">
          <div className="lg:w-1/2 w-full px-0">
            <ProductImage
              src={product.imageUrl}
              alt={product.name}
              className="max-w-full h-auto object-contain mx-auto"
            />
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 px-4">
            <h1 className="text-3xl title-font font-medium text-gray-900 mb-1 text-center">
              {product.name}
            </h1>
            <p className="leading-relaxed mb-4 text-center">
              {product.description}
            </p>
            <div className="flex flex-wrap items-center justify-center mb-5">
              <span className="title-font font-medium text-2xl text-gray-900">
                💲{product.price}
              </span>
              <span className="title-font font-medium text-2xl text-gray-900 ml-4">
                ⭐ {product.rating}
              </span>
            </div>
            <div className="flex items-center justify-center gap-8">
              {/* Add buttons and icons as needed */}
              <>
                <AddToCartButton product={product} />
                {""}
                <AddToWishlistButton
                  onClick={handleWishlistClick}
                  product={product}
                />
                <NoUserModal
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                />{" "}
              </>
            </div>
          </div>
        </div>
      </div>
      <Promo />
    </section>
  );
};
