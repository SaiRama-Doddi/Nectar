import React, { useState } from "react";
import axios from "axios";
import Header from "../Component/Header";
import Navbar from "../Component/Navbar";

const UserForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    landmark: "",
    state: "",
    pincode: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/users", form);
      alert("User info submitted successfully!");
      setForm({
        name: "",
        email: "",
        mobile: "",
        address: "",
        landmark: "",
        state: "",
        pincode: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
    <div className=" flex items-center justify-center px-2 py-4 ">
   

      {/* Centered card */}
<div className="w-full max-w-xl rounded-lg p-4 sm:p-6 overflow-y-auto max-h-[calc(100vh-300px)]  scrollbar-hide text-sm">

        <h2 className="text-2xl font-semibold text-gray-800 mb-1 text-center">Shipping Info</h2>
        <p className="text-gray-600 mb-4 text-center">Enter your shipping details to continue.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-3 border-b pb-1">
              Contact Info
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["name", "email", "mobile"].map((field) => (
                <div key={field}>
                  <label className="block text-xs font-medium text-gray-600 capitalize mb-1">
                    {field}
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md px-3 py-1.5 shadow-sm focus:ring-green-500 focus:border-green-500 transition text-sm"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Address Info */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-3 border-b pb-1">
              Address Info
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["address", "landmark", "state", "pincode"].map((field) => (
                <div key={field}>
                  <label className="block text-xs font-medium text-gray-600 capitalize mb-1">
                    {field}
                  </label>
                  <input
                    type="text"
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    required={field === "address"}
                    className="w-full border border-gray-300 rounded-md px-3 py-1.5 shadow-sm focus:ring-green-500 focus:border-green-500 transition text-sm"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white hover:bg-green-700 text-white font-medium py-2 rounded-md transition duration-300 text-sm"
            >
              Continue to Login
            </button>
          </div>
        </form>
      </div>
    </div>

    
      {/* Fixed Bottom Navbar */}
      <div className="fixed bottom-0 left-0 w-full z-50 bg-white shadow-md">
        <Navbar />
      </div>
    </div>
  );
};

export default UserForm;
