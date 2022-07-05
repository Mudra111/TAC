import React, { useState } from "react";
import "./TAC_WS_Comp4.css";

function TAC_WS_Comp4() {
  const [disAmt, setDisAmt] = useState(false);

  return (
    <div>
      <div>
        <p>PRICING</p>
      </div>
      <div>
        <p>Level Up</p>
      </div>
      <div>
        Whether you’re just starting out or you’re running a major operation,
        Fiverr Workspace has a plan for you.
      </div>

      <div className="mainDivforPrice">
        <div className="divForFree">
          <div className="divForFree_Unlimit">
            <div className="divForServices">
              <div className="levelUpTitles">
                <p>Services</p>
              </div>
              <div className="servicesName">
                <p>Streamlined Business Tools</p>

                <p>Effortless Client Payments</p>

                <p>Fiverr Seller Integrations</p>

                <p>Ready-to-Use Contracts</p>
              </div>
            </div>

            <div className="divForTicks">
              <div className="levelUpTitles">
                <p>Free</p>
              </div>
              <div className="ticks">
                <p>&#10004;</p>

                <p>&#10004;</p>

                <p>&#10004;</p>

                <p>&#10004;</p>
              </div>
            </div>
          </div>
          <div> </div>

          <div className="amtMainTWS">
            <div className="amtForTWSPrice">
              <p>$0</p>
              <p>/mo</p>
            </div>
            <div className="NoticeTWS">
              <p>No credit card required</p>
            </div>
            <div className="btnForTWSPrice">
              <button>Get Started</button>
            </div>
          </div>
        </div>

        <div className="divForUnlimited">
          <div className="divForUnlimited1 ">
            <div className="divForFree_Unlimit ">
              <div className="divForServices ">
                <div className="levelUpTitles">
                  <p>Services</p>
                </div>
                <div className="servicesName">
                  <p>Streamlined Business Tools</p>

                  <p>Effortless Client Payments</p>

                  <p>Fiverr Seller Integrations</p>

                  <p>Ready-to-Use Contracts</p>
                  <p>Smart, Editable Contracts</p>
                </div>
              </div>

              <div className="divForTicks">
                <div className="levelUpTitles">
                  <p>Unlimited</p>
                </div>
                <div className="ticks">
                  <p>&#10004;</p>

                  <p>&#10004;</p>

                  <p>&#10004;</p>

                  <p>&#10004;</p>

                  <p>&#10004;</p>
                </div>
              </div>
            </div>

            <div className="divForFree_Unlimit">
              <div className="divForServices Unlimited1">
                <div className="levelUpTitles">
                  <p>Services</p>
                </div>
                <div className="servicesName">
                  <p>Unlimited Client Management</p>

                  <p>Custom-Branded Documents</p>

                  <p>360° Business Analytics</p>

                  <p>Priority Support</p>
                </div>
              </div>

              <div className="divForTicks">
                <div className="levelUpTitles">
                  <p>Unlimited</p>
                </div>
                <div className="ticks">
                  <p>&#10004;</p>

                  <p>&#10004;</p>

                  <p>&#10004;</p>

                  <p>&#10004;</p>
                </div>
              </div>
            </div>
          </div>

          <div className="amtMainTWS">
            <div className="amtMonAnuTWS">
              {disAmt ? (
                <div>
                  <p>ANUALLY</p>
                  <div className="amtForTWSPrice">
                    <p>$18</p>
                    <p>/mo</p>
                  </div>

                  <div className="NoticeTWS">
                    <p>Anually save 25%</p>
                  </div>
                </div>
              ) : (
                <div>
                  <p>MONTHLY</p>
                  <div className="amtForTWSPrice">
                    <p>$24</p>
                    <p>/mo</p>
                  </div>

                  <div className="NoticeTWS">
                    <p></p>
                  </div>
                </div>
              )}

              <div
                className={`${disAmt ? "TWSArrow" : "TWSArrow1"}`}
                onClick={() => {
                  setDisAmt(!disAmt);
                }}
              >
                <p>&#10097;</p>
              </div>
            </div>

            <div className="btnForTWSPrice">
              <button>Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TAC_WS_Comp4;
