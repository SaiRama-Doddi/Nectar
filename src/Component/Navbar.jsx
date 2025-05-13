// Navbar.jsx
import React from 'react';
import { FaShoppingBag, FaShoppingCart, FaHeart, FaUser } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../Context/CartContext'; // ✅ Import useCart

const navItems = [
  { id: 'shop', label: 'Shop', icon: <FaShoppingBag />, path: '/dashboard' },
  { id: 'cart', label: 'Cart', icon: <FaShoppingCart />, path: '/cart' },
  { id: 'favourite', label: 'Favourite', icon: <FaHeart />, path: '/favourite' },
  { id: 'account', label: 'Account', icon: <FaUser />, path: '/account' },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItems } = useCart(); // ✅ Use context

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="w-full px-4 py-2">
      <div className="flex flex-row sm:justify-between md:justify-center md:space-x-10 items-center">
        {navItems.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(item.path)}
            className={`relative flex flex-col items-center justify-center px-4 py-2 rounded-md transition-all duration-200 cursor-pointer w-full sm:w-auto ${
              isActive(item.path)
                ? 'bg-[#53B175] bg-green-100 text-green-600'
                : 'text-gray-600 hover:text-green-500 hover:bg-gray-100'
            }`}
          >
            <div className="text-xl mb-1 relative">
              {item.id === 'cart' && cartItems.length > 0 && (
                <sup className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-ping-slow">
                  {cartItems.length}
                </sup>
              )}
              {item.icon}
            </div>
            <span className="text-sm font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
