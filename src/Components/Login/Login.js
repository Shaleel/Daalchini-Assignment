import React from "react";
import { cuteToast } from "../Alert/cute-alert";
import "../CartDetails/CartDetails.css";
import "./Login.css";
function Login({ show, setshow, setisLoggedin }) {
  return (
    <div
      className={`cart-details-wrapper ${
        show ? "show-cart-details" : "hide-cart-details"
      }`}
    >
      <div className="cart-details">
        <button onClick={() => setshow(false)} className="close left">
          <i class="fa-solid fa-arrow-left"></i>
        </button>
        <h2>Login</h2>

        <div className="form">
          <input
            id="mobile-input"
            type="number"
            placeholder="Enter your phone number"
          />
          <button
            onClick={() => {
              if (!document.getElementById("mobile-input").value) {
                cuteToast({
                  type: "warning",
                  title: "warning",
                  message: "Please enter mobile",
                });
                return;
              }
              if (document.getElementById("mobile-input").value.length < 10) {
                cuteToast({
                  type: "warning",
                  title: "warning",
                  message: "Please enter a valid mobile",
                });
                return;
              }
              setshow(false);
              setisLoggedin(true);
              cuteToast({
                type: "success",
                title: "Success",
                message: "Logged in successfully!",
              });
            }}
          >
            SUBMIT
          </button>
          <a onClick={() => setshow(false)}>Will do it later</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
