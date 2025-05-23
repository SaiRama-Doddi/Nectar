// src/Context/AddressContext.js

import React, { createContext, useState, useEffect, useContext } from 'react';
import { useAuth } from './CartContext'; // adjust the path if needed

// 1. Create the context
const AddressContext = createContext();

// 2. Export a hook for using the context
export const useAddress = () => useContext(AddressContext);

// 3. Provider component
export const AddressProvider = ({ children }) => {
  const { user } = useAuth(); // Get user from AuthContext
  const userId = user?.id; // Make sure `id` exists in your user object

  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 4. Function to fetch addresses
  const fetchAddresses = async () => {
    if (!userId) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/addresses/${userId}`);
      if (!response.ok) throw new Error('Failed to fetch addresses');

      const data = await response.json();
      setAddresses(data); // assuming API returns array directly
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // 5. Fetch addresses on mount or when userId changes
  useEffect(() => {
    fetchAddresses();
  }, [userId]);

  // 6. Provide the values
  return (
    <AddressContext.Provider value={{ addresses, loading, error, fetchAddresses }}>
      {children}
    </AddressContext.Provider>
  );
};
