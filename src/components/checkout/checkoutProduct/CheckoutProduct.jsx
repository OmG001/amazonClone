import React from "react";
import { useStateValue } from "../../stateprovider/StateProvider";
import "./CheckoutProduct.css";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //remove item from n\basket
    dispatch({
      type: "REMOVE_FROM_BASKET",

      id: id
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={image} className="checkoutProduct__image" alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>{!hideButton &&(
        <button onClick={removeFromBasket}>Remove from Basket</button>)}
      </div>
    </div>
  );
}

export default CheckoutProduct;
