import React from "react";
import "./Warning.css";
import BannerImage from "../img/banner-warning.jpg";
import icon from "../img/icon_rainy.png";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
        <div className="recent-font">
          <h1>Weather warning</h1>
        </div>
        {<iframe
        src="https://embed.windy.com/embed2.html?lat=15.072&lon=97.427&detailLat=13.805&detailLon=100.675&width=1480&height=800&zoom=5&level=surface&overlay=wind&product=ecmwf&menu=&message=true&marker=true&calendar=now&pressure=true&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1"
        frameborder="0"
        style={{ width: "100%", height: "815px" }}
      ></iframe>}
        <br/>
        <br/>
        

        <div className="recent-font">
          <h1>Disaster warning map</h1>
        </div>
        {<iframe
        src="https://ews.dwr.go.th/ews/index.php"
        frameborder="0"
        style={{ width: "100%", height: "815px" }}
      ></iframe>}
        <br/>
        <br/>
        

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
      <Footer />
    </>
  );
}

export default Warning;
