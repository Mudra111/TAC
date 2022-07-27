import React, { useState } from "react";
import logo from "./Images/logo.png";
import "./DashboardMain.css";
import EarningDash from "./EarningDash";
import Buyreq from "./BuyerReq";
import ScaleBusiness from "./ScaleBusiness";
import Gig from "./Gigs";
import Order from "./Order";
import Messages1 from "./Messages";
import Dashboard1 from "./Dashboard1";

export default function DashboardMain() {
  const [Dashboard, setDashboard] = useState(true);
  const [Messages, setMessages] = useState(false);
  const [Orders, setOrders] = useState(false);
  const [Gigs, setGigs] = useState(false);
  const [Analytics, setAnalytics] = useState(false);
  const [Earnings, setEarnings] = useState(false);
  const [Community, setCommunity] = useState(false);
  const [More, setMore] = useState(false);
  const [BuyerReq, setBuyerReq] = useState(false);
  const [ScaleBus, setScaleBus] = useState(false);

  const ShowDropMore = () => {
    if (More) {
      setMore(false);
    } else {
      setMore(true);
    }
  };

  return (
    <div>
      <div className="MainDivDashboard">
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
            </ul>
          </div>
        </nav>

        <div className="MainPageDashboard">
          <div className="verticalNav">
            <ul className="ulInVN">
              <li
                onClick={() => {
                  setDashboard(true);
                  setMessages(false);
                  setOrders(false);
                  setGigs(false);
                  setAnalytics(false);
                  setEarnings(false);
                  setCommunity(false);
                  setMore(false);
                  setBuyerReq(false);
                  setScaleBus(false);
                }}
              >
                Dashboard
              </li>
              <li
                onClick={() => {
                  setDashboard(false);
                  setMessages(true);
                  setOrders(false);
                  setGigs(false);
                  setAnalytics(false);
                  setEarnings(false);
                  setCommunity(false);
                  setMore(false);
                  setBuyerReq(false);
                  setScaleBus(false);
                }}
              >
                Messages
              </li>
              <li
                onClick={() => {
                  setDashboard(false);
                  setMessages(false);
                  setOrders(true);
                  setGigs(false);
                  setAnalytics(false);
                  setEarnings(false);
                  setCommunity(false);
                  setMore(false);
                  setBuyerReq(false);
                  setScaleBus(false);
                }}
              >
                Orders
              </li>
              <li
                onClick={() => {
                  setDashboard(false);
                  setMessages(false);
                  setOrders(false);
                  setGigs(true);
                  setAnalytics(false);
                  setEarnings(false);
                  setCommunity(false);
                  setMore(false);
                  setBuyerReq(false);
                  setScaleBus(false);
                }}
              >
                Gigs
              </li>
              <li
                onClick={() => {
                  setDashboard(false);
                  setMessages(false);
                  setOrders(false);
                  setGigs(false);
                  setAnalytics(true);
                  setEarnings(false);
                  setCommunity(false);
                  setMore(false);
                  setBuyerReq(false);
                  setScaleBus(false);
                }}
              >
                Analytics
              </li>
              <li
                onClick={() => {
                  setDashboard(false);
                  setMessages(false);
                  setOrders(false);
                  setGigs(false);
                  setAnalytics(false);
                  setEarnings(true);
                  setCommunity(false);
                  setMore(false);
                  setBuyerReq(false);
                  setScaleBus(false);
                }}
              >
                Earnings
              </li>
              <li
                onClick={() => {
                  setDashboard(false);
                  setMessages(false);
                  setOrders(false);
                  setGigs(false);
                  setAnalytics(false);
                  setEarnings(false);
                  setCommunity(true);
                  setMore(false);
                  setBuyerReq(false);
                  setScaleBus(false);
                }}
              >
                Community
              </li>
              <li
                onClick={() => {
                  ShowDropMore();
                }}
              >
                More
              </li>
              <ul className={` ${More ? "MoreDropDownShow" : "MoreDropDown"}`}>
                <li
                  onClick={() => {
                    setDashboard(false);
                    setMessages(false);
                    setOrders(false);
                    setGigs(false);
                    setAnalytics(false);
                    setEarnings(false);
                    setCommunity(false);
                    setMore(false);
                    setBuyerReq(true);
                    setScaleBus(false);
                  }}
                >
                  Buyer Request
                </li>
                <li>TAC Workspace</li>
                <li
                  onClick={() => {
                    setDashboard(false);
                    setMessages(false);
                    setOrders(false);
                    setGigs(false);
                    setAnalytics(false);
                    setEarnings(false);
                    setCommunity(false);
                    setMore(false);
                    setBuyerReq(false);
                    setScaleBus(true);
                  }}
                >
                  Scale Your Business
                </li>
                <li>Learn - Online Courses</li>
                <li>Contacts</li>
              </ul>
            </ul>
          </div>
          <div>
            {Dashboard && <Dashboard1 />}
            {Earnings && <EarningDash />}
            {BuyerReq && <Buyreq />}
            {Gigs && <Gig />}
            {Orders && <Order />}
            {ScaleBus && <ScaleBusiness />}
            {Messages && <Messages1 />}
          </div>
        </div>
      </div>
    </div>
  );
}
