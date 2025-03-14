// src/components/Dashboard2/MainDashboard2.jsx
import React from 'react';
import MealPlanner from './MealPlanner';
import WorkoutPreferenceForm from './WorkoutPreferenceForm';

const MainDashboard2 = () => {
  return (
    <>
      <WorkoutPreferenceForm />
      <MealPlanner />
    </>
  );
};

export default MainDashboard2;
