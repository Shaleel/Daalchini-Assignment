import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/CartStateProvider";
import { cuteAlert, cuteToast } from "../Alert/cute-alert";
import CartDetails from "../CartDetails/CartDetails";
import Checkout from "../Checkout/Checkout";
import Login from "../Login/Login";
import "./BottomNav.css";
function BottomNav() {
  const { cart } = useContext(CartContext);
  const [showCart, setshowCart] = useState(false);
  const [isLoggedin, setisLoggedin] = useState(false);
  const [showLogin, setshowLogin] = useState(false);
  const [showCheckout, setshowCheckout] = useState(false);
  return (
    <div className={`bottom-nav ${cart.totalItems > 0 ? "show" : "hide"}`}>
      <div className="cart-info">
        <p>{cart.totalItems} Item(s)</p>
        <p>Total ₹{cart.totalAmount}</p>
        <button onClick={() => setshowCart(!showCart)}>
          <i className={`fa-solid fa-angle-${showCart ? "down" : "up"}`}></i>
        </button>
      </div>
      {!isLoggedin ? (
        <button
          onClick={() => {
            if (showCart) {
              setshowCart(false);
            }
            setshowLogin(true);
          }}
          className="btn-cta"
        >
          Login <i class="fa-solid fa-arrow-right"></i>
        </button>
      ) : (
        <button
          onClick={() => {
            if (!showCheckout) {
              setshowCheckout(true);
              return;
            }

            if (!document.getElementById("checkout-address").value) {
              cuteToast({
                type: "warning",
                title: "warning",
                message: "Address can't be empty",
              });
              return;
            }
            cuteAlert({
              type: "success",
              title: "Order Confirmed",
              message: "Your order has been placed successfully!",
              buttonText: "OK",
            });
          }}
          className="btn-cta"
        >
          {showCheckout ? "Select Payment" : "Continue"}
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      )}
      <Login
        show={showLogin}
        setshow={setshowLogin}
        setisLoggedin={setisLoggedin}
      />
      <CartDetails show={showCart} setshow={setshowCart} />
      <Checkout show={showCheckout} setshow={setshowCheckout} />
    </div>
  );
}

export default BottomNav;
