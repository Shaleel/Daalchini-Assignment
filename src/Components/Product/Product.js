import React, { useContext } from "react";
import { CartContext } from "../../Context/CartStateProvider";
import "./Product.css";

export const Counter = ({
  id,
  image,
  title,
  description,
  price,
  discountedPrice,
}) => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  return (
    <div className="counter">
      <button onClick={() => removeFromCart(id)}>-</button>
      <span>{cart.items[id]?.count}</span>
      <button
        onClick={() =>
          addToCart({
            id,
            image,
            title,
            description,
            price,
            discountedPrice,
          })
        }
      >
        +
      </button>
    </div>
  );
};
function Product(product) {
  const { cart, addToCart } = useContext(CartContext);
  return (
    <div className="product">
      <img className="product-img" src={product.image} alt="Ajwain Paratha" />
      <div className="product-info">
        <h4> {product.title}</h4>
        <p className="product-description">{product.description}</p>
        <div className="price-row">
          <span className="discounted-price">₹{product.discountedPrice}</span>
          <span className="price">₹{product.price}</span>
          <div className="counter-wrapper">
            {/* {console.log(id, cart.items.hasOwnProperty(id))} */}
            {!cart.items.hasOwnProperty(product.id) ? (
              <button
                onClick={() =>
                  addToCart({
                    id: product.id,
                    image: product.image,
                    title: product.title,
                    descrption: product.description,
                    price: product.price,
                    discountedPrice: product.discountedPrice,
                  })
                }
                className="add-btn"
              >
                ADD
              </button>
            ) : (
              <Counter {...product} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
