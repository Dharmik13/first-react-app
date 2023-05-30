import React from 'react';
import { Typography, Container } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Welcome to Bookshop
      </Typography>
      <Typography variant="body1" align="center">
        Browse our collection of books and find your next read!
      </Typography>
    </Container>
  );
};

export default Home;
