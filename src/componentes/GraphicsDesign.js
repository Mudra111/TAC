import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header3";
import "./GraphicsDesign.css";
import Carousel from "react-elastic-carousel";
import ItemGD from "./ItemForGDSlider";
import Img1S from "./Images/SlideImg1GD.webp";
import Img2S from "./Images/SlideImg2GD.png";
import Img3S from "./Images/SlideImg3GD.png";
import Img4S from "./Images/SlideImg4GD.webp";
import Img5S from "./Images/SlideImg5GD.webp";
import Img6S from "./Images/SlideImg6GD.webp";
import Img7S from "./Images/SlideImg7GD.webp";
import Img8S from "./Images/SlideImg8GD.webp";
import Img9S from "./Images/SlideImg9GD.webp";

import GDGridImg1 from "./Images/GDGridImg1.webp";
import GDGridImg2 from "./Images/GDGridImg2.webp";
import GDGridImg3 from "./Images/GDGridImg3.webp";
import GDGridImg4 from "./Images/GDGridImg4.webp";
import GDGridImg5 from "./Images/GDGridImg5.webp";
import GDGridImg6 from "./Images/GDGridImg6.webp";
import GDGridImg7 from "./Images/GDGridImg7.webp";
import GDGridImg8 from "./Images/GDGridImg8.webp";
import GDGridImg9 from "./Images/GDGridImg9.webp";
import GDGridImg10 from "./Images/GDGridImg10.webp";
import GDGridImg11 from "./Images/GDGridImg11.webp";
import GDGridImg12 from "./Images/GDGridImg12.webp";

import Img1FrthDiv from "./Images/Img1FrthDivGD.webp";
import Img2FrthDiv from "./Images/Img2FrthDivGD.webp";
import Img3FrthDiv from "./Images/Img3FrthDivGD.webp";

export default function GraphicsDesign() {
	const [isQua1Show, setIsQua1Show] = useState(false);

	const changeQua1Class = () => {
		setIsQua1Show(!isQua1Show);
	};

	const [isQua2Show, setIsQua2Show] = useState(false);

	const changeQua2Class = () => {
		setIsQua2Show(!isQua2Show);
	};

	const [isQua3Show, setIsQua3Show] = useState(false);

	const changeQua3Class = () => {
		setIsQua3Show(!isQua3Show);
	};

	const [isQua4Show, setIsQua4Show] = useState(false);

	const changeQua4Class = () => {
		setIsQua4Show(!isQua4Show);
	};

	const [isQua5Show, setIsQua5Show] = useState(false);

	const changeQua5Class = () => {
		setIsQua5Show(!isQua5Show);
	};

	const [isQua6Show, setIsQua6Show] = useState(false);

	const changeQua6Class = () => {
		setIsQua6Show(!isQua6Show);
	};

	return (
		<div>
			<Header />
			<div className="MainDivInGraphicsDesign">
				<div className="DivForImg FrstDivGraphicsDesign">
					<div className="InnDivInImg">
						<h1>Graphics & Design</h1>
						<p>Designs to make you stand out.</p>
						<button className="btnForHTACwork">How TAC works</button>
					</div>
				</div>

				<div className="ScndDivGraphicsDesign">
					<h3>Most popular in Graphics & Design</h3>

					<div>
						<Carousel className="SliderForGraphicsDesign">
							<ItemGD className="ItemInGD item1gd">
								<Link to="/home">
									<div className="divno1GD DivInSlideGD">
										<img src={Img1S} className="Img1Slide" />

										<p className="PInSlideGD">
											Minimalist Logo Design{" "}
											<span className="SpanInSlideGd">&#8594;</span>
										</p>
									</div>
								</Link>

								<Link to="/home">
									<div className="divno2GD DivInSlideGD">
										<img src={Img2S} className="Img2Slide" />

										<p className="PInSlideGD">
											Architecture & Interior Design{" "}
											<span className="SpanInSlideGd">&#8594;</span>
										</p>
									</div>
								</Link>

								<Link to="/home">
									<div className="divno3GD DivInSlideGD">
										<img src={Img3S} className="Img3Slide" />

										<p className="PInSlideGD">
											Photoshop Editing{" "}
											<span className="SpanInSlideGd">&#8594;</span>
										</p>
									</div>
								</Link>

								<Link to="/home">
									<div className="divno4GD DivInSlideGD">
										<img src={Img4S} className="Img4Slide" />

										<p className="PInSlideGD">
											NFT Art <span className="SpanInSlideGd">&#8594;</span>
										</p>
									</div>
								</Link>

								<Link to="/home">
									<div className="divno5GD DivInSlideGD">
										<img src={Img5S} className="Img5Slide" />

										<p className="PInSlideGD">
											T-Shirts & Merchandise
											<span className="SpanInSlideGd">&#8594;</span>
										</p>
									</div>
								</Link>
							</ItemGD>

							<ItemGD className="ItemInGD item2gd">
								<Link to="/home">
									<div className="divno6GD DivInSlideGD">
										<img src={Img6S} className="Img6Slide" />

										<p className="PInSlideGD">
											Illustration{" "}
											<span className="SpanInSlideGd">&#8594;</span>
										</p>
									</div>
								</Link>

								<Link to="/home">
									<div className="divno7GD DivInSlideGD">
										<img src={Img7S} className="Img7Slide" />

										<p className="PInSlideGD">
											Business Cards Design{" "}
											<span className="SpanInSlideGd">&#8594;</span>
										</p>
									</div>
								</Link>

								<Link to="/home">
									<div className="divno8GD DivInSlideGD">
										<img src={Img8S} className="Img8Slide" />

										<p className="PInSlideGD">
											Social Media Design{" "}
											<span className="SpanInSlideGd">&#8594;</span>
										</p>
									</div>
								</Link>
								<Link to="/home">
									<div className="divno9GD DivInSlideGD">
										<img src={Img9S} className="Img9Slide" />

										<p className="PInSlideGD">
											Graphics for Streamers{" "}
											<span className="SpanInSlideGd">&#8594;</span>
										</p>
									</div>
								</Link>
							</ItemGD>
						</Carousel>
					</div>
				</div>

				<div className="ThrdDivGraphicsDesign">
					<h3>Explore Graphics & Design</h3>

					<div className="InnDivInThrdDiv">
						<div className="Item1GridGD">
							<img src={GDGridImg1} className="GDgridimg1" />
							<p className="PInGDGrid">Logo & Brand Identity</p>
							<ul className="UlInGDGrid">
								<li className="LiInGDGrid">
									<div> Logo Design</div>
									<div className="ArrowInGDGrid">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 
											3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 
											0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 
											8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 
											12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 
											8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 
											7.24315 13.9671 7.23972L9.92332 2.96885Z"
											></path>
										</svg>
									</div>
								</li>
								<li className="LiInGDGrid">
									<div> Brand Style Guides</div>
									<div className="ArrowInGDGrid">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 
									3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 
									0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 
									8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 
									12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 
									8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 
									7.24315 13.9671 7.23972L9.92332 2.96885Z"
											></path>
										</svg>
									</div>
								</li>
								<li className="LiInGDGrid">
									<div>Fonts & Typography</div>
									<div className="ArrowInGDGrid">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 
									3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 
									0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 
									8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 
									12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 
									8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 
									7.24315 13.9671 7.23972L9.92332 2.96885Z"
											></path>
										</svg>
									</div>
								</li>
								<li className="LiInGDGrid">
									<div> Business Cards & Stationery</div>
									<div className="ArrowInGDGrid">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 
									3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 
									0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 
									8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 
									12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 
									8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 
									7.24315 13.9671 7.23972L9.92332 2.96885Z"
											></path>
										</svg>
									</div>
								</li>
							</ul>
						</div>
						<div className="Item2GridGD">
							<img src={GDGridImg2} className="GDgridimg2" />
							<p className="PInGDGrid">Web & App Design</p>
							<ul className="UlInGDGrid">
								<li className="LiInGDGrid">
									<div> Website Design</div>
									<div className="ArrowInGDGrid">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 
									3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 
									0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 
									8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 
									12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 
									8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 
									7.24315 13.9671 7.23972L9.92332 2.96885Z"
											></path>
										</svg>
									</div>
								</li>
								<li className="LiInGDGrid">
									<div> App Design</div>
									<div className="ArrowInGDGrid">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 
									3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 
									0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 
									8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 
									12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 
									8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 
									7.24315 13.9671 7.23972L9.92332 2.96885Z"
											></path>
										</svg>
									</div>
								</li>
								<li className="LiInGDGrid">
									<div> UX Design</div>
									<div className="ArrowInGDGrid">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 
									3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 
									0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 
									8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 
									12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 
									8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 
									7.24315 13.9671 7.23972L9.92332 2.96885Z"
											></path>
										</svg>
									</div>
								</li>
								<li className="LiInGDGrid">
									<div> Landing Page Design</div>
									<div className="ArrowInGDGrid">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 
									3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 
									0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 
									8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 
									12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 
									8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 
									7.24315 13.9671 7.23972L9.92332 2.96885Z"
											></path>
										</svg>
									</div>
								</li>
								<li className="LiInGDGrid">
									<div> Icon Design</div>
									<div className="ArrowInGDGrid">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 
									3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 
									0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 
									8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 
									12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 
									8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 
									7.24315 13.9671 7.23972L9.92332 2.96885Z"
											></path>
										</svg>
									</div>
								</li>
							</ul>
						</div>
						<div className="Item3GridGD">
							<img src={GDGridImg3} className="GDgridimg3" />
							<p className="PInGDGrid">Art & Illustration</p>
							<ul className="UlInGDGrid">
								<li className="LiInGDGrid">
									<div>Illustration</div>
									<div className="ArrowInGDGrid">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 
									3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 
									0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 
									8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 
									12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 
									8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 
									7.24315 13.9671 7.23972L9.92332 2.96885Z"
											></path>
										</svg>
									</div>
								</li>
								<li className="LiInGDGrid">
									<div> NFT Art</div>
									<div className="ArrowInGDGrid">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 
									3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 
									0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 
									8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 
									12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 
									8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 
									7.24315 13.9671 7.23972L9.92332 2.96885Z"
											></path>
										</svg>
									</div>
								</li>
								<li className="LiInGDGrid">
									<div> Pattern Design</div>
									<div className="ArrowInGDGrid">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 
									3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 
									0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 
									8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 
									12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 
									8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 
									7.24315 13.9671 7.23972L9.92332 2.96885Z"
											></path>
										</svg>
									</div>
								</li>
								<li className="LiInGDGrid">
									<div> Portraits & Caricatures</div>
									<div className="ArrowInGDGrid">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 
									3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 
									0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 
									8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 
									12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 
									8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 
									7.24315 13.9671 7.23972L9.92332 2.96885Z"
											></path>
										</svg>
									</div>
								</li>
								<li className="LiInGDGrid">
									<div>Cartoons & Comics</div>
									<div className="ArrowInGDGrid">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 
									3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 
									0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 
									8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 
									12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 
									8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 
									7.24315 13.9671 7.23972L9.92332 2.96885Z"
											></path>
										</svg>
									</div>
								</li>
								<li className="LiInGDGrid">
									<div> Tattoo Design</div>
									<div className="ArrowInGDGrid">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 
									3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 
									0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 
									8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 
									12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 
									8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 
									7.24315 13.9671 7.23972L9.92332 2.96885Z"
											></path>
										</svg>
									</div>
								</li>
								<li className="LiInGDGrid">
									<div>Storyboards</div>
									<div className="ArrowInGDGrid">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 
									3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 
									0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 
									8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 
									12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 
									8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 
									7.24315 13.9671 7.23972L9.92332 2.96885Z"
											></path>
										</svg>
									</div>
								</li>
							</ul>
						</div>
						<div className="Item4GridGD">
							<img src={GDGridImg4} className="GDgridimg4" />
							<p className="PInGDGrid">Marketing Design</p>
							<ul className="UlInGDGrid">
								<li className="LiInGDGrid">
									<div> Social Media Design</div>
									<div className="ArrowInGDGrid">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 
									3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 
									0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 
									8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 
									12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 
									8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 
									7.24315 13.9671 7.23972L9.92332 2.96885Z"
											></path>
										</svg>
									</div>
								</li>
								<li className="LiInGDGrid">
									<div> Email Design</div>
									<div className="ArrowInGDGrid">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 
									3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 
									0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 
									8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 
									12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 
									8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 
									7.24315 13.9671 7.23972L9.92332 2.96885Z"
											></path>
										</svg>
									</div>
								</li>
								<li className="LiInGDGrid">
									<div>Web Banners</div>
									<div className="ArrowInGDGrid">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 
									3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 
									0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 
									8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 
									12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 
									8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 
									7.24315 13.9671 7.23972L9.92332 2.96885Z"
											></path>
										</svg>
									</div>
								</li>
								<li className="LiInGDGrid">
									<div>Signage Design</div>
									<div className="ArrowInGDGrid">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 
									3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 
									0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 
									8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 
									12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 
									8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 
									7.24315 13.9671 7.23972L9.92332 2.96885Z"
											></path>
										</svg>
									</div>
								</li>
							</ul>
						</div>
						<div className="Item5GridGD">
							<img src={GDGridImg5} className="GDgridimg5" />
							<p className="PInGDGrid">Gaming</p>
							<ul className="UlInGDGrid">
								<li className="LiInGDGrid">
									<div> Game Art</div>
									<div className="ArrowInGDGrid">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 
									3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 
									0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 
									8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 
									12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 
									8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 
									7.24315 13.9671 7.23972L9.92332 2.96885Z"
											></path>
										</svg>
									</div>
								</li>
								<li className="LiInGDGrid">
									<div>Graphics for Streamers</div>
									<div className="ArrowInGDGrid">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 
									3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 
									0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 
									8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 
									12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 
									8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 
									7.24315 13.9671 7.23972L9.92332 2.96885Z"
											></path>
										</svg>
									</div>
								</li>
								<li className="LiInGDGrid">
									<div> Twitch Store</div>
									<div className="ArrowInGDGrid">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 
									3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 
									0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 
									8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 
									12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 
									8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 
									7.24315 13.9671 7.23972L9.92332 2.96885Z"
											></path>
										</svg>
									</div>
								</li>
							</ul>
						</div>
						<div className="Item6GridGD">
							<img src={GDGridImg6} className="GDgridimg6" />
							<p className="PInGDGrid">Visual Design</p>
							<ul className="UlInGDGrid">
								<li className="LiInGDGrid">
									<div>Photoshop Editing</div>
									<div className="ArrowInGDGrid">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 
									3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 
									0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 
									8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 
									12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 
									8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 
									7.24315 13.9671 7.23972L9.92332 2.96885Z"
											></path>
										</svg>
									</div>
								</li>
								<li className="LiInGDGrid">
									<div>Presentation Design</div>
									<div className="ArrowInGDGrid">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 
									3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 
									0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 
									8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 
									12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 
									8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 
									7.24315 13.9671 7.23972L9.92332 2.96885Z"
											></path>
										</svg>
									</div>
								</li>
								<li className="LiInGDGrid">
									<div>Infographic Design</div>
									<div className="ArrowInGDGrid">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 
									3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 
									0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 
									8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 
									12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 
									8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 
									7.24315 13.9671 7.23972L9.92332 2.96885Z"
											></path>
										</svg>
									</div>
								</li>
								<li className="LiInGDGrid">
									<div> Vector Tracing</div>
									<div className="ArrowInGDGrid">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 
									3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 
									0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 
									8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 
									12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 
									8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 
									7.24315 13.9671 7.23972L9.92332 2.96885Z"
											></path>
										</svg>
									</div>
								</li>
								<li className="LiInGDGrid">
									<div>Resume Design</div>
									<div className="ArrowInGDGrid">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 
									3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 
									0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 
									8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 
									12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 
									8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 
									7.24315 13.9671 7.23972L9.92332 2.96885Z"
											></path>
										</svg>
									</div>
								</li>
							</ul>
						</div>
						<div className="Item7GridGD">
							<img src={GDGridImg7} className="GDgridimg7" />
							<p className="PInGDGrid">Print Design</p>
							<ul className="UlInGDGrid">
								<li className="LiInGDGrid">
									<div> T-Shirts & Merchandise</div>
									<div className="ArrowInGDGrid">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 
									3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 
									0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 
									8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 
									12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 
									8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 
									7.24315 13.9671 7.23972L9.92332 2.96885Z"
											></path>
										</svg>
									</div>
								</li>
								<li className="LiInGDGrid">
									<div>Flyer Design</div>
									<div className="ArrowInGDGrid">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 
									3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 
									0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 
									8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 
									12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 
									8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 
									7.24315 13.9671 7.23972L9.92332 2.96885Z"
											></path>
										</svg>
									</div>
								</li>
								<li className="LiInGDGrid">
									<div> Brochure Design</div>
									<div className="ArrowInGDGrid">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 
									3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 
									0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 
									8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 
									12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 
									8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 
									7.24315 13.9671 7.23972L9.92332 2.96885Z"
											></path>
										</svg>
									</div>
								</li>
								<li className="LiInGDGrid">
									<div> Poster Design</div>
									<div className="ArrowInGDGrid">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 
									3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 
									0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 
									8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 
									12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 
									8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 
									7.24315 13.9671 7.23972L9.92332 2.96885Z"
											></path>
										</svg>
									</div>
								</li>
								<li className="LiInGDGrid">
									<div> Catalog Design</div>
									<div className="ArrowInGDGrid">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 
									3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 
									0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 
									8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 
									12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 
									8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 
									7.24315 13.9671 7.23972L9.92332 2.96885Z"
											></path>
										</svg>
									</div>
								</li>
								<li className="LiInGDGrid">
									<div> Menu Design</div>
									<div className="ArrowInGDGrid">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 
									3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 
									0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 
									8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 
									12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 
									8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 
									7.24315 13.9671 7.23972L9.92332 2.96885Z"
											></path>
										</svg>
									</div>
								</li>
								<li className="LiInGDGrid">
									<div> Invitation Design</div>
									<div className="ArrowInGDGrid">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 
									3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 
									0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 
									8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 
									12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 
									8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 
									7.24315 13.9671 7.23972L9.92332 2.96885Z"
											></path>
										</svg>
									</div>
								</li>
							</ul>
						</div>
						<div className="Item8GridGD">
							<img src={GDGridImg8} className="GDgridimg8" />
							<p className="PInGDGrid">Packaging & Covers</p>
							<ul className="UlInGDGrid">
								<li className="LiInGDGrid">
									<div> Packaging & Label Design</div>
									<div className="ArrowInGDGrid">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 
									3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 
									0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 
									8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 
									12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 
									8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 
									7.24315 13.9671 7.23972L9.92332 2.96885Z"
											></path>
										</svg>
									</div>
								</li>
								<li className="LiInGDGrid">
									<div> Book Design</div>
									<div className="ArrowInGDGrid">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 
									3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 
									0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 
									8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 
									12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 
									8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 
									7.24315 13.9671 7.23972L9.92332 2.96885Z"
											></path>
										</svg>
									</div>
								</li>
								<li className="LiInGDGrid">
									<div>Album Cover Design</div>
									<div className="ArrowInGDGrid">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 
									3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 
									0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 
									8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 
									12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 
									8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 
									7.24315 13.9671 7.23972L9.92332 2.96885Z"
											></path>
										</svg>
									</div>
								</li>
								<li className="LiInGDGrid">
									<div> Podcast Cover Art</div>
									<div className="ArrowInGDGrid">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 
									3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 
									0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 
									8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 
									12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 
									8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 
									7.24315 13.9671 7.23972L9.92332 2.96885Z"
											></path>
										</svg>
									</div>
								</li>
								<li className="LiInGDGrid">
									<div> Car Wraps</div>
									<div className="ArrowInGDGrid">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 
									3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 
									0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 
									8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 
									12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 
									8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 
									7.24315 13.9671 7.23972L9.92332 2.96885Z"
											></path>
										</svg>
									</div>
								</li>
							</ul>
						</div>
						<div className="Item9GridGD">
							<img src={GDGridImg9} className="GDgridimg9" />
							<p className="PInGDGrid">Architecture & Building Design</p>
							<ul className="UlInGDGrid">
								<li className="LiInGDGrid">
									<div> Architecture & Interior Design</div>
									<div className="ArrowInGDGrid">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 
									3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 
									0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 
									8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 
									12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 
									8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 
									7.24315 13.9671 7.23972L9.92332 2.96885Z"
											></path>
										</svg>
									</div>
								</li>
								<li className="LiInGDGrid">
									<div>Landscape Design</div>
									<div className="ArrowInGDGrid">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 
									3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 
									0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 
									8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 
									12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 
									8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 
									7.24315 13.9671 7.23972L9.92332 2.96885Z"
											></path>
										</svg>
									</div>
								</li>
								<li className="LiInGDGrid">
									<div> Building Engineering</div>
									<div className="ArrowInGDGrid">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 
									3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 
									0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 
									8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 
									12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 
									8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 
									7.24315 13.9671 7.23972L9.92332 2.96885Z"
											></path>
										</svg>
									</div>
								</li>
								<li className="LiInGDGrid">
									<div>Building Information Modeling</div>
									<div className="ArrowInGDGrid">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 
									3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 
									0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 
									8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 
									12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 
									8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 
									7.24315 13.9671 7.23972L9.92332 2.96885Z"
											></path>
										</svg>
									</div>
								</li>
							</ul>
						</div>
						<div className="Item10GridGD">
							<img src={GDGridImg10} className="GDgridimg10" />
							<p className="PInGDGrid">Product & Characters Design</p>
							<ul className="UlInGDGrid">
								<li className="LiInGDGrid">
									<div> Industrial & Product Design</div>
									<div className="ArrowInGDGrid">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 
									3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 
									0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 
									8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 
									12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 
									8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 
									7.24315 13.9671 7.23972L9.92332 2.96885Z"
											></path>
										</svg>
									</div>
								</li>
								<li className="LiInGDGrid">
									<div> Character Modeling</div>
									<div className="ArrowInGDGrid">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 
									3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 
									0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 
									8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 
									12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 
									8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 
									7.24315 13.9671 7.23972L9.92332 2.96885Z"
											></path>
										</svg>
									</div>
								</li>
								<li className="LiInGDGrid">
									<div> Trade Booth Design</div>
									<div className="ArrowInGDGrid">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 
									3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 
									0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 
									8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 
									12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 
									8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 
									7.24315 13.9671 7.23972L9.92332 2.96885Z"
											></path>
										</svg>
									</div>
								</li>
							</ul>
						</div>
						<div className="Item11GridGD">
							<img src={GDGridImg11} className="GDgridimg11" />
							<p className="PInGDGrid">Fashion & Jewelry</p>
							<ul className="UlInGDGrid">
								<li className="LiInGDGrid">
									<div>Fashion Design</div>
									<div className="ArrowInGDGrid">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 
									3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 
									0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 
									8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 
									12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 
									8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 
									7.24315 13.9671 7.23972L9.92332 2.96885Z"
											></path>
										</svg>
									</div>
								</li>
								<li className="LiInGDGrid">
									<div> Jewelry Design</div>
									<div className="ArrowInGDGrid">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 
									3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 
									0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 
									8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 
									12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 
									8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 
									7.24315 13.9671 7.23972L9.92332 2.96885Z"
											></path>
										</svg>
									</div>
								</li>
							</ul>
						</div>
						<div className="Item12GridGD">
							<img src={GDGridImg12} className="GDgridimg12" />
							<p className="PInGDGrid">Miscellaneous</p>
							<ul className="UlInGDGrid">
								<li className="LiInGDGrid">
									<div> Design Advice</div>
									<div className="ArrowInGDGrid">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 
									3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 
									0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 
									8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 
									12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 
									8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 
									7.24315 13.9671 7.23972L9.92332 2.96885Z"
											></path>
										</svg>
									</div>
								</li>
								<li className="LiInGDGrid">
									<div>Other</div>
									<div className="ArrowInGDGrid">
										<svg
											width="16"
											height="16"
											viewBox="0 0 16 16"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 
									3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 
									0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 
									8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 
									12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 
									8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 
									7.24315 13.9671 7.23972L9.92332 2.96885Z"
											></path>
										</svg>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="FrthDivGraphicsDesign">
					<div className="DivForHeadingInFrthDivGD div1GDinFrth">
						<div>
							<h3>Graphics & Design Related Guides</h3>
						</div>

						<div className="div2GDinFrth">
							<Link to="/home">
								<div className="div3GDinFrth">
									<div className="FstInDiv3GDinFrth">See more guides</div>
									<div className="ScndInDiv3GDinFrth">
										<svg
											height="14"
											width="8"
											viewBox="0 0 8 14"
											fill=" #446ee7"
										>
											<path
												d="m.728547.109852-.618719.618687c-.1464374.146437-.1464374.383871 
											0 .530341l5.646842 5.66032-5.646842 5.6603c-.1464374.1464-.1464374.3839 
											0 .5304l.618719.6187c.146437.1464.383873.1464.530343 
											0l6.54419-6.54422c.14644-.14644.14644-.38387 
											0-.53034l-6.54419-6.544188c-.14647-.1464692-.383906-.1464692-.530343 
											0z"
											></path>
										</svg>
									</div>
								</div>
							</Link>
						</div>
					</div>

					<div className="div4GDinFrth">
						<div>
							<Link to="/home">
								<img src={Img1FrthDiv} className="Img1Frthdivgd" />
							</Link>
							<Link to="/home">
								<div className="DivIndiv4inFrth">
									How to illustrate a children's book: 9 steps to illustrate
									your book
								</div>
							</Link>
						</div>

						<div>
							<Link to="/home">
								<img src={Img2FrthDiv} className="Img2Frthdivgd" />
							</Link>
							<Link to="/home">
								<div className="DivIndiv4inFrth">
									Graphic design 101: what is graphic design?
								</div>
							</Link>
						</div>

						<div>
							<Link to="/home">
								<img src={Img3FrthDiv} className="Img3Frthdivgd" />
							</Link>
							<Link to="/home">
								<div className="DivIndiv4inFrth">
									How to design a logo: 12 steps to creating a business logo
									from scratch
								</div>
							</Link>
						</div>
					</div>
				</div>

				<div className="FfthDivGraphicsDesign">
					<h3 className="headFfthdGD">Graphics & Design FAQs</h3>

					<div className="DivForQuaGD">
						<div className="que-itemGD" id="que1">
							<a onClick={changeQua1Class} className="que-link_GD">
								What is graphic design?
								<span className={`${isQua1Show ? "Add_hideGD" : "addGD"}`}>
									&#11167;
								</span>
								<span
									className={`${isQua1Show ? "Remove_showGD" : "removeGD"}`}
								>
									&#11165;
								</span>
							</a>

							<div className={`answGD ${isQua1Show ? "ans1GD" : ""}`}>
								<p>
									Put simply, graphic design is the art and craft of creating
									visual content that communicates a concept, an idea or a brand
									message to the public. Logos, artworks, drawings,
									illustrations, cards, emails and a whole paraphernalia of
									designs are all around us. You can see them in print and
									digital media, in shops, restaurants and cafes, on billboards,
									books and magazines, in the apps we use, the sites we visit
									and the physical and digital products we buy. In fact, graphic
									design is a type of communication medium which uses visual
									means to convey a message. Designers use different types of
									physical materials or software to combine images, graphics and
									text as the main forms of expressing this message. Graphic
									design is used to sell, to build brand identity or to move
									people towards specific actions. It is also a form of art but
									ultimately, the different elements of the graphic
									representation influence our perceptions and emotions. There
									are different types of graphic design such as 'visual
									identity' which deals with the visual elements of the brand
									via shapes, colors and images (e.g. logo design, typography,
									brand style guides) and 'marketing and advertising' which is
									used directly to generate leads and sales via print
									(billboards, brochures, flyers, print ads) or digital (social
									media posts, banners, videos). There are many other types such
									as website design, industrial and product design, fashion
									design, book and illustrations, motion graphics design used
									for example by streamers or in gaming design and many others.
								</p>
							</div>
						</div>

						<div className="que-itemGD" id="que2">
							<a onClick={changeQua2Class} className="que-link_GD">
								How to hire top graphic designers?
								<span className={`${isQua2Show ? "Add_hideGD" : "addGD"}`}>
									&#11167;
								</span>
								<span
									className={`${isQua2Show ? "Remove_showGD" : "removeGD"}`}
								>
									&#11165;
								</span>
							</a>

							<div className={`answGD ${isQua2Show ? "ans2GD" : ""}`}>
								<p>
									A captivating visual presence is very important whether you're
									a business or a non-commercial entity. Your potential
									audiences are already forming an opinion and deciding whether
									to interact with you based on what they see, long before
									you've had a chance to say or write something. So it's
									imperative to carefully select the right freelancer to meet
									your needs and keep you within budget. There are many
									different areas in which graphic designers specialize so if
									you want to hire the right talent to meet the requirements of
									your particular project, here are some easy to follow tips and
									tricks. - Always research their portfolio on Fiverr and ask
									for more examples if necessary; - Carefully think about what
									your style and preferences are so you know what you like, what
									you don't like and what you actually want (colors, graphics,
									images, etc); - Write a clear brief - depending on the size of
									the project your brief can be very short or contain a lot of
									detail. What's important is to be clear on the important
									points; - Define a budget and be clear to yourself and the
									freelancer how far you can stretch it; - Form a clear
									agreement on deadlines and revisions and respect the work of
									the designer - if you are clear on the above points then there
									shouldn't be any surprises; - Think long-term - a good
									designer will be able to help you holistically and develop an
									evolving long-term vision for your product or service.
								</p>
							</div>
						</div>

						<div className="que-itemGD" id="que3">
							<a onClick={changeQua3Class} className="que-link_GD">
								How much does it cost to hire a graphic designer
								<span className={`${isQua3Show ? "Add_hideGD" : "addGD"}`}>
									&#11167;
								</span>
								<span
									className={`${isQua3Show ? "Remove_showGD" : "removeGD"}`}
								>
									&#11165;
								</span>
							</a>

							<div className={`answGD ${isQua3Show ? "ans3GD" : ""}`}>
								<p>
									There is no simple answer to this question as graphic design
									is not a commodity or a product that has an exact way to be
									measured or priced. The great thing about Fiverr is that you
									can find a freelance graphic designer for any budget, starting
									from just $5 per gig and going up to hundreds or thousands of
									dollars for more complex and time and resource consuming
									requirements. However, there are a number of factors that will
									influence the final price of the project such as the level of
									experience of the seller (from novices to Top Rated and Pro
									Sellers), the number or service options included in the gig,
									delivery times, number of revisions and whether any extras
									might need to be added at some point. In fact, revisions can
									be a very tricky area for graphic design projects so it's key
									for you to have very clear requirements to start with and also
									to agree with the seller what their output will be (e.g.how
									many initial versions they will offer) to avoid any
									misunderstandings or unwanted surprises on both sides. A more
									experienced designer will charge more, however, they can also
									help you define your requirements and save time (and money) in
									the long-run by keeping you on track for your goals.
									Alternatively, a new freelancer who's perhaps less experienced
									or trying to build their reputation will be priced more
									competitively but might not have the skills or professional
									maturity of a seasoned creative director.
								</p>
							</div>
						</div>

						<div className="que-itemGD" id="que4">
							<a onClick={changeQua4Class} className="que-link_GD">
								How do I write a good creative design brief?
								<span className={`${isQua4Show ? "Add_hideGD" : "addGD"}`}>
									&#11167;
								</span>
								<span
									className={`${isQua4Show ? "Remove_showGD" : "removeGD"}`}
								>
									&#11165;
								</span>
							</a>

							<div className={`answGD ${isQua4Show ? "ans4GD" : ""}`}>
								<p>
									The creative brief is a key document that essentially defines
									the objectives, scope and key milestones of a design project.
									It gives the required information to the freelance graphic
									designer on what needs to be done, who the target audience
									will be, what key message(s) need to be communicated, what
									deliverables are expected, by when (deadlines and milestones).
									The creative brief is basically the blueprint that you'll need
									to agree with your internal stakeholders, business partners or
									colleagues (or if you are a one-person-show - find a friend or
									someone you trust to use as a sounding board) and then present
									to the freelancer to guide, inspire them and ensure they
									deliver the best possible creative results. Here are some
									universal tips for writing a good creative brief that equally
									apply to most: - Start by answering the 'what' (your goal is)
									and 'who' (your audience is); - Be clear, concise and to the
									point - less is more in this case so avoid being too
									prescriptive and don't elaborate too much; - Set realistic
									deadlines and factor in the time for feedback and revisions; -
									Ask for help - from your team, colleagues stakeholders; -
									Define what success will look like so both you and the
									designer can measure the results in the end (and stick to your
									initial definitions). Once you have all this, keep it as a
									template and use for future briefs as it'll save you time and
									will ensure you can build long-term relationships with the
									graphic designers you work with.
								</p>
							</div>
						</div>

						<div className="que-itemGD" id="que5">
							<a onClick={changeQua5Class} className="que-link_GD">
								What's the best way to hire a designer in less than 48 hours?
								<span className={`${isQua5Show ? "Add_hideGD" : "addGD"}`}>
									&#11167;
								</span>
								<span
									className={`${isQua5Show ? "Remove_showGD" : "removeGD"}`}
								>
									&#11165;
								</span>
							</a>

							<div className={`answGD ${isQua5Show ? "ans5GD" : ""}`}>
								<p>
									Finding a good graphic designer is very important for the way
									your business and brand is presented to your target audience
									so you need to be very careful in who you put your trust in.
									You will need to get to grips with some graphic design 101's
									in order to become better at selection. Having said that, we
									know that sometimes there are business emergencies and you
									might find yourself in a situation when you need to hire a
									professional logo designer, illustration artist, front-end/UX
									or web designer or any type of freelance graphic designer in a
									hurry. The good news is that Fiverr can help you do that even
									if you only have 48 hours or less to complete your project. We
									have expert freelancers from around the globe, working 24/7
									waiting to satisfy all your needs. Here's what to do: -
									Publish a buyer request so you can reach a big audience of
									freelancers who can offer you their services; - Clearly state
									your requirements, your budget and your deadline and sellers
									will start to contact you immediately; - Make sure to follow
									through with offers and ask relevant questions about
									experience, how the freelancer will approach the project,
									expectations about time and milestones before you decide to
									place an order; - Read buyer reviews and ask for additional
									portfolio examples if not sure; - Look for the seller rating
									(Fiver Top Rated and Pro sellers will command higher prices
									but will have more experience and skills).
								</p>
							</div>
						</div>

						<div className="que-itemGD lastQueGD" id="que6">
							<a onClick={changeQua6Class} className="que-link_GD">
								What makes graphic design so important?
								<span className={`${isQua6Show ? "Add_hideGD" : "addGD"}`}>
									&#11167;
								</span>
								<span
									className={`${isQua6Show ? "Remove_showGD" : "removeGD"}`}
								>
									&#11165;
								</span>
							</a>

							<div className={`answGD ${isQua6Show ? "ans6GD" : ""}`}>
								<p>
									We live in a visual society so images, packaging, signage,
									illustrations, websites, apps and social media all vie for our
									attention, making it very challenging to become noticeable let
									alone memorable amongst the overload of visual stimuli. In a
									nutshell, the most important mission that graphic design plays
									is communication. Communication of ideas and messages, with
									the ultimate objective of elicit, prompt or evoke an action or
									an emotion (which will become an action in the future). So a
									good graphic designer will build your logo, create your email
									campaign or company stationery, do everything possible (given
									the right brief) to set you apart from your competition and
									convey a message that exudes trust, credibility and builds a
									consistent brand and company reputation. A well executed
									design project will ensure that the final output, be it a
									flyer or your product packaging, or even the design of your
									office space or your frontline staff's uniforms summarizes
									your mission and vision statements and communicates in a clear
									and simple manner the main ideas that are behind your company
									or organization and what it stands for. When you hire a good
									graphic design professional, preferably one you can trust on
									more than one project, they will ensure that all
									representations of your products and brand are visually
									consistent, recognizable and conveying a clear message.
									Ultimately, when you ask yourself 'How important is it that my
									customers recognize me?'', if the answer is 'very important'
									then so should graphic design be for your brand!
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="SixDivGraphicsDesign">
					<h3 className="headInSixDivGD">
						Services Related To Graphics & Design
					</h3>

					<div className="FstDinSixDGD">
						<Link to="home">
							<div className="div1Flex1SixDGD">Minimalist logo design</div>
						</Link>
						<Link to="home">
							<div className="div2Flex1SixDGD">Signature logo design</div>
						</Link>
						<Link to="home">
							<div className="div3Flex1SixDGD">Mascot logo design</div>
						</Link>
						<Link to="home">
							<div className="div4Flex1SixDGD">3d logo design</div>
						</Link>
						<Link to="home">
							<div className="div5Flex1SixDGD">Hand drawn logo design</div>
						</Link>
						<Link to="home">
							<div className="div6Flex1SixDGD">Vintage logo design</div>
						</Link>
						<Link to="home">
							<div className="div7Flex1SixDGD">Remove background</div>
						</Link>
					</div>

					<div className="ScndDinSixDGD">
						<Link to="home">
							<div className="DivinFlex2SixDgd">Photo restoration</div>
						</Link>
						<Link to="home">
							<div className="DivinFlex2SixDgd">Photo retouching</div>
						</Link>
						<Link to="home">
							<div className="DivinFlex2SixDgd">Image resize</div>
						</Link>
						<Link to="home">
							<div className="DivinFlex2SixDgd">Product label design</div>
						</Link>
						<Link to="home">
							<div className="DivinFlex2SixDgd">Custom twitch overlay</div>
						</Link>
						<Link to="home">
							<div className="DivinFlex2SixDgd">Custom twitch emotes</div>
						</Link>
						<Link to="home">
							<div className="DivinFlex2SixDgd">Gaming logo</div>
						</Link>
						<Link to="home">
							<div className="DivinFlex2SixDgd">Children book illustration</div>
						</Link>
					</div>

					<div className="ThrdDinSixDGD">
						<Link to="home">
							<div className="DivinFlex3SixDgd">Instagram design</div>
						</Link>
						<Link to="home">
							<div className="DivinFlex3SixDgd">Movie poster design</div>
						</Link>
						<Link to="home">
							<div className="DivinFlex3SixDgd">Box design</div>
						</Link>
						<Link to="home">
							<div className="DivinFlex3SixDgd">Logo maker</div>
						</Link>
						<Link to="home">
							<div className="DivinFlex3SixDgd">Logo ideas</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
