// src/components/Signup.jsx
import React, { useState } from "react";
import { Box, Typography, Container, Grid, TextField, Button, Paper, InputAdornment, IconButton } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [showEmoji, setShowEmoji] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = "Username is required";
    if (!formData.email.match(/^\S+@\S+\.\S+$/)) newErrors.email = "Invalid email address";
    if (!formData.phone.match(/^\d{10}$/)) newErrors.phone = "Phone must be 10 digits";
    if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (value.length > 0) {
      setShowEmoji({ ...showEmoji, [name]: true });
    } else {
      setShowEmoji({ ...showEmoji, [name]: false });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Payload Data:", formData);
      // Post formData to your API here
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', background: 'url(https://source.unsplash.com/1600x900/?fitness,gym)', backgroundSize: 'cover', py: 10 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
          <Paper elevation={10} sx={{ p: 4, width: "80%", maxWidth: 400, borderRadius: 4 }}>
          <Typography variant="h5" fontWeight={600} mb={3} align="center">
          Sign Up
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Username"
                  name="username"
                  margin="normal"
                  value={formData.username}
                  onChange={handleChange}
                  error={!!errors.username}
                  helperText={errors.username}
                  InputProps={{
                    endAdornment: showEmoji.username && (
                      <InputAdornment position="end">
                        <span role="img" aria-label="emoji">😊</span>
                      </InputAdornment>
                    )
                  }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  margin="normal"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  InputProps={{
                    endAdornment: showEmoji.email && (
                      <InputAdornment position="end">
                        <span role="img" aria-label="emoji">📧</span>
                      </InputAdornment>
                    )
                  }}
                />
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  margin="normal"
                  value={formData.phone}
                  onChange={handleChange}
                  error={!!errors.phone}
                  helperText={errors.phone}
                  InputProps={{
                    endAdornment: showEmoji.phone && (
                      <InputAdornment position="end">
                        <span role="img" aria-label="emoji">📱</span>
                      </InputAdornment>
                    )
                  }}
                />
                <TextField
                  fullWidth
                  type={showPassword ? 'text' : 'password'}
                  label="Password"
                  name="password"
                  margin="normal"
                  value={formData.password}
                  onChange={handleChange}
                  error={!!errors.password}
                  helperText={errors.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {showEmoji.password && <span role="img" aria-label="emoji">🏃‍♂️</span>}
                        <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
                <TextField
                  fullWidth
                  type={showConfirmPassword ? 'text' : 'password'}
                  label="Confirm Password"
                  name="confirmPassword"
                  margin="normal"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)} edge="end">
                          {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
                <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3, borderRadius: 3 }}>
                  Create Account
                </Button>
              </form>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h3" color="white" fontWeight={700}>
              🏋️‍♀️ Join the Fitness Revolution
            </Typography>
            <Typography variant="h6" color="white" mt={2}>
              Real-time tracking, AI fitness plans, social challenges, and more. Sign up now and take charge of your health journey.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Signup;