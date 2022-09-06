import React, { useState } from "react";
import "./order.css";
import Comp1 from "./Order_comp1";
import Comp2 from "./Order_comp2";
import Comp3 from "./Order_comp3";
import Comp4 from "./Order_comp4";
import Comp5 from "./Order_comp5";
import Comp6 from "./Order_comp6";
import Comp7 from "./Order_comp7";

export default function Order() {
  const [priority, setPriority] = useState(true);
  const [active, setActive] = useState(false);
  const [late, setLate] = useState(false);
  const [delivered, setDelivered] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [cancelled, setCancelled] = useState(false);
  const [starred, setStarred] = useState(false);

  return (
    <div>
      <div className="MainDivOrder">
        <div className="FrstDOrdr">
          <div>
            <p>Manage Orders</p>
          </div>
          <div className="SeachBarOrdr">
            <form>
              <input
                type="search"
                placeholder="Search My History..."
                aria-label="Search"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="gray"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85
								 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1
								  1-11 0 5.5 5.5 0 0 1 11 0z"
                />
              </svg>
            </form>
          </div>
        </div>

        <div className="ScndDOrdr">
          <div className="FstInnScnDOrdr">
            <div
              className={`${priority ? "FstinnSDOrdr1Act" : "FstinnSDOrdr1"}`}
              onClick={() => {
                setPriority(true);
                setActive(false);
                setLate(false);
                setDelivered(false);
                setCompleted(false);
                setCancelled(false);
                setStarred(false);
              }}
            >
              PRIORITY
            </div>

            <div
              className={`${active ? "FstinnSDOrdr2Act" : "FstinnSDOrdr2"}`}
              onClick={() => {
                setPriority(false);
                setActive(true);
                setLate(false);
                setDelivered(false);
                setCompleted(false);
                setCancelled(false);
                setStarred(false);
              }}
            >
              ACTIVE
            </div>

            <div
              className={`${late ? "FstinnSDOrdr3Act" : "FstinnSDOrdr3"}`}
              onClick={() => {
                setPriority(false);
                setActive(false);
                setLate(true);
                setDelivered(false);
                setCompleted(false);
                setCancelled(false);
                setStarred(false);
              }}
            >
              LATE
            </div>

            <div
              className={`${delivered ? "FstinnSDOrdr4Act" : "FstinnSDOrdr4"}`}
              onClick={() => {
                setPriority(false);
                setActive(false);
                setLate(false);
                setDelivered(true);
                setCompleted(false);
                setCancelled(false);
                setStarred(false);
              }}
            >
              DELIVERED
            </div>

            <div
              className={`${completed ? "FstinnSDOrdr5Act" : "FstinnSDOrdr5"}`}
              onClick={() => {
                setPriority(false);
                setActive(false);
                setLate(false);
                setDelivered(false);
                setCompleted(true);
                setCancelled(false);
                setStarred(false);
              }}
            >
              COMPLETED
            </div>

            <div
              className={`${cancelled ? "FstinnSDOrdr6Act" : "FstinnSDOrdr6"}`}
              onClick={() => {
                setPriority(false);
                setActive(false);
                setLate(false);
                setDelivered(false);
                setCompleted(false);
                setCancelled(true);
                setStarred(false);
              }}
            >
              CANCELLED
            </div>

            <div
              className={`${starred ? "FstinnSDOrdr7Act" : "FstinnSDOrdr7"}`}
              onClick={() => {
                setPriority(false);
                setActive(false);
                setLate(false);
                setDelivered(false);
                setCompleted(false);
                setCancelled(false);
                setStarred(true);
              }}
            >
              STARRED
            </div>
          </div>
        </div>

        <div className="ThrdDOrdr">
          {priority && <Comp1 />}
          {active && <Comp2 />}
          {late && <Comp3 />}
          {delivered && <Comp4 />}
          {completed && <Comp5 />}
          {cancelled && <Comp6 />}
          {starred && <Comp7 />}
        </div>
      </div>
    </div>
  );
}
