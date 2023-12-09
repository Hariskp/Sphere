import React from "react";
import "./Header.css";
import logo from "../img/Spherelogo.png";
import { Link } from "react-router-dom";

function Header() {
    const toggle_menu = (event) => {
        const toggle_menu = event.currentTarget;
        toggle_menu.classList.toggle("change");
        
        let myMenu = document.getElementById('myMenu');
        if (myMenu.className === 'menu') {
            myMenu.className += ' menu-active';
        } else {
            myMenu.className = 'menu';
        }
    ;}
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
                <Link to={"/Weather"}>Weatherforecast</Link>
              </li>
              <li>
                <Link to={"/Warning"}>Warning</Link>
              </li>
              <li>
                <Link to={"/News"}>News</Link>
              </li>
              <li>
                <Link to={"/Blog"}>Blog</Link>
              </li>
              <li>
                <Link to={"/Aboutus"}>About us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
