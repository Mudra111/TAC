import React from "react";
import "./Order_comp1.css";

export default function Order_comp1() {
	return (
		<div>
			<div className="mainDOrdrcomp1">
				<div className="FrstDOrdrC1">
					<div className="FrstD1OrdrC1">
						<h5>PRIORITY ORDERS</h5>
					</div>
				</div>

				<div className="ScndDOrdrC1">
					<div>BUYER</div>
					<div>GIG</div>
					<div>DUE ON</div>
					<div>TOTAL</div>
					<div>NOTE</div>
					<div>STATUS</div>
				</div>

				<div className="ThrdDOrdrC1">
					<span>No priority orders to show.</span>
				</div>
			</div>
		</div>
	);
}
