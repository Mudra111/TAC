import React from "react";
import "./Home_Comp1.css";

export default function Home_Comp1() {
	return (
		<div>
			<div className="MainDHomeC1">
				<div className="FstDHomeC1">
					<div className="InnDforFstDHomeC1">
						<p>
							Find the perfect <span>freelance</span> services for your business
						</p>
						<div className="ScndDHomeC1">
							<form className="FormIn1DHomeC1">
								<input className="SearchInput" />
								<button className="BtnForSearch">Search</button>
							</form>
						</div>
						<div className="d-flex ThrdDHomeC1">
							<h5 className="i1-headingHomeC1">Trusted by:</h5>
							<ul className="d-flex header-listHomeC1">
								<li className="i1HomeC1">Website Design</li>
								<li className="i1HomeC1">WordPress</li>
								<li className="i1HomeC1">Logo Design</li>
								<li className="i1HomeC1">NFT Art</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
