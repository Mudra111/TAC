import React from "react";
import "./TAC_Business_comp3.css";
import Img1 from "./Images/imgTACBC3.webp";

export default function TAC_Business_comp3() {
	return (
		<div>
			<div className="MainDivTACBC3">
				<div className="FrstDTBC3">
					<div className="ScndDTBC3">
                    <img src={Img1} className="img1TBC3"/>
                    </div>
					<div className="ThrdDTBC3">
						<div className="ThrdD1TBC3">
							Access a catalog of verified, trusted talent
						</div>
						<div className="ThrdD2TBC3">
							Expand your team as needed with experienced freelancers already
							vetted for business projects.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
