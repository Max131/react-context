import React from "react";

const style = {
	padding: "1rem",
	border: "2px solid red",
	borderRadius: "0.25rem",
};

const GrandSon = ({ children }) => {
	return (
		<div style={style}>
			<h4>I'm your Grandson</h4>
			{children}
		</div>
	);
};

export default GrandSon;
