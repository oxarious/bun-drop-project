import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, updateQuantity, removeItem } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Your Cart</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) =>
                updateQuantity(item.id, parseInt(e.target.value))
              }
            />
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h2>Total: ${total.toFixed(2)}</h2>
      <Link to="/payment">
        <button>Proceed to Payment</button>
      </Link>
    </div>
  );
}

export default Cart;
