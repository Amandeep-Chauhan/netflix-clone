import axios from "../../axios/axios";
import { IoMdPlay } from "react-icons/io";
import { FiInfo } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import requests from "../../axios/request";
import "./banner.styles.scss";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: "center",
      }}
    >
      <div className="banner_content">
        <h1 className="banner_content-title">
          {movie?.name || movie?.title || movie?.original_name}
        </h1>
        <div className="banner_content-buttons">
          <button className="banner_content-button">
            <span className="play-icon icon">
              <IoMdPlay />
            </span>
            Play
          </button>
          <button className="banner_content-button">
            <span className="info-icon icon">
              <FiInfo />
            </span>
            More Info
          </button>
        </div>
        <h1 className="banner_content-desc">{movie?.overview}</h1>
      </div>
      <div className="banner_fadeBottom"></div>
    </header>
  );
}

export default Banner;
