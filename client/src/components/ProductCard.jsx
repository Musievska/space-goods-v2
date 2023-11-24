import { Link } from "react-router-dom";
import { useState } from "react";

import { ProductImage } from "../ui/ProductImage";
import { AddToCartButton } from "../components/AddToCartButton";
import { AddToWishlistButton } from "../components/AddToWishlistButton";
import { NoUserModal } from "../ui/NoUserModal";

export const ProductCard = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleWishlistClick = () => {
    console.log('Wishlist button clicked');

    setIsModalOpen(true);
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md w-72 h-96">
      <div>
        <Link to={`/products/${product.id}`}>
          <ProductImage
            src={product.imageUrl}
            alt={product.name}
            className="product-image max-w-full h-48 object-contain mx-auto cursor-pointer"
          />
        </Link>
        <div className="p-2 text-center justify-center">
          <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
          <p className="font-bold mb-2">💲{product.price}</p>
          <p className="mb-2 justify-center">⭐ {product.rating}</p>
        </div>
        <div className="flex justify-center mb-4 gap-6">
          <AddToCartButton product={product} />
          <AddToWishlistButton
            onClick={handleWishlistClick}
          />
          <NoUserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
        </div>
      </div>
    </div>
  );
};
