import React from "react";
import { useStateValue } from "../stateprovider/StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./checkoutProduct/CheckoutProduct";
import Subtotal from "./subtotal/Subtotal";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://imgs.search.brave.com/dIeVHYSk5lCcqTihK3sPBscS_9588E-qiKjdzq-F7-0/rs:fit:2917:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC51/bTVGOG9oMjBGNmVE/YklIRkNiaDZnSGFC/TiZwaWQ9QXBp"
          alt=""
          className="checkout__ad"
        />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your Shoping Cart</h2>
          {basket.map(item => (
            <CheckoutProduct
            id= {item.id}
            title={item.title} 
            image = {item.image}
            price={item.price}
            rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />

      </div>
    </div>
  );
}

export default Checkout;
