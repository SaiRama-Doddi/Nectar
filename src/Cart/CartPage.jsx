import React from "react";
import { FaTrash } from "react-icons/fa";
import Navbar from "../Component/Navbar";
import { useCart } from '../Context/CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  return (
    <div className="w-full px-4 py-6">
      <h2 className="text-2xl font-bold mb-4 font-Poppins">Your Cart</h2>

      {cartItems.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white p-3 rounded-lg shadow">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-32 object-cover rounded mb-2"
                />
                <h3 className="text-sm font-semibold truncate">{item.title}</h3>
                <p className="text-xs text-green-700 font-bold">${item.price}</p>
                <button
                  className="bg-red-600 text-white p-2 rounded-lg text-[10px] mt-2"
                  onClick={() => removeFromCart(item.id)}
                >
                  <FaTrash className="text-[15px]" />
                </button>
              </div>
            ))}
          </div>

          <div className="text-right mt-6">
            <button
              onClick={clearCart}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
              Clear Cart
            </button>
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
      )}

      {/* Fixed Bottom Navbar */}
      <div className="fixed bottom-0 left-0 w-full z-50 bg-white shadow-md">
        <Navbar />
      </div>
    </div>
  );
};

export default CartPage;
