import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

//Defines the Cart component
function Cart() {
  //Using cart context to accest cart stat and functions
  const { cart, updateQuantity, removeItem } = useContext(CartContext);
  // Calculate the total cost of items in the cart
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
        </nav>
        <img id="logo-black" src="/images/logo-black.png" alt="" />
      </header>
      <section className="cart-content">
        <h1>Your Cart</h1>
        <ul className="cart-items">
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>${item.price}</p>
              <input
                type="number"
                value={item.quantity}
                min="0"
                onChange={(e) =>
                  updateQuantity(item.id, parseInt(e.target.value))
                }
              />
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
        <h2>Total: ${total.toFixed(2)}</h2>

        <Link to={cart.length === 0 ? "#" : "/payment"}>
          <button disabled={cart.length === 0}>Proceed to Payment</button>
        </Link>
      </section>
    </div>
  );
}

export default Cart;
