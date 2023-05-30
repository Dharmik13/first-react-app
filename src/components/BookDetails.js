import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Container } from '@mui/material';

const BookDetails = () => {
  const { id } = useParams();

  return (
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Book Details
      </Typography>
      <Typography variant="h6" component="h2" gutterBottom>
        Book ID: {id}
      </Typography>
      <Typography variant="body1" align="center">
        Display book details here...
      </Typography>
    </Container>
  );
};

export default BookDetails;
