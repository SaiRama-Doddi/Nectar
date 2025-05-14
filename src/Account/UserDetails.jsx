import React, { useState } from "react";
import axios from "axios";

const UserForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    landmark: "",
    state: "",
    pincode: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/users", form);
      alert("User info submitted successfully!");
      setForm({
        name: "",
        email: "",
        mobile: "",
        address: "",
        landmark: "",
        state: "",
        pincode: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow max-w-md mx-auto">
      {["name", "email", "mobile", "address", "landmark", "state", "pincode"].map((field) => (
        <div key={field} className="mb-4">
          <label className="block text-sm font-bold mb-1 capitalize">{field}</label>
          <input
            type="text"
            name={field}
            value={form[field]}
            onChange={handleChange}
            required={["name", "email", "mobile", "address"].includes(field)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
      ))}
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default UserForm;
