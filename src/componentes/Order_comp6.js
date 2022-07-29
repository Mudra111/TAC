import React from "react";
import "./Order_comp6.css";

export default function Order_comp6() {
	return (
		<div>
			<div className="mainDOrdrcomp6">
				<div className="FrstDOrdrC6">
					<div className="FrstD1OrdrC6">
						<h5>CANCELLED ORDERS</h5>
					</div>
				</div>

				<div className="ScndDOrdrC6">
					<div>BUYER</div>
					<div>GIG</div>
					<div>DUE ON</div>
					<div>TOTAL</div>
					<div>NOTE</div>
					<div>STATUS</div>
				</div>

				<div className="ThrdDOrdrC6">
					<span>No cancelled orders to show.</span>
				</div>
			</div>
		</div>
	);
}
