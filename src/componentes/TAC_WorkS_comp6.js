import React from "react";
import "./TAC_WorkS_comp6.css";
import TickMark from "./Images/tickMarkTWC6.png";

export default function TAC_WorkS_comp6({ forwardedRef }) {
  return (
    <div ref={forwardedRef}>
      <div className="mainDivTWC6">
        <div className="frstDivTWC6">
          <p>THE TAC WORKSPACE ADVANTAGE</p>
        </div>

        <div className="scndDivTWC6">
          <p>Stay organized. Stay focused. Stay synced.</p>
        </div>

        <div className="thrdDivTWC6">
          <p>
            Sync Workspace with your Fiverr Marketplace activity to
            automatically analyze your overall business performance in a single,
            integrated dashboard.
          </p>
        </div>

        <div className="frthDivTWC6">
          <div className="D1FrthDTWC6">
            <h5>Get paid faster</h5>

            <div className="innerDTWC6">
              <div>
                <img src={TickMark} />
              </div>
              <div>
                <p>Collect deposits before starting work</p>
              </div>
            </div>

            <div className="innerDTWC6">
              <div>
                <img src={TickMark} />
              </div>
              <div>
                <p>Accept credit cards, ACH, and PayPal</p>
              </div>
            </div>
          </div>

          <div className="D2FrthDTWC6">
            <h5>Invoice better</h5>

            <div className="innerDTWC6">
              <div>
                <img src={TickMark} />
              </div>
              <div>
                <p>Customize and brand your invoices</p>
              </div>
            </div>

            <div className="innerDTWC6">
              <div>
                <img src={TickMark} />
              </div>
              <div>
                <p>Get alerts when your invoices are opened</p>
              </div>
            </div>
          </div>

          <div className="D3FrthDTWC6">
            <h5>Work smarter</h5>

            <div className="innerDTWC6">
              <div>
                <img src={TickMark} />
              </div>
              <div>
                <p>Set up recurring tasks to fit your schedule</p>
              </div>
            </div>

            <div className="innerDTWC6">
              <div>
                <img src={TickMark} />
              </div>
              <div>
                <p>Integrate with 1,000+ apps and services</p>
              </div>
            </div>
          </div>

          <div className="D4FrthDTWC6">
            <h5>Track deeper</h5>

            <div className="innerDTWC6">
              <div>
                <img src={TickMark} />
              </div>
              <div>
                <p>File expense receipts in one click</p>
              </div>
            </div>

            <div className="innerDTWC6">
              <div>
                <img src={TickMark} />
              </div>
              <div>
                <p>Claim tax deductions automatically</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
