import React from "react";
import { Link } from "react-router-dom";
import "./tac-b.css";
import Reviewers from "./Reviewer-Slider";

export default function Tacb() {
  return (
    <div>
      <div className="tacb">
        <h2 className="h2 text">TAC Business</h2>
        <div className="text-section">
          <ul>
            <li className="text-lines text">
              Connect to best influencers , Youtuber’s, and creators with proven
              business experience.
            </li>
            <li className="text-lines text">
              Get matched with perfect talent by a customer success manager.
            </li>
            <li className="text-lines text">
              Manage team work and boost productivity with powerful workspace.
            </li>
          </ul>
        </div>
        <Link to="/TAC_Business">
          <button className="btn_tacb text" type="button">
            Explore TAC Business
          </button>
        </Link>
      </div>
      {/* <div className="tacbp">
                <h2 className="h2 text">TAC budget planner</h2>
                <div>
                    <ul>
                        <li className="text-lines text">Make an incredible market budget</li>
                    </ul>
                </div>
                <button className="btn text" type="button">Try TAC Budget Planner</button>
            </div> */}

      <Reviewers />
    </div>
  );
}
