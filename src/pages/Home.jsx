import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <header>
        <nav>
          <Link to="/menu">Menu</Link>
          <Link to="/cart">Cart</Link>
        </nav>
      </header>
      <section className="hero">
        <h1>Welcome to Bun Drop</h1>
        <p>Order your favorite burgers and have them delivered by drone!</p>
      </section>
      <section className="popular-items">
        <h2>Popular Items</h2>
        <div className="items">
          <div className="item">
            <h3>Classic Burger</h3>
            <p>A classic beef burger with lettuce, tomato, and cheese.</p>
          </div>
          <div className="item">
            <img src="/fries-1.png" alt="Sweet Potato Fries" />
            <h3>Sweet Potato Fries</h3>
            <p>Crispy sweet potato fries topped with fresh parsley.</p>
          </div>
        </div>
      </section>
      <footer>
        <p>Contact us: info@bundrop.com</p>
      </footer>
    </div>
  );
}

export default Home;
