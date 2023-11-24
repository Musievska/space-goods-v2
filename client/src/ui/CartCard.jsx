import { TrashIcon } from "@heroicons/react/24/outline";

import { ProductImage } from "./ProductImage";

export const CartCard = ({ product, onRemove, onQuantityChange }) => {
  return (
    <div className="flex flex-col p-4 text-lg font-semibold shadow-md border rounded-sm">
      <div className="flex flex-col md:flex-row gap-3 justify-between">
        {/* Product Information */}
        <div className="flex flex-row gap-6 items-center">
          <div className="w-28 h-28">
            <ProductImage
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-lg text-gray-800 font-semibold">
              {product.name}
            </p>
          </div>
        </div>
        {/* Price Information */}
        <div className="self-center text-center">
          <p className="text-gray-800 font-normal text-xl">${product.price}</p>
        </div>
        {/* Remove Product Icon */}
        <div className="self-center">
          <button
            onClick={() => onRemove(product.id)}
            className="text-red-500 hover:text-red-700"
          >
            <TrashIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
      {/* Product Quantity */}
      <div className="flex items-center self-center gap-1">
        <button
          className="cart-quantity-button"
          onClick={() => onQuantityChange(product.id, -1)}
        >
          &#8722; {/* Minus sign */}
        </button>
        <input
          type="text"
          readOnly
          value={product.quantity}
          className="w-10 h-10 text-center text-black text-sm outline-none border border-black rounded-sm"
        />
        <button
          className="cart-quantity-button"
          onClick={() => onQuantityChange(product.id, 1)}
        >
          &#43; {/* Plus sign */}
        </button>
      </div>
    </div>
  );
};
