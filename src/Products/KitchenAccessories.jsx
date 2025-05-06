import React, { useEffect, useState } from 'react';

const KitchenAccessories = () => {
  const [products, setProducts] = useState([]);
 
   useEffect(() => {
     fetch("https://dummyjson.com/products/category/kitchen-accessories?limit=10")
       .then((res) => res.json())
       .then((data) => {
         setProducts(data.products);
       })
       .catch((error) => console.error("Error fetching data:", error));
   }, []);
 
   return (
     <div className="w-full px-4 py-6">
       <h2 className="text-lg font-bold mb-4">kitchen-accessories</h2>
 
       <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
         {products.map((product) => (
           <div
             key={product.id}
             className="w-[48%] sm:w-[48%] md:w-[200px] flex-shrink-0 bg-white border-gray-400 rounded-lg shadow p-3"
           >
             <img
               src={product.thumbnail}
               alt={product.title}
               className="w-full h-32 object-cover rounded mb-2"
             />
             <h3 className="text-sm font-semibold truncate">{product.title}</h3>
             <p className="text-xs text-green-700 font-bold">${product.price}</p>
             <p className="text-xs text-gray-600">Rating: {product.rating} ⭐</p>
           </div>
         ))}
       </div>
     </div>
   );
}

export default KitchenAccessories