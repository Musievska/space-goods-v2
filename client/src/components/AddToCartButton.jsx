import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { toast } from 'react-toastify';

export const AddToCartButton = ({ product }) => {

  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
      toast.success(`Increased quantity of ${product.name}`, {
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true
      });
    } else {
      cart.push({ ...product, quantity: 1 });
      toast.success(`Added ${product.name} to cart`, {
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <button onClick={addToCart} className="add-to-cart-button">
      <ShoppingCartIcon className="ml-1 h-8 w-8 icon-bounce" />
    </button>
  );
};
