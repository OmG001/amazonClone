import React, { useEffect, useState } from "react";
import { db } from "../../firebased/firebase";
import { useStateValue } from "../stateprovider/StateProvider";
import Order from "./orderr/Order";
import "./Orders.css";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [{basket, user}, dispatch]= useStateValue();

  useEffect(() => {
    if (user) {
      db.collection('users')
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => (
          setOrders(
            snapshot.docs.map(doc => ({
              id: doc.id,
              data: doc.data()
            }))
            )
            ))
    } else {
      setOrders([])
    }
  }, [user])
  //having blnk brack meant it will only runs once

  return (
    <div className="orders">
      <h1>Yours Orders</h1>
      <div className="orders__order">
        {orders.map(order => (
          <Order order={order}/>
        ))}
      </div>
    </div>
  )
}

export default Orders;
