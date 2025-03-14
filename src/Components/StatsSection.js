// src/components/Dashboard/StatsSection.jsx
import React, { useEffect, useState } from 'react';
import { Container, Grid, Card, CardContent, Box, Typography, Stack } from '@mui/material';
import StatsCard from './StatsCard';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const StatsSection = () => {
  const [stats, setStats] = useState({ steps: 0, calories: 0, workouts: 0, duration: 0 });
  const [selectedDate, setSelectedDate] = useState(dayjs());

  const fetchStatsForDate = (date) => {
    // Replace this with real API later
    const dummyStats = {
      '2025-03-14': { steps: 8743, calories: 642, workouts: 4, duration: 95 },
      '2025-03-13': { steps: 5000, calories: 420, workouts: 2, duration: 60 },
      '2025-03-12': { steps: 3900, calories: 310, workouts: 1, duration: 45 },
    };

    const formatted = date.format('YYYY-MM-DD');
    setStats(dummyStats[formatted] || { steps: 0, calories: 0, workouts: 0, duration: 0 });
  };

  useEffect(() => {
    fetchStatsForDate(selectedDate);
  }, [selectedDate]);

  return (
    <Container maxWidth="lg" sx={{ padding: 0, marginBottom: 4 }}>
      <Card sx={{ borderRadius: 3, boxShadow: 4 }}>
        <CardContent>
          <Box p={3} sx={{ backgroundColor: '#f0f4ff', borderRadius: 2 }}>
            {/* Header Row: Title Left, Calendar Right */}
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb={3}
              flexWrap="wrap"
              gap={2}
            >
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#0A66C2' }}>
                Daily Statistics
              </Typography>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Select Date"
                  value={selectedDate}
                  onChange={(newDate) => setSelectedDate(newDate)}
                  slotProps={{
                    textField: {
                      size: 'small',
                      sx: { backgroundColor: 'white', borderRadius: 1 },
                    },
                  }}
                />
              </LocalizationProvider>
            </Box>

            {/* Stat Cards */}
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={3}>
                <StatsCard title="Steps Today" value={stats.steps} />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <StatsCard title="Calories Burned" value={stats.calories} />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <StatsCard title="Workouts Done" value={stats.workouts} />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <StatsCard title="Workout Duration (min)" value={stats.duration} />
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default StatsSection;
