import React from "react";
import "./ToggleSwitch.css";

function ToggleSwitch() {
  return (
    <div>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default ToggleSwitch;
