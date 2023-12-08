import React from "react";
import "./Warning.css";
import BannerImage from "../img/banner-warning.jpg";
import icon from "../img/icon_rainy.png";
import Header from "../components/Header";
import Footer from "../components/Footer";

import weatherapi from "../img/weather_api.svg"
import notify from "../img/notify.svg"

function Warning() {
  return (
    <>
      <Header />
      <div className="warning-page">
        <div className="banner-bg">
          <img src={BannerImage} alt="banner" />
          <div className="warning-info">
            <div className="date-warn">Fri 2 Dec 23</div>
            <div className="temp-warn">
              27°
              <img src={icon} alt="icon" />
            </div>
            <div className="location-warn">Bangkok, Thailand</div>
          </div>
          <input
            className="search-warn"
            type="text"
            placeholder="Searching here..."
          />
        </div>
        
        {/* <iframe
        src="https://flood.gistda.or.th/"
        frameborder="100"
        style={{ width: "100%", height: "800px" }}
      ></iframe> */}
      <div className="div-about-weather-api">
        <div className="text-about-weather-api">
          <h1>WHY ARE WEATHER FORECAST IMPORTANT ?</h1>
          <p>Weather forecasts are crucial for various aspects of life, including safety, agriculture, transportation, energy production, construction, outdoor events, public health, and natural resource management. They provide essential information for planning and decision-making, helping individuals, businesses, and governments prepare for and mitigate the impact of weather-related events. Weather forecasts contribute to public safety, economic planning, resource management, and risk assessment in areas such as insurance. Overall, accurate and timely weather predictions play a vital role in ensuring the well-being of communities and the efficient functioning of various sectors.</p>
        </div>
        <div className="image-weather-api">
          <img src={weatherapi} alt="" />
        </div>
      </div>



      <div className="weather-warning-api-container">
      </div>
      <div className="weather-warning-api">
        {<iframe
        src="https://embed.windy.com/embed2.html?lat=15.072&lon=97.427&detailLat=13.805&detailLon=100.675&width=1480&height=800&zoom=5&level=surface&overlay=wind&product=ecmwf&menu=&message=true&marker=true&calendar=now&pressure=true&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1"
        frameborder="0"
        style={{ width: "100%", height: "815px" }}
      ></iframe>}
        </div>
        


        <div className="div-about-disaster-api">
        <div className="image-disaster-api">
          <img src={notify} alt="" />
        </div>
        <div className="text-about-disaster-api">
          <h1>DISASTER NOTIFICATION</h1>
          <p>Disaster notifications are vital for several reasons, including providing early warnings for evacuation, enhancing community preparedness, facilitating communication and coordination among response agencies, enabling efficient resource allocation, raising public awareness and education, leveraging technology for rapid dissemination of information, mitigating panic through clear and accurate communication, and promoting global connectivity for international disaster response. Overall, these notifications play a crucial role in minimizing the impact of disasters and ensuring the safety and well-being of communities..</p>
        </div>
      </div>

        <div className="disaster-warning-api-container">
        </div>
        <div className="disaster-warning-api">
        {<iframe
        src="https://ews.dwr.go.th/ews/index.php"
        frameborder="0"
        style={{ width: "100%", height: "815px" }}
      ></iframe>}
        <br/>
        <br/>
        </div>
        

        <div className="disaster-warning-vertical-api">
        <div className="recent-font">
          <h1>Disaster warning</h1>
        </div>
        {<iframe
        src="https://tdaweb.disaster.go.th/tda/AlertHome?fbclid=IwAR01jGBoDzxBVhVNEIr1MpevaP3GkEgLDN8bPasqqcXPGiGxxHn7sNPXN6g"
        frameborder="0"
        style={{ width: "100%", height: "815px" }}
      ></iframe>}
        <br/>
        <br/>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Warning;
