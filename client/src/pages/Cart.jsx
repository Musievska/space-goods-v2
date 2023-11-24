import { useState, useEffect } from "react";
import { toast } from 'react-toastify';


import { CartCard } from "../ui/CartCard";
import { PurchaseResume } from "../ui/PurchaseResume";
import { CartSkeleton } from "../ui/CartSkeleton";

export const Cart = () => {
  const [cartItems, setCartItems] = useState(undefined);

  useEffect(() => {
    // Load cart items from local storage
    const savedCartItems = JSON.parse(localStorage.getItem('cart'));
    setCartItems(savedCartItems || []); // Update cartItems state
  }, []);

  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
  };

  const handleQuantityChange = (itemId, delta) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === itemId) {
        const updatedQuantity = Math.max(item.quantity + delta, 0);

        if (delta > 0) {
          toast.success(`Increased quantity of ${item.name}`, { position: "top-right" });
        } else {
          toast.success(`Decreased quantity of ${item.name}`, { position: "top-right" });
        }

        return { ...item, quantity: updatedQuantity };
      }
      return item;
    });

    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };

  if (!cartItems) {
    return <CartSkeleton />; // Render skeleton if cartItems is undefined
  }
  
  return (
    <div className="flex flex-col md:flex-row w-full h-full px-6 py-3 justify-center">
      {cartItems.length > 0 ? (
        <>
          <div className="w-full flex flex-col h-fit gap-4 p-4">
            <p className="text-red-500 text-xl font-extrabold">My Cart</p>
            {cartItems.map((product) => (
              <CartCard
                key={product.id}
                product={product}
                onRemove={handleRemoveItem}
                onQuantityChange={handleQuantityChange}
              />
            ))}
          </div>
          <PurchaseResume cartItems={cartItems} />
        </>
      ) : (
        <p className="text-center text-xl">No items in cart.</p>
      )}
    </div>
  );
};
