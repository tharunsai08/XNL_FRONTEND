// src/components/Dashboard/MealPlanner.jsx
import React, { useEffect, useState } from 'react';
import { Container, Card, CardContent, Box, Typography, List, ListItem, ListItemText } from '@mui/material';

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
    <Container maxWidth="lg" sx={{ padding: 0, marginBottom: 4 }}>
      <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
        <CardContent>
          <Box p={3} sx={{ backgroundColor: '#f0f4ff', borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom sx={{ color: '#3b3f57', fontWeight: 'bold' }}>
              Meal Planner
            </Typography>
            <List>
              {meals.map((meal, index) => (
                <ListItem key={index}>
                  <ListItemText primary={meal} />
                </ListItem>
              ))}
            </List>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default MealPlanner;
