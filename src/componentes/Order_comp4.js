import React from "react";
import "./Order_comp4.css";

export default function Order_comp4() {
	return (
		<div>
			<div className="mainDOrdrcomp4">
				<div className="FrstDOrdrC4">
					<div className="FrstD1OrdrC4">
						<h5>DELIVERED ORDERS</h5>
					</div>
				</div>

				<div className="ScndDOrdrC4">
					<div>BUYER</div>
					<div>GIG</div>
					<div>DUE ON</div>
					<div>DELIVERED AT</div>
					<div>TOTAL</div>
					<div>NOTE</div>
					<div>STATUS</div>
				</div>

				<div className="ThrdDOrdrC4">
					<span>No delivered orders to show.</span>
				</div>
			</div>
		</div>
	);
}
