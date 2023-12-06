import React from 'react';
import './About.css';

import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <div className="Hero-banner">
          <div className="box-sphere">
            <div className="font-header">
              <h1>THE ORIGIN OF SPHERE</h1>
            </div>
            <div className="font-information">
              <p>Climate and environment are all important things in our lives in today's world, whether we are doing various activities or tasks, but it cannot be denied that these things have a great impact on the process life because the weather and environment change every day, making daily life sometimes difficult.

                You may be concerned about participating in various activities because the weather may be unfavorable at times.

                You must forego activities and miss out on opportunities. We will also have to deal with natural disasters on occasion.

                Unexpected environmental conditions cause significant harm to people, homes, and property. However, if the weather can be predicted, including the ability to warn of disasters ahead of time, this will have a positive impact on

                Live life to the fullest.

              </p>
            </div>
          </div>
          <div className="hr">
            <hr></hr>
          </div>
          <div className="sphere-developer">
            <div className="developer-box">
              <div className="box">
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="box">
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="box">
                <p>Lorem ipsum dolor sit.</p>
              </div>
              <div className="box">
                <p>Lorem ipsum dolor sit.</p>
              </div>
            </div>
              <div className="developer">
                <h1>SPHERE‏‏‎ ‎‏‏‎ ‎DEVELOPER</h1>
              </div>
            </div>
            <Footer/>
          </div>
    </>
  )
}

export default About