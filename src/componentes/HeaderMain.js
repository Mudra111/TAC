import React from "react";
import "./HeaderMain.css";
import Logo from "./Images/logo.png";

export default function HeaderMain() {
	return (
		<div>
			<div className="MainDHeaderMain">
				<div className="FstDHeaderM">
					<div className="DivForLogo">
						<img src={Logo} />
					</div>
					<div className="DforBtns">
						<ul>
							<li className="SignInLi">Sign in</li>
							<li className="JoinLi">
								<button>Join</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
