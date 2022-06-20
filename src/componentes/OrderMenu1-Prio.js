import React from "react";
import "./Prio.css";

export default function OrderMenu1Prio() {
  return (
    <div className="prior-main">
      <div className="prio-title">PRIORITY ORDERS</div>
      <hr />
      <div className="prio-cont">
        <div>BUYER</div>
        <div>GIG</div>
        <div>DUE ON</div>
        <div>TOTAL</div>
        <div>NOTE</div>
        <div>STATUS</div>
      </div>
      <div className="if-empty">No priority orders to show.</div>
    </div>
  );
}
