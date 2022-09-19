import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Checkout from "./components/checkout/Checkout";
import Login from "./components/login/Login";
import Payment from "./components/checkout/subtotal/payment/Payment";
import Orders from "./components/orders/Orders";
import Shoes from "./components/Categories/Shoes/Shoes";
import FormalShoes from "./components/Categories/formalShoes/FormalShoes"
import Kurtis from "./components/Categories/kurti/Kurtis"
import Polos from "./components/Categories/polos/Polos"
import Jeans from "./components/Categories/jeans/Jeans"
import Shirts from "./components/Categories/shirts/Shirts"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebased/firebase";
import { useStateValue } from "./components/stateprovider/StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51LfnfMSGuPtm97TyJpqy84sOinddWLNspv8rf3WdPvcTgG9JOZUWdUZzzXQSrvoqZOPawQptGFkG56iT6Fbj4awV00jjmvidkX"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // only runs when the app components loads...
    auth.onAuthStateChanged((authUser) => {
      // console.log("the user is>>", authUser);
      if (authUser) {
        //the user logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

//   return (
//     <Router>
//       <div className="App">
//         <Switch>
//           <Route path="/orders">
//             <Header />
//             <Orders />
//           </Route>

//           <Route path="/shoes">
//             <Header />
//             {/* <Product/> */}
//             <Shoes />
//           </Route>


//           <Route path="/login">
//             <Login />
//           </Route>

//           <Route path="/checkout">
//             <Header />
//             <Checkout />
//           </Route>

//           <Route path="/payment">
//             <header />
//             <Elements stripe={promise}>
//               <Payment />
//             </Elements>
//           </Route>
          
//           <Route path="/">
//             <Header />
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }


return (
  // BEM
  <Router>
    <div className="app">
      <Switch>

        <Route path="/orders">
          <Header />
          <Orders />
        </Route>

        <Route path="/formalshoes">
          <Header />
          <FormalShoes
           />
        </Route>

        <Route path="/shoes">
          <Header />
          <Shoes />
        </Route>

        <Route path="/polos">
          <Header />
          <Polos />
        </Route>

        <Route path="/shirts">
          <Header />
          <Shirts />
        </Route>

        <Route path="/Jeans">
          <Header />
          <Jeans />
        </Route>

        <Route path="/Kurtis">
          <Header />
          <Kurtis />
        </Route>


        <Route path="/login">
          <Login />
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>

        <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        </Route>

        <Route path="/">
          {/* "/" default root or home page route */}
          <Header />
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
);
}

export default App;
