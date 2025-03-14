import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  MenuItem,
  Select,
  Card,
  CardContent,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper
} from '@mui/material';

const workoutCaloriesMap = {
  Running: 10,
  Walking: 4,
  Cycling: 8,
  Swimming: 11,
  Yoga: 5,
  StrengthTraining: 9,
  Dancing: 7,
  Rowing: 10,
  Boxing: 11,
  StairClimbing: 9,
  Stretching: 3,
  CoreWorkout: 6,
};


const WorkoutTracker = () => {
  const [selectedWorkout, setSelectedWorkout] = useState('');
  const [isTracking, setIsTracking] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [sessions, setSessions] = useState([]);
  const [timer, setTimer] = useState(null);

  const handleStart = () => {
    if (!selectedWorkout) return;
    const now = Date.now();
    setStartTime(now);
    const interval = setInterval(() => {
      setElapsedTime(Math.floor((Date.now() - now) / 1000));
    }, 1000);
    setTimer(interval);
    setIsTracking(true);
  };

  const handleStop = async () => {
    if (!isTracking) return;
    clearInterval(timer);
    const endTime = Date.now();
    const durationInSeconds = Math.floor((endTime - startTime) / 1000);
    const durationInMinutes = durationInSeconds / 60; // Convert seconds to minutes
    const calories = Math.round(durationInMinutes * (workoutCaloriesMap[selectedWorkout] || 6));
    const energy = Math.round(calories * 4.2);

    const newSession = {
      workout: selectedWorkout,
      duration: durationInMinutes,
      calories,
      energy,
    };

    // Send the data to the API (today_workouts endpoint)
    await postWorkoutData(newSession);

    setSessions(prev => [
      ...prev,
      newSession
    ]);
    setIsTracking(false);
    setElapsedTime(0);
    setStartTime(null);
  };

  const postWorkoutData = async (workoutData) => {
    try {
      const response = await fetch('/api/today_workouts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(workoutData),
      });
      if (response.ok) {
        console.log('Workout session posted successfully');
      } else {
        console.error('Failed to post workout session');
      }
    } catch (error) {
      console.error('Error posting workout data:', error);
    }
  };

  const totalDuration = sessions.reduce((acc, s) => acc + s.duration, 0);
  const totalCalories = sessions.reduce((acc, s) => acc + s.calories, 0);
  const totalEnergy = sessions.reduce((acc, s) => acc + s.energy, 0);

  return (
    <Container maxWidth="lg" sx={{ padding: 0, marginBottom: 4 }}>
      <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
        <CardContent>
          <Box p={3} sx={{ backgroundColor: '#f0f4ff', borderRadius: 2 }}>

            {/* Motivational Section */}
            <Box mb={4}>
              <Typography variant="h5" fontWeight="bold" color="#0A66C2">
                Welcome Back, Champion! 💪
              </Typography>
              <Typography variant="body1" color="text.secondary" mt={1}>
                A new day, a new opportunity to push your limits. Choose your workout and let's make it count!
              </Typography>
            </Box>

            {/* Workout Type + Start/Stop */}
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
              <Select
                value={selectedWorkout}
                onChange={(e) => setSelectedWorkout(e.target.value)}
                displayEmpty
                sx={{
                  minWidth: 250,
                  backgroundColor: 'white',
                  borderRadius: 2,
                  boxShadow: 2,
                  border: '1px solid #ccc',
                }}
              >
                <MenuItem value="" disabled>Select Workout Type</MenuItem>
                {Object.keys(workoutCaloriesMap).map((w) => (
                  <MenuItem key={w} value={w}>{w}</MenuItem>
                ))}
              </Select>

              <Box display="flex" gap={2}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleStart}
                  disabled={!selectedWorkout || isTracking}
                >
                  Start
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleStop}
                  disabled={!isTracking}
                >
                  Stop
                </Button>
              </Box>
            </Box>

            {isTracking && (
              <Typography fontWeight="bold" color="success.main" mb={3}>
                🔥 Workout in progress... Elapsed Time: {elapsedTime}s
              </Typography>
            )}

            {/* Table Section or Empty State */}
            {sessions.length === 0 ? (
              <Box
                textAlign="center"
                mt={4}
                p={4}
                sx={{
                  backgroundColor: '#fffde7',
                  borderRadius: 3,
                  border: '1px dashed #fbc02d',
                  boxShadow: 1,
                }}
              >
                <Typography variant="h6" fontWeight="medium" color="warning.main">
                  No workouts tracked yet today!
                </Typography>
                <Typography variant="body2" mt={1} color="text.secondary">
                  Start your fitness journey by choosing a workout and hitting the Start button.
                </Typography>
              </Box>
            ) : (
              <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 2, mt: 2 }}>
                <Table>
                  <TableHead sx={{ backgroundColor: '#e3f2fd' }}>
                    <TableRow>
                      <TableCell><strong>Workout</strong></TableCell>
                      <TableCell><strong>Duration (min)</strong></TableCell>
                      <TableCell><strong>Calories Burned</strong></TableCell>
                      <TableCell><strong>Energy Lost (kJ)</strong></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {sessions.map((session, i) => (
                      <TableRow key={i}>
                        <TableCell>{session.workout}</TableCell>
                        <TableCell>{session.duration.toFixed(2)} min</TableCell> {/* Display duration in minutes */}
                        <TableCell>{session.calories}</TableCell>
                        <TableCell>{session.energy}</TableCell>
                      </TableRow>
                    ))}
                    <TableRow sx={{ backgroundColor: '#f0f4c3' }}>
                      <TableCell><strong>Total</strong></TableCell>
                      <TableCell>
                        <strong>
                          {totalDuration < 60
                            ? `${totalDuration.toFixed(2)} min`
                            : `${Math.floor(totalDuration / 60)} hr ${totalDuration % 60} min`}
                        </strong>
                      </TableCell>
                      <TableCell><strong>{totalCalories} Kcal</strong></TableCell>
                      <TableCell>
                        <strong>
                          {totalEnergy < 1000
                            ? `${totalEnergy} kJ`
                            : `${(totalEnergy / 1000).toFixed(2)} MJ`}
                        </strong>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default WorkoutTracker;
