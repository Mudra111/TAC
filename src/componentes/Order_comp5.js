import React from "react";
import "./Order_comp5.css";

export default function Order_comp5() {
	return (
		<div>
			<div className="mainDOrdrcomp5">
				<div className="FrstDOrdrC5">
					<div className="FrstD1OrdrC5">
						<h5>COMPLETED ORDERS</h5>
					</div>
				</div>

				<div className="ScndDOrdrC5">
					<div>BUYER</div>
					<div>GIG</div>
					<div>DUE ON</div>
					<div>DELIVERED AT</div>
					<div>TOTAL</div>
					<div>NOTE</div>
					<div>STATUS</div>
				</div>

				<div className="ThrdDOrdrC5">
					<span>No completed orders to show.</span>
				</div>
			</div>
		</div>
	);
}
