import { Box, Typography } from '@mui/material';
import React from 'react';
import Header from '../components/header';
import Carousel from '../components/carousel';
import GameCarousel from '../components/GameCarousel';
//import Slider from '../components/slider';


const Home = () => {
  return (
    <Box sx={{ bgcolor: '#FBF3FF', minHeight: '100vh' }}>
      <Header variableValue="Home" isHome={true} />
      <Box p={2}>
        <Typography>
          {/* Your content here */}
        </Typography>
      </Box>
      <Carousel/>
         <GameCarousel/>
    </Box>
  );
}

export default Home;