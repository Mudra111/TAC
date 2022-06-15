import React from "react";

const Progress_bar = ({ bgcolor, progress, height }) => {
	const Parentdiv = {
		height: height,
		width: "100%",
		backgroundColor: "lightgray",
		borderRadius: 40,
		marginTop: "10px",
		marginRight: "5px",
	};

	const Childdiv = {
		height: "100%",
		width: `${progress}%`,
		backgroundColor: bgcolor,
		borderRadius: 40,
		textAlign: "right",
	};

	const DivForFlex = {
		display: "flex",
		justifyContent: "space-between",
	};

	const progresstext = {
		padding: 0,
		color: "black",
		fontWeight: 500,
		fontSize: "17px",
	};

	return (
		<div style={DivForFlex}>
			<div style={Parentdiv}>
				<div style={Childdiv}></div>
			</div>
			<div>
				<div style={progresstext}>{`${progress}%`}</div>
			</div>
		</div>
	);
};

export default Progress_bar;
