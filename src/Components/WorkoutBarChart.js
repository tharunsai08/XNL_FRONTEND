// src/components/Dashboard/WorkoutBarChart.jsx
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Container, Card, CardContent, Box, Typography } from '@mui/material';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const WorkoutBarChart = () => {
  const [workoutData, setWorkoutData] = useState([]);

  useEffect(() => {
    // TODO: Replace this with your API call
    setWorkoutData([
      { type: 'Pushups', duration: 15 },
      { type: 'Squats', duration: 20 },
      { type: 'Running', duration: 30 },
      { type: 'Plank', duration: 10 },
      { type: 'Cycling', duration: 25 },
      { type: 'Burpees', duration: 12 }
    ]);
  }, []);

  const chartData = {
    labels: workoutData.map(w => w.type),
    datasets: [
      {
        label: 'Duration (mins)',
        data: workoutData.map(w => w.duration),
        backgroundColor: [
          '#3f51b5', '#e91e63', '#00bcd4', '#ff9800', '#4caf50', '#9c27b0'
        ],
        borderRadius: 8,
        barThickness: 30
      }
    ]
  };

  const chartOptions = {
    indexAxis: 'y', // Horizontal Bar Chart
    responsive: true,
    animation: {
      duration: 1500, // 1.5 seconds animation
      easing: 'easeOutQuart', // Smooth easing effect
    },
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true }
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          stepSize: 5
        }
      }
    }
  };
  

  return (
    <Container maxWidth="lg" sx={{ padding: 0, marginBottom: 4 }}>
      <Card sx={{ borderRadius: 3, boxShadow: 4 }}>
        <CardContent>
          <Box p={3} sx={{ backgroundColor: '#f0f4ff', borderRadius: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3, color: '#0A66C2' }}>
              Workout Duration by Type
            </Typography>
            <Bar data={chartData} options={chartOptions} />
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default WorkoutBarChart;
