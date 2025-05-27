import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../Component/Header';
import Navbar from '../Component/Navbar';

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  const handleCancel = () => {
    navigate(`/viewproducts`);
  };

  const [form, setForm] = useState({
    title: '',
    category: '',
    price: '',
    rating: '',
    stock: '',
    thumbnail: ''
  });

  useEffect(() => {
    fetch(`http://localhost:5000/api/viewproducts`)
      .then(res => res.json())
      .then(data => {
        const existing = data.find(p => p.id === parseInt(id));
        if (existing) {
          setProduct(existing);
          setForm(existing);
        }
      });
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/editproduct/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert('Product updated!');
        navigate('/viewproducts');
      } else {
        const err = await res.json();
        alert(err.message || 'Update failed');
      }
    } catch (err) {
      console.error(err);
      alert('Server error');
    }
  };

  if (!product) return <p className="text-center mt-40">Loading product...</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto font-sans">
      {/* Header */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <Header />
      </div>

      <h2 className="text-2xl font-semibold mt-40 mb-6 text-center text-gray-800">
        Edit Product Details
      </h2>

      <div className="bg-white  rounded-lg p-6 border border-gray-200 ">
        {['title', 'category', 'price', 'rating', 'stock', 'thumbnail'].map((field) => (
          <div key={field} className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-700 capitalize">
              {field}
            </label>
            <input
              type="text"
              name={field}
              value={form[field]}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        ))}

        <div className="flex justify-end space-x-4 mt-6">
          <button
            onClick={handleUpdate}
            className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-50 hover:text-green-700 hover:border-green-600 border transition duration-200"
          >
            Update
          </button>
          <button
            onClick={handleCancel}
            className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-50 hover:text-gray-800 hover:border-gray-600 border transition duration-200"
          >
            Cancel
          </button>
        </div>
      </div>

      {/* Navbar */}
      <div className="fixed bottom-0 left-0 w-full z-50 bg-white shadow-md">
        <Navbar />
      </div>
    </div>
  );
};

export default EditProduct;
