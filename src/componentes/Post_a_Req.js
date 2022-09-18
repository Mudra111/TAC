import React, { useState, useEffect, useRef } from "react";
import "./Post_a_Req.css";

export default function Post_a_Req() {
	const [InputValue, setInputValue] = useState();
	const [Input2Value, setInput2Value] = useState();
	const [showOptions, SetShowOptions] = useState(false);
	const [showOptions2, SetShowOptions2] = useState(false);

	const ref = useRef();
	const ref2 = useRef();

	useEffect(() => {
		const checkIfClickedOutside = (e) => {
			// If the menu is open and the clicked target is not within the menu,
			// then close the menu
			if (showOptions && ref.current && !ref.current.contains(e.target)) {
				SetShowOptions(false);
			}
		};

		document.addEventListener("mousedown", checkIfClickedOutside);

		return () => {
			// Cleanup the event listener
			document.removeEventListener("mousedown", checkIfClickedOutside);
		};
	}, [showOptions]);

	useEffect(() => {
		const checkIfClickedOutside = (e) => {
			// If the menu is open and the clicked target is not within the menu,
			// then close the menu
			if (showOptions2 && ref2.current && !ref2.current.contains(e.target)) {
				SetShowOptions2(false);
			}
		};

		document.addEventListener("mousedown", checkIfClickedOutside);

		return () => {
			// Cleanup the event listener
			document.removeEventListener("mousedown", checkIfClickedOutside);
		};
	}, [showOptions2]);

	return (
		<div>
			<div className="MainDivPostAReq">
				<div className="FstDPAR"></div>
				<div className="ScndDPAR">
					<div className="FstdinScndDPAR">
						<h3>What Service Are You Looking For?</h3>
					</div>

					<div className="ScnddinScndDPAR">
						<div className="Div1ScndInnScnd">
							<label>
								Describe the service you're looking to purchase - please be as
								detailed as possible:
							</label>
							<textarea
								maxLength="2500"
								placeholder="I am looking for..."
							></textarea>
						</div>
						<div className="DivForAttachBtn">
							<button>
								<p>
									Attach Files{" "}
									<span>
										<svg
											width="13"
											height="14"
											viewBox="0 0 13 14"
											xmlns="http://www.w3.org/2000/svg"
											fill="rgb(190, 189, 189)"
										>
											<path
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M1.23276 12.7969C0.691092 12.2865 0.326868 11.6803 0.140086 
                                                10.9785C-0.0466954 10.2767 -0.0466954 9.57943 0.140086 8.88672C0.326868
                                                 8.19401 0.691092 7.59245 1.23276 7.08203L7.53664 0.902344C7.92888 
                                                 0.519531 8.4005 0.255208 8.95151 0.109375C9.50251 -0.0364583 10.0535
                                                  -0.0364583 10.6045 0.109375C11.1555 0.255208 11.6365 0.524089 12.0474 
                                                  0.916016C12.4583 1.30794 12.7385 1.77279 12.8879 2.31055C13.0374 
                                                  2.84831 13.0374 3.38607 12.8879 3.92383C12.7385 4.46159 12.4583 4.93099
                                                   12.0474 5.33203L6.75216 10.5273C6.30388 10.9466 5.77155 11.1562 5.15517
                                                    11.1562C4.53879 11.1562 4.00647 10.9421 3.55819 10.5137C3.10991 
                                                    10.0853 2.88578 9.57031 2.88578 8.96875C2.88578 8.36719 3.10991 7.84766
                                                     3.55819 7.41016L8.06897 3.00781C8.125 2.95312 8.19971 2.92578 8.2931
                                                      2.92578C8.38649 2.92578 8.46121 2.95312 8.51724 3.00781L8.99354 
                                                      3.47266C9.06825 3.54557 9.1056 3.6276 9.1056 3.71875C9.1056 3.8099
                                                       9.06825 3.88281 8.99354 3.9375L4.51078 8.33984C4.32399 8.50391 
                                                       4.2306 8.70898 4.2306 8.95508C4.2306 9.20117 4.32399 9.41081 
                                                       4.51078 9.58398C4.69756 9.75716 4.91703 9.84375 5.16918 
                                                       9.84375C5.42134 9.84375 5.63147 9.76172 5.79957 9.59766L11.1228 
                                                       4.40234C11.4777 4.05599 11.6552 3.63216 11.6552 3.13086C11.6552 
                                                       2.62956 11.4731 2.20117 11.1088 1.8457C10.7446 1.49023 10.3057 
                                                       1.3125 9.79203 1.3125C9.27838 1.3125 8.83477 1.48568 8.46121 
                                                       1.83203L2.15733 7.98438C1.61566 8.53125 1.34483 9.18294 1.34483 
                                                       9.93945C1.34483 10.696 1.62033 11.3431 2.17134 11.8809C2.72234 
                                                       12.4186 3.38542 12.6875 4.16056 12.6875C4.9357 12.6875 5.60345 
                                                       12.4141 6.16379 11.8672L11.6272 6.50781C11.7019 6.45312 11.7859 
                                                       6.42578 11.8793 6.42578C11.9727 6.42578 12.0474 6.45312 12.1034 
                                                       6.50781L12.5797 6.97266C12.6545 7.04557 12.6918 7.1276 12.6918 
                                                       7.21875C12.6918 7.3099 12.6545 7.38281 12.5797 7.4375L7.11638 
                                                       12.7969C6.57471 13.3255 5.94899 13.681 5.23922 13.8633C4.52945 
                                                       14.0456 3.81501 14.0456 3.09591 13.8633C2.3768 13.681 1.75575 
                                                       13.3255 1.23276 12.7969Z"
											></path>
										</svg>
									</span>
								</p>
							</button>
						</div>
					</div>

					<div className="ThrddinScndDPAR">
						<div className="D1ThrdInnScndDPAR">
							<div className="D2ThrdInnScndDPAR">
								<p>Choose a category:</p>
							</div>
							<div className="D3ThrdInnScndDPAR">
								<div className="SelectMenu1ScndDPAR" ref={ref}>
									<div className="SelectLabel">
										<input
											readOnly
											placeholder="Select..."
											value={InputValue}
											onClick={() => {
												SetShowOptions(!showOptions);
											}}
										/>
									</div>
									<div
										className={`${
											showOptions ? "SelectOptions" : "SelectOptionHide"
										}`}
									>
										<label>
											<input
												type="radio"
												value="Graphics & Design"
												onClick={(e) => {
													SetShowOptions(false);
													setInputValue(e.target.value);
												}}
											/>
											<span>Graphics & Design</span>
										</label>
										<label>
											<input
												type="radio"
												value="Digital Marketing"
												onClick={(e) => {
													SetShowOptions(false);
													setInputValue(e.target.value);
												}}
											/>
											<span>Digital Marketing</span>
										</label>
										<label>
											<input
												type="radio"
												value="Writing & Translation"
												onClick={(e) => {
													SetShowOptions(false);
													setInputValue(e.target.value);
												}}
											/>
											<span>Writing & Translation</span>
										</label>
										<label>
											<input
												type="radio"
												value="Video & Animation"
												onClick={(e) => {
													SetShowOptions(false);
													setInputValue(e.target.value);
												}}
											/>
											<span>Video & Animation</span>
										</label>
										<label>
											<input
												type="radio"
												value="Music & Audio"
												onClick={(e) => {
													SetShowOptions(false);
													setInputValue(e.target.value);
												}}
											/>
											<span>Music & Audio</span>
										</label>
										<label>
											<input
												type="radio"
												value="Programming & Tech"
												onClick={(e) => {
													SetShowOptions(false);
													setInputValue(e.target.value);
												}}
											/>
											<span>Programming & Tech</span>
										</label>
										<label>
											<input
												type="radio"
												value="Data"
												onClick={(e) => {
													SetShowOptions(false);
													setInputValue(e.target.value);
												}}
											/>
											<span>Data</span>
										</label>
										<label>
											<input
												type="radio"
												value="Business"
												onClick={(e) => {
													SetShowOptions(false);
													setInputValue(e.target.value);
												}}
											/>
											<span>Business</span>
										</label>
										<label>
											<input
												type="radio"
												value="Lifestyle"
												onClick={(e) => {
													SetShowOptions(false);
													setInputValue(e.target.value);
												}}
											/>
											<span>Lifestyle</span>
										</label>
									</div>
								</div>

								<div className="SelectMenu2ScndDPAR" ref={ref2}>
									<div className="Select2Label">
										<input
											readOnly
											placeholder="Select..."
											value={Input2Value}
											onClick={() => {
												SetShowOptions2(!showOptions2);
											}}
										/>
									</div>
									<div
										className={`${
											showOptions2 ? "Select2Options" : "Select2OptionHide"
										}`}
									>
										<label>
											<input
												type="radio"
												value="Graphics & Design"
												onClick={(e) => {
													SetShowOptions2(false);
													setInput2Value(e.target.value);
												}}
											/>
											<span>Graphics & Design</span>
										</label>
										<label>
											<input
												type="radio"
												value="Digital Marketing"
												onClick={(e) => {
													SetShowOptions2(false);
													setInput2Value(e.target.value);
												}}
											/>
											<span>Digital Marketing</span>
										</label>
										<label>
											<input
												type="radio"
												value="Writing & Translation"
												onClick={(e) => {
													SetShowOptions2(false);
													setInput2Value(e.target.value);
												}}
											/>
											<span>Writing & Translation</span>
										</label>
										<label>
											<input
												type="radio"
												value="Video & Animation"
												onClick={(e) => {
													SetShowOptions2(false);
													setInput2Value(e.target.value);
												}}
											/>
											<span>Video & Animation</span>
										</label>
										<label>
											<input
												type="radio"
												value="Music & Audio"
												onClick={(e) => {
													SetShowOptions2(false);
													setInput2Value(e.target.value);
												}}
											/>
											<span>Music & Audio</span>
										</label>
										<label>
											<input
												type="radio"
												value="Programming & Tech"
												onClick={(e) => {
													SetShowOptions2(false);
													setInput2Value(e.target.value);
												}}
											/>
											<span>Programming & Tech</span>
										</label>
										<label>
											<input
												type="radio"
												value="Data"
												onClick={(e) => {
													SetShowOptions2(false);
													setInput2Value(e.target.value);
												}}
											/>
											<span>Data</span>
										</label>
										<label>
											<input
												type="radio"
												value="Business"
												onClick={(e) => {
													SetShowOptions2(false);
													setInput2Value(e.target.value);
												}}
											/>
											<span>Business</span>
										</label>
										<label>
											<input
												type="radio"
												value="Lifestyle"
												onClick={(e) => {
													SetShowOptions2(false);
													setInput2Value(e.target.value);
												}}
											/>
											<span>Lifestyle</span>
										</label>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="FrthdinScndDPAR">
						<div className="Div1FrthDin2DPAR">
							<h4>
								Once you place your order, when would you like your service
								delivered?
							</h4>
						</div>

						<div className="Div2FrthDin2DPAR">
						<div className="btn1D2FrthDin2DPAR"><button>24 Hours</button></div>
						<div className="btn2D2FrthDin2DPAR"><button>3 Days</button></div>
						<div className="btn3D2FrthDin2DPAR"><button>7 Days</button></div>
						<div className="btn4D2FrthDin2DPAR"><button>Other</button></div>
						</div>

					</div>
				</div>
			</div>
		</div>
	);
}
