// CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (menuItem) => {
    setCart((prevCart) => [...prevCart, menuItem]);
  };

  const removeFromCart = (menuItem) => {
    setCart((prevCart) => prevCart.filter(item => item.name !== menuItem.name));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
