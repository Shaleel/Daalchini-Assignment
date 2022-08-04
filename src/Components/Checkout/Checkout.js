import React from "react";
import "../CartDetails/CartDetails.css";
import CartTable from "../CartTable/CartTable";
import "./Checkout.css";
function Checkout({ show, setshow }) {
  return (
    <div
      className={`cart-details-wrapper ${
        show ? "show-cart-details" : "hide-cart-details"
      } `}
    >
      <div className="cart-details checkout">
        <button onClick={() => setshow(false)} className="close left">
          <i class="fa-solid fa-arrow-left"></i>
        </button>
        <h3>Checkout</h3>
        <div className="checkout-content">
          <p className="muted">PICK UP</p>
          <input id="checkout-address" placeholder="Enter your Address"></input>
          <p className="muted">CART DETAILS</p>
          <CartTable />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
