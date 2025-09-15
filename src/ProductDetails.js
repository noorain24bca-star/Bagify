import React from "react";

function ProductDetails({ title, description, price, img }) {
  return (
    <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "10px", margin: "10px" }}>
      <img src={img} alt={title} style={{ width: "100%", borderRadius: "10px" }} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Price: {price}</p>
    </div>
  );
}

export default ProductDetails;
