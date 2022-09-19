import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header1.css";
import Header2 from "./Header2";
import logo from "./Images/logo.png";
import Login from "./login";
import SignIn from "./SignIn";

export default function Header1(props) {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSigninModal, setOpenSigninModal] = useState(false);

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
              <Link className="active" to="/TAC_Business">
                <b>Tac Business</b>
              </Link>
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
                className="dropdown-menu ulInheaderHom"
                aria-labelledby="navbarDropdown"
              >
                <div className="D1InDropHeaderHome">
                  <li>
                    <Link to="/">
                      <p className="P1InD1DropHeaderHome">Discover</p>
                      <p className="P2InD1DropHeaderHome">
                        Inspiring projects made on Fiverr
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/TAC_Community">
                      <p className="P1InD1DropHeaderHome">Community</p>
                      <p className="P2InD1DropHeaderHome">
                        Connect with Fiverr’s team and community
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <p className="P1InD1DropHeaderHome">Guides</p>
                      <p className="P2InD1DropHeaderHome">
                        In-depth guides covering business topics
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <p className="P1InD1DropHeaderHome">Podcast</p>
                      <p className="P2InD1DropHeaderHome">
                        Inside tips from top business minds
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <p className="P1InD1DropHeaderHome">Learn</p>
                      <p className="P2InD1DropHeaderHome">
                        Professional online courses, led by experts
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <p className="P1InD1DropHeaderHome">Blog</p>
                      <p className="P2InD1DropHeaderHome">
                        News, information and community stories
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <p className="P1InD1DropHeaderHome">Logo Maker</p>
                      <p className="P2InD1DropHeaderHome">
                        Create your logo instantly
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <p className="P1InD1DropHeaderHome">Fiverr Workspace</p>
                      <p className="P2InD1DropHeaderHome">
                        One place to manage your business
                      </p>
                    </Link>
                  </li>
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
                className="dropdown-menu ulDropDown2HeaderHome"
                aria-labelledby="navbarDropdown"
              >
                <li className="LiInDropDown2HeaderHome">English</li>
                <li className="LiInDropDown2HeaderHome">Deutsch</li>
                <li className="LiInDropDown2HeaderHome">Espanol</li>
                <li className="LiInDropDown2HeaderHome">Francais</li>
                <li className="LiInDropDown2HeaderHome">Portugues</li>
                <li className="LiInDropDown2HeaderHome">Italiano</li>
                <li className="LiInDropDown2HeaderHome">Nederlands</li>
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
                <b>Currency</b>
              </a>
              <ul
                className="dropdown-menu scroll ulDropDwon3HeaderHome"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <p className="P1DropDown3HeaderHome">United States Dollar</p>
                  <p className="P2DropDown3HeaderHome">USD - $</p>
                </li>
                <li>
                  <p className="P1DropDown3HeaderHome">Euro</p>
                  <p className="P2DropDown3HeaderHome">EUR - €</p>
                </li>
                <li>
                  <p className="P1DropDown3HeaderHome">British Pound</p>
                  <p className="P2DropDown3HeaderHome">GBP - £</p>
                </li>
                <li>
                  <p className="P1DropDown3HeaderHome">Australian Dollar</p>
                  <p className="P2DropDown3HeaderHome">AUD - A$</p>
                </li>
                <li>
                  <p className="P1DropDown3HeaderHome">Canadian Dollar</p>
                  <p className="P2DropDown3HeaderHome">CAD - CA$</p>
                </li>
                <li>
                  <p className="P1DropDown3HeaderHome">Israeli Shekel</p>
                  <p className="P2DropDown3HeaderHome">ILS - ₪</p>
                </li>
                <li>
                  <p className="P1DropDown3HeaderHome">Brazilian Real</p>
                  <p className="P2DropDown3HeaderHome">BRL - R$</p>
                </li>
                <li>
                  <p className="P1DropDown3HeaderHome">Hong Kong Dollar</p>
                  <p className="P2DropDown3HeaderHome">HKD - HK$</p>
                </li>
                <li>
                  <p className="P1DropDown3HeaderHome">Swedish Krona</p>
                  <p className="P2DropDown3HeaderHome">SEK - SEK</p>
                </li>
                <li>
                  <p className="P1DropDown3HeaderHome">New Zealand Dollar</p>
                  <p className="P2DropDown3HeaderHome">NZD - NZ$</p>
                </li>
                <li>
                  <p className="P1DropDown3HeaderHome">Singapore Dollar</p>
                  <p className="P2DropDown3HeaderHome">SGD - SGD</p>
                </li>
                <li>
                  <p className="P1DropDown3HeaderHome">Swiss Franc</p>
                  <p className="P2DropDown3HeaderHome">CHF - CHF</p>
                </li>
                <li>
                  <p className="P1DropDown3HeaderHome">South African Rand</p>
                  <p className="P2DropDown3HeaderHome">ZAR - ZAR</p>
                </li>
                <li>
                  <p className="P1DropDown3HeaderHome">Chinese Renminbi Yuan</p>
                  <p className="P2DropDown3HeaderHome">CNY - CN¥</p>
                </li>
                <li>
                  <p className="P1DropDown3HeaderHome">Indian Rupee</p>
                  <p className="P2DropDown3HeaderHome">INR - ₹</p>
                </li>
                <li>
                  <p className="P1DropDown3HeaderHome">Malaysian Ringgit</p>
                  <p className="P2DropDown3HeaderHome">MYR - MYR</p>
                </li>
                <li>
                  <p className="P1DropDown3HeaderHome">Mexican Peso</p>
                  <p className="P2DropDown3HeaderHome">MXN - MX$</p>
                </li>
                <li>
                  <p className="P1DropDown3HeaderHome">Pakistani Rupee</p>
                  <p className="P2DropDown3HeaderHome">PKR - PKR</p>
                </li>
                <li>
                  <p className="P1DropDown3HeaderHome">Philippine Peso</p>
                  <p className="P2DropDown3HeaderHome">PHP - ₱</p>
                </li>
                <li>
                  <p className="P1DropDown3HeaderHome">New Taiwan Dollar</p>
                  <p className="P2DropDown3HeaderHome">TWD - NT$</p>
                </li>
                <li>
                  <p className="P1DropDown3HeaderHome">Thai Baht</p>
                  <p className="P2DropDown3HeaderHome">THB - THB</p>
                </li>
                <li>
                  <p className="P1DropDown3HeaderHome">Turkish New Lira</p>
                  <p className="P2DropDown3HeaderHome">TRY - TRY</p>
                </li>
                <li>
                  <p className="P1DropDown3HeaderHome">
                    United Arab Emirates Dirham
                  </p>
                  <p className="P2DropDown3HeaderHome">AED - AED</p>
                </li>
              </ul>
            </li>
            <li className={props.navbar ? "nav-item-onscroll" : "nav-item"}>
              <a href="#">
                <b>Become a Seller</b>
              </a>
            </li>
            <li className={props.navbar ? "nav-item-onscroll" : "nav-item"}>
              <Link to="DashboardMain">
                <b>Seller Dashboard</b>
              </Link>
            </li>

            <li className={props.navbar ? "nav-item-onscroll" : "nav-item"}>
              <a
                className="signbtn active"
                id="navbarDropdown"
                data-bs-toggle="dropdown"
                aria-current="page"
                href="#"
                onClick={() => {
                  setOpenSigninModal(true);
                }}
              >
                <b>Sign in</b>
              </a>
              {openSigninModal && (
                <SignIn closeSigninModal={setOpenSigninModal} />
              )}
            </li>
            <li className="nav-item">
              <button
                className="joinbtn"
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
