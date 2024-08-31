import React, { useContext } from 'react';
import Layout from '../components/Layout/Layout';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { MenuList } from '../data/data';
import { CartContext } from '../contexts/CartContext';
import '../styles/Menu.css';
import Cart from '../components/Layout/Cart';

const Menu = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <Layout>
      <Box className="menu-container">
        {MenuList.map((menu) => (
          <Card key={menu.name} className="menu-card">
            <CardActionArea>
              <CardMedia
                component='img'
                className="menu-image"
                image={menu.image}
                alt={menu.name}
              />
              <CardContent className="menu-content">
                <Typography variant='h5' gutterBottom component='div'>
                  {menu.name}
                </Typography>
                <Typography variant='body2'>
                  {menu.description}
                </Typography>
                <Typography variant='h6' className="menu-price">
                  ₹{menu.price.toFixed(2)}
                </Typography>
                <Button variant="contained" color="primary" className="add-to-cart-button" onClick={() => addToCart(menu)}>
                  Add to Cart
                </Button>
              </CardContent>
            </CardActionArea>
          </Card>
          
        ))}
      </Box>
      <Box className="cart-container">
        <center>
          <Cart /></center>
      </Box>
    </Layout>
  );
};

export default Menu;
