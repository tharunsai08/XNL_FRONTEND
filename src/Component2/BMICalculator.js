import React, { useState } from "react";
import { Box, Card, CardContent, Typography, TextField, Button, Grid } from "@mui/material";

const BMICalculator = () => {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [recommendation, setRecommendation] = useState("");

  const calculateBmi = () => {
    if (age && weight && height) {
      const calculatedBmi = (weight / (height * height)).toFixed(2);
      setBmi(calculatedBmi);
      provideRecommendation(calculatedBmi);
    }
  };

  const provideRecommendation = (bmiValue) => {
    if (bmiValue < 18.5) {
      setRecommendation("You are underweight. Consider a diet with more calories and consult a nutritionist.");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setRecommendation("You have a normal weight. Maintain a healthy lifestyle with regular exercise.");
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setRecommendation("You are overweight. Try to incorporate more cardio and monitor your diet.");
    } else {
      setRecommendation("You are obese. It's advisable to follow a strict diet and exercise routine. Please consult a healthcare provider.");
    }
  };

  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center", mt: 3 }}>
      <Card sx={{ width: "80%", maxWidth: "500px", borderRadius: "12px", boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: "bold", color: "#0A66C2", mb: 3 }} align="center">
            BMI Calculator
          </Typography>

          <Grid container spacing={2} direction="column">
            <Grid item>
              <TextField
                label="Age (years)"
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                fullWidth
                required
              />
            </Grid>
            <Grid item>
              <TextField
                label="Weight (kg)"
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                fullWidth
                required
              />
            </Grid>
            <Grid item>
              <TextField
                label="Height (m)"
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                fullWidth
                required
              />
            </Grid>
            <Grid item>
              <Button variant="contained" onClick={calculateBmi} sx={{ mt: 2 }} fullWidth>
                Calculate BMI
              </Button>
            </Grid>
          </Grid>

          {bmi && (
            <Box sx={{ mt: 3, textAlign: "center", borderTop: "1px solid #ccc", pt: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Your BMI: {bmi}
              </Typography>
              <Typography variant="body1" sx={{ mt: 2, fontStyle: "italic", color: "#0A66C2" }}>
                Recommendation: {recommendation}
              </Typography>
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default BMICalculator;
