import React from "react";
import TACWsC1 from "./Images/TACWs2C1.jpg";
import "./TAC_WorkS_comp1.css";
import TACWC3 from "./TAC_WorkS_comp3"
import TACWC6 from "./TAC_WorkS_comp6"
import TACWC7 from "./TAC_WorkS_comp7"
import TACWC5 from "./TAC_WorkS_comp5"

export default function TAC_WorkS_comp1() {
	return (
		<div>
			<div className="MainDivTWC1">
				<div className="divforimgTWC1">
					<img src={TACWsC1} />
					<div className="divinimgDivTWC1">
						<div className="Div1inimgDc1">
							<span><i>Manage</i></span> your entire business with TAC Workspace
						</div>

						<div className="Div2inimgDc1">
							Get organized. Get business. Get paid. Stay on top of all of it
							from a single dashboard.
						</div>	

						<div className="Div3inimgDc1">
							<button>Continue to TAC Workspace</button>
						</div>

						<div className="Div4inimgDc1">* No credit card required to register</div>
					</div>
				</div>
			</div>
			<TACWC3/>
			<TACWC6/>
			<TACWC7/>
			<TACWC5/>
		</div>
	);
}
