// src/components/Login.jsx
import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const generateCaptcha = () => {
  const chars = "0123456789";
  let captcha = "";
  for (let i = 0; i < 6; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return captcha;
};

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [userCaptcha, setUserCaptcha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (userCaptcha !== captcha) {
      setError("Invalid CAPTCHA. Please try again.");
      setCaptcha(generateCaptcha());
    } else {
      setError("");
      // TODO: Replace with actual API call
      console.log("Login success with:", username, password);
      navigate("/dashboard");
    }
  };

  return (
    <Grid container sx={{ minHeight: "100vh", backgroundImage: "url(https://source.unsplash.com/featured/?gym,workout)", backgroundSize: "cover", backgroundPosition: "center" }}>
      <Grid item xs={12} md={6}></Grid>
      <Grid item xs={12} md={6}>
        <Box display="flex" justifyContent="center" alignItems="center" height="100%">
          <Paper elevation={10} sx={{ p: 4, width: "80%", maxWidth: 400, borderRadius: 4 }}>
            <Typography variant="h5" fontWeight={600} mb={3} align="center">
              User Login
            </Typography>

            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Box
              sx={{
                my: 2,
                p: 2,
                textAlign: "center",
                fontSize: 24,
                letterSpacing: 4,
                fontWeight: 700,
                backgroundColor: "#f1f5f9",
                borderRadius: 2,
                userSelect: "none",
              }}
            >
              {captcha}
            </Box>
            <TextField
              label="Enter CAPTCHA"
              variant="outlined"
              fullWidth
              value={userCaptcha}
              onChange={(e) => setUserCaptcha(e.target.value)}
            />
            {error && (
              <Typography color="error" variant="body2" mt={1}>
                {error}
              </Typography>
            )}

            <Button
              variant="contained"
              fullWidth
              sx={{ mt: 3, py: 1.5, borderRadius: 3 }}
              onClick={handleLogin}
            >
              Login
            </Button>

            <Box mt={2} display="flex" justifyContent="space-between">
              <Link href="#" variant="body2">
                Forgot Password?
              </Link>
              <Link href="/signup" variant="body2">
                Signup
              </Link>
            </Box>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
