import classes from "./AuthComponent.module.css";
import React, { useContext, useRef, useState } from "react";
import User from "../../models/User";
import AuthContext from "../../context/auth-context";
import { json } from "node:stream/consumers";
import { useHistory } from "react-router";
const AuthComponent: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const switchAuthModeHandler = (e: React.MouseEvent) => {
    setIsLogin((prev) => !prev);
  };

  const login = async (user: User) => {
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        authCtx.login(data.accessToken, data.user.id);
        history.replace("/");
      } else {
        throw new Error(`Error with fetch:${response.statusText}`);
      }
    } catch (error) {
      alert("Something went wrong, try again!");
      console.error(error);
    }
  };

  const register = async (user: User) => {
    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        alert("Successfully created!");
        setIsLogin(true);
      } else {
        throw new Error("Error with fetch: " + response.statusText);
      }
    } catch (error) {
      alert("Something went wrong, try again!");
      console.error(error);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailRef.current === null || passwordRef.current === null) {
      alert("Something went wrong, try later!");
      console.error("Check emailRef and passwordRef");
      return;
    }
    const enteredEmail = emailRef.current.value.trim();
    const enteredPassword = passwordRef.current.value.trim();
    if (enteredPassword.length < 4) {
      alert("Password should be atleast 4 characters long!");
      return;
    }
    const user = new User(enteredEmail, enteredPassword);
    isLogin ? login(user) : register(user);
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required ref={passwordRef} />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};
export default AuthComponent;
