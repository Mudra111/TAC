import React from "react";
import "./TACworkspaceNav.css";

function TACworkspaceNav() {
  return (
    <div>
      <nav className="WS-MainNav">
        <div className="WS-logo">
          <h1>TAC</h1>
          <h2>workspace</h2>
        </div>

        <div className="WS-MainNav-Div1">
          <div className="WS-GU">
            <a href="#">GO UNLIMITED</a>
          </div>
          <div className="WS-GT">
            <a href="#">Go to TAC</a>
          </div>
          <div className="WS-Con">
            <button>Continue</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default TACworkspaceNav;
