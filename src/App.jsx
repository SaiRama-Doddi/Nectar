import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './index.css';
import './App.css';
import SplashScreen from './Component/SplashScreen';
import HomePage from './Component/HomePage';
import NumberPage from './Component/NumberPage';

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
      </Routes>
    </Router>
  );
}

export default App;
