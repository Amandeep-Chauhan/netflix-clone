import React from "react";
import requests from "../../axios/request";
import Banner from "../../components/banner/banner";
import Nav from "../../components/navbar/Nav";
import Row from "../../components/row/row";
import Footer from "../../components/footer/footer";
import "./HomeScreen.scss";
const HomeScreen = () => {
  return (
    <>
      <div className="HomeScreen">
        <Nav />
        <Banner />
        <Row
          title="NetFlix Originals"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentries" fetchUrl={requests.fetchDocumentaries} />
        <Footer />
      </div>
    </>
  );
};

export default HomeScreen;
