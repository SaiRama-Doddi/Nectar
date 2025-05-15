import React, { useState } from 'react';
import { FaSearch, FaSignInAlt } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();



   const handleLoginClick = () => {
    navigate("/login"); // Navigate to mobile login page
  };

  return (
    <header className="bg-[#53B175] text-green-900 py-4 shadow-md">
      {/* Top Section */}

      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row sm:items-center justify-between space-y-2 sm:space-y-0">
        <div className="text-center sm:text-left w-full sm:w-auto">
          <h1 className="text-2xl font-bold text-white font-Poppins">Nectar</h1>
        </div>
        <div className="flex justify-center sm:justify-end w-full sm:w-auto">
          <button
            className="flex items-center space-x-2 bg-white text-[#53B175] font-medium px-4 py-2 rounded-full shadow hover:bg-green-50 transition duration-200 cursor-pointer"
            onClick={handleLoginClick}
          >
            <FaSignInAlt />
            <span>Login</span>
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center items-center px-4 mt-4">
        <div className="flex items-center bg-white rounded-full px-4 py-2 w-full max-w-xl shadow">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search Store"
            className="bg-transparent outline-none w-full text-gray-800 placeholder-gray-400"
          />
        </div>
      </div>
\
  
    </header>
  );
};

export default Header;
