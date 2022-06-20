import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header3.css";
import logo from "./Images/logo.png";
import Login from "./login";

export default function Header3() {
	const [openLoginModal, setOpenLoginModal] = useState(false);

	return (
		<div>
			<div className="header3">
				<nav className="nav3">
					<div className="">
						<ul className="nav justify-content-end ">
							<li className="nav-item3 me-5">
								<img src={logo} alt="" className="setlogo" />
							</li>
							<li className="nav-item3 right">
								<form class="d-flex">
									<input
										class="form-control me-2"
										type="search"
										placeholder="Search"
										aria-label="Search"
									/>
									<button
										className="btn btn-outline-success searchbtn"
										type="submit"
									>
										Search
									</button>
								</form>
							</li>
							<li className="nav-item3 lh">
								<a className="active" aria-current="page" href="#">
									<b>Tac Business</b>
								</a>
							</li>
							<li className="nav-item3 dropdown">
								<a id="navbarDropdown" data-bs-toggle="dropdown" href="#">
									<b>Explore</b>
								</a>
								<ul
									className="dropdown-menu drop"
									aria-labelledby="navbarDropdown"
								>
									<div class="container">
										<div class="row row-cols-2 text-align-center">
											<div class="col">
												<ul class="nav flex-column">
													<li class="nav-item3">
														<a class="hdra" href="#">
															Discover
															<br />
															<p className="hdrp">
																Inspiring projects made on Fiverr
															</p>
														</a>
													</li>
													<li class="nav-item3">
														<a class="hdra" href="#">
															Guides
															<br />
															<p className="hdrp">
																In-depth guides covering business topics
															</p>
														</a>
													</li>
													<li class="nav-item3">
														<a class="hdra" href="#">
															Learn
															<br />
															<p className="hdrp">
																Professional online courses, led by experts
															</p>
														</a>
													</li>
													<li class="nav-item3">
														<a class="hdra" href="#">
															Logo Maker
															<br />
															<p className="hdrp">Create your logo instantly</p>
														</a>
													</li>
												</ul>
											</div>
											<div class="col">
												<ul class="nav flex-column">
													<li class="nav-item3">
														<a class="hdra" href="#">
															Community
															<br />
															<p className="hdrp">
																Connect with Fiverr’s team and community
															</p>
														</a>
													</li>
													<li class="nav-item3">
														<a class="hdra" href="#">
															Podcast
															<br />
															<p className="hdrp">
																Inside tips from top business minds
															</p>
														</a>
													</li>
													<li class="nav-item3">
														<a class="hdra" href="#">
															Blog
															<br />
															<p className="hdrp">
																News, information and community stories
															</p>
														</a>
													</li>
													<li class="nav-item3">
														<a class="hdra" href="#">
															Fiverr Workspace
															<br />
															<p className="hdrp">
																One place to manage your business
															</p>
														</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</ul>
							</li>
							<li className="nav-item3 dropdown">
								<a
									id="navbarDropdown"
									data-bs-toggle="dropdown"
									role="button"
									href="#"
								>
									<b>Language</b>
								</a>

								<ul
									className="dropdown-menu"
									aria-labelledby="navbarDropdown"
								></ul>
							</li>
							<li className="nav-item3 dropdown">
								<a
									id="navbarDropdown"
									data-bs-toggle="dropdown"
									role="button"
									href="#"
								>
									<b>Currency</b>
								</a>
								<ul
									className="dropdown-menu scroll"
									aria-labelledby="navbarDropdown"
								>
									<label class="rdolbl">
										One
										<span class="checkmark"></span>
										<input type="radio" checked="checked" name="radio" />
									</label>
									<label class="rdolbl">
										Two
										<span class="checkmark"></span>
										<input type="radio" name="radio" />
									</label>
									<label class="rdolbl">
										Three
										<span class="checkmark"></span>
										<input type="radio" name="radio" />
									</label>
									<label class="rdolbl">
										Four
										<span class="checkmark"></span>
										<input type="radio" name="radio" />
									</label>
									<label class="rdolbl">
										Five
										<span class="checkmark"></span>
										<input type="radio" name="radio" />
									</label>
									<label class="rdolbl">
										Six
										<span class="checkmark"></span>
										<input type="radio" name="radio" />
									</label>
								</ul>
							</li>
							<li className="nav-item3">
								<a href="#">
									<b>Become a Seller</b>
								</a>
							</li>
							<li className="nav-item3">
								<a
									className="signbtn active"
									id="navbarDropdown"
									data-bs-toggle="dropdown"
									aria-current="page"
									href="#"
								>
									<b>Sign in</b>
								</a>
								<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
									<li>
										<Link to="/dashboard">
											<a className="dropdown-item" href="#">
												Dashboard
											</a>
										</Link>
									</li>
								</ul>
							</li>
							<li className="nav-item3">
								<button
									className="joinbtn"
									onClick={() => {
										setOpenLoginModal(true);
									}}
								>
									<b>Join</b>
								</button>
								{openLoginModal && (
									<Login closeLoginModal={setOpenLoginModal} />
								)}
							</li>
						</ul>
					</div>
				</nav>
			</div>

			<div>
				<nav>
					<div className="nav4">
						<ul className="nav justify-content-center">
							<li className="nav-item hov-eff3">
								<Link to="/Graphics&Design">
									<a
										id="navbarDropdown"
										// data-bs-toggle="dropdown"
										aria-current="page"
										className="active header4"
									>
										Graphics & Design
									</a>
								</Link>
								<ul
									className="dropdown-menu hoverdown"
									aria-labelledby="navbarDropdown"
								>
									<li>
										<a className="dropdown-item" href="#">
											Action
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Another action
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Something else here
										</a>
									</li>
								</ul>
							</li>

							<li className="nav-item hov-eff3">
								<a
									className="active header4"
									id="navbarDropdown"
									data-bs-toggle="dropdown"
									href="#"
								>
									Digital Marketing
								</a>
								<ul
									className="dropdown-menu hoverdown"
									aria-labelledby="navbarDropdown"
								>
									<li className="dropdown-item">
										<Link to="/insta">Instagram</Link>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Another action
										</a>
									</li>
									<li>
										<hr className="dropdown-divider" />
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Something else here
										</a>
									</li>
								</ul>
							</li>
							<li className="nav-item hov-eff3">
								<a
									className="active header4"
									id="navbarDropdown"
									data-bs-toggle="dropdown"
									href="#"
								>
									Writing & Translation
								</a>
								<ul
									className="dropdown-menu hoverdown"
									aria-labelledby="navbarDropdown"
								>
									<li>
										<a className="dropdown-item" href="#">
											Action
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Another action
										</a>
									</li>
									<li>
										<hr className="dropdown-divider" />
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Something else here
										</a>
									</li>
								</ul>
							</li>
							<li className="nav-item hov-eff3">
								<a
									className="active header4"
									id="navbarDropdown"
									data-bs-toggle="dropdown"
									href="#"
								>
									Video & Animation
								</a>
								<ul
									className="dropdown-menu hoverdown"
									aria-labelledby="navbarDropdown"
								>
									<li>
										<a className="dropdown-item" href="#">
											Action
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Another action
										</a>
									</li>
									<li>
										<hr className="dropdown-divider" />
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Something else here
										</a>
									</li>
								</ul>
							</li>
							<li className="nav-item hov-eff3">
								<a
									className="active header4"
									id="navbarDropdown"
									data-bs-toggle="dropdown"
									href="#"
								>
									Music & Audio
								</a>
								<ul
									className="dropdown-menu hoverdown"
									aria-labelledby="navbarDropdown"
								>
									<li>
										<a className="dropdown-item" href="#">
											Action
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Another action
										</a>
									</li>
									<li>
										<hr className="dropdown-divider" />
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Something else here
										</a>
									</li>
								</ul>
							</li>
							<li className="nav-item hov-eff3">
								<a
									className="active header4"
									id="navbarDropdown"
									data-bs-toggle="dropdown"
									href="#"
								>
									Programming & Tech
								</a>
								<ul
									className="dropdown-menu hoverdown"
									aria-labelledby="navbarDropdown"
								>
									<li>
										<a className="dropdown-item" href="#">
											Action
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Another action
										</a>
									</li>
									<li>
										<hr className="dropdown-divider" />
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Something else here
										</a>
									</li>
								</ul>
							</li>
							<li className="nav-item hov-eff3">
								<a
									className="active header4"
									id="navbarDropdown"
									data-bs-toggle="dropdown"
									href="#"
								>
									Business
								</a>
								<ul
									className="dropdown-menu hoverdown"
									aria-labelledby="navbarDropdown"
								>
									<li>
										<a className="dropdown-item" href="#">
											Action
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Another action
										</a>
									</li>
									<li>
										<hr className="dropdown-divider" />
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Something else here
										</a>
									</li>
								</ul>
							</li>
							<li className="nav-item hov-eff3">
								<a
									className="active header4"
									id="navbarDropdown"
									data-bs-toggle="dropdown"
									href="#"
								>
									Lifestyle
								</a>
								<ul
									className="dropdown-menu hoverdown"
									aria-labelledby="navbarDropdown"
								>
									<li>
										<a className="dropdown-item" href="#">
											Action
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Another action
										</a>
									</li>
									<li>
										<hr className="dropdown-divider" />
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Something else here
										</a>
									</li>
								</ul>
							</li>
							<li className="nav-item hov-eff3">
								<a
									className="active header4"
									id="navbarDropdown"
									data-bs-toggle="dropdown"
									href="#"
								>
									Trending
								</a>
								<ul
									className="dropdown-menu hoverdown"
									aria-labelledby="navbarDropdown"
								>
									<li>
										<a className="dropdown-item" href="#">
											Action
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Another action
										</a>
									</li>
									<li>
										<hr className="dropdown-divider" />
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Something else here
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</div>
	);
}
