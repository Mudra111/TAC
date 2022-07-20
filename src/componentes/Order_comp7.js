import React from "react";
import "./Order_comp7.css";

export default function Order_comp7() {
	return (
		<div>
			<div className="mainDOrdrcomp7">
				<div className="FrstDOrdrC7">
					<div className="FrstD1OrdrC7">
						<h5>STARRED ORDERS</h5>
					</div>
				</div>

				<div className="ScndDOrdrC7">
					<div>BUYER</div>
					<div>GIG</div>
					<div>DUE ON</div>
					<div>TOTAL</div>
					<div>NOTE</div>
					<div>STATUS</div>
				</div>

				<div className="ThrdDOrdrC7">
					<span>No starred orders to show.</span>
				</div>
			</div>
		</div>
	);
}
