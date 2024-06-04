import React, { createContext, useState } from "react";

//Create a context for the cart
export const CartContext = createContext();

//Defins the CartProvider component
export const CartProvider = ({ children }) => {
  //State to store the items in the cart
  const [cart, setCart] = useState([]);

  //Function to add a cart to the item, checking if item already exists, upadtes it if it exists or if it doesnt it adds it
  const addToCart = (item) => {
    var existingItems = cart.filter((c) => c.id == item.id);
    if (existingItems && existingItems[0]) {
      updateQuantity(item.id, existingItems[0].quantity + 1);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  //Funtions for removing item
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };
  //Function for updating
  const updateQuantity = (id, quantity) => {
    //Ensures quantity is not negative.
    if (quantity >= 0)
      setCart(
        cart.map((item) => (item.id === id ? { ...item, quantity } : item))
      );
  };
  //Function to clear cart
  const clearCart = () => {
    setCart([]);
  };
  //Provide the cart state and functions to the rest of the app
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeItem, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
