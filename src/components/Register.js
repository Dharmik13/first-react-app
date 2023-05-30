import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Typography, Container, TextField, Button } from '@mui/material';
import { AuthContext } from '../contexts/AuthContext';

const Register = () => {
  const navigate = useNavigate();
  // const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Perform registration logic
    // login();
    navigate('/booklisting');
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Register
      </Typography>
      <form onSubmit={handleRegister}>
        <TextField
          label="Email"
          type="email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
          required
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
          Register
        </Button>
        <Typography variant="body2" align="center" sx={{ marginTop: 2 }}>
          Already have an account? <Link to="/login">Login</Link>
        </Typography>
      </form>
    </Container>
  );
};

export default Register;
