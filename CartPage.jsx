import React from 'react';
import Cart from '../components/Cart';

const CartPage = ({ cartItems, onUpdateQuantity, onRemoveFromCart }) => (
  <div>
    <h1>Cart</h1>
    <Cart
      cartItems={cartItems}
      onUpdateQuantity={onUpdateQuantity}
      onRemoveFromCart={onRemoveFromCart}
    />
  </div>
);

export default CartPage;
