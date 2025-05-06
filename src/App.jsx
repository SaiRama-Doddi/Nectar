import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './index.css';
import './App.css';
import SplashScreen from './Component/SplashScreen';
import HomePage from './Component/HomePage';
import NumberPage from './Component/NumberPage';
import OtpPage from './Component/OtpPage';
import DashboardPage from './Component/DashboardPage';
import Slider from './Component/Slider';
import GroceryProducts from './Products/GroceryProducts';

function SplashWrapper() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return <SplashScreen />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashWrapper />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/number" element={<NumberPage />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path='/slider' element={<Slider />} />
        <Route path='/grocery' element={<GroceryProducts />}  />
      </Routes>
    </Router>
  );
}

export default App;
