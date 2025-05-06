import React, { useEffect, useState } from 'react';

const GroceryProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/groceries?limit=10")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="px-4 py-6">
      <h2 className="text-xl font-bold mb-4">Groceries</h2>

      <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-[45%] sm:w-[45%] md:w-[220px] flex-shrink-0 bg-white border rounded-lg shadow p-3"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-32 object-cover rounded mb-2"
            />
            <h3 className="text-sm font-semibold truncate">{product.title}</h3>
            <p className="text-xs text-green-600 font-bold">${product.price}</p>
            <p className="text-xs text-gray-600">Brand: {product.brand}</p>
            <p className="text-xs text-gray-600">Rating: {product.rating} ⭐</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroceryProducts;
