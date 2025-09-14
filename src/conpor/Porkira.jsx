import React from "react";
import "./shop.css";

const prokira = () => {
  return (
    <div className="cart-container1">
      <h1 className="cart-title1">Your cart is empty</h1>
      <button className="cart-button1" onClick={() => window.location.href = "/"}>
        Continue shopping
      </button>
      <p className="cart-info1">
        After your order, a shipping will be handled by mail and should take 
        <strong> 3-5 normal operating days </strong> (should not more than a week to arrive). 
        In case of delay, or you experience a problem regarding to order, 
        Please contact <a href="mailto:admin@9arm.co">kurororoth@gmail.com</a>
      </p>
    </div>
  );
};

export default prokira;
