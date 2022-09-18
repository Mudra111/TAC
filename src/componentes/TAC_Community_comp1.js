import React from "react";
import "./TAC_Community_comp1.css";
// import Img1 from "./Images/ImgComTAC.png";
import Img1 from "./Images/sb3.jpg";
import Img2 from "./Images/Img2FrthDivGD.webp";
import Img3 from "./Images/Img3FrthDivGD.webp";
import Img4 from "./Images/img5ComTac.webp";
import Img5 from "./Images/TBC2img1.webp";

export default function TAC_Community_comp1() {
	return (
		<div>
			<div className="MainDTCC1">
				<div className="D1TCC1">
					<div className="D2inD1TCC">
						<div className="InnD3TCC1">
							<img src={Img5} />
						</div>
						<div className="InnD1TCC1">
							<img src={Img3} />
						</div>
						<div className="InnD2TCC1">
							<img src={Img1} />
						</div>

						<div className="InnD4TCC1">
							<img src={Img4} />
						</div>
						<div className="InnD5TCC1">
							<img src={Img2} />
						</div>
						<div className="InnD6TCC1">
							<p className="P1InnD6TCC1">
								All of the events you've been searching for.
							</p>
							<p className="P2InnD6TCC1">
								Looking to connect with other like-minded professionals? You've
								come to the right place.
							</p>
							<div className="InnD7TCC1">
								<form>
									<input
										className="inputTCC1"
										placeholder="Search by event or keyword"
									/>
									<button className="searchbtnTCC1">Search</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
