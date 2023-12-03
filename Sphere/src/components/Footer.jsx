import React from "react";
import './Footer.css'


function Footer() {
  return(
   <>
     <div className="background">
    <div className="footer">
      <div className="footer-con">
        <div className="footer-box1"><img src="src/img/Logo.png" alt="#" /><h2>SPHERE</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam amet molestiae laboriosam expedita labore eos consequuntur nihil ipsa adipisci deleniti.</div>
        <div className="footer-box2"> <h3>PRODUCT</h3>
        <ul>
          <li>
            Home
          </li>
          <li>
            Blog
          </li>
          <li>
            News
          </li>
          <li>
            Warning
          </li>
          <li>
            Weatherforecast
          </li>
        </ul>
        </div>
        <div className="footer-box3"><h3>CONTACT</h3>
        <ul>
          <li>
            Patumthani, Rangsit 11100, Thailand.
          </li>
          <li>
            Sphereweather@sw.com
          </li>
          <li>
            (+66) 123 456 789
          </li>
          <li>
            (+66) 123 456 789
          </li>
        </ul>
        </div>
      </div>
    </div>
    </div>
    <div className="copy-background">
      <div className="copy-right">
      ® 2023 Copyright Designed by Sphere 
      </div>
    </div>
   </>
  );

}

export default Footer