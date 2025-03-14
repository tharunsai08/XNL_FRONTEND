import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, Button, Select, MenuItem, CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const FoodRecommendation = () => {
  const [dietType, setDietType] = useState('');
  const [foodRecommendations, setFoodRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchFoodRecommendations = async (diet) => {
    setLoading(true);
    const response = await fetch("https://your-api-endpoint.com/food_diet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer YOUR_API_KEY`, // Use your actual API key securely
      },
      body: JSON.stringify({
        dietType: diet, // Pass the selected diet type in the request body
      }),
    });

    const data = await response.json();

    // Assuming data comes as a list of foods with protein content
    setFoodRecommendations(data.foods || []);
    setLoading(false);
  };

  return (
    <Box sx={{ padding: '20px', display: 'flex', justifyContent: 'center' }}>
      <Card sx={{ width: '100%', maxWidth: 600, padding: 3 }}>
        <CardContent>
          <Typography variant="h5" align="center" sx={{ marginBottom: 2 }}>
            Food Recommendations Based on Your Diet
          </Typography>
          
          {/* Diet Type Selection */}
          <Box sx={{ marginBottom: 3 }}>
            <Select
              value={dietType}
              onChange={(e) => setDietType(e.target.value)}
              displayEmpty
              fullWidth
              sx={{
                padding: '10px',
                fontSize: '16px',
                backgroundColor: 'white',
                borderRadius: 1,
                boxShadow: 1,
                border: '1px solid #ccc',
              }}
            >
              <MenuItem value="">
                <em>Select Diet Type</em>
              </MenuItem>
              <MenuItem value="Vegetarian">Vegetarian</MenuItem>
              <MenuItem value="Non-Vegetarian">Non-Vegetarian</MenuItem>
            </Select>
          </Box>

          {/* Button to fetch food recommendations */}
          <Button
            variant="contained"
            color="primary"
            onClick={() => fetchFoodRecommendations(dietType)}
            disabled={!dietType}
            sx={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              marginBottom: 2,
            }}
          >
            Get Food Recommendations
          </Button>

          {/* Loading Indicator */}
          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
              <CircularProgress />
            </Box>
          ) : (
            foodRecommendations.length > 0 && (
              <TableContainer component={Paper} sx={{ marginTop: 3 }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell><strong>Food Name</strong></TableCell>
                      <TableCell><strong>Protein Content (g)</strong></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {foodRecommendations.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell>{item.food}</TableCell>
                        <TableCell>{item.protein}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default FoodRecommendation;
