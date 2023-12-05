<<<<<<< Updated upstream
import React from "react";
import keys from "../keys.js";
import "../App.css";
import "./Weather.css";

const Weather = () => {
  const dataBuild = (d) => {
    let date = String(new window.Date());
    date = date.slice(0, 15);
    return date;
  };

  return (
    <div className="Weather">
      <main>
        <div className="search-container">
          <input
            type="text"
            placeholder="Searching here..."
            className="search-bar"
          />
        </div>
        <div className="weather-container">
          <div>
            <div className="temperature-container">
              <div className="date">Fri 2 Dec 2023</div>
              <div className="temperature">30˚</div>
              <div className="location">Bangkok, Thailand</div>
            </div>
          </div>
          <div className="map-container">
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.637133811969!2d100.61278967516442!3d14.039510686383029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2801cc4ec2aff%3A0xbfec6d0816ab0b14!2z4Lih4Lir4Liy4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4LiB4Lij4Li44LiH4LmA4LiX4Lie!5e0!3m2!1sth!2sth!4v1701759051680!5m2!1sth!2sth"
                width="500"
                height="350"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="uv-container">
            <div className="uv-index">UV Index</div>
            <div className="uv">3</div>
            <div className="uv-rate">Low</div>
            <div className="humidity">Humidity</div>
            <div className="humidity-rate">84%</div>
          </div>
        </div>
      </main>
    </div>
  );
};
=======
import React from 'react';
import './Warning.css';
import BannerImage from '../img/banner-warning.jpg';

function Warning() {
    return (
        <div className="warning-page">
            <div className="banner-bg">
                <img src={BannerImage} alt="banner" />
            </div>
            <div className="warning-old">
            </div>
        </div>
    )
}
>>>>>>> Stashed changes

export default Weather;
