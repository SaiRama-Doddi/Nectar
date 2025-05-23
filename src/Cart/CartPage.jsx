import React from "react";
import { FaTrash } from "react-icons/fa";
import Navbar from "../Component/Navbar";
import { useCart } from '../Context/CartContext';
import Header from "../Component/Header";
import { FaPlus,FaMinus } from 'react-icons/fa';
import { useAuth } from '../Context/CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart ,increaseQuantity, decreaseQuantity, getQuantity} = useCart();
  const { user, isLoggedIn } = useAuth();
  
  


  return (
        <div className="h-screen flex flex-col relative bg-gray-100">
          <Header />
    <div className="w-full px-4 py-6 overflow-y-auto h-[calc(100vh-300px)] scrollbar-hide">
{isLoggedIn && user && (
  <div className="mb-6 p-4 bg-white rounded-lg shadow-md border text-gray-800">
    <div className="flex justify-between items-center mb-4">
    <h3 className="text-lg font-semibold mb-3 text-[#53B175]">Shipping Address</h3>
    <button
             
                className="text-green-600 hover:text-green-800"
       
              >
                <FaPlus />
              </button> 
    </div>

    <div className="space-y-1 flex gap-3">
      
  {/*     <p>{user.name || 'N/A'}</p> */}
      <p> {user.address || 'N/A'}</p>
      <p> {user.landmark || 'N/A'}</p>
      <p> {user.state || 'N/A'}</p>
      <p> {user.pincode || 'N/A'}</p>
    </div>
  </div>
)}

      <h2 className="text-2xl font-bold mb-4 font-Poppins">Your Cart</h2>

      {cartItems.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
       {cartItems.map((item) => (
  <div key={item.id} className="flex flex-row bg-white p-3 rounded-lg shadow">
    <img
      src={item.thumbnail}
      alt={item.title}
      className="w-1/2 h-32 object-cover rounded mb-2"
    />
    <div className="flex flex-col justify-between ml-2 w-full">
      <div>
        <h3 className="text-sm font-semibold truncate">{item.title}</h3>
        <p className="text-xs text-green-700 font-bold">${item.price}</p>
      </div>

      <div className="flex items-center space-x-1 mt-2">
        <button
            className="bg-red-500  text-white p-2 rounded-lg text-[10px] cursor-pointer"
          onClick={() => decreaseQuantity(item.id)}
          disabled={item.quantity <= 1}
        >
                   <FaMinus className="text-[10px]" />
        </button>

        <span className="text-sm font-bold w-6 text-center">
          {item.quantity}
        </span>

        <button
      
         className="bg-green-600 text-white p-2 rounded-lg text-[10px] cursor-pointer"
                                        
          onClick={() => increaseQuantity(item.id)}
          disabled={item.quantity >= 8}
        >
             <FaPlus className="text-[10px]" />
        </button>
      </div>

      <button
        onClick={() => removeFromCart(item.id)}
        className="flex items-center text-white px-2 py-1 rounded text-[10px] mt-2 transition-all duration-150 w-fit"
      >
        <FaTrash className="text-xs mr-1 h-4 w-4 text-red-600" />
  
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
