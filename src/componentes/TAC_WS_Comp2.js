import React, { useState } from "react";
import "./TAC_WS_Comp2.css";

function TAC_WS_Comp2({ forwardedRef }) {
  const [slide1, setSlide1] = useState(true);
  const [slide2, setSlide2] = useState(false);
  const [slide3, setSlide3] = useState(false);
  const [slide4, setSlide4] = useState(false);
  const [slide5, setSlide5] = useState(false);

  var classNames = require("classnames");

  var displaysld1 = classNames({
    "slider-subSld": true,
    sld1: true,
    dissld1: slide1,
    "dissld2-1": slide2,
    "dissld3-1": slide3,
    "dissld4-1": slide4,
    "dissld5-1": slide5,
  });
  var displaysld2 = classNames({
    "slider-subSld": true,
    sld2: true,
    "dissld1-2": slide1,
    dissld2: slide2,
    "dissld3-2": slide3,
    "dissld4-2": slide4,
    "dissld5-2": slide5,
  });
  var displaysld3 = classNames({
    "slider-subSld": true,
    sld3: true,
    "dissld1-3": slide1,
    "dissld2-3": slide2,
    dissld3: slide3,
    "dissld4-3": slide4,
    "dissld5-3": slide5,
  });
  var displaysld4 = classNames({
    "slider-subSld": true,
    sld4: true,
    "dissld1-4": slide1,
    "dissld2-4": slide2,
    "dissld3-4": slide3,
    dissld4: slide4,
    "dissld5-4": slide5,
  });
  var displaysld5 = classNames({
    "slider-subSld": true,
    sld5: true,
    "dissld1-5": slide1,
    "dissld2-5": slide2,
    "dissld3-5": slide3,
    "dissld4-5": slide4,
    dissld5: slide5,
  });

  const disSld1 = () => {
    setSlide1(true);
    setSlide2(false);
    setSlide3(false);
    setSlide4(false);
    setSlide5(false);
  };
  const disSld2 = () => {
    setSlide1(false);
    setSlide2(true);
    setSlide3(false);
    setSlide4(false);
    setSlide5(false);
  };
  const disSld3 = () => {
    setSlide1(false);
    setSlide2(false);
    setSlide3(true);
    setSlide4(false);
    setSlide5(false);
  };
  const disSld4 = () => {
    setSlide1(false);
    setSlide2(false);
    setSlide3(false);
    setSlide4(true);
    setSlide5(false);
  };
  const disSld5 = () => {
    setSlide1(false);
    setSlide2(false);
    setSlide3(false);
    setSlide4(false);
    setSlide5(true);
  };

  return (
    <div ref={forwardedRef} style={{ marginTop: "30px" }}>
      <div className="frstDivTWC3">
        <p>SMART TOOLS FOR SMART BUSINESSES</p>
      </div>

      <div className="scndDivTWC3">
        <p>Boost every part of your business - both on Fiverr and off</p>
      </div>

      <div className="TWSmain-sld">
        <div className={displaysld1} onClick={disSld1}>
          <div className="main-subSld1">
            <div className="slider-subSld-text">
              <h1>Seamless invoicing and payments</h1>
              <p>
                Customize and automate invoices and accept payments quickly and
                securely, in any currency, via bank transfer, credit card, or
                PayPal.
              </p>
              <a href="#">
                Take a Closer Look <p>&rarr;</p>
              </a>
            </div>
          </div>
        </div>

        <div className={displaysld2} onClick={disSld2}>
          <div className="main-subSld1">
            <div className="slider-subSld-text">
              <h1>Automated time & task management</h1>
              <p>
                Stay organized with time tracking tools that offer “set and
                forget” ease-of-use and automated task prioritization.
              </p>
              <a href="#">
                Take a Closer Look <p>&rarr;</p>
              </a>
            </div>
          </div>
        </div>

        <div className={displaysld3} onClick={disSld3}>
          <div className="main-subSld1">
            <div className="slider-subSld-text">
              <h1>On-point proposals</h1>
              <p>
                Use smart proposals that also seamlessly generate contracts,
                collect deposits, and so much more.
              </p>
              <a href="#">
                Take a Closer Look <p>&rarr;</p>
              </a>
            </div>
          </div>
        </div>

        <div className={displaysld4} onClick={disSld4}>
          <div className="main-subSld1">
            <div className="slider-subSld-text">
              <h1>Contracts ready to sign</h1>
              <p>
                Easily edit and share pre-populated contracts that build secure,
                fair relationships between you and your clients.
              </p>
              <a href="#">
                Take a Closer Look <p>&rarr;</p>
              </a>
            </div>
          </div>
        </div>

        <div className={displaysld5} onClick={disSld5}>
          <div className="main-subSld1">
            <div className="slider-subSld-text">
              <h1>TAC income sync</h1>
              <p>
                Automatically sync your Fiverr earnings with your Workspace
                account for a single, comprehensive view of your business
                performance.
              </p>
              <a href="#">
                Take a Closer Look <p>&rarr;</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TAC_WS_Comp2;
