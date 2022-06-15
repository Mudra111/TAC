import React, { useState } from "react";
import "./HeaderForDash.css";
import { Link } from "react-router-dom";
import logo from "./Images/logo.png";

export default function HeaderForDash(props) {
	const navbar = props.navbar;
	return (
		<div className="headerForDash">
			<nav className="nav1ForDash">
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
						<li className="nav-item lh">
							<Link to="/dashboard">
								<a className="active" aria-current="page" href="#">
									<b>Dashboard</b>
								</a>
							</Link>
						</li>
						<li className="nav-item dropdown">
							<a id="navbarDropdown" data-bs-toggle="dropdown" href="#">
								<b>Messages</b>
							</a>
						</li>
						<li className="nav-item dropdown">
							<a id="navbarDropdown" data-bs-toggle="dropdown" href="#">
								<b>Orders</b>
							</a>
						</li>
						<li className="nav-item dropdown">
							<a id="navbarDropdown" data-bs-toggle="dropdown" href="#">
								<b>Gigs</b>
							</a>
						</li>
						<li className="nav-item dropdown">
							<a id="navbarDropdown" data-bs-toggle="dropdown" href="#">
								<b>Analytics</b>
							</a>
						</li>
						<li className="nav-item dropdown">
							<a id="navbarDropdown" data-bs-toggle="dropdown" href="#">
								<b>Earnings</b>
							</a>
						</li>
						<li className="nav-item dropdown">
							<a id="navbarDropdown" data-bs-toggle="dropdown" href="#">
								<b>Community</b>
							</a>
						</li>
						<li className="nav-item dropdown">
							<a id="navbarDropdown" data-bs-toggle="dropdown" href="#">
								<b>More</b>
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}
