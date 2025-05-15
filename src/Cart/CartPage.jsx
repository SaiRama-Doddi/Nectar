import React from "react";
import { FaTrash } from "react-icons/fa";
import Navbar from "../Component/Navbar";
import { useCart } from '../Context/CartContext';
import Header from "../Component/Header";

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  return (
        <div className="h-screen flex flex-col relative bg-gray-100">
          <Header />
    <div className="w-full px-4 py-6 overflow-y-auto h-[calc(100vh-150px)] scrollbar-hide">
  
      <h2 className="text-2xl font-bold mb-4 font-Poppins">Your Cart</h2>

      {cartItems.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cartItems.map((item) => (
              <div key={item.id} className=" flex flex-row bg-white p-3 rounded-lg shadow">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-1/2 h-32 object-cover rounded mb-2"
                />
                <div className="flex flex-col justify-between ml-2">
               <h3 className="text-sm font-semibold truncate">{item.title}</h3>
                <p className="text-xs text-green-700 font-bold">${item.price}</p>
              <button
  onClick={() => removeFromCart(item.id)}
  className="flex items-center bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded text-[10px] mt-1 transition-all duration-150"
>
  <FaTrash className="text-xs mr-1" />
  Remove
</button>



                </div>
               
              </div>
            ))}
          </div>

          <div className="text-right mt-6">
            <button
              onClick={clearCart}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
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
 </div>
  );
};

export default CartPage;
