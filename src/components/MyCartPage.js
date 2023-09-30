import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../actions';

function MyCartPage() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  return (
    <div>
      <h1>My Cart</h1>
      {cart.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>Price: {product.price}</p>
          <button onClick={() => handleRemoveFromCart(product.id)}>Remove</button>
        </div>
      ))}
      <h3>Total Price: {calculateTotalPrice()}</h3>
    </div>
  );
}

export default MyCartPage;
