import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Payment() {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    street: "",
    houseNumber: "",
    paymentMethod: "",
    cardNumber: "",
    cvv: "",
    expiryDate: "",
    swishNumber: "",
  });

  const { clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data and handle payment
    console.log("Payment details submitted:", formData);
    clearCart(); // Clear the cart after successful payment
    navigate("/confirmation");
  };

  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/">Menu</Link>
          <Link to="/cart">Cart</Link>
        </nav>
      </header>
      <h1>Payment</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          City:
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Street:
          <input
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          House Number:
          <input
            type="text"
            name="houseNumber"
            value={formData.houseNumber}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Payment Method:
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="card">Credit Card</option>
            <option value="swish">Swish</option>
          </select>
        </label>
        {formData.paymentMethod === "card" && (
          <>
            <label>
              Card Number:
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              CVV:
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Expiry Date:
              <input
                type="text"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                required
              />
            </label>
          </>
        )}
        {formData.paymentMethod === "swish" && (
          <label>
            Swish Number:
            <input
              type="text"
              name="swishNumber"
              value={formData.swishNumber}
              onChange={handleChange}
              required
            />
          </label>
        )}
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
}

export default Payment;
