// resources/js/Pages/Login.jsx
import React from 'react';
import { Button, TextField, Typography, Box, Card, CardContent, CardActions } from '@mui/material';
import { ShoppingBag } from '@mui/icons-material';
import '../css/login.css';
import { Inertia } from '@inertiajs/inertia';

const HandleLogin = (event) => {
  event.preventDefault();
  const shop =  document.getElementById('domain').value.endsWith('.myshopify.com')
  ? document.getElementById('domain').value
  : `${document.getElementById('domain').value}.myshopify.com`; 
  Inertia.post('/login', {
    shop: shop,
  }, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }).then((response) => {
    // Kiểm tra phản hồi từ server
    if (response.props && response.props.install_url) {
      window.location.href = response.props.install_url; // Chuyển hướng đến URL
    } else {
      console.error('Redirect URL not found in response:', response);
      alert('An error occurred. Please try again.');
    }
  }).catch((error) => {
    console.error('Error during login:', error);
    alert('An error occurred. Please try again.');
  });
};



export default function Login() {
  return (
   <>
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Card sx={{ width: '100%', maxWidth: 400 }}>
        <CardContent>
          <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
            <ShoppingBag sx={{ fontSize: 30, color: '#4caf50' }} />
            <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', color: '#4caf50', ml: 1 }}>
              Shopify Login
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Enter your store domain and password to access your Shopify account
          </Typography>
          <form>
            <Box mb={2}>
              <TextField
                fullWidth
                id="domain"
                label="Store Domain"
                placeholder="your-store"
                required
                InputProps={{
                  endAdornment: <span>.myshopify.com</span>,
                }}
                variant="outlined"
              />
            </Box>
          </form>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" fullWidth onClick={HandleLogin}>
            Log in to your store
          </Button>
        </CardActions>
      </Card>
    </Box>
    </>
  );
}


