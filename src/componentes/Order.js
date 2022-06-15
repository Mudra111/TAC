import React, { useState } from "react";
import "./order.css";
import HeaderForDash from "./HeaderForDash";
import OrderMenu1Prio from "./OrderMenu1-Prio";
import OrderMenu1Active from "./OrderMenu1-Active";
import OrderMenu1Cancel from "./OrderMenu1-Cancel";
import OrderMenu1Comp from "./OrderMenu1-Comp";
import OrderMenu1Deliver from "./OrderMenu1-Deliver";
import OrderMenu1Late from "./OrderMenu1-Late";
import OrderMenu1Star from "./OrderMenu1-Star";

function Order() {
  const [orderPrior, setOrderPrior] = useState(true);
  const [orderActive, setOrderActive] = useState(false);
  const [orderLate, setOrderLate] = useState(false);
  const [orderDelivered, setOrderDelivered] = useState(false);
  const [orderCompleted, setOrderCompleted] = useState(false);
  const [orderCancelled, setOrderCancelled] = useState(false);
  const [orderStarred, setOrderStarred] = useState(false);

  return (
    <div className="order-body">
      <HeaderForDash />
      <div className="order-display">
        <div>
          <p className="order-title">Manage Orders</p>
        </div>
        <div className="searchbar">
          <form>
            <input
              type="search"
              placeholder="Search My History..."
              aria-label="Search"
            />
            <button className="order-searchbtn" type="submit"></button>
          </form>
        </div>
      </div>
      <div className="subnav">
        <ul className="subnav-list">
          <li>
            <button
              onClick={() => {
                setOrderPrior(true);
                setOrderActive(false);
                setOrderLate(false);
                setOrderDelivered(false);
                setOrderCompleted(false);
                setOrderCancelled(false);
                setOrderStarred(false);
              }}
            >
              PRIORITY
            </button>
          </li>

          <li>
            <button
              onClick={() => {
                setOrderActive(true);
                setOrderPrior(false);
                setOrderLate(false);
                setOrderDelivered(false);
                setOrderCompleted(false);
                setOrderCancelled(false);
                setOrderStarred(false);
              }}
            >
              ACTIVE
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setOrderLate(true);
                setOrderActive(false);
                setOrderPrior(false);
                setOrderDelivered(false);
                setOrderCompleted(false);
                setOrderCancelled(false);
                setOrderStarred(false);
              }}
            >
              LATE
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setOrderDelivered(true);
                setOrderActive(false);
                setOrderLate(false);
                setOrderPrior(false);
                setOrderCompleted(false);
                setOrderCancelled(false);
                setOrderStarred(false);
              }}
            >
              DELIVERED
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setOrderCompleted(true);
                setOrderActive(false);
                setOrderLate(false);
                setOrderDelivered(false);
                setOrderPrior(false);
                setOrderCancelled(false);
                setOrderStarred(false);
              }}
            >
              COMPLETED
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setOrderCancelled(true);
                setOrderActive(false);
                setOrderLate(false);
                setOrderDelivered(false);
                setOrderCompleted(false);
                setOrderPrior(false);
                setOrderStarred(false);
              }}
            >
              CANCELLED
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setOrderStarred(true);
                setOrderActive(false);
                setOrderLate(false);
                setOrderDelivered(false);
                setOrderCompleted(false);
                setOrderCancelled(false);
                setOrderPrior(false);
              }}
            >
              STARRED
            </button>
          </li>
        </ul>
      </div>
      {orderPrior && <OrderMenu1Prio />}
      {orderActive && <OrderMenu1Active />}
      {orderLate && <OrderMenu1Late />}
      {orderCancelled && <OrderMenu1Cancel />}
      {orderCompleted && <OrderMenu1Comp />}
      {orderStarred && <OrderMenu1Star />}
      {orderDelivered && <OrderMenu1Deliver />}
    </div>
  );
}

export default Order;
