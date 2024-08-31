// Cart.js
import React, { useContext } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { CartContext } from '../../contexts/CartContext';
const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <Box sx={{ padding: '20px', border: '1px solid goldenrod', width: '300px',position:"relative" ,top:"20%" }}>
      <Typography variant='h6'color={"goldenrod"} ><center>Cart</center></Typography>
      {cart.length > 0 ? (
        <>
          {cart.map((item, index) => (
            <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0' }}>
              <Typography>{item.name}</Typography>
              <Typography>₹{item.price.toFixed(2)}</Typography>
            </Box>
          ))}<center>
          <Typography variant='h6'>Total: ₹{totalPrice.toFixed(2)}</Typography>
          <Button variant='contained' color='primary' onClick={clearCart}>Clear Cart</Button></center>
        </>
      ) : (
        <Typography>No items in cart.</Typography>
      )}
    </Box>
  );
};

export default Cart;
