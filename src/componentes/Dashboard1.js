import React, { useState } from "react";
import "./Dashboard1.css";
import Dashc1 from "./Dash1_comp1";

export default function Dashboard1() {
  const [profileInfo, setProfileInfo] = useState(true);
  const [activeOrdr, setActiveOrdr] = useState(false);
  const [inbox, setInbox] = useState(false);

  return (
    <div>
      <div className="MainDivDash1">
        <div className="ScndDDash1">
          <div className="FstInnScnDDash1">
            <div
              className={`${
                profileInfo ? "FstinnSDDash1Act1" : "FstinnSDDash1_1"
              }`}
              onClick={() => {
                setProfileInfo(true);
                setActiveOrdr(false);
                setInbox(false);
              }}
            >
              PROFILE INFO
            </div>

            <div
              className={`${
                activeOrdr ? "FstinnSDDash1Act2" : "FstinnSDDash1_2"
              }`}
              onClick={() => {
                setProfileInfo(false);
                setActiveOrdr(true);
                setInbox(false);
              }}
            >
              ACTIVE ORDERS
            </div>

            <div
              className={`${inbox ? "FstinnSDDash1Act3" : "FstinnSDDash1_3"}`}
              onClick={() => {
                setProfileInfo(false);
                setActiveOrdr(false);
                setInbox(true);
              }}
            >
              INBOX
            </div>
          </div>
        </div>

        <div className="ThrdDDash1">{profileInfo && <Dashc1 />}</div>
      </div>
    </div>
  );
}
