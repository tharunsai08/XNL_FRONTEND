
// src/components/Dashboard/Leaderboard.jsx
import React, { useEffect, useState } from 'react';
import { Paper, Typography, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    // TODO: Replace with API call
    // fetch('/api/leaderboard').then(res => res.json()).then(setLeaders);
    setLeaders([
      { name: 'John Doe', score: 1200 },
      { name: 'Tharun Komma', score: 1100 },
      { name: 'Riya Singh', score: 1050 }
    ]);
  }, []);

  return (
    <Paper elevation={4} className="p-4 rounded-2xl">
      <Typography variant="h6" fontWeight={600} mb={2}>Leaderboard</Typography>
      <List>
        {leaders.map((user, idx) => (
          <ListItem key={idx} disableGutters>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: '#ffc107' }}>
                <EmojiEventsIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={`${idx + 1}. ${user.name}`}
              secondary={`Points: ${user.score}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default Leaderboard;
