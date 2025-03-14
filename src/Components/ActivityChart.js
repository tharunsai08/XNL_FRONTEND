// src/components/Dashboard/ActivityChart.jsx
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend } from 'chart.js';
import { Container, Card, CardContent, Box, Typography } from '@mui/material';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

const ActivityChart = () => {
  const [data, setData] = useState([]);
  const [averageData, setAverageData] = useState([]);

  useEffect(() => {
    // TODO: Replace with API call
    // fetch('/api/user/activity').then(res => res.json()).then(setData);
    setData([10, 25, 30, 22, 45, 38, 50]);

    // TODO: Replace with API call for average data
    // fetch('/api/user/activity/average').then(res => res.json()).then(setAverageData);
    setAverageData([15, 20, 28, 26, 42, 35, 48]);
  }, []);

  const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Workout Duration (mins)',
        data: data,
        borderColor: '#3f51b5',
        backgroundColor: 'rgba(63,81,181,0.2)',
        fill: true,
        tension: 0.4
      },
      {
        label: 'Avg Duration (mins)',
        data: averageData,
        borderColor: '#e91e63',
        backgroundColor: 'rgba(233,30,99,0.2)',
        fill: true,
        tension: 0.4
      }
    ]
  };

  return (
    <Container maxWidth="lg" sx={{ padding: 0, marginBottom: 4,width:"150%" }}>
      <Card sx={{ borderRadius: 3, boxShadow: 4 }}>
        <CardContent>
          <Box p={3} sx={{ backgroundColor: '#f0f4ff', borderRadius: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3, color: '#0A66C2' }}>
              Weekly Activity Overview
            </Typography>
            <Line data={chartData} />
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ActivityChart;
