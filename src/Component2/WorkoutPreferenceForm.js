import React, { useState } from 'react';
import { Container, Card, CardContent, Box, Typography, Grid, FormControl, InputLabel, Select, MenuItem, Button, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const defaultWorkoutPlan = [
  { day: 'Monday', workout: 'Chest + Triceps' },
  { day: 'Tuesday', workout: 'Back + Biceps' },
  { day: 'Wednesday', workout: 'Legs + Core' },
  { day: 'Thursday', workout: 'Shoulders + Cardio' },
  { day: 'Friday', workout: 'Full Body Functional' },
  { day: 'Saturday', workout: 'Mobility + Stretching' }
];

const WorkoutPreferenceForm = ({ username }) => {
  const [days, setDays] = useState(6);
  const [location, setLocation] = useState('gym');
  const [equipment, setEquipment] = useState('dumbbells');
  const [workoutPlan, setWorkoutPlan] = useState(defaultWorkoutPlan);

  const generatePlan = () => {
    let plan = [];
    const baseWorkouts = {
      gym: ['Chest + Triceps', 'Back + Biceps', 'Legs + Core', 'Shoulders + Cardio', 'Functional', 'Stretching'],
      home_dumbbells: ['Upper Body Dumbbell', 'Lower Body Dumbbell', 'Dumbbell HIIT', 'Dumbbell Core', 'Full Body Dumbbell', 'Stretching'],
      home_no_equipment: ['Bodyweight HIIT', 'Yoga + Core', 'Mobility + Balance', 'Cardio Blast', 'Pilates', 'Stretching']
    };

    const selected = location === 'gym'
      ? baseWorkouts.gym
      : equipment === 'dumbbells'
      ? baseWorkouts.home_dumbbells
      : baseWorkouts.home_no_equipment;

    for (let i = 0; i < days; i++) {
      plan.push({ day: `Day ${i + 1}`, workout: selected[i % selected.length] });
    }

    setWorkoutPlan(plan);
  };

  const savePlan = () => {
    // Save the workout plan for the user (replace with actual backend logic)
    const userWorkoutData = {
      username,
      workoutPlan
    };

    alert('Workout plan saved!');
  };

  return (
    <Container maxWidth="lg" sx={{ padding: 0, marginBottom: 4 ,width:"470%"}}>
      <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
        <CardContent>
          <Box p={3} sx={{ backgroundColor: '#f0f4ff', borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom sx={{ color: '#3b3f57', fontWeight: 'bold' }}>
              Set a Plan
            </Typography>
            <Grid container spacing={2}>
              {/* Days Selector */}
              <Grid item xs={12} sm={6} md={3}>
                <FormControl fullWidth variant="outlined" size="small">
                  <InputLabel>Workout Days</InputLabel>
                  <Select
                    value={days}
                    label="Workout Days"
                    onChange={(e) => setDays(e.target.value)}
                    sx={{ backgroundColor: '#f3e5f5', color: '#6a1b9a' }}
                  >
                    {[3, 4, 5, 6, 7].map((num) => (
                      <MenuItem key={num} value={num}>
                        {num} Days
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              {/* Location Selector */}
              <Grid item xs={12} sm={6} md={3}>
                <FormControl fullWidth variant="outlined" size="small">
                  <InputLabel>Location</InputLabel>
                  <Select
                    value={location}
                    label="Location"
                    onChange={(e) => setLocation(e.target.value)}
                    sx={{ backgroundColor: '#f3e5f5', color: '#6a1b9a' }}
                  >
                    <MenuItem value="gym">Gym</MenuItem>
                    <MenuItem value="home">Home</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {/* Equipment Selector */}
              {location === 'home' && (
                <Grid item xs={12} sm={6} md={3}>
                  <FormControl fullWidth variant="outlined" size="small">
                    <InputLabel>Equipment</InputLabel>
                    <Select
                      value={equipment}
                      label="Equipment"
                      onChange={(e) => setEquipment(e.target.value)}
                      sx={{ backgroundColor: '#f3e5f5', color: '#6a1b9a' }}
                    >
                      <MenuItem value="dumbbells">Dumbbells</MenuItem>
                      <MenuItem value="none">No Equipment</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              )}

              {/* Generate Plan Button */}
              <Grid item xs={12} sm={6} md={3}>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Button variant="contained" color="primary" onClick={generatePlan}>
                    Generate Plan
                  </Button>
                </Box>
              </Grid>
            </Grid>

            {/* Workout Plan Table */}
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><strong>Day</strong></TableCell>
                  <TableCell><strong>Workout</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {workoutPlan.map((item, idx) => (
                  <TableRow key={idx}>
                    <TableCell>{item.day}</TableCell>
                    <TableCell>{item.workout}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            {/* Save Plan Button */}
            <Box display="flex" justifyContent="center" mt={3}>
              <Button variant="contained" color="secondary" onClick={savePlan}>
                Save Plan
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default WorkoutPreferenceForm;
