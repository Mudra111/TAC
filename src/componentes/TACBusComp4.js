import React from "react";
import "./TACBusComp4.css";
import Img1 from "./Images/TAC_BusImg1.webp";
import Img2 from "./Images/TAC_BusImg2.webp";
import Img3 from "./Images/TAC_BusImg3.webp";

export default function TACBusComp4() {
  return (
    <div className="main-bg">
      <div className="main-cont">
        <div className="card1_Bg">
          <div className="card1">
            <div className="box1">
              <div className="imgBx">
                <img src={Img1} alt="" />
              </div>
              <div className="conBx">
                <div>
                  <p>Finding the right talent? Leave that to us</p>
                  <p>
                    A team of Fiverr Business Success Managers is here to help
                    match you with the best talent for your team - no need for
                    endless guessing and interviews..
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card2_Bg">
          <div className="card1">
            <div className="box1">
              <div className="imgBx">
                <img src={Img2} alt="" />
              </div>
              <div className="conBx">
                <div>
                  <p>Turn scattered feedback into productive teamwork</p>
                  <p>
                    Collaborate with your team, manage projects, and share
                    freelancers - all in one workspace.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card3_Bg">
          <div className="card1">
            <div className="box1">
              <div className="imgBx">
                <img src={Img3} alt="" />
              </div>
              <div className="conBx">
                <div>
                  <p>Simplify budgeting and manage with transparency</p>
                  <p>
                    Skip all the overhead of multiple freelancers, monitor your
                    team's progress, approve transactions, and set budgets with
                    ease.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
