import React from "react";

const style = {
	padding: "1rem",
	border: "2px solid firebrick",
	borderRadius: "0.25rem",
};

const Father = ({ children }) => {
	return (
		<div style={style}>
			<h2>I'm your father</h2>
			{children}
		</div>
	);
};

export default Father;
