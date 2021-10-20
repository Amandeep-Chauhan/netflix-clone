import React from "react";
import { Link } from "react-router-dom";
import "./welcome.styles.scss";

function Welcome() {
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
      <div className="welcome_body">
        <h1>Unlimited films, TV programmes and more.</h1>
        <h2>Watch anywhere, Cancel at any time</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership
        </p>
        <form>
          <input type="email" placeholder="Email Address" className="input" />
          <Link to="/signin">
            <button className="button">GET STARTED</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Welcome;
