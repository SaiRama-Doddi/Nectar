import React, { useState, useEffect } from "react";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import Navbar from "../Component/Navbar";
import Header from "../Component/Header";
import { useCart } from '../Context/CartContext';
import { useAuth } from '../Context/CartContext';
import axios from "axios";

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = useCart();
  const { user, isLoggedIn } = useAuth();

  const [workAddresses, setWorkAddresses] = useState([]);
  const [selectedAddressType, setSelectedAddressType] = useState("home");

  const [form, setForm] = useState({
    address: "",
    landmark: "",
    state: "",
    pincode: ""
  });

  // Fetch work addresses
  const fetchWorkAddresses = async () => {
    try {
      if (user?.id) {
        const res = await axios.get(`http://localhost:5000/address/${user.id}`);
        setWorkAddresses(res.data.addresses || []);
      }
    } catch (err) {
      console.error("Error fetching addresses:", err);
    }
  };

  useEffect(() => {
    fetchWorkAddresses();
  }, [user]);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddressSubmit = async () => {
    try {
      if (!form.address || !user?.id) return;
      const res = await axios.post(`http://localhost:5000/address/${user.id}`, form);
      alert("Work address added!");
      setForm({ address: "", landmark: "", state: "", pincode: "" });
      setSelectedAddressType(`work-${res.data.id}`);
      fetchWorkAddresses();
    } catch (err) {
      console.error("Failed to save address:", err);
    }
  };

  const getSelectedAddress = () => {
    if (selectedAddressType === "home") {
      return {
        label: "Home Address",
        full: `${user.address}, ${user.landmark}, ${user.state} - ${user.pincode}`
      };
    } else if (selectedAddressType.startsWith("work-")) {
      const id = parseInt(selectedAddressType.split("-")[1]);
      const work = workAddresses.find(addr => addr.id === id);
      if (work) {
        return {
          label: "Work Address",
          full: `${work.address}, ${work.landmark}, ${work.state} - ${work.pincode}`
        };
      }
    }
    return null;
  };

  const selected = getSelectedAddress();

  return (
    <div className="h-screen flex flex-col relative bg-gray-100">
      <Header />
  <div className="flex justify-center items-center px-4 lg:px-0 mt-10">
  <div className="w-full max-w-6xl px-4 py-6 overflow-y-auto h-[calc(100vh-270px)] scrollbar-hide  rounded-lg ">
 
    <h2 className="text-2xl font-bold mb-4 font-Poppins">Your Cart</h2>
 
    {cartItems.length > 0 ? (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex flex-row bg-white p-3 rounded-lg shadow">
             <img
  src={item.thumbnail}
  alt={item.title}
  className="w-2/5 h-32 object-cover rounded"
/>
<div className="flex flex-col justify-between ml-4 w-3/5">

                <div>
                  <h3 className="text-sm font-semibold truncate">{item.title}</h3>
                  <p className="text-xs text-green-700 font-bold">${item.price}</p>
                </div>

                <div className="flex items-center space-x-1 mt-2">
                  <button
                    className="bg-red-400 text-white p-2 rounded-lg text-[10px]"
                    onClick={() => decreaseQuantity(item.id)}
                    disabled={item.quantity <= 1}
                  >
                    <FaMinus />
                  </button>
                  <span className="text-sm font-bold w-6 text-center">{item.quantity}</span>
                  <button
                    className="bg-green-600 text-white p-2 rounded-lg text-[10px]"
                    onClick={() => increaseQuantity(item.id)}
                    disabled={item.quantity >= 8}
                  >
                    <FaPlus />
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="flex items-center text-white px-2 py-1 rounded text-[10px] mt-2"
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
      <p>Your cart is empty</p>
    )}
        {isLoggedIn && user && (
      <div className="mb-6 p-4  text-gray-800 mt-2">
        <h3 className="text-lg font-semibold text-[#53B175] mb-2">Delivery Address</h3>

        <div className="mb-3 space-y-2">
          {user.address && (
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="addressType"
                value="home"
                checked={selectedAddressType === "home"}
                onChange={(e) => setSelectedAddressType(e.target.value)}
              />
              <span>
                Home: {user.address}, {user.landmark}, {user.state} - {user.pincode}
              </span>
            </label>
          )}

          {workAddresses.map((addr) => (
            <label key={addr.id} className="flex items-center space-x-2">
              <input
                type="radio"
                name="addressType"
                value={`work-${addr.id}`}
                checked={selectedAddressType === `work-${addr.id}`}
                onChange={(e) => setSelectedAddressType(e.target.value)}
              />
              <span>
                Work: {addr.address}, {addr.landmark}, {addr.state} - {addr.pincode}
              </span>
            </label>
          ))}

        <div className="mt-4 space-y-2">
  <p className="text-sm text-gray-600 font-medium">Add New Work Address</p>

  {/* Row 1: Address and Landmark */}
  <div className="flex gap-4">
    <input
      type="text"
      name="address"
      placeholder="Address"
      value={form.address}
      onChange={handleInputChange}
      className="w-1/2 p-2 border rounded"
    />
    <input
      type="text"
      name="landmark"
      placeholder="Landmark"
      value={form.landmark}
      onChange={handleInputChange}
      className="w-1/2 p-2 border rounded"
    />
  </div>

  {/* Row 2: State and Pincode */}
  <div className="flex gap-4">
    <input
      type="text"
      name="state"
      placeholder="State"
      value={form.state}
      onChange={handleInputChange}
      className="w-1/2 p-2 border rounded"
    />
    <input
      type="text"
      name="pincode"
      placeholder="Pincode"
      value={form.pincode}
      onChange={handleInputChange}
      className="w-1/2 p-2 border rounded"
    />
  </div>

  {/* Submit Button */}
  <button
    onClick={handleAddressSubmit}
    className="bg-green-500 text-white px-4 py-2 rounded mt-2"
  >
    Save Work Address
  </button>
</div>

          {selected && (
            <div className="mt-4 text-sm text-gray-700">
              <p className="font-semibold">Deliver to: {selected.label}</p>
              <p>{selected.full}</p>
            </div>
          )}
        </div>
      </div>
    )}

  </div>
</div>


      {/* Fixed Bottom Navbar */}
      <div className="fixed bottom-0 left-0 w-full z-50 bg-white shadow-md">
        <Navbar />
      </div>
    </div>
  );
};

export default CartPage;
