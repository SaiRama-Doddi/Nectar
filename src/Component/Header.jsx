import React, { useState } from 'react';
import { FaSearch, FaSignInAlt } from 'react-icons/fa';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleLogin = () => {
    console.log('Logging in with mobile number:', mobileNumber);
    closeModal();
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
            onClick={openModal}
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
   {/* Modal */}

{isModalOpen && (
  <div
    className="fixed inset-0 z-20 flex justify-center items-center bg-black/10 backdrop-blur-sm"
    onClick={closeModal} // allow outside click to close
  >
    <div
      className="bg-white p-6 rounded-t-2xl lg:rounded-lg shadow-md w-full sm:w-full md:w-[80%] lg:w-96 transition-all"
      onClick={(e) => e.stopPropagation()} // prevent modal close when clicking inside
    >
      <h2 className="text-lg font-semibold text-center mb-4">
        Login with Mobile Number
      </h2>
      <input
        type="text"
        placeholder="Enter Mobile Number"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md mb-4"
      />
      <button
        className="w-full bg-[#53B175] text-white py-2 rounded-md hover:bg-green-600 transition duration-200 cursor-pointer"
        onClick={handleLogin}
      >
        Log In
      </button>
      <button
        className="mt-4 text-[#53B175] font-medium w-full cursor-pointer"
        onClick={closeModal}
      >
        Close
      </button>
    </div>
  </div>
)}


    </header>
  );
};

export default Header;
