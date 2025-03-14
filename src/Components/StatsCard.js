import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const StatsCard = ({ title, value }) => {
    return (
      <Card className="shadow-xl rounded-2xl">
        <CardContent>
          <Typography variant="h6" fontWeight={600}>{title}</Typography>
          <Typography variant="h4" color="primary" fontWeight={700}>{value}</Typography>
        </CardContent>
      </Card>
    );
  };
  
  export default StatsCard;
  