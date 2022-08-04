import React from "react";
import "./CartDetails.css";
import CartTable from "../CartTable/CartTable";

function CartDetails({ show, setshow }) {
  return (
    <div
      className={`cart-details-wrapper ${
        show ? "show-cart-details" : "hide-cart-details"
      }`}
    >
      <div className="cart-details">
        <button onClick={() => setshow(false)} className="close">
          <i class="fa-solid fa-xmark"></i>
        </button>
        <p>Cart Details</p>
        <CartTable />
      </div>
    </div>
  );
}

export default CartDetails;
