import React, { useState } from "react";
import "./order1.css";
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
            <button className="order-searchbtn" type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </button>
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
