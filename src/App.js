import React from "react";
import ProductPanel from "./ProductPanel";
import ShoppingCart from "./ShoppingCart";
import UserChat from "./UserChat";
import { CartProvider } from "./CartContext";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <div className="app-container">
        {/* Header */}
        <header className="header">
          <h1 className="site-title">👜 Bagify</h1>
        </header>

        {/* Banner */}
        <div className="banner">
          🔥 Big Sale! Flat 50% Off 🔥
          <br />
          <span className="banner-subtitle">Shop your favorite bags today!</span>
        </div>

        {/* Products */}
        <ProductPanel />

        {/* Floating Cart (already perfect position) */}
        <ShoppingCart />

        {/* Floating User Chat (don’t touch) */}
        <UserChat />
      </div>
    </CartProvider>
  );
}

export default App;
