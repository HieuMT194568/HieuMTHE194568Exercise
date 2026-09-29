import React from 'react';
import { useCart } from './CartContext';

function Cart() {
  const { cartItems, removeFromCart, clearCart, totalItems, totalValue } = useCart();

  return (
    <div className="mt-4" style={{ maxWidth: 600 }}>
      <h3>Cart</h3>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="list-group mb-3">
          {cartItems.map((item) => (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
              {item.name} x {item.quantity} - ${(parseFloat(item.price) * item.quantity).toFixed(2)}
              <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <p>Total items: {totalItems}</p>
      <p>Total value: ${totalValue.toFixed(2)}</p>
      <button className="btn btn-warning" onClick={clearCart} disabled={cartItems.length === 0}>Clear Cart</button>
    </div>
  );
}

export default Cart;
