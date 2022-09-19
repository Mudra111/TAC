import React from "react";
import "./TAC_Community_Comp3.css";
import Img from "./Images/TBC2img7.webp";

export default function TAC_Community_Comp3() {
  return (
    <div className="TAC_Comm_Comp3_Main">
      <div className="TACC_Comp3_Title">
        <p>Upcoming Events</p>
      </div>

      <div className="TAC_C3_MainDiv">
        <div className="TAC_C3_SubBg">
          <div className="TAC_C3_Img">
            <img src={Img} alt="" />
          </div>
          <div className="TAC_C3_Con">
            <div className="TAC_C3_Con_D1">
              <p>VIRTUAL EVENT</p>
            </div>
            <div className="TAC_C3_Con_D2">
              <p>Replay: Now Playing by Fiverr</p>
            </div>
            <div className="TAC_C3_Con_D3">
              <p>Mar 30 – Mar 31</p>
            </div>
            <div className="TAC_C3_Con_D4">
              <button>Watch Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
