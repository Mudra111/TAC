import React from "react";
import "./Home_Page.css";
import Comp1 from "./Home_Comp1";
import Comp5 from "./Home_Comp5";
import Header from "./HeaderMain";
import TAC_B_c1 from "./TAC_Business_comp1";
import TAC_B_c6 from "./TAC_Business_comp6";
import TAC_B_c3 from "./TAC_Business_comp3";
import TAC_B_c2 from "./TAC_Business_comp2";

export default function Home_Page() {
	return (
		<div>
			<div className="HomeMainClass">
				<Header />
				<TAC_B_c1 />
				<TAC_B_c2 />
				<TAC_B_c3 />
				<TAC_B_c6 />
				<Comp1 />
				<Comp5 />
				
			</div>
		</div>
	);
}
