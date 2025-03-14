// src/components/Dashboard2/MainDashboard2.jsx
import React from 'react';
import WorkoutPreferenceForm from './WorkoutPreferenceForm';
import FoodRecommendation from './FoodRecommendation';
const MainDashboard2 = () => {
  return (
    <>
    <FoodRecommendation />
      <WorkoutPreferenceForm />
    </>
  );
};

export default MainDashboard2;
