import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Container, Grid, Card, CardContent, CardActions, Button } from '@mui/material';

const BookListing = () => {
  const [books] = useState([
    { id: 1, title: 'Book 1', author: 'Author 1' },
    { id: 2, title: 'Book 2', author: 'Author 2' },
    { id: 3, title: 'Book 3', author: 'Author 3' },
  ]);

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Browse Books
      </Typography>
      <Grid container spacing={2}>
        {books.map((book) => (
          <Grid item xs={12} sm={6} md={4} key={book.id}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h2" gutterBottom>
                  {book.title}
                </Typography>
                <Typography variant="subtitle1" component="p" color="textSecondary">
                  {book.author}
                </Typography>
              </CardContent>
              <CardActions>
                <Button component={Link} to={`/books/${book.id}`} size="small">
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BookListing;
