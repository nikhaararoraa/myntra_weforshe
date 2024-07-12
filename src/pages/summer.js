import { Box, Typography } from '@mui/material';
import React from 'react';
import Header from '../components/header';
import Button from '@mui/material/Button';

import Photospage from '../components/photospage';

const Summer = () => {
  return (
    <Box sx={{ bgcolor: '#FBF3FF', minHeight: '100vh' }}>
      <Header variableValue="Summer" isHome={false} />
      <Typography>
        {/* Your content here */}
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#FFFFFF',
          color: '#3D3D3D',
          textTransform: 'none',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          '&:hover': {
            backgroundColor: '#E0E0E0',
          },
          mt: 2, // margin top
          mb: 2, // margin bottom
          ml: 1, // margin left
          mr: 1, // margin right
          pt: 2, // padding top
          pb: 2, // padding bottom
        }}
      >
        CREATE AN OUTFIT
      </Button>
      <Photospage/>
    </Box>
  );
};

export default Summer;
