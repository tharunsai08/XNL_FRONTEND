// src/components/Dashboard/StatsCard.jsx
import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const StatsCard = ({ title, value }) => {
  return (
    <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
      <CardContent>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Box sx={{ fontSize: 24, fontWeight: 'bold', color: '#0A66C2' }}>
          {value}
        </Box>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
