import React, { useState } from "react";
import axios from "axios";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/subscribe", { email });
      setMessage(response.data);
    } catch (error) {
      setMessage("Error sending email");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        padding: "10px",
        alignItems: "center",
        backgroundColor: "#bdbdbd",
        width: "fit-content",
      }}
    >
      <h2 style={{ margin: "0", fontFamily: "Arial", fontWeight: "bold" }}>
        Sign Up For Our Daily Insider
      </h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px" }}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          style={{
            border: "1px solid #000000",
            padding: "5px",
            borderRadius: "2px",
            fontFamily: "Arial",
            fontWeight: "bold",
          }}
        />
        <button type="submit">Subscribe</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default EmailForm;
