import React, { useState } from "react";
import "./Dash1_comp1.css";
import Profile from "./Images/profile-pic.png";
import ProgressBar from "./Progress_bar";
import Img10 from "./Images/I5-img1.svg";
import Img11 from "./Images/I5-img2.svg";
import Img12 from "./Images/I5-img3.svg";
import ProfileBack from "./Images/Profile_Background.jpg";
import ThreePoint from "./Images/Profile3point.png";
import Img4 from "./Images/LSN-img1.svg";
import Img5 from "./Images/LSN-img2.svg";
import Img6 from "./Images/LSN-img3.svg";
import Img7 from "./Images/LSN-img4.svg";
import Img8 from "./Images/LSN-img5.svg";
import Img9 from "./Images/LSN-img6.svg";

export default function Dash1_comp1() {
	const [linkMediaShow, setLinkMediaShow] = useState(false);

	return (
		<div>
			<div className="MainDDashC1">
				<div className="MFrstDDashc1">
					<div className="FrstDDashc1">
						<div className="DivForProfileBack">
							<p>
								<span>@ChangeImage</span>
							</p>
						</div>
						<div className="divForPcontent">
							<div className="profileImg">
								<img src={Profile} />
							</div>
							<div className="profileDetail">
								<p>
									Username@gmail.com
									<span>
										<button onClick={()=>{setLinkMediaShow(!linkMediaShow);}}>
											&#65049;
										</button>
									</span>
								</p>
								<p>
									<span>Qualification of user</span>
								</p>
							</div>
							<div className={`DivLinkMedia ${linkMediaShow ? "DivLinkMediaShow" : ""}`}>
							<p>Link your social networks ?</p>
							<div className="divForImages">
							<div className="TrdInnForLinkM">
								<img src={Img4} className="Img1ForLinkM" />

								<img src={Img5} className="Img2ForLinkM" />

								<img src={Img6} className="Img3ForLinkM" />

								<img src={Img7} className="Img4ForLinkM" />

								<img src={Img8} className="Img5ForLinkM" />

								<img src={Img9} className="Img6ForLinkM" />
							</div>
							</div>
							</div>
						</div>
					</div>
				</div>

				<div className="FrstD2Dashc1">
					<div className="DforUl">
						<ul className="UlInI1">
							<li className="FstLiInI1">
								<div className="SvnInnForDc1">
									<div className="NameInPB">Inbox response rate</div>
									<div className="eitInnForI1">
										<ProgressBar
											bgcolor="rgb(175, 127, 5)"
											progress="60"
											height={9}
										/>
									</div>
								</div>
							</li>
							<li className="SndLiInI1">
								<div className="SvnInnForDc1">
									<div className="NameInPB">Inbox response time</div>
									<div className="eitInnForI1">
										<ProgressBar
											bgcolor="rgb(175, 127, 5)"
											progress="40"
											height={9}
										/>
									</div>
								</div>
							</li>
							<li className="TrdLiInI1">
								<div className="SvnInnForDc1">
									<div className="NameInPB">Order response rate</div>
									<div className="eitInnForI1">
										<ProgressBar
											bgcolor="rgb(175, 127, 5)"
											progress="20"
											height={9}
										/>
									</div>
								</div>
							</li>
							<li className="FrthLiInI1">
								<div className="SvnInnForDc1">
									<div className="NameInPB">Delivered on time</div>
									<div className="eitInnForI1">
										<ProgressBar
											bgcolor="rgb(175, 127, 5)"
											progress="100"
											height={9}
										/>
									</div>
								</div>
							</li>
							<li className="FfthLiInI1">
								<div className="SvnInnForDc1">
									<div className="NameInPB">Order completion</div>
									<div className="eitInnForI1">
										<ProgressBar
											bgcolor="rgb(175, 127, 5)"
											progress="80"
											height={9}
										/>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>

				{/*<div className="ScndDDashc1">
					<div className="FrstInnForScndDashc1">
						<div className="SndInnForScndDashc1">
							<h4>Take these steps to become a top seller on TAC</h4>
						</div>

						<div className="TrdInnForScndDashc1">
							<div className="frthInnForScndDashc1">
								<img src={Img10} className="Img1ForScndDashc1" />

								<h5>Get noticed</h5>
								<br />
								<div className="SvnInnForScndDashc1">
									Tap into the power of social media by sharing your Gig, and
									get expert help to grow your impact.
								</div>

								<button className="Btn1ForScndDashc1">Share Your Gigs</button>
							</div>

							<div className="FfthInnForScndDashc1">
								<img src={Img11} className="Img2ForScndDashc1" />

								<h5>Get more skills & exposure</h5>
								<br />
								<div className="EithInnForScndDashc1">
									Hone your skills and expand your knowledge with online
									courses. You'll be able to offer more services and gain more
									exposure with every course completed.
								</div>

								<button className="Btn2ForScndDashc1">Explore Learn</button>
							</div>

							<div className="SixInnForScndDashc1">
								<img src={Img12} className="Img3ForScndDashc1" />

								<h5>Become a successful seller!</h5>

								<br />

								<div className="NinInnForScndDashc1">
									Watch this free online course to learn how to create an
									outstanding service experience for your buyer and grow your
									career as an online freelancer.
								</div>

								<button className="Btn3ForScndDashc1">Watch Free Course</button>
							</div>
						</div>
					</div>
	</div>*/}
				<p className="UpgradeBussiness">
					<span>@Upgrade your business on TAC</span>
				</p>
			</div>
		</div>
	);
}
