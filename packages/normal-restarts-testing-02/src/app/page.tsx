'use client';

import { Box, Container, Typography, Button } from '@mui/material';

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
        <Box textAlign="center" sx={{ color: 'white' }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '3rem', md: '6rem' },
              fontWeight: 'bold',
              mb: 3,
            }}
          >
            Hello World
          </Typography>
          <Typography
            variant="h5"
            component="p"
            sx={{
              fontSize: { xs: '1.25rem', md: '1.5rem' },
              mb: 4,
              opacity: 0.9,
            }}
          >
            Welcome to your new landing page
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: 'white',
              color: '#667eea',
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.9)',
              },
            }}
          >
            Get Started
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

