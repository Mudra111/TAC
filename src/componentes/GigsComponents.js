import React from "react";
import "./GigsComp.css";

export function GigsMenu1Active() {
  return (
    <div className="gigs-active-main">
      <div className="gig-meaning">
        <p>Your Gig is visible and may be ordered by all users.</p>
      </div>
      <div className="gigs-active-head">
        <div className="gigs-active-title">
          <h5>ACTIVE GIGS</h5>
        </div>

        <div className="gigs-active-dd">
          <select>
            <option value="">LAST 7 DAYS</option>
            <option value="">LAST 14 DAYS</option>
            <option value="">LAST 30 DAYS</option>
            <option value="">LAST 2 MONTHS</option>
            <option value="">LAST 3 MONTHS</option>
            <option value="">LAST 6 MONTHS</option>
          </select>
        </div>
      </div>

      <div className="gigs-active-cont">
        <div>
          <input type="checkbox" disabled />
        </div>
        <div>GIGS</div>
        <div>IMPRESSIONS</div>
        <div>CLICKS</div>
        <div>ORDERS</div>
        <div>CANCELLATIONS</div>
      </div>

      <div className="gigs-if-empty">
        <span>No active gigs to show.</span>
      </div>
    </div>
  );
}

export function GigsMenu2PA() {
  return (
    <div className="gigs-active-main">
      <div className="gig-meaning">
        <p>Gig is pending TAC's review and is not yet available.</p>
      </div>
      <div className="gigs-active-head">
        <div className="gigs-active-title">
          <h5>GIGS PENDING APPROVAL</h5>
        </div>

        <div className="gigs-active-dd">
          <select>
            <option value="">LAST 7 DAYS</option>
            <option value="">LAST 14 DAYS</option>
            <option value="">LAST 30 DAYS</option>
            <option value="">LAST 2 MONTHS</option>
            <option value="">LAST 3 MONTHS</option>
            <option value="">LAST 6 MONTHS</option>
          </select>
        </div>
      </div>

      <div className="gigs-active-cont">
        <div>
          <input type="checkbox" disabled />
        </div>
        <div>GIGS</div>
        <div>IMPRESSIONS</div>
        <div>CLICKS</div>
        <div>ORDERS</div>
        <div>CANCELLATIONS</div>
      </div>

      <div className="gigs-if-empty">
        <span>No pending gigs to show.</span>
      </div>
    </div>
  );
}

export function GigsMenu3RM() {
  return (
    <div className="gigs-active-main">
      <div className="gig-meaning">
        <p>Your Gig requires some modifications before it goes live.</p>
      </div>
      <div className="gigs-active-head">
        <div className="gigs-active-title">
          <h5>GIGS THAT REQUIRE MODIFICATIONS</h5>
        </div>

        <div className="gigs-active-dd">
          <select>
            <option value="">LAST 7 DAYS</option>
            <option value="">LAST 14 DAYS</option>
            <option value="">LAST 30 DAYS</option>
            <option value="">LAST 2 MONTHS</option>
            <option value="">LAST 3 MONTHS</option>
            <option value="">LAST 6 MONTHS</option>
          </select>
        </div>
      </div>

      <div className="gigs-active-cont">
        <div>
          <input type="checkbox" disabled />
        </div>
        <div>GIGS</div>
        <div>IMPRESSIONS</div>
        <div>CLICKS</div>
        <div>ORDERS</div>
        <div>CANCELLATIONS</div>
      </div>

      <div className="gigs-if-empty">
        <span>No gigs which require modification to show.</span>
      </div>
    </div>
  );
}

export function GigsMenu4Draft() {
  return (
    <div className="gigs-active-main">
      <div className="gig-meaning">
        <p>You need to finish editing your Gig before it goes live.</p>
      </div>
      <div className="gigs-active-head">
        <div className="gigs-active-title">
          <h5>DRAFT GIGS</h5>
        </div>

        <div className="gigs-active-dd">
          <select>
            <option value="">LAST 7 DAYS</option>
            <option value="">LAST 14 DAYS</option>
            <option value="">LAST 30 DAYS</option>
            <option value="">LAST 2 MONTHS</option>
            <option value="">LAST 3 MONTHS</option>
            <option value="">LAST 6 MONTHS</option>
          </select>
        </div>
      </div>

      <div className="gigs-active-cont">
        <div>
          <input type="checkbox" disabled />
        </div>
        <div>GIGS</div>
        <div>IMPRESSIONS</div>
        <div>CLICKS</div>
        <div>ORDERS</div>
        <div>CANCELLATIONS</div>
      </div>

      <div className="gigs-if-empty">
        <span>No draft gigs to show.</span>
      </div>
    </div>
  );
}

export function GigsMenu5Denied() {
  return (
    <div className="gigs-active-main">
      <div className="gig-meaning">
        <p>This Gig failed to pass our review and is not visible to anyone.</p>
      </div>
      <div className="gigs-active-head">
        <div className="gigs-active-title">
          <h5>DENIED GIGS</h5>
        </div>

        <div className="gigs-active-dd">
          <select>
            <option value="">LAST 7 DAYS</option>
            <option value="">LAST 14 DAYS</option>
            <option value="">LAST 30 DAYS</option>
            <option value="">LAST 2 MONTHS</option>
            <option value="">LAST 3 MONTHS</option>
            <option value="">LAST 6 MONTHS</option>
          </select>
        </div>
      </div>

      <div className="gigs-active-cont">
        <div>
          <input type="checkbox" disabled />
        </div>
        <div>GIGS</div>
        <div>IMPRESSIONS</div>
        <div>CLICKS</div>
        <div>ORDERS</div>
        <div>CANCELLATIONS</div>
      </div>

      <div className="gigs-if-empty">
        <span>No denied gigs to show.</span>
      </div>
    </div>
  );
}

export function GigsMenu6Paused() {
  return (
    <div className="gigs-active-main">
      <div className="gig-meaning">
        <p>No one can see your Gig. You may reactivate it whenever you like.</p>
      </div>
      <div className="gigs-active-head">
        <div className="gigs-active-title">
          <h5>PAUSED GIGS</h5>
        </div>

        <div className="gigs-active-dd">
          <select>
            <option value="">LAST 7 DAYS</option>
            <option value="">LAST 14 DAYS</option>
            <option value="">LAST 30 DAYS</option>
            <option value="">LAST 2 MONTHS</option>
            <option value="">LAST 3 MONTHS</option>
            <option value="">LAST 6 MONTHS</option>
          </select>
        </div>
      </div>

      <div className="gigs-active-cont">
        <div>
          <input type="checkbox" disabled />
        </div>
        <div>GIGS</div>
        <div>IMPRESSIONS</div>
        <div>CLICKS</div>
        <div>ORDERS</div>
        <div>CANCELLATIONS</div>
      </div>

      <div className="gigs-if-empty">
        <span>No paused gigs to show.</span>
      </div>
    </div>
  );
}
