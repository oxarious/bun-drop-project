import React from "react";
import { useNavigate } from "react-router-dom";

function Confirmation() {
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <nav>
          <button onClick={() => navigate(-1)}>Back</button>
        </nav>
      </header>
      <section>
        <h1>Thank you for your order!</h1>
        <p>Your order is on its way and will be delivered shortly.</p>
        <p>
          Estimated delivery time: {Math.floor(Math.random() * 30) + 10} minutes
        </p>
      </section>
    </div>
  );
}

export default Confirmation;
