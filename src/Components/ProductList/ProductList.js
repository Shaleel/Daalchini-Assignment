import React from "react";
import Product from "../Product/Product";
import image from "../../assets/ajwain-paratha.webp";
const LIST = [
  {
    image:
      "https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*",
    title: "Chhole Chawal (Rice & Chikpea)",
    description: "Mom's style recipe",
    price: 200,
    discountedPrice: 120,
  },
  {
    image:
      "https://b.zmtcdn.com/data/pictures/8/20160258/839e70d9f0d2ac1d0faa1de27ed6feed_o2_featured_v2.jpg?output-format=webp",
    title: "Pizza",
    description: "As if it's straight from the streets of Italy",
    price: 500,
    discountedPrice: 300,
  },
  {
    image:
      "https://b.zmtcdn.com/data/pictures/chains/1/491/aa50c08ea5ade50a6d1c2d7aca242a1c_o2_featured_v2.jpg",
    title: "Chole Bhature",
    description: "You can't go wrong with this one",
    price: 120,
    discountedPrice: 80,
  },
  {
    image:
      "https://b.zmtcdn.com/data/pictures/chains/7/147/8aea16d34892cf7fee812b64c19137bd_o2_featured_v2.jpg",
    title: "Subway",
    description: "Healthy and tasty",
    price: 200,
    discountedPrice: 180,
  },
];
function ProductList() {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <div>
      {LIST.map((product, index) => (
        <Product
          id={index}
          image={product.image}
          price={product.price}
          discountedPrice={product.discountedPrice}
          title={product.title}
          description={product.description}
          key={index}
        />
      ))}
    </div>
  );
}

export default ProductList;
