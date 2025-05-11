import React, { useState } from "react";
import "./App.css";

const menuData = {
  Vegetarian: ["Paneer Biryani", "Veg Burger", "Mushroom Pizza", "Veg Manchurian", "Palak Paneer"],
  "Non-Vegetarian": ["Chicken Biryani", "Mutton Curry", "Fish Fry", "Chicken 65", "Prawn Masala"],
  Desserts: ["Gulab Jamun", "Ice Cream", "Brownie", "Rasmalai", "Fruit Salad"]
};

export default function App() {
  const [category, setCategory] = useState("Vegetarian");
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (indexToRemove) => {
    const updatedCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(updatedCart);
  };

  const getTotal = () => cart.length * 100;

  return (
    <div className="container">
      <h1 className="heading">Online Food Ordering System</h1>

      <div className="categories">
        {Object.keys(menuData).map((cat) => (
          <button
            key={cat}
            className={`category-button ${category === cat ? "active" : ""}`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="menu-section">
        <h2 className="subheading">{category} Menu</h2>
        <ul className="menu-list">
          {menuData[category].map((item) => (
            <li key={item} className="menu-item">
              <span>{item}</span>
              <button className="add-button" onClick={() => addToCart(item)}>
                Add
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="cart-section">
        <h2 className="subheading">Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="cart-list">
            {cart.map((item, index) => (
              <li key={index}>
                {item}
                <button className="remove-button" onClick={() => removeFromCart(index)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <p className="total">Total: ₹{getTotal()}</p>
      </div>
    </div>
  );
}


