'use client';

import { Container, Typography, Box, Button, Stack } from '@mui/material';
import { Rocket, Star, Favorite } from '@mui/icons-material';

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
        <Box sx={{ textAlign: 'center', color: 'white' }}>
          <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 3 }}>
            <Rocket sx={{ fontSize: 60 }} />
            <Star sx={{ fontSize: 60 }} />
            <Favorite sx={{ fontSize: 60 }} />
          </Stack>
          
          <Typography variant="h1" component="h1" sx={{ fontWeight: 'bold', mb: 3, fontSize: { xs: '3rem', md: '5rem' } }}>
            Hello World
          </Typography>
          
          <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
            Welcome to your new Material-UI landing page
          </Typography>
          
          <Stack direction="row" spacing={2} justifyContent="center">
            <Button variant="contained" size="large" sx={{ bgcolor: 'white', color: '#667eea', '&:hover': { bgcolor: '#f0f0f0' } }}>
              Get Started
            </Button>
            <Button variant="outlined" size="large" sx={{ borderColor: 'white', color: 'white', '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' } }}>
              Learn More
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}


