
// src/components/LandingPage.jsx
import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";

const LandingPage = () => {
  return (
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(to bottom right, #d1fae5, #bfdbfe)', py: 10 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" gutterBottom fontWeight={700}>
          🧠 Intelligent Fitness Assistance
        </Typography>

        <Typography variant="h6" align="center" color="text.secondary" paragraph>
          Our AI system analyzes your health metrics, workout habits, and goals to generate personalized fitness plans and diet charts. Join social challenges, monitor progress in real time, and stay motivated every day.
        </Typography>

        <Grid container spacing={4} justifyContent="center" mt={4}>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/Users/tharunsai_komma/Desktop/XNL/frontend/src/NavBar/fit_track.png"
              alt="AI Workout Recommendation"
              sx={{ width: '100%', borderRadius: 4, boxShadow: 4, height: 300, objectFit: 'cover' }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://source.unsplash.com/featured/?health,dashboard"
              alt="Health Metrics Dashboard"
              sx={{ width: '100%', borderRadius: 4, boxShadow: 4, height: 300, objectFit: 'cover' }}
            />
          </Grid>
        </Grid>

        <Typography variant="h6" align="center" color="text.primary" mt={6}>
          ✔ Real-time Health Tracking · ✔ AI-Based Diet Plans · ✔ Personalized Workouts · ✔ Social Fitness Challenges
        </Typography>
      </Container>
    </Box>
  );
};

export default LandingPage;