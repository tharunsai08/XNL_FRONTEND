import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab, Button, Box } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate, useLocation, Link } from 'react-router-dom';

// Import your new logo if any
import fit_track from './fit_track.png';
// Define Dashboard Tabs
const dashboardTabs = ['Workouts', 'Diet & AI Suggestions', 'Challenges & Leaderboard'];

const NavBarMain: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (tab: string) => {
    if (tab === 'Workouts') navigate('/dashboard/workouts');
    if (tab === 'Diet & AI Suggestions') navigate('/dashboard/diet');
    if (tab === 'Challenges & Leaderboard') navigate('/dashboard/challenges');
  };

  const getTabIndex = () => {
    switch (location.pathname) {
      case '/dashboard/workouts':
        return 0;
      case '/dashboard/diet':
        return 1;
      case '/dashboard/challenges':
        return 2;
      default:
        return false;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    navigate('/login');
  };

  const isLoggedIn = !!localStorage.getItem('access_token');

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#FFFFFF', paddingX: { xs: 2, sm: 4 } }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo + Title */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          {/* <img src={logo} alt="fit_track" style={{ width: '130px', height: '60px', marginRight: '10px' }} /> */}
          <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
            FitTracker
          </Typography>
        </Link>

        {/* Dashboard Tabs */}
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <Tabs
            value={getTabIndex()}
            sx={{
              '& .MuiTabs-indicator': {
                backgroundColor: '#0A66C2',
              },
            }}
          >
            {dashboardTabs.map((tab) => (
              <Tab
                key={tab}
                label={tab}
                onClick={() => handleNavigate(tab)}
                sx={{
                  minWidth: 120,
                  fontWeight: 'bold',
                  fontSize: '15px',
                  color: '#0A0A0A',
                  textTransform: 'none',
                  '&.Mui-selected': {
                    color: '#ffffff',
                    backgroundColor: '#0A66C2',
                    borderRadius: '8px',
                  },
                  '&:hover': {
                    backgroundColor: '#0A66C2',
                    color: '#ffffff',
                    borderRadius: '8px',
                  },
                }}
              />
            ))}
          </Tabs>
        </Box>

        {/* Logout / Login Button */}
        {isLoggedIn ? (
          <Button
            sx={{
              color: '#ffffff',
              backgroundColor: '#0A66C2',
              fontWeight: 'bold',
              '&:hover': { backgroundColor: '#004eab' },
            }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        ) : (
          <Button
            sx={{
              color: '#ffffff',
              backgroundColor: '#0A66C2',
              fontWeight: 'bold',
              '&:hover': { backgroundColor: '#004eab' },
            }}
            onClick={() => navigate('/login')}
          >
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBarMain;
