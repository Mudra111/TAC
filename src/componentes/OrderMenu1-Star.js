import React from "react";

export default function OrderMenu1Star() {
  return (
    <div className="star-main">
      <div className="prio-title">STARRED ORDERS</div>
      <hr />
      <div className="prio-cont">
        <div>BUYER</div>
        <div>GIG</div>
        <div>DUE ON</div>
        <div>TOTAL</div>
        <div>NOTE</div>
        <div>STATUS</div>
      </div>
      <div className="if-empty">No starred orders to show.</div>
    </div>
  );
}
