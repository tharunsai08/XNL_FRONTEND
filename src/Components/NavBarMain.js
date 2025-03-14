// src/components/NavBarMain.jsx
import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const NavBarMain = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#0f172a" }}>
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'white' }}>
          Health & Fitness Tracker
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
          <Button color="inherit" component={Link} to="/signup">
            Signup
          </Button>

        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBarMain;
