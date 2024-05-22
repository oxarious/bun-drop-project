import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import useFetch from "../hooks/useFetch";

const Menu = () => {
  const { data: menu, loading, error } = useFetch("http://localhost:5000/menu");
  const [filter, setFilter] = useState("");
  const { addToCart } = useContext(CartContext);

  const filteredMenu = filter
    ? menu.filter((item) => item.category === filter)
    : menu;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <header>
        <h1>Menu</h1>
        <nav>
          <button onClick={() => setFilter("")}>All</button>
          <button onClick={() => setFilter("burgers")}>Burgers</button>
          <button onClick={() => setFilter("sides")}>Sides</button>
          <button onClick={() => setFilter("desserts")}>Desserts</button>
          <button onClick={() => setFilter("drinks")}>Drinks</button>
        </nav>
      </header>
      <section className="menu-items">
        {filteredMenu.map((item) => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>${item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Menu;
