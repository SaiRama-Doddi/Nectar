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
    fetch(`http://localhost:5000/api/viewproducts`) // Or a GET by ID route
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
        navigate('/');
      } else {
        const err = await res.json();
        alert(err.message || 'Update failed');
      }
    } catch (err) {
      console.error(err);
      alert('Server error');
    }
  };



  if (!product) return <p>Loading product...</p>;

  return (
    <div className="p-6 max-w-xl mx-auto">
            {/* Fixed Header */}
            <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
                <Header />
            </div>
      <h2 className="text-xl font-bold mt-40 mb-4 text-center">Edit Product</h2>
      {['title', 'category', 'price', 'rating', 'stock', 'thumbnail'].map((field) => (
        <div key={field} className="mb-4">
          <label className="block mb-1 capitalize font-medium">{field}</label>
          <input
            type="text"
            name={field}
            value={form[field]}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>
      ))}

      <div className="flex justify-end space-x-4 mt-4">

    
      <button
        onClick={handleUpdate}
         className="px-4 py-2 bg-green-600 text-white rounded cursor-pointer transition ease-in hover:bg-green-50 hover:text-black hover:border border border-green-600"
      >
        Update
      </button>
        <button
        onClick={handleCancel}
        className="px-4 py-2 bg-gray-600 text-white rounded cursor-pointer transition ease-in hover:bg-gray-50 hover:text-black hover:border border border-gray-600"
      >
        Cancel
      </button>
  </div>
      
            {/* Fixed Navbar */}
            <div className="fixed bottom-0 left-0 w-full z-50 bg-white shadow-md">
                <Navbar />
            </div>
    </div>
  );
};

export default EditProduct;
