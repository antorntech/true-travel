import React, { Component } from "react";
import Slider from "react-slick";
import "./CardSlider.css";
import slider1 from "../../images/card-slider/card-slider-1.jpg";
import slider2 from "../../images/card-slider/card-slider-2.jpg";
import slider3 from "../../images/card-slider/card-slider-3.jpg";
import slider4 from "../../images/card-slider/card-slider-4.jpg";
import slider5 from "../../images/card-slider/card-slider-5.jpg";
import slider6 from "../../images/card-slider/card-slider-6.jpg";

export default class CardSlider extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="container">
        <div className="row row-cols-1 row-cols-lg-2 d-flex align-items-center pt-lg-5">
          <div className="col-lg-7">
            <div className="home-details text-start p-5">
              <h1>COX'S BAZAR</h1>
              <p className="pb-lg-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
                sit a aliquam ipsam ab dolore iste ducimus. Alias modi
                voluptatibus natus facere! Praesentium voluptatum commodi ex
                expedita. Animi, fugit fuga.
              </p>
              <button className="booking-btn">
                Booking
                <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
          <div className="col-lg-5">
            <Slider style={{ width: "400px" }} {...settings}>
              <div>
                <img
                  width="300px"
                  className="img-fluid mx-auto"
                  src={slider1}
                  alt=""
                />
              </div>
              <div>
                <img
                  width="300px"
                  className="img-fluid mx-auto"
                  src={slider2}
                  alt=""
                />
              </div>
              <div>
                <img
                  width="300px"
                  className="img-fluid mx-auto"
                  src={slider3}
                  alt=""
                />
              </div>
              <div>
                <img
                  width="300px"
                  className="img-fluid mx-auto"
                  src={slider4}
                  alt=""
                />
              </div>
              <div>
                <img
                  width="300px"
                  className="img-fluid mx-auto"
                  src={slider5}
                  alt=""
                />
              </div>
              <div>
                <img
                  width="300px"
                  className="img-fluid mx-auto"
                  src={slider6}
                  alt=""
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
