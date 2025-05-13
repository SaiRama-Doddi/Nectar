import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Component/Navbar'; // Import your Navbar component
import { FaPlus } from 'react-icons/fa';
import { useCart } from '../Context/CartContext'; // already imported

const CategoryProducts = () => {
  const { category } = useParams(); // Get category from URL
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error("Error fetching category products", err));
  }, [category]);

  return (
    <div className="px-4 py-6">
      <h2 className="text-2xl font-bold mb-4 capitalize font-Poppins text-green-800">
        {category}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow p-3 hover:shadow-lg transition"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
               className="w-1/2 h-24 object-cover rounded mb-2"
            />
            <h3 className="text-sm font-semibold truncate">{product.title}</h3>
            <p className="text-xs text-green-700 font-bold">${product.price}</p>
        <div className="mt-auto flex justify-between items-center">
                        <p className="text-[10px] text-gray-600">⭐ {product.rating}</p>
                        <button className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg text-[10px] cursor-pointer" onClick={() => addToCart(product)}>
                          <FaPlus className="text-[15px]" />
                        </button>
                      </div>
          </div>
        ))}
      </div>

       {/* Fixed Bottom Navbar */}
      <div className="fixed bottom-0 left-0 w-full z-50 bg-white shadow-md">
        <Navbar />
      </div>
    </div>
  );
};

export default CategoryProducts;
