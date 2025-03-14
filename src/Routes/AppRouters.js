import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../Components/Pages/LandingPage';
import Login from '../Components/Pages/Login';
import Signup from '../Components/Pages/Signup';
import ForgotPassword from '../Components/Pages/ForgotPassword';
import Logout from '../Components/Pages/Logout';
// import ErrorPage from '../Components/Pages/ErrorPage'; // If you have a 404 error page

const AppRouters: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/logout" element={<Logout />} />
      {/* <Route path="*" element={<ErrorPage />} /> Optional 404 catch-all route */}
    </Routes>
  );
};

export default AppRouters;
