import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
// Define the Menu component
const Menu = () => {
  // Use the custom useFetch hook to fetch menu data from the API
  const { data: menu, loading, error } = useFetch("http://localhost:5000/menu");
  // State to manage the category filter and search term
  const [filter, setFilter] = useState("");
  // State to store the unique categories from the menu items
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([]);
  // Access the addToCart function from CartContext
  const { addToCart } = useContext(CartContext);

  // useEffect to set unique categories when menu data changes
  useEffect(() => {
    if (menu.length > 0) {
      const uniqueCategories = [...new Set(menu.map((item) => item.category))];
      setCategories(uniqueCategories);
    }
  }, [menu]);

  // Filter the menu items based on selected category and search term
  const filteredMenu = menu
    .filter((item) => !filter || item.category === filter)
    .filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
        </nav>
        <h1>Menu</h1>
        <img id="logo-black" src="/images/logo-black.png" alt="" />
      </header>

      <section className="filters">
        <button onClick={() => setFilter("")}>All</button>
        {categories.map((category) => (
          <button key={category} onClick={() => setFilter(category)}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </section>
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
