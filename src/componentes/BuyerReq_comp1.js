import React from "react";
import "./BuyerReq_comp1.css";

export default function BuyerReq_comp1() {
	return (
		<div>
			<div className="mainDBRcomp1">
				<div className="FrstDBRC1">
					<div className="FrstD1BRC1">
						<h5>BUYER REQUESTS</h5>
					</div>

					<div className="FrstD2BRC1">
						<select>
							<option>All Subcategories</option>
						</select>
					</div>
				</div>

				<div className="ScndDBRC1">
					<div>DATE</div>
					<div>BUYER</div>
					<div>REQUEST</div>
					<div>OFFERS</div>
					<div>DURATION</div>
					<div>BUDGET</div>
				</div>

<div className="ThrdDBRC1">
<span>You must have active gigs in order to see new buyer requests!</span>
</div>

			</div>
		</div>
	);
}
