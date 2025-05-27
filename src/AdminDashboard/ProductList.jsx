import React, { useEffect, useState, Suspense } from 'react';
import Header from '../Component/Header';
import Navbar from '../Component/Navbar';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';



const ProductCard = ({ product }) => (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex space-x-4 items-center">
        <img
            src={product.thumbnail}
            alt={product.title}
            className="w-20 h-20 rounded object-cover flex-shrink-0"
        />
        <div className="flex-grow">
            <h2 className="font-semibold text-lg">{product.title}</h2>
            <p className="text-sm text-gray-600 capitalize">{product.category}</p>
            <p className="text-sm font-semibold mt-1">${product.price}</p>
            <div className="flex space-x-4 mt-1 text-sm text-gray-700">
                <span>Rating: {product.rating}</span>
                <span>Stock: {product.stock}</span>
            </div>
        </div>
        <div className="flex justify-end space-x-4 mt-2">
  <button
    onClick={() => handleEdit(product)}
    className="text-blue-600 hover:text-blue-800"
  >
    <PencilIcon className="h-5 w-5" />
  </button>
  <button
    onClick={() => handleDelete(product.id)}
    className="text-red-600 hover:text-red-800"
  >
    <TrashIcon className="h-5 w-5" />
  </button>
</div>

    </div>
);

const ProductTable = ({ products }) => (
    <div className="overflow-x-auto">
        <div className="h-[550px] overflow-y-auto rounded-lg border border-gray-300 shadow-md bg-white">
            <table className="min-w-full text-sm text-left hidden md:table">
                <thead className="bg-yellow-100 sticky top-0 z-10">
                    <tr>
                        <th className="py-3 px-4 border">Image</th>
                        <th className="py-3 px-4 border">Title</th>
                        <th className="py-3 px-4 border">Category</th>
                        <th className="py-3 px-4 border">Price</th>
                        <th className="py-3 px-4 border">Rating</th>
                        <th className="py-3 px-4 border">Stock</th>
                        <th className="py-3 px-4 border">Actions</th>

                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id} className="hover:bg-red-50 transition">
                            <td className="py-2 px-4 border">
                                <img
                                    src={product.thumbnail}
                                    alt={product.title}
                                    className="w-12 h-12 object-cover rounded"
                                />
                            </td>
                            <td className="py-2 px-4 border">{product.title}</td>
                            <td className="py-2 px-4 border">{product.category}</td>
                            <td className="py-2 px-4 border font-semibold">${product.price}</td>
                            <td className="py-2 px-4 border">{product.rating}</td>
                            <td className="py-2 px-4 border">{product.stock}</td>
                            <td className="py-2 px-4 border space-x-2">
                                <button
                                    onClick={() => handleEdit(product)}
                                    className="text-blue-600 hover:text-blue-800 cursor-pointer"
                                >
                                    <PencilIcon className="h-5 w-5 inline" />
                                </button>
                                <button
                                    onClick={() => handleDelete(product.id)}
                                    className="text-red-600 hover:text-red-800 cursor-pointer"
                                >
                                    <TrashIcon className="h-5 w-5 inline" />
                                </button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Cards for mobile */}
            <div className="md:hidden p-2 overflow-y-auto h-[550px]">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    </div>
);

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const productsPerPage = 20;
    const totalPages = Math.ceil(products.length / productsPerPage);
    const paginatedProducts = products.slice(
        (currentPage - 1) * productsPerPage,
        currentPage * productsPerPage
    );

    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:5000/api/viewproducts')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching products:', err);
                setLoading(false);
            });
    }, []);
const handleEdit = (product) => {
  console.log('Edit product:', product);
  // TODO: Open edit modal or navigate to edit page
};

const handleDelete = (id) => {
  if (window.confirm('Are you sure you want to delete this product?')) {
    console.log('Deleting product with ID:', id);
    // TODO: Call delete API and update state
  }
};

    return (
        <div className="pt-20 pb-24 min-h-screen bg-white relative">
            {/* Fixed Header */}
            <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
                <Header />
            </div>

            <div className="px-4 md:px-8 lg:px-16 mt-26">
                <h1 className="text-2xl md:text-3xl font-bold my-6 text-center">Product List</h1>

                <Suspense fallback={<p className="text-center text-gray-600">Loading products...</p>}>
                    {loading ? (
                        <p className="text-center text-gray-600">Loading...</p>
                    ) : (
                        <ProductTable products={paginatedProducts} />
                    )}
                </Suspense>

                {/* Pagination Controls */}
            <div className="flex justify-center items-center mt-6 space-x-4">
  <button
    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
    disabled={currentPage === 1}
    className="flex items-center px-2 py-2 bg-blue-600 text-white rounded disabled:bg-gray-400 cursor-pointer"
  >
    <ChevronLeftIcon className="h-5 w-5 mr-1" />

  </button>

  <span className="text-gray-700 font-medium">
    Page {currentPage} of {totalPages}
  </span>

  <button
    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
    disabled={currentPage === totalPages}
    className="flex items-center px-2 py-2 bg-green-600 text-white rounded disabled:bg-gray-400 cursor-pointer"
  >

    <ChevronRightIcon className="h-5 w-5 ml-1 " />
  </button>
</div>

            </div>

            {/* Fixed Navbar */}
            <div className="fixed bottom-0 left-0 w-full z-50 bg-white shadow-md">
                <Navbar />
            </div>
        </div>
    );
};

export default ProductList;
