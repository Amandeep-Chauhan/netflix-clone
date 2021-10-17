import React from "react";
import "./banner.styles.scss";

function Banner() {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://i.imgur.com/e1hLQ2m.png')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_content">
        <h1 className="banner_content-title">Movie Name</h1>
        <div className="banner_content-buttons">
          <button className="banner_content-button">Play</button>
          <button className="banner_content-button">My List</button>
        </div>
        <h1 className="banner_content-desc">this is a test description</h1>
      </div>
      <div className="banner_fadeBottom"></div>
    </header>
  );
}

export default Banner;
// 1:22:39
