import React from "react";
import { Link } from "react-router-dom";
import HeaderForDash from "./HeaderForDash";
import "./dashboard.css";
import Img1 from "./Images/dashboardIMG1.svg";
import Img2 from "./Images/profile-pic.png";
import Img3 from "./Images/LSN-img7.svg";
import Img4 from "./Images/LSN-img1.svg";
import Img5 from "./Images/LSN-img2.svg";
import Img6 from "./Images/LSN-img3.svg";
import Img7 from "./Images/LSN-img4.svg";
import Img8 from "./Images/LSN-img5.svg";
import Img9 from "./Images/LSN-img6.svg";
import Img10 from "./Images/I5-img1.svg";
import Img11 from "./Images/I5-img2.svg";
import Img12 from "./Images/I5-img3.svg";
import ImgSlide1 from "./Images/DashSlideimg-1.jpg";
import ImgSlide2 from "./Images/DashSlideimg-2.jpg";
import ImgSlide3 from "./Images/DashSlideimg-3.webp";
import ImgSlide4 from "./Images/DashSlideimg-4.jpg";
import ProgressBar from "./Progress_bar";

export default function dashboard() {
	return (
		<div>
			<HeaderForDash />
			<div>
				<div className="mainConForDash" id="abc">
					<div className="gridItem1">
						<div className="firstInnDivForItem1">
							<img src={Img2} className="ImgForItem1" />

							<div className="SecondInnDivForItem1">UserName/Email</div>

							<div className="ThirdInnForI1">&#9733; N/V</div>
						</div>

						<hr className="HrForI1" />

						<ul className="UlInI1">
							<li className="FstLiInI1">
								<div className="SvnInnForI1">
									<div>Inbox response rate</div>
									<div className="eitInnForI1">
										<ProgressBar bgcolor="green" progress="60" height={9} />
									</div>
								</div>
							</li>
							<li className="SndLiInI1">
								<div className="SvnInnForI1">
									<div>Inbox response time</div>
									<div className="eitInnForI1">
										<ProgressBar bgcolor="green" progress="40" height={9} />
									</div>
								</div>
							</li>
							<li className="TrdLiInI1">
								<div className="SvnInnForI1">
									<div>Order response rate</div>
									<div className="eitInnForI1">
										<ProgressBar bgcolor="green" progress="20" height={9} />
									</div>
								</div>
							</li>
							<li className="FrthLiInI1">
								<div className="SvnInnForI1">
									<div>Delivered on time</div>
									<div className="eitInnForI1">
										<ProgressBar bgcolor="green" progress="100" height={9} />
									</div>
								</div>
							</li>
							<li className="FfthLiInI1">
								<div className="SvnInnForI1">
									<div>Order completion</div>
									<div className="eitInnForI1">
										<ProgressBar bgcolor="green" progress="80" height={9} />
									</div>
								</div>
							</li>
						</ul>

						<hr className="HrForI1" />

						<div className="FrthInnForI1">
							<div className="FfthInnForI1">Month of Earning</div>
							<div className="SixInnForI1">$0</div>
						</div>
					</div>

					<div className="gridItem2">
						<div className="FrstInnForI2">
							<div>
								<h4>
									Active orders <span className="spanActiveOr">- 0 ($0)</span>
								</h4>
							</div>
							<div>
								<button className="BtnForI2">Active orders &#709;</button>
							</div>
						</div>
					</div>

					<div className="gridItem3">
						<div className="lineForUB">Upgrade Your Business</div>

						<div className="Item3Innerbox">
							<div className="FirstInnForI3">
								<h5 className="H5ForI3">
									How to build your success on TAC in 3 steps
								</h5>

								<div className="SecondInnForI3">
									The key to your success on TAC is the brand you build for
									yourself through your TAC reputation. We gathered some tips
									and resources to help you become a leading seller on TAC.
								</div>
							</div>

							<div className="ThirdInnForI3">
								<img src={Img1} className="ImgForI3" />
							</div>
						</div>
					</div>

					<div className="gridItem4">
						<div className="FirstInnForI4">
							<div className="SndInnForI4">Inbox</div>

							<a href="#" className="LinkForI4">
								View All
							</a>
						</div>
					</div>

					<div className="gridItem5">
						<div className="FrstInnForI5">
							<div className="SndInnForI5">
								<h4>Take these steps to become a top seller on TAC</h4>
							</div>

							<div className="TrdInnForI5">
								<div className="frthInnForI5">
									<img src={Img10} className="Img1ForI5" />

									<h5>Get noticed</h5>
									<br />
									<div className="SvnInnForI5">
										Tap into the power of social media by sharing your Gig, and
										get expert help to grow your impact.
									</div>

									<button className="Btn1ForI5">Share Your Gigs</button>
								</div>

								<div className="FfthInnForI5">
									<img src={Img11} className="Img2ForI5" />

									<h5>Get more skills & exposure</h5>
									<br />
									<div className="EithInnForI5">
										Hone your skills and expand your knowledge with online
										courses. You'll be able to offer more services and gain more
										exposure with every course completed.
									</div>

									<button className="Btn2ForI5">Explore Learn</button>
								</div>

								<div className="SixInnForI5">
									<img src={Img12} className="Img3ForI5" />

									<h5>Become a successful seller!</h5>

									<br />

									<div className="NinInnForI5">
										Watch this free online course to learn how to create an
										outstanding service experience for your buyer and grow your
										career as an online freelancer.
									</div>

									<button className="Btn3ForI5">Watch Free Course</button>
								</div>
							</div>
						</div>
					</div>

					<div className="gridItem6">
						<div className="FrstInnForI6">
							<div className="SndInnForI6">
								Link your social networks
								<img className="ImgForI6" src={Img3} />
							</div>

							<div className="TrdInnForI6">
								<img src={Img4} className="Img1ForI6" />

								<img src={Img5} className="Img2ForI6" />

								<img src={Img6} className="Img3ForI6" />

								<img src={Img7} className="Img4ForI6" />

								<img src={Img8} className="Img5ForI6" />

								<img src={Img9} className="Img6ForI6" />
							</div>
						</div>
					</div>

					<div className="gridItem7">
						<div
							id="carouselExampleSlidesOnly"
							class="carousel slide"
							data-bs-ride="carousel"
						>
							<div class="carousel-inner">
								<div class="carousel-item active">
									<img
										src={ImgSlide1}
										class="d-block w-100 img1ForSlideI7"
										alt="..."
									/>
									<span className="Banner-content">
										<h2>Your business's backend. Automated.</h2>
										<p>
											Seamlessly run your back-office operations with Fiverr
											Workspace.
										</p>
									</span>
								</div>
								<div class="carousel-item">
									<img
										src={ImgSlide2}
										class="d-block w-100 img1ForSlideI7"
										alt="..."
									/>
									<span className="Banner-content">
										<h2>Maximize your Gig's potential</h2>
										<p>From fast delivery to revisions, earn with Extras.</p>
									</span>
								</div>
								<div class="carousel-item">
									<img
										src={ImgSlide3}
										class="d-block w-100 img1ForSlideI7"
										alt="..."
									/>
									<span className="Banner-content">
										<h2>Work Smart. Earn Faster.</h2>
										<p>Automate your business backend with Fiverr Workspace.</p>
									</span>
								</div>
								<div class="carousel-item">
									<img
										src={ImgSlide4}
										class="d-block w-100 img1ForSlideI7"
										alt="..."
									/>
									<span className="Banner-content">
										<h2>Got the magic touch?</h2>
										<p>
											Expand your skill set in this Photoshop retouching course.
										</p>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
