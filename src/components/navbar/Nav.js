import React from "react";
import "./nav.styles.scss";
import { auth } from "../../firebase";
import { FaSearch } from "react-icons/fa";
import { BsBellFill } from "react-icons/bs";
import { AiOutlineCaretDown } from "react-icons/ai";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import n1 from "../../assets/n1.png";
import n2 from "../../assets/n2.png";
import n3 from "../../assets/n3.png";
import n4 from "../../assets/n4.png";
import n5 from "../../assets/n5.png";
import n6 from "../../assets/n6.png";
import n7 from "../../assets/n7.png";

export default function Nav() {
  const [show, setShow] = useState(false);
  const [showList, setShowList] = useState(false);
  const [settings, setSettings] = useState(false);
  const avatars = [n1, n2, n3, n4, n5, n6, n7];
  const history = useHistory();

  const navbarTransiton = () => {
    if (window.scrollY > 0) {
      setShowList(false);
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navbarTransiton);
    return;
  }, []);

  const signout = () => {
    auth
      .signOut()
      .then(() => {
        history.push("/");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="nav_wrapper">
      <div className={`nav ${show ? "nav_black" : "nav_shadow"}`}>
        <div className="nav_content">
          <div className="left_nav">
            <img
              className="nav_logo"
              src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png"
              alt="Netflix logo"
            />
            <div className="nav_menu">
              <input type="checkbox" id="checkbox" />
              <label
                onClick={() => setShowList(!showList)}
                htmlFor="checkbox"
                className="browse"
              >
                Browse
                <AiOutlineCaretDown />
              </label>
              <div className="links">
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
              </div>
            </div>
          </div>

          <div className="right_nav">
            <FaSearch />
            <BsBellFill />
            <img
              className="nav_avatar"
              onClick={() => setSettings(!settings)}
              src={avatars[Math.floor(Math.random() * avatars.length)]}
              alt="avatar img"
            />
          </div>
        </div>
      </div>
      {showList ? (
        <div className="mob_menu">
          <li className="mob_links">Home</li>
          <li className="mob_links">TV Shows</li>
          <li className="mob_links">Movies</li>
          <li className="mob_links">New & Popular</li>
          <li className="mob_links">My List</li>
        </div>
      ) : null}
      {settings ? (
        <div className="profile_content">
          <div className="users">
            <div className="user">
              <img
                src={avatars[Math.floor(Math.random() * avatars.length)]}
                alt="avatar image"
              />
              <span>James</span>
            </div>
            <div className="user">
              <img
                src={avatars[Math.floor(Math.random() * avatars.length)]}
                alt="avatar image"
              />
              <span>Kevin</span>
            </div>
            <div className="user">
              <img
                src={avatars[Math.floor(Math.random() * avatars.length)]}
                alt="avatar image"
              />
              <span>Raquel</span>
            </div>
          </div>
          <div className="settings">
            <span className="profile_menu">Manage Profiles</span>
            <span className="profile_menu">Help Centre</span>
            <span className="profile_menu" onClick={signout}>
              Sign out of Netflix
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
}
