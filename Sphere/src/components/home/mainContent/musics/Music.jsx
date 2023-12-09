import React from "react";
import "./music.css";
import Slider from "react-slick";
import Heading from "../../../common/heading/Heading";
import { disaster } from "../../../../dummyData";

const Music = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 1,
    speed: 500,
    rows: 20,
    slidesPerRow: 1,
  };
  return (
    <>
      <section className="music">
        <Heading title="Disaster" />
        <div className="content">
          <Slider {...settings}>
            {disaster
              .filter((val) => val.catgeory === "disaster")
              .map((val) => {
                return (
                  <div className="items">
                    <div className="box shadow flexSB">
                      <div className="images">
                        <div className="img">
                          <img src={val.cover} alt="" />
                        </div>
                        <div class="category category1">
                          <span>{val.catgeory}</span>
                        </div>
                      </div>
                      <div className="text">
                        <h1 className="title">{val.title.slice(0, 80)}...</h1>
                        <p>{val.desc.slice(0, 230)}</p>
                        <div className="date">
                          <i class="fas fa-calendar-days"></i>
                          <label>{val.date}</label>
                          <button
                          className="firstlnwza"
                          onClick={() => {
                            window.open(`${val.link}`);
                          }}
                        >
                          Read More
                        </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Music;
