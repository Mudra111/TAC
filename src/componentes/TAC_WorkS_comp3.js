import React from "react";
import "./TAC_WorkS_comp3.css";
import Img1 from "./Images/Img1TWC3.png";
import Img2 from "./Images/Img2TWC3.png";
import Img3 from "./Images/Img3TWC3.png";

export default function TAC_WorkS_comp3({ forwardedRef }) {
  return (
    <div ref={forwardedRef}>
      <div className="mainDivTWC3">
        <div className="frstDivTWC3">
          <p>POWERED BY TAC</p>
        </div>

        <div className="scndDivTWC3">
          <p>Get a 360° view of your complete business</p>
        </div>

        <div className="thrdDivTWC3">
          <p>
            Sync Workspace with your Fiverr Marketplace activity to
            automatically analyze your overall business performance in a single,
            integrated dashboard.
          </p>
        </div>

        <div className="frthDivTWC3">
          <div className="D1FrthDTWC3">
            <img src={Img1} />
            <h4>Analyze your earnings</h4>
            <p>
              Identify your most profitable Fiverr gigs and most lucrative
              offline contracts at a glance.
            </p>
          </div>

          <div className="D2FrthDTWC3">
            <img src={Img2} />
            <h4>Track your spending</h4>
            <p>
              Sync your banking to monitor, categorize, and understand your
              business expenses.
            </p>
          </div>

          <div className="D3FrthDTWC3">
            <img src={Img3} />
            <h4>Get ready for tax day</h4>
            <p>
              Consult automated business reports that integrate your Fiverr and
              non-Fiverr activity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
