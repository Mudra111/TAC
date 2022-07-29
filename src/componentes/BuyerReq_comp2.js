import React from "react";
import "./BuyerReq_comp2.css";

export default function BuyerReq_comp1() {
	return (
		<div>
			<div className="mainDBRcomp2">
				<div className="FrstDBRC2">
					<div className="FrstD1BRC2">
						<h5>OFFERS SUBMITTED FOR BUYER REQUESTS</h5>
					</div>
				</div>

				<div className="ScndDBRC2">
					<div>OFFER</div>
					<div>DURATION</div>
					<div>PRICE</div>
					<div>REQUEST</div>
				</div>

				<div className="ThrdDBRC2">
					<span>
						You must have active gigs in order to see new buyer requests!
					</span>
				</div>
			</div>
		</div>
	);
}
