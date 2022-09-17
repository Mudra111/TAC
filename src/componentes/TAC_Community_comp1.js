import React from "react";
import "./TAC_Community_comp1.css";
// import Img1 from "./Images/ImgComTAC.png";
import Img1 from "./Images/sb3.jpg";
import Img2 from "./Images/Img2FrthDivGD.webp";
import Img3 from "./Images/Img3FrthDivGD.webp";
import Img4 from "./Images/TBC2img7.webp";
import Img5 from "./Images/TBC2img1.webp";

export default function TAC_Community_comp1() {
	return (
		<div>
			<div className="MainDTCC1">
				<div className="D1TCC1">
					<div className="D2inD1TCC">
						<div className="InnD1TCC1">
							<img src={Img1} />
						</div>
						<div className="InnD2TCC1">
							<img src={Img2} />
						</div>
						<div className="InnD3TCC1">
							<img src={Img3} />
						</div>
						<div className="InnD4TCC1">
							<img src={Img4} />
						</div>
						<div className="InnD5TCC1">
							<img src={Img5} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
