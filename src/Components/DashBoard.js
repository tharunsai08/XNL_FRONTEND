
// src/components/Dashboard/MainDashboard.jsx
import React from 'react';
import { Grid, Container } from '@mui/material';
import StatsSection from './StatsSection';
import ActivityChart from './ActivityChart';
import AiRecommendations from './AiRecommendations';
import Leaderboard from './Leaderboard';


const MainDashboard = () => {
  return (
    <Container maxWidth="lg" className="py-6">
      <StatsSection />
      <Grid container spacing={4} mt={2}>
        <Grid item xs={12} md={8}><ActivityChart /></Grid>
        <Grid item xs={12} md={4}><AiRecommendations /></Grid>
        <Grid item xs={12}><Leaderboard /></Grid>

      </Grid>
    </Container>
  );
};

export default MainDashboard;

