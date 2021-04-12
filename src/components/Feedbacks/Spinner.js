import React from "react";
import "./Spinner.css";

const Spinner = ({ display = true }) => {
	if (display) {
		return (
			<div className="spinner">
				<div className="rect1"></div>
				<div className="rect2"></div>
				<div className="rect3"></div>
				<div className="rect4"></div>
				<div className="rect5"></div>
			</div>
		);
	}
	return <></>;
};

export default Spinner;
