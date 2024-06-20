import React from 'react';

const Cart = ({ cartItems, onUpdateQuantity, onRemoveFromCart }) => {
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart">
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <h2>{item.name}</h2>
          <p>{item.price} $</p>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value))}
          />
          <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <h3>Grand Total: {getTotalPrice()} $</h3>
    </div>
  );
};

export default Cart;
