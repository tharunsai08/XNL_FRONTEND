import React, { useState } from "react";
import { Box, Typography, Tabs, Tab, Paper } from "@mui/material";
// import TodayWorkout from "./TodayWorkout";
// import WorkoutStats from "./WorkoutStats";
import WorkoutTracker from "../Components/WorkoutTracker";
import StatsSection from '../Components/StatsSection';
import ActivityChart from '../Components/ActivityChart';
import WorkoutBarChart from '../Components/WorkoutBarChart';    
import BMICalculator from "../Component2/BMICalculator";
const FitnessDashboard = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", backgroundColor: "#f5f5f5", minHeight: "100vh", p: 3 }}>
      {/* Header */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          color: "#002060",
          mb: 4,
          textAlign: "center",
          animation: "fadeIn 1s ease-in-out",
          "@keyframes fadeIn": {
            "0%": { opacity: 0, transform: "translateY(-10px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
          },
        }}
      >
       Welcome to Your Fitness Dashboard

      </Typography>

      {/* Tabs */}
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{ style: { display: "none" } }}
        sx={{
          mb: 3,
          "& .MuiTab-root": {
            backgroundColor: "#E3E6F0",
            color: "#002060",
            borderRadius: "12px",
            padding: "10px 24px",
            fontSize: "1rem",
            fontWeight: 600,
            textTransform: "none",
            mx: 1,
            transition: "0.3s",
            "&:hover": {
              backgroundColor: "#dce6f0",
              transform: "translateY(-2px)",
              boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
            },
          },
          "& .Mui-selected": {
            backgroundColor: "#FF8C00",
            color: "#ffffff !important",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          },
        }}
      >
        <Tab label="Today Workout" />
        <Tab label="Workout Stats" />
        <Tab label="BMI Calculator" />

      </Tabs>

      {/* Tab Content */}
      <Paper elevation={4} sx={{ borderRadius: 4, p: 3, mt: 2 }}>
        {value === 0 && <WorkoutTracker />}
        {value === 1 && (
            <>
                <StatsSection />
                <ActivityChart />
            <WorkoutBarChart />
            </>
        )}
        {value === 2 && <BMICalculator />}
      </Paper>
    </Box>
  );
};

export default FitnessDashboard;
