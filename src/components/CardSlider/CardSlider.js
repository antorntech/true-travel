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
                The name Cox's Bazar originated from the name of a British East
                India Company officer, Captain Hiram Cox, who was appointed as
                the Superintendent of Palonki (today's Cox's Bazar) outpost. He
                succeeded Warren Hastings, who became the Governor of Bengal
                following the British East India Company Act in 1773. Cox
                embarked upon the task of rehabilitation and settlement of the
                Arakanese refugees in the area.
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
                  className="img-fluid mx-auto box-shadow"
                  src={slider1}
                  alt=""
                />
              </div>
              <div>
                <img
                  width="300px"
                  className="img-fluid mx-auto box-shadow"
                  src={slider2}
                  alt=""
                />
              </div>
              <div>
                <img
                  width="300px"
                  className="img-fluid mx-auto box-shadow"
                  src={slider3}
                  alt=""
                />
              </div>
              <div>
                <img
                  width="300px"
                  className="img-fluid mx-auto box-shadow"
                  src={slider4}
                  alt=""
                />
              </div>
              <div>
                <img
                  width="300px"
                  className="img-fluid mx-auto box-shadow"
                  src={slider5}
                  alt=""
                />
              </div>
              <div>
                <img
                  width="300px"
                  className="img-fluid mx-auto box-shadow"
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
