import React, { useState } from "react";
import "./BuyerReq.css";

export default function BuyerReq() {
	const [activeoff, setActiveoff] = useState(true);
	const [sentoff, setSentoff] = useState(false);

	return (
		<div>
			<div className="MainDivBuyReq">
				<div className="FrstDBR">
					<p>Buyer Requests</p>
				</div>

				<div className="ScndDBR">
					<div className="FstInnScnDBR">
						<div
							className={`${activeoff ? "FstinnSDBR1Act" : "FstinnSDBR1"}`}
							onClick={() => {
								setActiveoff(true);
								setSentoff(false);
							}}
						>
							ACTIVE
						</div>

						<div
							className={`${sentoff ? "FstinnSDBR2Act" : "FstinnSDBR2"}`}
							onClick={() => {
								setActiveoff(false);
								setSentoff(true);
							}}
						>
							SENT OFFERS
						</div>
					</div>

					<div className="ScndInnScnDBR">
          <small>0 offers left today</small>
          </div>
				</div>
			</div>
		</div>
	);
}
