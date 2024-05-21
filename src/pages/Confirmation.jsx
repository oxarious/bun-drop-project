import React from "react";

function Confirmation() {
  return (
    <div>
      <h1>Thank you for your order!</h1>
      <p>Your order is on its way and will be delivered shortly.</p>
      <p>
        Estimated delivery time: {Math.floor(Math.random() * 30) + 10} minutes
      </p>
    </div>
  );
}

export default Confirmation;
