import React from "react";

export default function OrderMenu1Deliver() {
  return (
    <div className="deliver-main">
      <div className="prio-title">DELIVERED ORDERS</div>
      <hr />
      <div className="deliver-cont">
        <div>BUYER</div>
        <div>GIG</div>
        <div>DUE ON</div>
        <div>DELIVERED AT</div>
        <div>TOTAL</div>
        <div>NOTE</div>
        <div>STATUS</div>
      </div>
      <div className="if-empty">No delivered orders to show.</div>
    </div>
  );
}
