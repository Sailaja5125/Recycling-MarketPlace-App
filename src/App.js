import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from "./components/Landing/LandingPage.jsx";
import Example from "./components/Example.jsx";
import Login from "./components/Login.jsx";
import { appwriteService } from './Appwrite/app_write.js';
import MainPage from './components/Home/MainPage.jsx';
import Sell from './components/Sellitems/Sell.jsx';
import Otp from './components/Sellitems/Otp.jsx';
import Product from './components/Products/product.jsx';
import Orders from './components/Order/Orders.jsx';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [user, setUser] = useState({
    username: "",
    email: "",
    mobilenumber: "",
    address: "",
    materials: [],
    rewards: 0
  });

  useEffect(() => {
    const checkLoginStatus = async () => {
      const logIn = await appwriteService.isLoggedin();
      setIsLoggedIn(logIn);

      if (logIn) {
        const userResponse = await appwriteService.getCurrentUser();
        fetchUserDetails(userResponse.email);
      }
    };

    const fetchUserDetails = async (email) => {
      try {
        const response = await fetch("http://localhost:8800/api/user/get", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email })
        });
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setUser({
          username: data?.name || "",
          email: data?.email || "",
          mobilenumber: data?.mobilenumber || "",
          address: data?.address || "",
          materials: data?.materials || [],
          rewards: data?.rewards || 0
        });
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    checkLoginStatus();
  }, []);

  if (isLoggedIn === null) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} /> 
      {isLoggedIn ? 
        <Route path="/main" element={<MainPage rewards={user.rewards} />} />
       :<Route path="/" element={<LandingPage />} />
      }
      <Route path="/main" element={<MainPage rewards={user.rewards}/>} />
      <Route path="/example" element={<Example />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sell" element={<Sell />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/product" element={<Product rewards={user.rewards} />} />
      <Route path="/orders" element={<Orders rewards={user.rewards} />} />
    </Routes>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;