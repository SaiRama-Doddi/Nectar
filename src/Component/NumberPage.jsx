import React from "react";
import Image from "../assets/Mask Group.png";

const NumberPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="flex flex-col md:flex-row items-center justify-center bg-white shadow-lg rounded-xl overflow-hidden w-full max-w-4xl">
        
        {/* Image section - always visible and stacked on mobile */}
        <div className="w-full md:w-1/2">
          <img
            src={Image}
            alt="Banner"
            className="object-cover w-full h-64 md:h-full"
          />
        </div>

        {/* Form section */}
        <div className="w-full md:w-1/2 p-8">
          <p className="text-2xl font-semibold text-gray-800 mb-2 text-center">
            Get your Groceries with nectar
          </p>

          <input
            type="number"
            placeholder="Enter your number"
            min="1000000000"
            max="9999999999"
            className="mt-8 w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <p className="text-gray-500 mb-4 text-center mt-6">
            or connect with social media
          </p>

          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition duration-200">
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default NumberPage;
