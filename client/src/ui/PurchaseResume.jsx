import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { NoUserModal } from "./NoUserModal";

export const PurchaseResume = ({ cartItems }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.quantity * item.price, 0)
    .toFixed(2);

  const handleCheckout = () => {
    // no user
    setIsModalOpen(true);
  };

  return (
    <div className="w-full md:w-1/2 flex flex-col h-fit gap-4 p-4">
      <p className="text-red-500 text-xl font-extrabold">Purchase Resume</p>
      <div className="flex flex-col p-4 gap-4 text-lg font-semibold shadow-md border rounded-sm">
        <div className="flex flex-row justify-between">
          <p className="text-gray-600">Items</p>
          <p className="text-end font-bold">{totalQuantity}</p>
        </div>
        <hr className="bg-gray-200 h-0.5" />
        <div className="flex flex-row justify-between">
          <p className="text-gray-600">Discount</p>
          {/* Future implementation for discount */}
          <a className="text-gray-500 text-base underline" href="#">
            Add
          </a>
        </div>
        <hr className="bg-gray-200 h-0.5" />
        <div className="flex flex-row justify-between">
          <p className="text-gray-600">Total</p>
          <p className="text-end font-bold">${totalPrice}</p>
        </div>
        <div className="flex gap-2">
          <button
            className="transition-colors text-sm bg-red-600 hover:bg-red-700 p-2 rounded-sm w-full text-white shadow-md"
            onClick={handleCheckout}
          >
            Checkout
          </button>
          <NoUserModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
          <button
            className="transition-colors text-sm bg-gray-200 border border-red-600 p-2 rounded-sm w-full text-gray-700 shadow-md"
            onClick={() => navigate("/products")}
          >
            Add More Products
          </button>
        </div>
      </div>
    </div>
  );
};
