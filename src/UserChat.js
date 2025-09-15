import React, { useRef } from "react";

const UserChat = () => {
  const productRef = useRef(null);
  const messageRef = useRef(null);

  const handleSend = () => {
    const product = productRef.current.value;
    const message = messageRef.current.value;
    if (product && message) {
      alert(`Message Sent!\nProduct: ${product}\nMessage: ${message}`);
      messageRef.current.value = "";
    } else {
      alert("Please enter a message before sending.");
    }
  };

  const handleClose = () => {
    alert("Chat closed!");
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "80px", // distance from bottom
        right: "40px",  // distance from right
        border: "1px solid #ccc",
        borderRadius: "8px",
        width: "250px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        padding: "10px",
        fontFamily: "Arial, sans-serif",
        zIndex: 1000,
      }}
    >
      <h4
        style={{
          background: "#007bff",
          color: "white",
          padding: "5px",
          borderRadius: "6px",
          marginBottom: "10px",
          textAlign: "center",
        }}
      >
        User Chat
      </h4>

      <select
        ref={productRef}
        style={{ width: "100%", padding: "5px", marginBottom: "10px" }}
      >
        <option value="Classic Leather Handbag">Classic Leather Handbag</option>
        <option value="Casual Tote Bag">Casual Tote Bag</option>
        <option value="Mini Crossbody">Mini Crossbody</option>
        <option value="Designer Satchel">Designer Satchel</option>
      </select>

      <textarea
        ref={messageRef}
        placeholder="Type your message..."
        style={{
          width: "100%",
          padding: "5px",
          height: "60px",
          marginBottom: "10px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      ></textarea>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button
          onClick={handleSend}
          style={{
            background: "green",
            color: "white",
            padding: "5px 10px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Send
        </button>
        <button
          onClick={handleClose}
          style={{
            background: "red",
            color: "white",
            padding: "5px 10px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default UserChat;
