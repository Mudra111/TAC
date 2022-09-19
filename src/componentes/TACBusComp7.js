import React from "react";
import "./TACBusComp7.css";

export default function TACBusComp7() {
  return (
    <div className="TACB_MainDiv">
      <div className="TACB-Footer-Dis">
        <div className="TACB-Footer-Dis1">
          <p>
            Boost your business with <span>exceptional</span> talent
          </p>
          <div>
            <form className="ForminTBC7">
              <input
                className="SearchInputTBC7"
                placeholder="Search for any digital service"
              />
              <button className="BtnForSearchTBC7">Search</button>
            </form>
          </div>
        </div>
      </div>

      <div className="TACB-footer-cont">
        <div className="TACB-title">
          <p>
            <span>TAC </span>
            <span>business</span>
          </p>
        </div>

        <div className="TACB-PP-Tos-div">
          <p className="TACB-PP-Tos-p">
            <p>
              <a href="#">Privacy Policy</a>
            </p>
            <p>
              <span>|</span>
            </p>
            <p>
              <a href="#">Terms of Service</a>
            </p>
          </p>
        </div>

        <div className="TACB-footer-CopyR">
          <p>
            <span>&#169; Fiverr International Ltd. 2020</span>
          </p>
        </div>
      </div>
    </div>
  );
}
