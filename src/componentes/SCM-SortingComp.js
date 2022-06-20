import React, { useState } from "react";
import "./SCMSorting.css";

function SCMSortingComp() {
  const [bestSelling, setBestSelling] = useState(true);
  const [recommanded, setRecommanded] = useState(false);
  const [newArrival, setNewArrival] = useState(false);
  return (
    <div>
      <div className="num-sort-maindiv">
        <p>72,534 services available</p>

        <div className="sort-div">
          <span>Sort by</span>
          <li className=" dropdown sort-drop">
            <a id="navbarDropdown" data-bs-toggle="dropdown" href="#">
              {bestSelling && <b>Best Selling</b>}
              {recommanded && <b>Recommanded</b>}
              {newArrival && <b>Newest Arrivals</b>}
              <svg
                width="11"
                height="7"
                viewBox="0 0 11 7"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.4636 6.38899L0.839326 1.769C0.692474 1.62109 0.692474 1.38191 0.839326 1.23399L1.45798 0.61086C1.60483 0.462945 1.84229 0.462945 1.98915 0.61086L5.72919 4.34021L9.46923 0.61086C9.61608 0.462945 9.85354 0.462945 10.0004 0.61086L10.619 1.23399C10.7659 1.38191 10.7659 1.62109 10.619 1.769L5.99477 6.38899C5.84792 6.5369 5.61046 6.5369 5.4636 6.38899Z"></path>
              </svg>
            </a>
            <ul className="dropdown-menu drop" aria-labelledby="navbarDropdown">
              {bestSelling && (
                <>
                  <li
                    className="sort-list"
                    onClick={() => {
                      setBestSelling(false);
                      setNewArrival(false);
                      setRecommanded(true);
                    }}
                  >
                    <a href="#">Recommanded</a>
                  </li>
                  <li
                    className="sort-list"
                    onClick={() => {
                      setBestSelling(false);
                      setNewArrival(true);
                      setRecommanded(false);
                    }}
                  >
                    <a href="#">Newest Arrivals</a>
                  </li>
                </>
              )}

              {recommanded && (
                <>
                  <li
                    className="sort-list"
                    onClick={() => {
                      setBestSelling(true);
                      setNewArrival(false);
                      setRecommanded(false);
                    }}
                  >
                    <a href="#">Best Selling</a>
                  </li>
                  <li
                    className="sort-list"
                    onClick={() => {
                      setBestSelling(false);
                      setNewArrival(true);
                      setRecommanded(false);
                    }}
                  >
                    <a href="#">Newest Arrivals</a>
                  </li>
                </>
              )}

              {newArrival && (
                <>
                  <li
                    className="sort-list"
                    onClick={() => {
                      setBestSelling(false);
                      setNewArrival(false);
                      setRecommanded(true);
                    }}
                  >
                    <a href="#">Recommanded</a>
                  </li>
                  <li
                    className="sort-list"
                    onClick={() => {
                      setBestSelling(true);
                      setNewArrival(false);
                      setRecommanded(false);
                    }}
                  >
                    <a href="#">Best Selling</a>
                  </li>
                </>
              )}
            </ul>
          </li>
        </div>
      </div>
    </div>
  );
}

export default SCMSortingComp;
