import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import "./signup.styles.scss";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isInvalid = username === "" || password === "" || email === "";

  const signup = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user.updateProfile({ displayName: username });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="welcome">
      <div className="welcome_background">
        <img
          className="logo"
          src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png"
          alt="Netflix logo"
        />
        <Link className="button" to="/signin">
          Sign In
        </Link>
        <div className="bg_gradient"></div>
      </div>
      <div className="signup">
        <form>
          <h1>Sign Up</h1>
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="Username"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
            required
          />
          <button type="submit" onClick={signup} disabled={isInvalid}>
            Sign Up
          </button>
          <h4>
            <span>Already having an account.</span>
            <Link to="/signin"> Sign In now.</Link>
          </h4>
          <p className="captcha">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <span className="learnMore">Learn more.</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
