import React, { useState, useEffect } from "react";
import { Box, Typography, Tabs, Tab, Paper, Button, TextField } from "@mui/material";

// Components for individual tabs
// import DietPlan from "../Components/DietPlan"; 
// import WorkoutTracker from "../Components/WorkoutTracker"; 
import FoodRecommendation from "../Component2/FoodRecommendation";
import WorkoutPreferenceForm from "../Component2/WorkoutPreferenceForm";
import BMICalculator from "../Component2/BMICalculator";
const AIDashboard = () => {
  const [value, setValue] = useState(0);
  const [bmi, setBmi] = useState(null);
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [lastBmi, setLastBmi] = useState(null);

  // Handle tab changes
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // BMI calculation logic
  const handleBmiCheck = async () => {
    if (height && weight) {
      const calculatedBmi = (weight / (height * height)).toFixed(2);
      setBmi(calculatedBmi);

      // Save BMI value to backend
      await fetch('/api/save-bmi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ bmi: calculatedBmi }),
      });

      // Get the latest BMI value from backend
      const response = await fetch('/api/get-last-bmi');
      const data = await response.json();
      setLastBmi(data.lastBmi);
    }
  };

  useEffect(() => {
    // Fetch the last saved BMI value on initial load
    const fetchLastBmi = async () => {
      const response = await fetch('/api/get-last-bmi');
      const data = await response.json();
      setLastBmi(data.lastBmi);
    };

    fetchLastBmi();
  }, []);

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
Welcome to AI-Powered Fitness Tracker
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
        <Tab label="Diet Plan" />
        <Tab label="Workout Plan" />
      </Tabs>

      {/* Tab Content */}
      <Paper elevation={4} sx={{ borderRadius: 4, p: 3, mt: 2 }}>
        {value === 0 && <WorkoutPreferenceForm />}
        {/* {value === 1 && <BMICalculator />} */}
        {value === 1 && <FoodRecommendation />}
      </Paper>
    </Box>
  );
};

export default AIDashboard;
