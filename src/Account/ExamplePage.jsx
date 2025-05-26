// src/components/UserPage.js
import React from 'react';
import { useAuth } from '../Context/CartContext';
import { useAddress } from '../Context/AddressContext';

const UserPage = () => {
  const { user, logout, isLoggedIn } = useAuth();
  const { addresses, loading, error } = useAddress();

  if (!isLoggedIn) {
    return <p>Please log in to see your user details.</p>;
  }

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', padding: '1rem', border: '1px solid #ccc', borderRadius: 8 }}>
      <h2>User Details</h2>
      <p><strong>Name:</strong> {user.name || '-'}</p>
      <p><strong>Email:</strong> {user.email || '-'}</p>
      <p><strong>Mobile:</strong> {user.mobile || '-'}</p>
      <p><strong>Address:</strong> {user.address || '-'}</p>
      <p><strong>Landmark:</strong> {user.landmark || '-'}</p>
      <p><strong>Pincode:</strong> {user.pincode || '-'}</p>
      <p><strong>State:</strong> {user.state || '-'}</p>
      <p><strong>userid</strong>{user.id}</p>

      <hr />

      <h3>User Addresses</h3>
      {loading && <p>Loading addresses...</p>}
      {error && <p style={{ color: 'red' }}>Error loading addresses.</p>}
      {!loading && addresses.length === 0 && <p>No saved addresses found.</p>}

      <ul>
        {addresses.map((addr) => (
          <li key={addr.id} style={{ marginBottom: '1rem' }}>
            <p><strong>Address:</strong> {addr.address}</p>
            <p><strong>Landmark:</strong> {addr.landmark || '-'}</p>
            <p><strong>State:</strong> {addr.state || '-'}</p>
            <p><strong>Pincode:</strong> {addr.pincode || '-'}</p>
            <p><small>Added on: {new Date(addr.created_at).toLocaleDateString()}</small></p>
          </li>
        ))}
      </ul>

      <button onClick={logout} style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
        Logout
      </button>
    </div>
  );
};

export default UserPage;
