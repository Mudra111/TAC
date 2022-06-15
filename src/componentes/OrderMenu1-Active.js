import React from "react";

export default function OrderMenu1Active() {
  return (
    <div className="active-main">
      <div className="prio-title">ACTIVE ORDERS</div>
      <hr />
      <div className="prio-cont">
        <div>BUYER</div>
        <div>GIG</div>
        <div>DUE ON</div>
        <div>TOTAL</div>
        <div>NOTE</div>
        <div>STATUS</div>
      </div>
      <div className="if-empty">No active orders to show.</div>
    </div>
  );
}
