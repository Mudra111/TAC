import React, { useState } from "react";
import "./header1.css";
import Header2 from "./Header2";
import logo from "./Images/logo.png";
import Login from "./login";

export default function Header1(props) {
  const [openLoginModal, setOpenLoginModal] = useState(false);

  const navbar = props.navbar;

  return (
    <div className="header1">
      <nav className={props.navbar ? "nav1  nav1-colorChange" : "nav1"}>
        <div className="">
          <ul className="nav justify-content-end ">
            <li className="nav-item me-5">
              <img src={logo} alt="" className="setlogo" />
            </li>
            <li className="nav-item right">
              <form class="d-flex">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success searchbtn"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </li>
            <li
              className={props.navbar ? "lh nav-item-onscroll" : "nav-item lh"}
            >
              <a className="active" aria-current="page" href="#">
                <b>Tac Business</b>
              </a>
            </li>
            <li
              className={
                props.navbar
                  ? "dropdown nav-item-onscroll"
                  : "nav-item dropdown"
              }
            >
              <a id="navbarDropdown" data-bs-toggle="dropdown" href="#">
                <b>Explore</b>
              </a>
              <ul
                className="dropdown-menu drop"
                aria-labelledby="navbarDropdown"
              >
                <div class="container">
                  <div class="row row-cols-2 text-align-center">
                    <div class="col">
                      <ul class="nav flex-column">
                        <li class="nav-item">
                          <a class="hdra" href="#">
                            Discover
                            <br />
                            <p className="hdrp">
                              Inspiring projects made on Fiverr
                            </p>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="hdra" href="#">
                            Guides
                            <br />
                            <p className="hdrp">
                              In-depth guides covering business topics
                            </p>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="hdra" href="#">
                            Learn
                            <br />
                            <p className="hdrp">
                              Professional online courses, led by experts
                            </p>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="hdra" href="#">
                            Logo Maker
                            <br />
                            <p className="hdrp">Create your logo instantly</p>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="col">
                      <ul class="nav flex-column">
                        <li class="nav-item">
                          <a class="hdra" href="#">
                            Community
                            <br />
                            <p className="hdrp">
                              Connect with Fiverr’s team and community
                            </p>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="hdra" href="#">
                            Podcast
                            <br />
                            <p className="hdrp">
                              Inside tips from top business minds
                            </p>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="hdra" href="#">
                            Blog
                            <br />
                            <p className="hdrp">
                              News, information and community stories
                            </p>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="hdra" href="#">
                            Fiverr Workspace
                            <br />
                            <p className="hdrp">
                              One place to manage your business
                            </p>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </ul>
            </li>
            <li
              className={
                props.navbar
                  ? "dropdown nav-item-onscroll"
                  : "nav-item dropdown"
              }
            >
              <a
                id="navbarDropdown"
                data-bs-toggle="dropdown"
                role="button"
                href="#"
              >
                <b>Language</b>
              </a>

              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdown"
              ></ul>
            </li>
            <li
              className={
                props.navbar
                  ? "dropdown nav-item-onscroll"
                  : "nav-item dropdown"
              }
            >
              <a
                id="navbarDropdown"
                data-bs-toggle="dropdown"
                role="button"
                href="#"
              >
                <b>Currency</b>
              </a>
              <ul
                className="dropdown-menu scroll"
                aria-labelledby="navbarDropdown"
              >
                <label class="rdolbl">
                  One
                  <span class="checkmark"></span>
                  <input type="radio" checked="checked" name="radio" />
                </label>
                <label class="rdolbl">
                  Two
                  <span class="checkmark"></span>
                  <input type="radio" name="radio" />
                </label>
                <label class="rdolbl">
                  Three
                  <span class="checkmark"></span>
                  <input type="radio" name="radio" />
                </label>
                <label class="rdolbl">
                  Four
                  <span class="checkmark"></span>
                  <input type="radio" name="radio" />
                </label>
                <label class="rdolbl">
                  Five
                  <span class="checkmark"></span>
                  <input type="radio" name="radio" />
                </label>
                <label class="rdolbl">
                  Six
                  <span class="checkmark"></span>
                  <input type="radio" name="radio" />
                </label>
              </ul>
            </li>
            <li className={props.navbar ? "nav-item-onscroll" : "nav-item"}>
              <a href="#">
                <b>Become a Seller</b>
              </a>
            </li>
            <li className={props.navbar ? "nav-item-onscroll" : "nav-item"}>
              <a className="signbtn" href="#">
                <b>Sign in</b>
              </a>
            </li>
            <li className="nav-item">
              <button
                className={props.navbar ? "joinbtn-onscroll" : "joinbtn"}
                onClick={() => {
                  setOpenLoginModal(true);
                }}
              >
                <b>Join</b>
              </button>
              {openLoginModal && <Login closeLoginModal={setOpenLoginModal} />}
            </li>
          </ul>
        </div>
      </nav>
      <Header2 navbar={navbar} />
    </div>
  );
}
