import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import "./signin.styles.scss";

const Signin = () => {
  // const { password, setPassword, email, setEmail } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isInvalid = password === "" || email === "";

  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log("succesfully signed In");
        history.push("/browse");
      })
      .catch((error) => {
        alert(error);
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
          <h1>Sign In</h1>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button type="submit" onClick={signIn} disabled={isInvalid}>
            Sign In
          </button>
          <h4>
            <span>New to Netflix?</span>
            <Link to="/signup"> Sign up now.</Link>
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

export default Signin;
