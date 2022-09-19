import react from "react";
import "./welcome.css";

function Welcome() {
  return (
    <div className="welcome__search">
      <div className="welcome__searchBackground">
        <div className="ipsLayout_container">
          <h2 className="welcome__title">Welcome to the Fiverr Forum</h2>
          <form className="welcome__search">
            <input
              type="text"
              placeholder="Search the Forum conversation"
            ></input>
            <button id="btn">Search</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
