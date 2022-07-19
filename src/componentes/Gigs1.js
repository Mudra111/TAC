import React, { useState } from "react";
import "./Gigs1.css";
import {
  GigsMenu1Active,
  GigsMenu2PA,
  GigsMenu3RM,
  GigsMenu4Draft,
  GigsMenu5Denied,
  GigsMenu6Paused,
} from "./GigsComponents";
import HeaderForDash from "./HeaderForDash";
import ToggleSwitchForGigs from "./ToggleSwitch";

function Gigs() {
  const [gigsActive, setGigsActive] = useState(true);
  const [gigsPA, setGigsPA] = useState(false);
  const [gigsRM, setGigsRM] = useState(false);
  const [gigsDraft, setGigsDraft] = useState(false);
  const [gigsDenied, setGigsDenied] = useState(false);
  const [gisPaused, setGigsPaused] = useState(false);

  return (
    <div className="gigs-body">
      <HeaderForDash />
      <div className="gigs-display">
        <div>
          <p className="gigs-title">Gigs</p>
        </div>
        <div className="Gigs-Toggles">
          <div className="Gigs-SubToggle1">
            <ToggleSwitchForGigs />
            <p>Get briefs</p>
            <p>(</p>
            <span>Set a rate</span>
            <p>)</p>
          </div>
          <div className="Gigs-SubToggle1">
            <ToggleSwitchForGigs />
            <p>Accepting Custom Orders</p>
          </div>
        </div>
      </div>
      <div className="gigs-subnav">
        <ul className="gigs-subnav-list">
          <li>
            <button
              onClick={() => {
                setGigsActive(true);
                setGigsDenied(false);
                setGigsDraft(false);
                setGigsPA(false);
                setGigsPaused(false);
                setGigsRM(false);
              }}
            >
              ACTIVE
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setGigsActive(false);
                setGigsDenied(false);
                setGigsDraft(false);
                setGigsPA(true);
                setGigsPaused(false);
                setGigsRM(false);
              }}
            >
              PENDING APPROVAL
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setGigsActive(false);
                setGigsDenied(false);
                setGigsDraft(false);
                setGigsPA(false);
                setGigsPaused(false);
                setGigsRM(true);
              }}
            >
              REQUIRES MODIFICATIONS
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setGigsActive(false);
                setGigsDenied(false);
                setGigsDraft(true);
                setGigsPA(false);
                setGigsPaused(false);
                setGigsRM(false);
              }}
            >
              DRAFT
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setGigsActive(false);
                setGigsDenied(true);
                setGigsDraft(false);
                setGigsPA(false);
                setGigsPaused(false);
                setGigsRM(false);
              }}
            >
              DENIED
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setGigsActive(false);
                setGigsDenied(false);
                setGigsDraft(false);
                setGigsPA(false);
                setGigsPaused(true);
                setGigsRM(false);
              }}
            >
              PAUSED
            </button>
          </li>
        </ul>
        <div className="create-gig-btn">
          <button>CREATE A NEW GIG</button>
        </div>
      </div>
      {gigsActive && <GigsMenu1Active />}
      {gigsPA && <GigsMenu2PA />}
      {gigsRM && <GigsMenu3RM />}
      {gigsDraft && <GigsMenu4Draft />}
      {gigsDenied && <GigsMenu5Denied />}
      {gisPaused && <GigsMenu6Paused />}
      <div className="gig-link">
        <a href="#">What does your Gig® status mean?</a>
      </div>
    </div>
  );
}

export default Gigs;
