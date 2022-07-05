import React, { useState } from "react";
import logo from "./Images/logo.png";
import "./DashboardMain.css";
import EarningDash from "./EarningDash"

export default function DashboardMain() {
	const [Dashboard, setDashboard] = useState(true);
	const [Messages, setMessages] = useState(false);
	const [Orders, setOrders] = useState(false);
	const [Gigs, setGigs] = useState(false);
	const [Analytics, setAnalytics] = useState(false);
	const [Earnings, setEarnings] = useState(false);
	const [Community, setCommunity] = useState(false);
	const [More, setMore] = useState(false);

	return (
		<div>
			<div className="MainDivDashboard">
				<nav className="nav1ForDash">
					<div className="">
						<ul className="nav justify-content-end ">
							<li className="nav-item-dash me-5">
								<img src={logo} alt="" className="setlogo" />
							</li>
							<li className="nav-item-dash right">
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
						</ul>
					</div>
				</nav>

				<div className="MainPageDashboard">
					<div className="verticalNav">
						<ul className="ulInVN">
							<li
								onClick={() => {
									setDashboard(true);
									setMessages(false);
									setOrders(false);
									setGigs(false);
									setAnalytics(false);
									setEarnings(false);
									setCommunity(false);
									setMore(false);
								}}
							>
								Dashboard
							</li>
							<li
								onClick={() => {
									setDashboard(false);
									setMessages(true);
									setOrders(false);
									setGigs(false);
									setAnalytics(false);
									setEarnings(false);
									setCommunity(false);
									setMore(false);
								}}
							>
								Messages
							</li>
							<li
								onClick={() => {
									setDashboard(false);
									setMessages(false);
									setOrders(true);
									setGigs(false);
									setAnalytics(false);
									setEarnings(false);
									setCommunity(false);
									setMore(false);
								}}
							>
								Orders
							</li>
							<li
								onClick={() => {
									setDashboard(false);
									setMessages(false);
									setOrders(false);
									setGigs(true);
									setAnalytics(false);
									setEarnings(false);
									setCommunity(false);
									setMore(false);
								}}
							>
								Gigs
							</li>
							<li
								onClick={() => {
									setDashboard(false);
									setMessages(false);
									setOrders(false);
									setGigs(false);
									setAnalytics(true);
									setEarnings(false);
									setCommunity(false);
									setMore(false);
								}}
							>
								Analytics
							</li>
							<li
								onClick={() => {
									setDashboard(false);
									setMessages(false);
									setOrders(false);
									setGigs(false);
									setAnalytics(false);
									setEarnings(true);
									setCommunity(false);
									setMore(false);
								}}
							>
								Earnings
							</li>
							<li
								onClick={() => {
									setDashboard(false);
									setMessages(false);
									setOrders(false);
									setGigs(false);
									setAnalytics(false);
									setEarnings(false);
									setCommunity(true);
									setMore(false);
								}}
							>
								Community
							</li>
							<li
								onClick={() => {
									setDashboard(false);
									setMessages(false);
									setOrders(false);
									setGigs(false);
									setAnalytics(false);
									setEarnings(false);
									setCommunity(false);
									setMore(true);
								}}
							>
								More
							</li>
						</ul>
					</div>

					<div>
					{Earnings && <EarningDash/>}
					</div>
				</div>
			</div>
		</div>
	);
}
