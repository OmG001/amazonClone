import React from "react";
import { useStateValue } from "../stateprovider/StateProvider";
import "./Product.css";

function Product({ id, title, image, price, rating,title__d }) {
  const [{ basket }, dispatch] = useStateValue();

  // console.log("This is the basket>>>", basket);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        title__d: title__d,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <img src={image} alt="" />

      <div className="product__info">
        <p className="product__title"><strong>{title}</strong></p>
        <p className="product__desTitle">{title__d}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button className="butn" onClick={addToBasket}>Add to Basket</button>
      </div>
    </div>
  );
}

export default Product;
