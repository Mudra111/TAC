import React from "react";
import "./EarningDash.css";

export default function EarningDash() {
  return (
    <div className="earningMain">
      <div className="FrstDGig">
        <div>
          <p>Earnings</p>
        </div>
      </div>

      <div className="Earning_comp1">
        <div className="amount_cat">
          <div className="earn_subcomp">
            <p>NET INCOME</p>
            <p>$0</p>
          </div>
          <div className="earn_subcomp">
            <p>WITHDRAWN</p>
            <p>$0</p>
          </div>
          <div className="earn_subcomp">
            <p>USED FOR PURCHASES</p>
            <p>$0</p>
          </div>
          <div className="earn_subcomp">
            <p>PENDING CLEARENCE</p>
            <p>$0</p>
          </div>
          <div className="earn_subcomp">
            <p>AVAILABLE FOR WITHDRAWAL</p>
            <p>$0</p>
          </div>
        </div>

        <div className="earn_btns">
          <div>
            <button>Get Statement of Earnings</button>
          </div>
          <div>
            <button>Export to CSV</button>
          </div>
          <div>
            <button>Stop Syncing to Workspace</button>
          </div>
        </div>
      </div>

      <div className="earn_comp2">
        <div className="earn_comp2_cat1">
          <div>
            <p>WITHDRAW</p>
          </div>
          <div>
            <button>Paypal Account</button>
          </div>
          <div>
            <button>Bank Transfer</button>
          </div>
        </div>

        <div className="earn_comp2_cat2">
          <div>
            <p>SHOW</p>
          </div>
          <div>
            <select name="show cat" id="">
              <option value="everything">EVERYTHING</option>
              <option value="withdrawn">WITHDRAWN</option>
              <option value="pending clearence">PENDING CLEARANCE</option>
              <option value="cancel revenue">CANCELLED REVENUES</option>
              <option value="cleared">CLEARED</option>
              <option value="used for purchases">USED FOR PURCHASES</option>
            </select>
          </div>
          <div>
            <select name="year" id="">
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
            </select>
          </div>
          <div>
            <select name="month" id="">
              <option value="all">ALL MONTHS</option>
              <option value="jan">JANUARY</option>
              <option value="feb">FEBRUARY</option>
              <option value="mar">MARCH</option>
              <option value="apr">APRIL</option>
              <option value="may">MAY</option>
              <option value="jun">JUNE</option>
              <option value="jul">JULY</option>
              <option value="aug">AUGUST</option>
              <option value="sep">SEPTEMBER</option>
              <option value="oct">OCTOBER</option>
              <option value="nov">NOVEMBER</option>
              <option value="dec">DECEMBER</option>
            </select>
          </div>
        </div>
      </div>

      <div className="earn_comp3">
        <div className="earn_comp3_cat">
          <div>DATE</div>
          <div>FOR</div>
          <div>AMOUNT</div>
        </div>

        <div className="earn_comp3_empty">
          <span>There are no transactions to show here...</span>
        </div>
      </div>
    </div>
  );
}
