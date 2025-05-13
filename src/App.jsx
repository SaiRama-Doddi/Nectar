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
import KitchenAccessories from './Products/KitchenAccessories';
import CategoryPage from './Products/CategoryPage';
import Navbar from './Component/Navbar';
import MobileAccessories from './Products/MobileAccessories';
import Groceries from './ProductDetails/Groceries';
import Kitchenary from './ProductDetails/Kitchenary'
import Mobiles from './ProductDetails/Mobiles';
import CategoryProducts from './ProductDetails/CategoryProducts';
import CartPage from './Cart/CartPage';

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
        <Route path='/kitchen' element={<KitchenAccessories />} />
        <Route path='/category' element={<CategoryPage />} />
        <Route path='/mobile' element={<MobileAccessories/>} />
        <Route path='/navbar' element={<Navbar />} />
        <Route path='/groceries' element={<Groceries />} />
        <Route path='/kitchenary' element={<Kitchenary />} />
        <Route path='/mobiles' element={<Mobiles />} />
        <Route path="/category/:category" element={<CategoryProducts />} />
        <Route path='/cart'  element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
