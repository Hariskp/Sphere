import React from 'react'
import './Header.css' ;
import logo from '../img/Spherelogo.png';

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
                <ul class="menu" id="myMenu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Weatherforecast</a></li>
                    <li><a href="#">Warning</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">About us</a></li>
                </ul>
                <div className="menu-icon" onClick={toggle_menu}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                </div>
            </div>
        </nav>
    </>
  );
}

export default Header
