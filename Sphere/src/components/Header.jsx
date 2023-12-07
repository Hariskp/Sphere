import React from "react";
import "./Header.css";
import logo from "../img/Spherelogo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav>
        <div className="navbar">
          <div className="nav-con">
            <div className="logo">
              <img src={logo} alt="logo" />
              <h4>SPHERE</h4>
              <p>Weather forecast website</p>
            </div>
            <ul class="menu">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/"}>Weatherforecast</Link>
              </li>
              <li>
                <a href="">Warning</a>
              </li>
              <li>
                <a href="">News</a>
              </li>
              <li>
                <Link to={"/Blog"}>Blog</Link>
              </li>
              <li>
                <a href="">About us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
