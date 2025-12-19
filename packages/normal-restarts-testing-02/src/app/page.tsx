'use client';

import { Container, Typography, Box, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';

const MotionBox = motion.create(Box);
const MotionStack = motion.create(Stack);
const MotionTypography = motion.create(Typography);

export default function Landing() {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    // Fetch the Lottie animation
    fetch('https://lottie.host/647661c5-4514-4025-9098-09eb719177e4/L2MpcJvAdy.lottie')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(err => console.error('Failed to load animation:', err));
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      }}
    >
      <Container maxWidth="md">
        <MotionBox 
          sx={{ textAlign: 'center', color: 'white' }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {animationData && (
            <MotionBox
              sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                mb: 4,
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            >
              <Lottie 
                animationData={animationData} 
                loop={true}
                style={{ width: 300, height: 300 }}
              />
            </MotionBox>
          )}
          
          <MotionTypography 
            variant="h1" 
            component="h1" 
            sx={{ fontWeight: 'bold', mb: 3, fontSize: { xs: '3rem', md: '5rem' } }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Hello World
          </MotionTypography>
          
          <MotionTypography 
            variant="h5" 
            sx={{ mb: 4, opacity: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Welcome to your new Material-UI landing page
          </MotionTypography>
          
          <MotionStack 
            direction="row" 
            spacing={2} 
            justifyContent="center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="contained" size="large" sx={{ bgcolor: 'white', color: '#667eea', '&:hover': { bgcolor: '#f0f0f0' } }}>
                Get Started
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outlined" size="large" sx={{ borderColor: 'white', color: 'white', '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' } }}>
                Learn More
              </Button>
            </motion.div>
          </MotionStack>
        </MotionBox>
      </Container>
    </Box>
  );
}








