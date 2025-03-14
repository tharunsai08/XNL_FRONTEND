
// src/components/Dashboard/MealPlanner.jsx
import React, { useEffect, useState } from 'react';
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material';

const MealPlanner = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    // TODO: Replace with API call
    // fetch('/api/meal-planner').then(res => res.json()).then(setMeals);
    setMeals([
      'Breakfast: Oatmeal with fruits',
      'Lunch: Grilled chicken with veggies',
      'Dinner: Quinoa bowl with lentils'
    ]);
  }, []);

  return (
    <Paper elevation={4} className="p-4 rounded-2xl h-full">
      <Typography variant="h6" fontWeight={600} mb={2}>Meal Planner</Typography>
      <List>
        {meals.map((meal, index) => (
          <ListItem key={index}>
            <ListItemText primary={meal} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default MealPlanner;
