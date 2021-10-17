import React from "react";
import "./nav.styles.scss";
import { useState, useEffect } from "react";

export default function Nav() {
  const [show, setShow] = useState(false);

  const navbarTransiton = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navbarTransiton);
    return;
  }, []);
  return (
    <div className={`nav ${show ? "nav_black" : ""}`}>
      <div className="nav_content">
        <img
          className="nav_logo"
          src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png"
          alt="Netflix logo"
        />
        <img
          className="nav_avatar"
          src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
          alt="avatar img"
        />
      </div>
    </div>
  );
}
