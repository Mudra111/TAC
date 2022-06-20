import React from "react";

export default function OrderMenu1Late() {
  return (
    <div className="late-main">
      <div className="prio-title">LATE ORDERS</div>
      <hr />
      <div className="prio-cont">
        <div>BUYER</div>
        <div>GIG</div>
        <div>DUE ON</div>
        <div>TOTAL</div>
        <div>NOTE</div>
        <div>STATUS</div>
      </div>
      <div className="if-empty">No late orders to show.</div>
    </div>
  );
}
