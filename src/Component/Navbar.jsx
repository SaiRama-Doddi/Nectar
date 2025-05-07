import React from 'react';
import { FaShoppingBag, FaShoppingCart, FaHeart, FaUser } from 'react-icons/fa';

const navItems = [
  { id: 'shop', label: 'Shop', icon: <FaShoppingBag />, active: true },
  { id: 'cart', label: 'Cart', icon: <FaShoppingCart /> },
  { id: 'favourite', label: 'Favourite', icon: <FaHeart /> },
  { id: 'account', label: 'Account', icon: <FaUser /> },
];

const Navbar = () => {
  return (
    <nav className="w-full px-4 py-2">
      <div className="flex flex-row sm:flex-row sm:justify-between md:justify-center md:space-x-10 items-center">
        {navItems.map((item) => (
          <div
            key={item.id}
            className={`flex flex-col items-center justify-center px-4 py-2 rounded-md transition-all duration-200 ${
              item.active
                ? 'bg-[#53B175] bg-green-100'
                : 'text-gray-600 hover:text-green-500 hover:bg-gray-100'
            } w-full sm:w-auto`}
          >
            <div className="text-xl mb-1">{item.icon}</div>
            <span className="text-sm font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
