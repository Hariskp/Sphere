import React from 'react';
import './Homepage.css'
import image from '../img/strom.webp'
import Header from '../components/Header';
import Footer from '../components/Footer';
import raindrop from '../img/raindrop.png'
import api from '../img/api.png'
import map from '../img/map.png'
import sphere from '../img/weather_hero.png'
import mobileapp from '../img/mobileapp.svg'
import chmeq from '../img/ChiangMai_eq.jpg'

function Homepage() {
    const backgroundStyle = {
        backgroundImage: `url(${image})`,};
    return (
        <>
        <Header />

        {/* Information-Box-Homepage */}
        <div className="three-box-container">
        <div className="box-home">
            <img src={raindrop} alt="" />
            <h4>Situation updated in real time</h4>
            <p className='box-home-information'>
            A website about weather that provides real-time updates can be incredibly useful for those who need to know the current conditions outside. With the ever-changing weather patterns that we experience, it can be difficult to plan your day without knowing what to expect. This is where a website that provides real-time updates can be incredibly helpful.
            </p>
        </div>
        <div className="box-home">
            <img src={api} alt="" />
            <h4>API Lastest version.</h4>
            <p className='box-home-information'>
            This version of the API includes new functionality. There are several tools that allow you to tailor weather information to your own requirements. You can, for example, opt to see weather information for a certain location. Alternatively, you may view weather data in several forms, such as daily, weekly, or monthly.
            </p>
        </div>
        <div className="box-home">
            <img src={map} alt="" />
            <h4>Map Convenience.</h4>
            <p className='box-home-information'>
            There are several options that allow us to examine the weather in great detail. We may observe the temperature, wind speed, humidity, and possibility of rain, for example.
            </p>
        </div>
      </div>

        {/* What is Sphere ? */}
        <div className="whats-sphere">
            <div className="whats-sphere-container">
                <h1>WHAT IS SPHERE WEATHER ?</h1>
                <p>Explore the world with Sphere, your premier destination for real-time weather insights and environmental updates. Dive into a seamless experience that combines cutting-edge technology with comprehensive data, providing you with accurate and detailed information about the weather and the environment. Sphere empowers you to make informed decisions, whether planning your day or staying connected to the pulse of the planet. Uncover the beauty of our dynamic world through Sphere's intuitive interface, where precision meets simplicity. Join us on a journey of discovery and stay ahead with Sphere – where every forecast is an opportunity to explore."</p>
                <div className="hr">
                    <hr></hr>
                </div>
            </div>
            <div className="whats-sphere-image">
                <img src={sphere} alt="" />
            </div>
        </div>
        <div className="sphere-device">
        <div className="sphere-device-image">
                <img src={mobileapp} alt="" />
            </div>
            <div className="device-container">
                <h3>SUPPORTING FOR</h3>
                <h2>SMARTPHONE DEVICES</h2>
                <p>Sphere is a weather forecasting Web-application this program will assist you in precisely and simply tracking the weather and program performs a variety of services, including presenting current weather conditions. Weather forecasts on a daily and weekly basis Severe weather warnings, among other things and responsive supporting for IOS and Android</p>
                <div className="learnmore-btn">
                    <button type='learnmore'>Learn more</button>
                    </div>       
            </div>
        </div>
        <div className="recent-warning-column">
            <div className="recent-warning-header">
                <h1>RECENT WARNING</h1>
            </div>
            <div className="recent-warning-news">
                <div className="container-background-color">
                <img src={chmeq} alt="ChiangMai_eq" />
                <div className="chm-news">
                    <h2>Chiangmai earthquake</h2>
                    <p>The Earthquake Surveillance Division will be established on March 13, 2023. At 4:59 p.m., the Meteorological Department recorded a magnitude 2.1 earthquake at a depth of 2 km in the San Sai Subdistrict, Phrao District, Chiang Mai Province. Initially, no reports of impacts from the region have been received. If further information becomes available, we will notify you.</p>
                </div>
                </div>
            </div>
        </div>
        <div className="recents-dots">
          <span className="recents-dot"></span>
          <span className="recents-dot"></span>
          <span className="recents-dot"></span>
          <span className="recents-dot"></span>
          <span className="recents-dot"></span>
        </div>
        <Footer />
        </>
    );
}

export default Homepage