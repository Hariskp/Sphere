import React, { useState, useEffect } from "react";
import keys from "../keys.js";
import "./Weather.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import icoeye from "../img/ico/ico-eye.png";
import icosun from "../img/ico/ico-sun.png";

//calling API
const api = {
  key: keys.API_KEY,
  base: keys.BASE_URL,
  find: keys.FIND_L,
  weath: keys.WEATHER,
  airp: keys.AIR_POLL,
  key2: keys.API_KEY_2,
};

const Weather = () => {
  //use date
  const dataBuild = (d) => {
    let date = String(new window.Date());
    date = date.slice(0, 15);
    return date;
  };

  const [query, setQuery] = useState("");
  const [location, setLocation] = useState({});
  const [weather, setWeather] = useState({});
  const [airpoll, setAirpoll] = useState({});

  // Convert Kelvin to Celsius
  const [celsiusT, setCelsiusT] = useState("");
  // Convert Meter to Kilometer
  const [metertoKm, setmetertoKm] = useState("");
  useEffect(() => {
    const celsiusTemp = weather.main && weather.main.temp - 273.15;
    const roundedCel = Math.floor(celsiusTemp);
    setCelsiusT(roundedCel);

    const kiloMeter = weather.visibility * 0.001;
    const roundedKm = Math.floor(kiloMeter);
    setmetertoKm(roundedKm);
  });

  //Visibilitystatus condition
  let visibilityStatus = "";

  if (metertoKm > 10) {
    visibilityStatus = "Perfect";
  } else if (metertoKm >= 4 && metertoKm <= 10) {
    visibilityStatus = "Good";
  } else if (metertoKm >= 1 && metertoKm < 4) {
    visibilityStatus = "Normal";
  } else {
    visibilityStatus = "Bad";
  }

  // Latitude & Lontitude
  const latti = weather.coord && weather.coord.lat;
  const longti = weather.coord && weather.coord.long;
  //Sunrise
  const sunriseTs = weather.sys && weather.sys.sunrise;
  const srdate = new Date(sunriseTs * 1000); // Change Unix to millisecond
  const sunrise = srdate.toLocaleString("en-US", {
    timeZone: "Asia/Bangkok",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });

  //Sunset
  const sunsetTs = weather.sys && weather.sys.sunset;
  const ssdate = new Date(sunsetTs * 1000); // Change Unix to millisecond
  const sunset = ssdate.toLocaleString("en-US", {
    timeZone: "Asia/Bangkok",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.weath}weather?q=${query}&appid=${api.key}`)
        .then((res) => res.json())
        .then((results) => {
          setWeather(results);
          console.log(results);
          //   // เมื่อ fetch แรกเสร็จสิ้น ก็ทำ fetch ที่สอง
          //   return fetch(
          //     `${api.airp}air_pollution?lat=${results.coord.lat}&lon=${results.coord.lon}&appid=${api.key}`
          //   );
          // })
          // .then((res2) => res2.json())
          // .then((results2) => {
          //   setAirpoll(results2);
          //   console.log(results2);
          // })
          // .catch((error) => {
          //   console.error("Error:", error);
        });
    }
  };

  return (
    <>
      <Header />
      <div className="Weather">
        <main>
          <div className="search-container-weather">
            <input
              type="text"
              placeholder="Searching here..."
              className="search-bar-weather"
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
          </div>
          {/* {typeof weather.main != "undefined" ? ()} */}
          <div>
            <div className="anmewza-container">
              <div className="weather-container">
                <div className="temperature-container">
                  <div className="date-weather">{dataBuild(new Date())}</div>
                  <div className="container-temp">
                    <div className="temperature">{celsiusT}˚</div>
                    <div className="img-temp">
                      <img src={icosun} alt="sun" />
                    </div>
                  </div>
                  <div className="location-weather">
                    {weather.name}, {weather.sys && weather.sys.country}
                  </div>
                </div>
                <div className="map-container">
                  <div className="map-weather">
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
                <div className="cloud-container">
                  <div className="cloud">
                    <h3>Cloud</h3>
                  </div>
                  <div className="container-uv">
                    <div className="cloud-info">
                      {weather && weather.weather && (
                        <div>{weather.weather[0].description}</div>
                      )}
                    </div>
                  </div>
                  <div className="humidity">Humidity</div>
                  <div className="humidity-rate">
                    {weather.main && weather.main.humidity}%
                  </div>
                </div>
                <div className="wind-status-container">
                  <div className="wind-status">WIND STATUS</div>
                  <div className="container-wind-status">
                    <div className="wind">
                      {weather.wind && weather.wind.speed}
                    </div>
                    <div className="unit">KM/H</div>
                  </div>
                  <div className="container-sunrise">
                    <div className="sunrise">Sunrise</div>
                    <div className="sunrise-time">{sunrise}</div>
                  </div>
                  <div className="container-sunset">
                    <div className="sunset">Sunset</div>
                    <div className="sunset-time">{sunset}</div>
                  </div>
                  <div className="container-air-pollution">
                    <div className="air-pollution">Air Pollution</div>
                    <div className="air-pollution-rate">Good</div>
                    <div className="pm">PM2.5</div>
                    <div className="pm-rate">
                      {airpoll &&
                        airpoll.list &&
                        airpoll.list[0] &&
                        airpoll.list[0].components && (
                          <div>{airpoll.list[0].components.pm2_5}</div>
                        )}
                    </div>
                  </div>
                </div>
                <div className="visibility-container">
                  <div className="container-visibility">
                    <div className="visibility-line">
                      <div className="visibility">VISIBILITY</div>
                      <div className="img-visibility">
                        <img src={icoeye} alt="visibility" />
                      </div>
                    </div>
                    <div className="visibility-range">{metertoKm}</div>
                    <div className="visibility-unit">km</div>
                    <div className="visibility-rate">{visibilityStatus}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="weekly">
              <div className="weekly-container">
                <div className="week">Weekly Weather</div>
                <div className="container-weekly">
                  <div className="monday-container">
                    <div className="day-mon">Mon</div>
                    <div className="mon-ico">
                      <img src={icosun} alt="sun" />
                    </div>
                    <div className="mon-temp">27.8˚</div>
                  </div>
                  <div className="tuesday-container">
                    <div className="day-tue">Tue</div>
                    <div className="tue-ico">
                      <img src={icosun} alt="" />
                    </div>
                    <div className="tue-temp">28.2˚</div>
                  </div>
                  <div className="wednesday-container">
                    <div className="day-wed">Wed</div>
                    <div className="wed-ico">
                      <img src={icosun} alt="" />
                    </div>
                    <div className="wed-temp">31.1˚</div>
                  </div>
                  <div className="thursday-container">
                    <div className="day-thu">Thu</div>
                    <div className="thu-ico">
                      <img src={icosun} alt="" />
                    </div>
                    <div className="thu-temp">26.2˚</div>
                  </div>
                  <div className="friday-container">
                    <div className="day-fri">Fri</div>
                    <div className="fri-ico">
                      <img src={icosun} alt="" />
                    </div>
                    <div className="fri-temp">25.1˚</div>
                  </div>
                  <div className="satday-container">
                    <div className="day-sat">Sat</div>
                    <div className="sat-ico">
                      <img src={icosun} alt="" />
                    </div>
                    <div className="sat-temp">24.6˚</div>
                  </div>
                  <div className="sunday-container">
                    <div className="day-sun">Sun</div>
                    <div className="sun-ico">
                      <img src={icosun} alt="" />
                    </div>
                    <div className="sun-temp">24.1˚</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Weather;
