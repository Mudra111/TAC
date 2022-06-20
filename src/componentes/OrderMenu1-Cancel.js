import React from "react";

export default function OrderMenu1Cancel() {
  return (
    <div className="cancel-main">
      <div className="prio-title">CANCELLED ORDERS</div>
      <hr />
      <div className="prio-cont">
        <div>BUYER</div>
        <div>GIG</div>
        <div>DUE ON</div>
        <div>TOTAL</div>
        <div>NOTE</div>
        <div>STATUS</div>
      </div>
      <div className="if-empty">No cancelled orders to show.</div>
    </div>
  );
}
