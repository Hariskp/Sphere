import React from "react";
import './Footer.css'



function Footer() {
  return(
   <>
     <div className="background">
    <div className="footer">
      <div className="footer-con">
        <div className="footer-box1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam amet molestiae laboriosam expedita labore eos consequuntur nihil ipsa adipisci deleniti.</div>
        <div className="footer-box2"> <h3>PRODUCT</h3>
        <ul>
          <li>
            Home
          </li>
          <li>
            News
          </li>
          <li>
            Blog
          </li>
          <li>
            Warning
          </li>
          <li>
            Forecast
          </li>
        </ul>
        </div>
        <div className="footer-box3">3</div>
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