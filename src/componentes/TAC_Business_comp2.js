import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./TAC_Business_comp2.css";

export default class CenterMode extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="main-sliderTBC2">
        <Slider {...settings} className="TACB_Comp2_Sld">
          <div style={{ width: "100%" }}>
            <div className="sub-blockTBC2 sb-1TBC2">
              <div className="sbD2">
                <p className="sbp1">Build your brand</p>
                <p
                  className="sbp2"
                  style={{
                    fontSize: "30px",
                    fontWeight: "bold",
                    lineHeight: "1",
                  }}
                >
                  Logo design
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="sub-blockTBC2 sb-2TBC2">
              <div className="sbD2">
                <p className="sbp1">Customize your size</p>
                <p
                  className="sbp2"
                  style={{
                    fontSize: "30px",
                    fontWeight: "bold",
                    lineHeight: "1",
                  }}
                >
                  WordPress
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="sub-blockTBC2 sb-3TBC2">
              <div className="sbD2">
                <p className="sbp1">Share your message</p>
                <p
                  className="sbp2"
                  style={{
                    fontSize: "30px",
                    fontWeight: "bold",
                    lineHeight: "1",
                  }}
                >
                  Voice Over
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="sub-blockTBC2 sb-4TBC2">
              <div className="sbD2">
                <p className="sbp1">Engage your audience</p>
                <p
                  className="sbp2"
                  style={{
                    fontSize: "30px",
                    fontWeight: "bold",
                    lineHeight: "1",
                  }}
                >
                  Video Explainer
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="sub-blockTBC2 sb-5TBC2">
              <div className="sbD2">
                <p className="sbp1">Reach your customers</p>
                <p
                  className="sbp2"
                  style={{
                    fontSize: "30px",
                    fontWeight: "bold",
                    lineHeight: "1",
                  }}
                >
                  Social Media
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="sub-blockTBC2 sb-6TBC2">
              <div className="sbD2">
                <p className="sbp1">Build your brand</p>
                <p
                  className="sbp2"
                  style={{
                    fontSize: "30px",
                    fontWeight: "bold",
                    lineHeight: "1",
                  }}
                >
                  Logo design
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="sub-blockTBC2 sb-7TBC2">
              <div className="sbD2">
                <p className="sbp1">Customize your size</p>
                <p
                  className="sbp2"
                  style={{
                    fontSize: "30px",
                    fontWeight: "bold",
                    lineHeight: "1",
                  }}
                >
                  WordPress
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="sub-blockTBC2 sb-8TBC2">
              <div className="sbD2">
                <p className="sbp1">Share your message</p>
                <p
                  className="sbp2"
                  style={{
                    fontSize: "30px",
                    fontWeight: "bold",
                    lineHeight: "1",
                  }}
                >
                  Voice Over
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="sub-blockTBC2 sb-9TBC2">
              <div className="sbD2">
                <p className="sbp1">Engage your audience</p>
                <p
                  className="sbp2"
                  style={{
                    fontSize: "30px",
                    fontWeight: "bold",
                    lineHeight: "1",
                  }}
                >
                  Video Explainer
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="sub-blockTBC2 sb-10TBC2">
              <div className="sbD2">
                <p className="sbp1">Reach your customers</p>
                <p
                  className="sbp2"
                  style={{
                    fontSize: "30px",
                    fontWeight: "bold",
                    lineHeight: "1",
                  }}
                >
                  Social Media
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
