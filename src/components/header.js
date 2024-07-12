import React from 'react';
import { Box, Typography, Avatar, Button } from '@mui/material';

const Header = ({ variableValue, isHome }) => {
  return (
    <Box 
      display="flex" 
      justifyContent="space-between" 
      alignItems="center" 
      p={2} 
      sx={{ 
        bgcolor: 'white', 
        color: 'white', 
        padding: '16px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Drop shadow effect
      }}
    >
      {isHome ? (
        <Button variant="contained" color="secondary">
          {variableValue}
        </Button>
      ) : (
        <Box display="flex" alignItems="center" color='purple'>
          <Typography variant="h6">{variableValue}</Typography>
        </Box>
      )}
      <Avatar sx={{ width: 40, height: 40 }} alt="Profile Picture" src="/path/to/profile-pic.jpg" />
    </Box>
  );
}

export default Header;
