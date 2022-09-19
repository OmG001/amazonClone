import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebased/firebase";
import "./Login.css";

function Login() {
  // it allows us to programmaily chng the url
  const history = useHistory();
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully creatd a new user with the email and password
        if (auth) {
          // redirec t
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTir7KRFOsgN_T2UDXeP7TyXYU6FyNczp5OKmugLRhs_A_jaUM"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => SetEmail(e.target.value)}
          />
          {/*  we maped the value of email by value when user typs in onchange trigger onchange pass the envent e we fire up this event with function setEmail to e.target.value (wHAT THE USER TYPED IN)  */}
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => SetPassword(e.target.value)}
          />
          <button
            className="login__signInButton"
            type="submit"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the terms and conditions of Amazone, please
          see our Privacy Notice, our cookies Notice.
        </p>

        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
