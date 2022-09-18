import React from "react";
import "./TAC_Business_comp1.css";
import Img1 from "./Images/tacb2.png";

export default function TAC_Business_comp1() {
	return (
		<div>
			<div className="MainDivTACBC1">
				<div className="FrstDTBC1">
					<div className="innD1TBC1"></div>
					<div className="innD2TBC1">
						<span>Expertise</span>, when you need it
					</div>
					<div className="innD3TBC1">
						Connect with vetted experts, execute every project, and expand your
						team capabilities
					</div>
					<div className="innD4TBC1">
						<form className="ForminD4TBC1">
							<input className="SearchInputTBC1" placeholder="Search for any digital service"/>
							<button className="BtnForSearchTBC1">Search</button>
						</form>
					</div>
					<img src={Img1} className="imageTBC1" />
				</div>
			</div>
		</div>
	);
}
