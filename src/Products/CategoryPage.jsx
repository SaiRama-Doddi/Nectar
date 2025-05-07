import React, { useEffect, useState } from 'react';

// Optional: Define a palette of light background Tailwind classes
const bgColors = [
  'bg-red-100',
  'bg-green-100',
  'bg-blue-100',
  'bg-yellow-100',
  'bg-purple-100',
  'bg-pink-100',
  'bg-orange-100',
  'bg-teal-100',
];

const CategoryPage = () => {
  const [uniqueCategories, setUniqueCategories] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => {
        const seen = new Set();
        const unique = [];

        data.products.forEach((product) => {
          if (!seen.has(product.category)) {
            seen.add(product.category);
            unique.push(product);
          }
        });

        setUniqueCategories(unique);
      })
      .catch((err) => console.error("Error fetching categories", err));
  }, []);

  return (
    <div className="w-full px-4 py-6">
      <h2 className="text-xl font-bold mb-4 font-Poppins">Categories</h2>

      <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
        {uniqueCategories.map((item, index) => (
          <div
            key={item.category}
            className={`min-w-[30%] sm:min-w-[45%] md:min-w-[200px] flex rounded-lg shadow p-3 items-center ${bgColors[index % bgColors.length]}`}
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-16 h-16 object-cover rounded mr-4"
            />
            <div>
              <h3 className="hidden md:block text-sm font-semibold capitalize">{item.category}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
