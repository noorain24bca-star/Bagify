import React from "react";

function Product({ title, price, stock, img, onBuy }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "15px",
      width: "220px",
      textAlign: "center",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      marginBottom: "20px"
    }}>
      <img src={img} alt={title} style={{ width: "100%", borderRadius: "10px" }} />
      <h3 style={{ margin: "10px 0" }}>{title}</h3>
      <p>Price: {price}</p>
      <p>Stock: {stock}</p>
      <button 
        onClick={onBuy}
        style={{
          marginTop: "10px",
          padding: "8px 12px",
          background: "#ff4500",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
