'use client';

import { Box, Container, Typography, Button, Stack, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);
const MotionCard = motion.create(Card);

export default function Landing() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 4,
      }}
    >
      <Container maxWidth="md">
        <MotionBox
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          sx={{ textAlign: 'center', mb: 6 }}
        >
          <Typography
            variant="h1"
            sx={{
              color: 'white',
              fontWeight: 700,
              fontSize: { xs: '3rem', md: '5rem' },
              mb: 2,
            }}
          >
            Hello World
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'rgba(255, 255, 255, 0.9)',
              mb: 4,
            }}
          >
            Welcome to your beautiful landing page
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'white',
                color: '#667eea',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.9)',
                },
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
              }}
            >
              Get Started
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: 'white',
                color: 'white',
                '&:hover': {
                  borderColor: 'white',
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                },
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
              }}
            >
              Learn More
            </Button>
          </Stack>
        </MotionBox>

        <Stack spacing={3}>
          {[
            { title: 'Fast', description: 'Built with modern technologies for optimal performance' },
            { title: 'Beautiful', description: 'Clean and elegant design that looks great everywhere' },
            { title: 'Simple', description: 'Easy to use and customize to fit your needs' },
          ].map((feature, index) => (
            <MotionCard
              key={feature.title}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              sx={{
                bgcolor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {feature.description}
                </Typography>
              </CardContent>
            </MotionCard>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

