
// src/components/Dashboard/AiRecommendations.jsx
import React, { useEffect, useState } from 'react';
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material';

const AiRecommendations = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    // TODO: Replace with API call
    // fetch('/api/ai/recommendations').then(res => res.json()).then(setRecommendations);
    setRecommendations([
      '30 mins Cardio for stamina',
      'Protein-rich diet recommended',
      'Try yoga for flexibility improvement'
    ]);
  }, []);

  return (
    <Paper elevation={4} className="p-4 rounded-2xl h-full">
      <Typography variant="h6" fontWeight={600} mb={2}>AI Recommendations</Typography>
      <List>
        {recommendations.map((rec, index) => (
          <ListItem key={index} disableGutters>
            <ListItemText primary={`• ${rec}`} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default AiRecommendations;