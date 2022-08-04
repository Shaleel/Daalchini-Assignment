import { createContext, useState } from "react";

//create a context, with createContext api
export const CartContext = createContext();

const CartContextProvider = (props) => {
  // this state will be shared with all components
  const [cart, setcart] = useState({
    items: {},
    totalItems: 0,
    totalAmount: 0,
  });
  const addToCart = (product) => {
    console.log("adding...");
    let _cart = JSON.parse(JSON.stringify(cart));

    if (cart.items.hasOwnProperty(product.id)) {
      _cart.items[product.id] = {
        ..._cart.items[product.id],
        count: _cart.items[product.id].count + 1,
      };
    } else {
      _cart.items[product.id] = {
        ...product,
        count: 1,
      };
    }

    _cart.totalItems++;
    _cart.totalAmount += product.discountedPrice;
    setcart(_cart);
  };
  const removeFromCart = (productID) => {
    let _cart = JSON.parse(JSON.stringify(cart));

    if (cart.items.hasOwnProperty(productID)) {
      _cart.items[productID] = {
        ..._cart.items[productID],
        count: _cart.items[productID].count - 1,
      };
      _cart.totalAmount -= _cart.items[productID].discountedPrice;
      if (_cart.items[productID].count == 0) {
        delete _cart.items[productID];
      }
      _cart.totalItems--;
    }
    setcart(_cart);
  };
  return (
    // this is the provider providing state
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
