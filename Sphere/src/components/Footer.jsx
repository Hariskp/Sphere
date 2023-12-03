import React from 'react' ;
import fb from '../img/fb.png';
import insta from '../img/insta.png';
import linkedin from  '../img/Linkedin.png';
import twitter from '../img/twitter.png';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links_div">
            <h4>PRODUCT</h4>
            <a href="/home">
              <p>HOME</p>
            </a>
            <a href="/news">
              <p>NEWS</p>
            </a>
            <a href="/blog">
              <p>BLOG</p>
            </a>
            <a href="/warning">
              <p>WARNING</p>
            </a>
            <a href="/weatherforecast">
              <p>WEATHERFORECAST</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>ABOUT</h4>
            <a href="/sphere">
              <p>SPHERE</p>
            </a>
            <a href="/team">
              <p>TEAM</p>
            </a>
            <a href="/career">
              <p>#</p>
            </a>
            <a href="/contact">
              <p>#</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>OUR SOCIAL</h4>
            <div className="socialmedia">
                  <p><img src={fb} alt="" /></p>
                  <p><img src={insta} alt="" /></p>
                  <p><img src={linkedin} alt="" /></p>
                  <p><img src={twitter} alt="" /></p>
            </div>
          </div>
        </div>

        <hr></hr>

        <div className="sb_footer-below">
          <div className="sb_footer-copyright">
            <p>
            ® {new Date().getFullYear()} Sphere.  All right reserved.
            </p>
          </div>
          <div className="sb_footer-below-links">
            <a href="/terms"><div>Terms & Conditions</div></a>
            <a href="/privacy"><div>Privacy</div></a>
            <a href="/security"><div>Security</div></a>
            <a href="/cookie"><div>Cookie Declaration</div></a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Footer;