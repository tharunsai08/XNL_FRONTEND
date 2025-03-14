import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../Pages/LandingPage';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import ForgotPassword from '../Pages/ForgotPassword';
import Logout from '../Pages/Logout';
import DashBoard from '../Components/DashBoard';
import DashBoard2 from '../Component2/DashBoard2';
import AIDashboard from '../DashBoard/AIDashboard';
import FitnessDashboard from '../DashBoard/FitnessDashboard';

// import ErrorPage from '../Components/Pages/ErrorPage'; // If you have a 404 error page

const AppRouters: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/dashboard/diet" element={<AIDashboard />} />

      {/* <Route path="/dashboard/diet" element={<DashBoard2 />} /> */}

      <Route path="/dashboard" element={<FitnessDashboard />} />
      {/* <Route path="/FitnessDashboard" element={<FitnessDashboard />} /> */}


      
      {/* <Route path="*" element={<ErrorPage />} /> Optional 404 catch-all route */}
    </Routes>
  );
};

export default AppRouters;
