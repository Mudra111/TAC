import React, { useState } from "react";
import ToggleSwitchForSCM from "./ToggleSwitch";
import "./SCM-SubNav.css";
import {
  SCMBudgetComp,
  SCMDeliveryTimeComp,
  SCMSellerDetailsComp,
  SCMServiceOptComp,
} from "./SCM-SN-Components";

function SCMSubNav() {
  const [serviceOpt, setServiceOpt] = useState(false);
  const [sellerDetails, setSellerDetails] = useState(false);
  const [deliveryTime, setDeliveryTime] = useState(false);
  const [budget, setBudget] = useState(false);
  return (
    <div className="SCM-SubNav">
      <div className="SCM-SN-DropDown">
        <div className="SCM-Dropdiv">
          <li className="nav-item-dash-btn">
            <button
              onClick={() => {
                setServiceOpt(!serviceOpt);
              }}
            >
              <b>Service Options</b>
              <svg
                width="11"
                height="7"
                viewBox="0 0 11 7"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.4636 6.38899L0.839326 1.769C0.692474 1.62109 0.692474 1.38191 0.839326 1.23399L1.45798 0.61086C1.60483 0.462945 1.84229 0.462945 1.98915 0.61086L5.72919 4.34021L9.46923 0.61086C9.61608 0.462945 9.85354 0.462945 10.0004 0.61086L10.619 1.23399C10.7659 1.38191 10.7659 1.62109 10.619 1.769L5.99477 6.38899C5.84792 6.5369 5.61046 6.5369 5.4636 6.38899Z"></path>
              </svg>
            </button>
          </li>
        </div>
        {serviceOpt && <SCMServiceOptComp ServiceOptClose={setServiceOpt} />}

        <div className="SCM-Dropdiv">
          <li className="nav-item-dash-btn">
            <button
              onClick={() => {
                setSellerDetails(!sellerDetails);
              }}
            >
              <b>Seller Details</b>
              <svg
                width="11"
                height="7"
                viewBox="0 0 11 7"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.4636 6.38899L0.839326 1.769C0.692474 1.62109 0.692474 1.38191 0.839326 1.23399L1.45798 0.61086C1.60483 0.462945 1.84229 0.462945 1.98915 0.61086L5.72919 4.34021L9.46923 0.61086C9.61608 0.462945 9.85354 0.462945 10.0004 0.61086L10.619 1.23399C10.7659 1.38191 10.7659 1.62109 10.619 1.769L5.99477 6.38899C5.84792 6.5369 5.61046 6.5369 5.4636 6.38899Z"></path>
              </svg>
            </button>
          </li>
        </div>
        {sellerDetails && (
          <SCMSellerDetailsComp SellerDetClose={setSellerDetails} />
        )}

        <div className="SCM-Dropdiv">
          <li className="nav-item-dash-btn">
            <button
              onClick={() => {
                setBudget(!budget);
              }}
            >
              <b>Budget</b>
              <svg
                width="11"
                height="7"
                viewBox="0 0 11 7"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.4636 6.38899L0.839326 1.769C0.692474 1.62109 0.692474 1.38191 0.839326 1.23399L1.45798 0.61086C1.60483 0.462945 1.84229 0.462945 1.98915 0.61086L5.72919 4.34021L9.46923 0.61086C9.61608 0.462945 9.85354 0.462945 10.0004 0.61086L10.619 1.23399C10.7659 1.38191 10.7659 1.62109 10.619 1.769L5.99477 6.38899C5.84792 6.5369 5.61046 6.5369 5.4636 6.38899Z"></path>
              </svg>
            </button>
          </li>
        </div>
        {budget && <SCMBudgetComp BudgetClose={setBudget} />}

        <div className="SCM-Dropdiv">
          <li className="nav-item-dash-btn">
            <button
              onClick={() => {
                setDeliveryTime(!deliveryTime);
              }}
            >
              <b>Delivery Time</b>
              <svg
                width="11"
                height="7"
                viewBox="0 0 11 7"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.4636 6.38899L0.839326 1.769C0.692474 1.62109 0.692474 1.38191 0.839326 1.23399L1.45798 0.61086C1.60483 0.462945 1.84229 0.462945 1.98915 0.61086L5.72919 4.34021L9.46923 0.61086C9.61608 0.462945 9.85354 0.462945 10.0004 0.61086L10.619 1.23399C10.7659 1.38191 10.7659 1.62109 10.619 1.769L5.99477 6.38899C5.84792 6.5369 5.61046 6.5369 5.4636 6.38899Z"></path>
              </svg>
            </button>
          </li>
        </div>
        {deliveryTime && (
          <SCMDeliveryTimeComp DeliveryTimeClose={setDeliveryTime} />
        )}
      </div>

      <div className="SCM-SN-toggles">
        <div className="SCM-SN-Subtoggles">
          <ToggleSwitchForSCM />
          <b>Pro Services</b>
        </div>
        <div className="SCM-SN-Subtoggles">
          <ToggleSwitchForSCM />
          <b>Subscription Services</b>
        </div>
        <div className="SCM-SN-Subtoggles">
          <ToggleSwitchForSCM />
          <b>Online Sellers</b>
        </div>
      </div>
    </div>
  );
}

export default SCMSubNav;
