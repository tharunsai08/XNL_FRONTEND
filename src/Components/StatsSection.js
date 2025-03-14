
// src/components/Dashboard/StatsSection.jsx
import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import StatsCard from './StatsCard';

const StatsSection = () => {
  const [stats, setStats] = useState({ steps: 0, calories: 0, workouts: 0, duration: 0 });

  useEffect(() => {
    // TODO: Replace with API call
    // fetch('/api/user/stats').then(res => res.json()).then(setStats);
    setStats({
      steps: 8743,
      calories: 642,
      workouts: 4,
      duration: 95
    });
  }, []);

  return (
    <Grid container spacing={3} className="mb-4">
      <Grid item xs={12} md={3}><StatsCard title="Steps Today" value={stats.steps} /></Grid>
      <Grid item xs={12} md={3}><StatsCard title="Calories Burned" value={stats.calories} /></Grid>
      <Grid item xs={12} md={3}><StatsCard title="Workouts Done" value={stats.workouts} /></Grid>
      <Grid item xs={12} md={3}><StatsCard title="Workout Duration (min)" value={stats.duration} /></Grid>
    </Grid>
  );
};

export default StatsSection;