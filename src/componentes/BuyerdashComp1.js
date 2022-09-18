import React from "react";
import "./BuyerdashComp1.css";
import BDImg from "./Images/BuyerDashImg5.webp";

function BuyerdashComp1() {
  return (
    <div>
      <div className="BDComp1_MainDiv">
        <img src={BDImg} alt="" />
        <div className="BDComp1_SubMainDiv">
          <div>
            <p>Hi Meet,</p>
            <p>Get offers from sellers for your project</p>
            <button>Post a request</button>
          </div>

          <div>
            <p>How TAC Works</p>
            <span> </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyerdashComp1;
