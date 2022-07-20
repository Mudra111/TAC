import React from "react";
import "./Order_comp3.css";

export default function Order_comp3() {
	return (
		<div>
			<div className="mainDOrdrcomp3">
				<div className="FrstDOrdrC3">
					<div className="FrstD1OrdrC3">
						<h5>LATE ORDERS</h5>
					</div>
				</div>

				<div className="ScndDOrdrC3">
					<div>BUYER</div>
					<div>GIG</div>
					<div>DUE ON</div>
					<div>TOTAL</div>
					<div>NOTE</div>
					<div>STATUS</div>
				</div>

				<div className="ThrdDOrdrC3">
					<span>No late orders to show.</span>
				</div>
			</div>
		</div>
	);
}
