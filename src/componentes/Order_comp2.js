import React from "react";
import "./Order_comp2.css";

export default function Order_comp2() {
	return (
		<div>
			<div className="mainDOrdrcomp2">
				<div className="FrstDOrdrC2">
					<div className="FrstD1OrdrC2">
						<h5>ACTIVE ORDERS</h5>
					</div>
				</div>

				<div className="ScndDOrdrC2">
					<div>BUYER</div>
					<div>GIG</div>
					<div>DUE ON</div>
					<div>TOTAL</div>
					<div>NOTE</div>
					<div>STATUS</div>
				</div>

				<div className="ThrdDOrdrC2">
					<span>No active orders to show.</span>
				</div>
			</div>
		</div>
	);
}
