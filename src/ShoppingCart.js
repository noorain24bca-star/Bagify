import React, { useContext } from "react";
import { CartContext } from "./CartContext";

function ShoppingCart() {
  const { cartTotal } = useContext(CartContext);

  return (
    <button
      style={{
        position: "absolute",
        top: "20px",
        right: "20px",
        background: "#ffcc00",
        color: "#000",
        border: "none",
        borderRadius: "20px",
        padding: "10px 20px",
        fontWeight: "bold",
        cursor: "pointer",
        boxShadow: "0 2px 6px rgba(0,0,0,0.2)"
      }}
    >
      Cart ({cartTotal})
    </button>
  );
}

export default ShoppingCart;

