import React from "react";
import Banner from "../../components/banner/banner";
import Nav from "../../components/navbar/Nav";
import "./HomeScreen.scss";
const HomeScreen = () => {
  return (
    <>
      <div className="HomeScreen">
        <Nav />
        <Banner />
        {/* row */}
      </div>
    </>
  );
};

export default HomeScreen;
