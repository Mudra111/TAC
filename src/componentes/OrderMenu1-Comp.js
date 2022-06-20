import React from "react";

export default function OrderMenu1Comp() {
  return (
    <div className="comp-main">
      <div className="prio-title">COMPLETED ORDERS</div>
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
      <div className="if-empty">No completed orders to show.</div>
    </div>
  );
}
