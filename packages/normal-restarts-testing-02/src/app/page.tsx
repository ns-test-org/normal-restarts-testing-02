'use client';

import { Container, Typography, Box, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';

const MotionBox = motion.create(Box);
const MotionStack = motion.create(Stack);
const MotionTypography = motion.create(Typography);

// Lottie animation data - using a simple rocket animation
const rocketAnimation = {
  "v": "5.7.4",
  "fr": 30,
  "ip": 0,
  "op": 60,
  "w": 200,
  "h": 200,
  "nm": "Rocket",
  "ddd": 0,
  "assets": [],
  "layers": [
    {
      "ddd": 0,
      "ind": 1,
      "ty": 4,
      "nm": "Rocket",
      "sr": 1,
      "ks": {
        "o": { "a": 0, "k": 100 },
        "r": { "a": 1, "k": [
          { "t": 0, "s": [0], "e": [360] },
          { "t": 60 }
        ]},
        "p": { "a": 1, "k": [
          { "t": 0, "s": [100, 120], "e": [100, 80] },
          { "t": 30, "s": [100, 80], "e": [100, 120] },
          { "t": 60 }
        ]},
        "a": { "a": 0, "k": [0, 0] },
        "s": { "a": 1, "k": [
          { "t": 0, "s": [100, 100], "e": [120, 120] },
          { "t": 30, "s": [120, 120], "e": [100, 100] },
          { "t": 60 }
        ]}
      },
      "shapes": [
        {
          "ty": "gr",
          "it": [
            {
              "ty": "rc",
              "d": 1,
              "s": { "a": 0, "k": [40, 60] },
              "p": { "a": 0, "k": [0, 0] },
              "r": { "a": 0, "k": 10 }
            },
            {
              "ty": "fl",
              "c": { "a": 0, "k": [1, 1, 1, 1] },
              "o": { "a": 0, "k": 100 }
            }
          ]
        }
      ]
    }
  ]
};

export default function Landing() {
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
          <MotionBox
            sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              mb: 4,
              '& > div': { width: 200, height: 200 }
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          >
            <Lottie 
              animationData={rocketAnimation} 
              loop={true}
              style={{ width: 200, height: 200 }}
            />
          </MotionBox>
          
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




