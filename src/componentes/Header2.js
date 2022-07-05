import React from "react";
import "./header2.css";
import { Link } from "react-router-dom";

export default function Header2(props) {
  return (
    <div>
      <nav>
        <div className={props.navbar ? "nav2 nav2-show" : "nav2"}>
          <ul className="nav justify-content-center">
            <li className="nav-item hov-eff">
              <Link to="/Graphics&Design">
                <a
                  id="navbarDropdown"
                  // data-bs-toggle="dropdown"
                  aria-current="page"
                  className="active header2"
                >
                  Graphics & Design
                </a>
              </Link>
              <ul
                className="dropdown-menu hoverdown"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item hov-eff">
              <a
                className="active header2"
                id="navbarDropdown"
                data-bs-toggle="dropdown"
                href="#"
              >
                Digital Marketing
              </a>
              <ul
                className="dropdown-menu hoverdown"
                aria-labelledby="navbarDropdown"
              >
                <li className="dropdown-item">
                  <Link to="/insta">Instagram</Link>
                </li>
                <li>
                  <Link to="/socialmarketing" className="dropdown-item">
                    Social Marketing
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item hov-eff">
              <a
                className="active header2"
                id="navbarDropdown"
                data-bs-toggle="dropdown"
                href="#"
              >
                Writing & Translation
              </a>
              <ul
                className="dropdown-menu hoverdown"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <Link to="/TACworkspace" className="dropdown-item">
                    TACWorkspace
                  </Link>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item hov-eff">
              <a
                className="active header2"
                id="navbarDropdown"
                data-bs-toggle="dropdown"
                href="#"
              >
                Video & Animation
              </a>
              <ul
                className="dropdown-menu hoverdown"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item hov-eff">
              <a
                className="active header2"
                id="navbarDropdown"
                data-bs-toggle="dropdown"
                href="#"
              >
                Music & Audio
              </a>
              <ul
                className="dropdown-menu hoverdown"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item hov-eff">
              <a
                className="active header2"
                id="navbarDropdown"
                data-bs-toggle="dropdown"
                href="#"
              >
                Programming & Tech
              </a>
              <ul
                className="dropdown-menu hoverdown"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item hov-eff">
              <a
                className="active header2"
                id="navbarDropdown"
                data-bs-toggle="dropdown"
                href="#"
              >
                Business
              </a>
              <ul
                className="dropdown-menu hoverdown"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item hov-eff">
              <a
                className="active header2"
                id="navbarDropdown"
                data-bs-toggle="dropdown"
                href="#"
              >
                Lifestyle
              </a>
              <ul
                className="dropdown-menu hoverdown"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item hov-eff">
              <a
                className="active header2"
                id="navbarDropdown"
                data-bs-toggle="dropdown"
                href="#"
              >
                Trending
              </a>
              <ul
                className="dropdown-menu hoverdown"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
