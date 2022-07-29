import React, { useState } from "react";
import "./HeaderForDash.css";
import { Link } from "react-router-dom";
import logo from "./Images/logo.png";
import Messages from "./Messages";

export default function HeaderForDash(props) {
  const [msgBox, setMsgBox] = useState(false);
  return (
    <div className="headerForDash">
      <nav className="nav1ForDash">
        <div className="">
          <ul className="nav justify-content-end ">
            <li className="nav-item-dash me-5">
              <img src={logo} alt="" className="setlogo" />
            </li>
            <li className="nav-item-dash right">
              <form class="d-flex">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success searchbtn"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </li>
            <li className="nav-item-dash lh">
              <Link to="/dashboard" className="active" aria-current="page">
                <b>Dashboard</b>
              </Link>
            </li>
            <li className="nav-item-dash-btn">
              <button
                onClick={() => {
                  setMsgBox(!msgBox);
                }}
              >
                <b>Messages</b>
              </button>
            </li>
            {msgBox && <Messages MsgBoxClose={setMsgBox} />}

            <li className="nav-item-dash">
              <Link to="/order">
                <b>Orders</b>
              </Link>
            </li>
            <li className="nav-item-dash dropdown">
              <Link to="/gigs1">
                <b>Gigs</b>
              </Link>
            </li>
            <li className="nav-item-dash dropdown">
              <a id="navbarDropdown" data-bs-toggle="dropdown" href="#">
                <b>Analytics</b>
              </a>
            </li>
            <li className="nav-item-dash dropdown">
              <a id="navbarDropdown" data-bs-toggle="dropdown" href="#">
                <b>Earnings</b>
              </a>
            </li>
            <li className="nav-item-dash dropdown">
              <a id="navbarDropdown" data-bs-toggle="dropdown" href="#">
                <b>Community</b>
              </a>
            </li>
            <li className="nav-item-dash dropdown">
              <a id="navbarDropdown" data-bs-toggle="dropdown" href="#">
                <b>More</b>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
