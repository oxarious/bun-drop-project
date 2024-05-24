import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import useFetch from "../hooks/useFetch";

function Home() {
  const { addToCart } = useContext(CartContext);
  const { data: menu, loading, error } = useFetch("http://localhost:5000/menu");
  const [popularItems, setPopularItems] = useState([]);

  useEffect(() => {
    if (menu.length > 0) {
      const popular = menu.filter((item) => item.isPopular);
      setPopularItems(popular);
    }
  }, [menu]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <header>
        <nav>
          <Link to="/menu">Menu</Link>
          <Link to="/cart">Cart</Link>
        </nav>
        <img id="logo-black" src="/images/logo-black.png" alt="" />
      </header>
      <section className="hero">
        <h1>Welcome to Bun Drop</h1>
        <p>Order your favorite burgers and have them delivered by drone!</p>
        <img id="logoColor" src="/images/logo-color.png" alt="" />
      </section>
      <section className="popular-items">
        <h2>Popular Items</h2>
        <div className="items">
          {popularItems.map((item) => (
            <div key={item.id} className="popular-item">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>${item.price}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
      <footer>
        <p>Contact us: info@bundrop.com</p>
      </footer>
    </div>
  );
}

export default Home;
