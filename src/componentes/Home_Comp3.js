import React, { useState } from "react";
import "./Home_Comp3.css";
import Img2 from "./Images/img2.jpg";
import Video from "./Videos/Trial.mp4";

function Home_Comp3() {
  const [SplitComp3, setSplitComp3] = useState(false);

  const splitComp3 = () => {
    setSplitComp3(true);
  };
  return (
    <div
      className={`${SplitComp3 ? "BgForHomeComp3Af_Clk" : "BgForHomeComp3"}`}
    >
      <div className={`${SplitComp3 ? "Comp3Af_Clk" : ""}`}>
        <div
          className={`${
            SplitComp3 ? "BgForComp3_Cat1Af_Clk" : "BgForComp3_Cat1"
          }`}
          onClick={splitComp3}
        >
          <p className={`${SplitComp3 ? "headingAf_Clk" : "headingBf_Clk"}`}>
            A whole world of freelance talent at your fingertips
          </p>
          <ul className={`${SplitComp3 ? "pointsAf_Clk" : "pointsBf_Clk"}`}>
            <li>
              <p
                className={`${SplitComp3 ? "subheadAf_Clk" : "subheadBf_Clk"}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="lightgray"
                  class="bi bi-check-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                </svg>
                <p> The best for every budget</p>
              </p>
              <p
                className={`${
                  SplitComp3 ? "DetailComp3Af_Clk" : "DetailComp3"
                }`}
              >
                Find high-quality services at every price point. No hourly
                rates, just project-based pricing.
              </p>
            </li>
            <li>
              <p
                className={`${SplitComp3 ? "subheadAf_Clk" : "subheadBf_Clk"}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="lightgray"
                  class="bi bi-check-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                </svg>
                <p>Quality work done quickly</p>
              </p>
              <p
                className={`${
                  SplitComp3 ? "DetailComp3Af_Clk" : "DetailComp3"
                }`}
              >
                Find the right freelancer to begin working on your project
                within minutes.
              </p>
            </li>
            <li>
              <p
                className={`${SplitComp3 ? "subheadAf_Clk" : "subheadBf_Clk"}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="lightgray"
                  class="bi bi-check-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                </svg>
                <p>Protected payments, every time</p>
              </p>
              <p
                className={`${
                  SplitComp3 ? "DetailComp3Af_Clk" : "DetailComp3"
                }`}
              >
                Always know what you'll pay upfront. Your payment isn't released
                until you approve the work.
              </p>
            </li>
            <li>
              <p
                className={`${SplitComp3 ? "subheadAf_Clk" : "subheadBf_Clk"}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="lightgray"
                  class="bi bi-check-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                </svg>
                <p>24/7 support</p>
              </p>
              <p
                className={`${
                  SplitComp3 ? "DetailComp3Af_Clk" : "DetailComp3"
                }`}
              >
                Questions? Our round-the-clock support team is available to help
                anytime, anywhere.
              </p>
            </li>
          </ul>
        </div>
        <div
          className={`${SplitComp3 ? "Comp3VideoAf_Clk" : "Comp3VideoBf_Clk"}`}
        >
          <video src={Video} poster={Img2} controls></video>
        </div>
      </div>
    </div>
  );
}

export default Home_Comp3;
