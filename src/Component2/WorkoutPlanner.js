// src/components/Dashboard/WorkoutPlanner.jsx
import React, { useEffect, useState } from 'react';
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material';

const WorkoutPlanner = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    // TODO: Replace with API call
    // fetch('/api/workout-planner').then(res => res.json()).then(setWorkouts);
    setWorkouts([
      'Day 1: Chest + Triceps',
      'Day 2: Cardio + Core',
      'Day 3: Legs + Shoulders'
    ]);
  }, []);

  return (
    <Paper elevation={4} className="p-4 rounded-2xl h-full">
      <Typography variant="h6" fontWeight={600} mb={2}>Workout Planner</Typography>
      <List>
        {workouts.map((plan, index) => (
          <ListItem key={index}>
            <ListItemText primary={plan} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default WorkoutPlanner;
