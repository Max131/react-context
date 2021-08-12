import React, { useContext } from "react";
import MainProvider from "../context/MainContext";

const style = {
	padding: "1rem",
	border: "2px solid crimson",
	borderRadius: "0.25rem",
};

const Son = ({ children }) => {
	const { user, print } = useContext(MainProvider);
	return (
		<div style={style}>
			<h3 onClick={print}>I'm your Son: {user.name}</h3>
			{children}
		</div>
	);
};

export default Son;
