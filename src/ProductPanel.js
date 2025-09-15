import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import Product from "./Product";

import ClassicLeatherHandbag from "./Image/ClassicLeatherHandbag.jpg";
import CasualToteBag from "./Image/CasualToteBag.jpg";
import MiniCrossbody from "./Image/MiniCrossbody.jpg";
import DesignerSatchel from "./Image/DesignerSatchel.jpg";

const products = [
  { id: 1, title: "Classic Leather Handbag", price: 2000, stock: 6, img: ClassicLeatherHandbag },
  { id: 2, title: "Casual Tote Bag", price: 1500, stock: 2, img: CasualToteBag },
  { id: 3, title: "Mini Crossbody", price: 1200, stock: 3, img: MiniCrossbody },
  { id: 4, title: "Designer Satchel", price: 3000, stock: 5, img: DesignerSatchel }
];

function ProductPanel() {
  const { setCartTotal } = useContext(CartContext);

  const handleAddToCart = () => {
    setCartTotal((prev) => prev + 1);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap",
        margin: "20px auto",
        maxWidth: "1200px"
      }}
    >
      {products.map((p) => (
        <Product
          key={p.id}
          title={p.title}
          price={`₹${p.price}`}
          stock={p.stock}
          img={p.img}
          onBuy={handleAddToCart}
        />
      ))}
    </div>
  );
}

export default ProductPanel;

