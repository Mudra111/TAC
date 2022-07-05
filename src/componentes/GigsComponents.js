import React from "react";
import "./GigsComp.css";

export function GigsMenu1Active() {
  return (
    <div className="gigs-active-main">
      <div className="gigs-active-head">
        <div className="gigs-active-title">ACTIVE GIGS</div>
        <div>
          <select>
            <optgroup>
              <option value="">LAST 7 DAYS</option>
              <option value="">LAST 14 DAYS</option>
              <option value="">LAST 30 DAYS</option>
              <option value="">LAST 2 MONTHS</option>
              <option value="">LAST 3 MONTHS</option>
              <option value="">LAST 6 MONTHS</option>
            </optgroup>
          </select>
        </div>
      </div>
      <hr />
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
      <div className="gigs-if-empty">No active gigs to show.</div>
    </div>
  );
}

export function GigsMenu2PA() {
  return (
    <div className="gigs-pa-main">
      <div className="gigs-active-head">
        <div className="gigs-active-title">GIGS PENDING APPROVAL</div>
        <div>
          <select>
            <optgroup>
              <option value="">LAST 7 DAYS</option>
              <option value="">LAST 14 DAYS</option>
              <option value="">LAST 30 DAYS</option>
              <option value="">LAST 2 MONTHS</option>
              <option value="">LAST 3 MONTHS</option>
              <option value="">LAST 6 MONTHS</option>
            </optgroup>
          </select>
        </div>
      </div>
      <hr />
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
      <div className="gigs-if-empty">No pending gigs to show.</div>
    </div>
  );
}

export function GigsMenu3RM() {
  return (
    <div className="gigs-rm-main">
      <div className="gigs-active-head">
        <div className="gigs-active-title">GIGS THAT REQUIRE MODIFICATIONS</div>
        <div>
          <select>
            <optgroup>
              <option value="">LAST 7 DAYS</option>
              <option value="">LAST 14 DAYS</option>
              <option value="">LAST 30 DAYS</option>
              <option value="">LAST 2 MONTHS</option>
              <option value="">LAST 3 MONTHS</option>
              <option value="">LAST 6 MONTHS</option>
            </optgroup>
          </select>
        </div>
      </div>
      <hr />
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
        No gigs which require modification to show.
      </div>
    </div>
  );
}

export function GigsMenu4Draft() {
  return (
    <div className="gigs-draft-main">
      <div className="gigs-active-head">
        <div className="gigs-active-title">DRAFT GIGS</div>
        <div>
          <select>
            <optgroup>
              <option value="">LAST 7 DAYS</option>
              <option value="">LAST 14 DAYS</option>
              <option value="">LAST 30 DAYS</option>
              <option value="">LAST 2 MONTHS</option>
              <option value="">LAST 3 MONTHS</option>
              <option value="">LAST 6 MONTHS</option>
            </optgroup>
          </select>
        </div>
      </div>
      <hr />
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
      <div className="gigs-if-empty">No draft gigs to show.</div>
    </div>
  );
}

export function GigsMenu5Denied() {
  return (
    <div className="gigs-denied-main">
      <div className="gigs-active-head">
        <div className="gigs-active-title">DENIED GIGS</div>
        <div>
          <select>
            <optgroup>
              <option value="">LAST 7 DAYS</option>
              <option value="">LAST 14 DAYS</option>
              <option value="">LAST 30 DAYS</option>
              <option value="">LAST 2 MONTHS</option>
              <option value="">LAST 3 MONTHS</option>
              <option value="">LAST 6 MONTHS</option>
            </optgroup>
          </select>
        </div>
      </div>
      <hr />
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
      <div className="gigs-if-empty">No denied gigs to show.</div>
    </div>
  );
}

export function GigsMenu6Paused() {
  return (
    <div className="gigs-paused-main">
      <div className="gigs-active-head">
        <div className="gigs-active-title">PAUSED GIGS</div>
        <div>
          <select>
            <optgroup>
              <option value="">LAST 7 DAYS</option>
              <option value="">LAST 14 DAYS</option>
              <option value="">LAST 30 DAYS</option>
              <option value="">LAST 2 MONTHS</option>
              <option value="">LAST 3 MONTHS</option>
              <option value="">LAST 6 MONTHS</option>
            </optgroup>
          </select>
        </div>
      </div>
      <hr />
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
      <div className="gigs-if-empty">No paused gigs to show.</div>
    </div>
  );
}
