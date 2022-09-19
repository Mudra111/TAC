import React, { useState } from "react";
import "./TAC_Community_Comp2.css";
import TAC_Comm_Comp2_SubC1 from "./TAC_Comm_Comp2_SubC1";
import TAC_Comm_Comp2_SubC2 from "./TAC_Comm_Comp2_SubC2";
import TAC_Comm_Comp2_SubC3 from "./TAC_Comm_Comp2_SubC3";

function TAC_Community_Comp2() {
  const [allEvents, setallEvents] = useState(true);
  const [inPerson, setinPerson] = useState(false);
  const [virtual, setVirtual] = useState(false);
  return (
    <div>
      <div className="TACC_Comp2_Title">
        <p>Upcoming Events</p>
      </div>

      <div className="TACC_Comp2_Nav">
        <div
          className={`${
            allEvents
              ? "TACC_Comp2_NavItem_Sel TACC_Comp2_NavItem"
              : "TACC_Comp2_NavItem"
          }`}
          onClick={() => {
            setallEvents(true);
            setinPerson(false);
            setVirtual(false);
          }}
        >
          All Events
        </div>
        <div
          className={`${
            inPerson
              ? "TACC_Comp2_NavItem_Sel TACC_Comp2_NavItem"
              : "TACC_Comp2_NavItem"
          }`}
          onClick={() => {
            setallEvents(false);
            setinPerson(true);
            setVirtual(false);
          }}
        >
          In Person Events
        </div>

        <div
          className={`${
            virtual
              ? "TACC_Comp2_NavItem_Sel TACC_Comp2_NavItem"
              : "TACC_Comp2_NavItem"
          }`}
          onClick={() => {
            setallEvents(false);
            setinPerson(false);
            setVirtual(true);
          }}
        >
          Virtual Events
        </div>
      </div>

      <div>
        {allEvents && <TAC_Comm_Comp2_SubC1 />}
        {inPerson && <TAC_Comm_Comp2_SubC2 />}
        {virtual && <TAC_Comm_Comp2_SubC3 />}
      </div>
    </div>
  );
}

export default TAC_Community_Comp2;
