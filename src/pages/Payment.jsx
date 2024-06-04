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

  const [errors, setErrors] = useState({});
  const { clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let errors = {};
    if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      errors.name = "Name must contain only letters.";
    }
    if (!/^[A-Za-z\s]+$/.test(formData.city)) {
      errors.city = "City must contain only letters.";
    }
    if (!/^[A-Za-z\s]+$/.test(formData.street)) {
      errors.street = "Street must contain only letters.";
    }
    if (!/^\d+$/.test(formData.swishNumber)) {
      errors.swishNumber = "Swish number must contain only digits.";
    }
    if (!/^\d+$/.test(formData.cardNumber)) {
      errors.cardNumber = "Card number must contain only digits.";
    }
    if (!/^\d+$/.test(formData.cvv)) {
      errors.cvv = "CVV must contain only digits.";
    }
    if (!/^\d{2}\/\d{2}$/.test(formData.expiryDate)) {
      errors.expiryDate = "Expiry date must be in the format MM/YY.";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      clearCart();
      navigate("/confirmation");
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/cart">Cart</Link>
        </nav>
      </header>
      <section className="cart-content">
        <h1>Payment</h1>
        <form onSubmit={handleSubmit} className="payment-form">
          <label className="form-label">
            Name:
            <input
              className="form-input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </label>
          <label className="form-label">
            City:
            <input
              className="form-input"
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
            {errors.city && <p className="error">{errors.city}</p>}
          </label>
          <label className="form-label">
            Street:
            <input
              className="form-input"
              type="text"
              name="street"
              value={formData.street}
              onChange={handleChange}
              required
            />
            {errors.street && <p className="error">{errors.street}</p>}
          </label>
          <label className="form-label">
            House Number:
            <input
              className="form-input"
              type="text"
              name="houseNumber"
              value={formData.houseNumber}
              onChange={handleChange}
              required
            />
          </label>
          <label className="form-label">
            Payment Method:
            <select
              className="form-select"
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
              <label className="form-label">
                Card Number:
                <input
                  className="form-input"
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  required
                />
                {errors.cardNumber && (
                  <p className="error">{errors.cardNumber}</p>
                )}
              </label>
              <label className="form-label">
                CVV:
                <input
                  className="form-input"
                  type="text"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  required
                />
                {errors.cvv && <p className="error">{errors.cvv}</p>}
              </label>
              <label className="form-label">
                Expiry Date:
                <input
                  className="form-input"
                  type="text"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  required
                />
                {errors.expiryDate && (
                  <p className="error">{errors.expiryDate}</p>
                )}
              </label>
            </>
          )}
          {formData.paymentMethod === "swish" && (
            <label className="form-label">
              Swish Number:
              <input
                className="form-input"
                type="text"
                name="swishNumber"
                value={formData.swishNumber}
                onChange={handleChange}
                required
              />
              {errors.swishNumber && (
                <p className="error">{errors.swishNumber}</p>
              )}
            </label>
          )}
          <button type="submit" className="form-submit">
            Pay Now
          </button>
        </form>
      </section>
    </div>
  );
}

export default Payment;
