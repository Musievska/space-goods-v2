import { ShoppingCartIcon, HeartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { IMAGE_URL, NO_IMAGE } from "../constants";

export const ProductCard = ({ product }) => {
  const productImage = product.imageUrl
    ? `${IMAGE_URL}${product.imageUrl}`
    : NO_IMAGE;

  const handleImageError = (e) => {
    if (e.target.src !== `${IMAGE_URL}${NO_IMAGE}`) {
      e.target.src = NO_IMAGE;
    }
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md w-72 h-96">
      <div>
        <Link to={`/products/${product.id}`}>
          <img
            src={productImage}
            alt={product.name}
            className="product-image max-w-full h-48 object-contain mx-auto cursor-pointer"
            crossOrigin="anonymous"
            loading="lazy"
            onError={handleImageError}
          />
        </Link>
        <div className="p-2 text-center justify-center">
          <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
          <p className="font-bold mb-2">💲{product.price}</p>
          <p className="mb-2 justify-center">⭐ {product.rating}</p>
        </div>
        <div className="flex justify-center mb-4">
          <ShoppingCartIcon className="ml-1 w-8 h-8 text-red-500 hover:animate-bounce" />
          <HeartIcon className="ml-1 w-8 h-8 text-red-500 hover:animate-bounce" />
        </div>
      </div>
    </div>
  );
};
