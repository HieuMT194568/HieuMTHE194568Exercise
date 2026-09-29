import React from 'react';
import { ThemeProvider } from './ThemeContext';
import Theme from './Theme';
import { CartProvider } from './CartContext';
import DishesList from './DishesList';
import Cart from './Cart';

function Exercise14() {
  return (
    <>
      <h1 className="container mt-4">Exercise 14: useContext</h1>

      <div className="container my-4">
        <h2>1. Theme</h2>
        <ThemeProvider>
          <Theme />
        </ThemeProvider>
      </div>

      <div className="container my-4">
        <h2>2 & 3. Cart</h2>
        <CartProvider>
          <DishesList />
          <Cart />
        </CartProvider>
      </div>
    </>
  );
}

export default Exercise14;
