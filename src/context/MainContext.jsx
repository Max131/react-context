import React, { createContext } from "react";

const MainContext = createContext();

const MainProvider = ({ children }) => {
	const user = {
		id: 1313,
		name: "John",
	};

	const print = () => console.log("Hello");

	const data = { user, print };

	return <MainContext.Provider value={data}>{children}</MainContext.Provider>;
};

export { MainProvider };
export default MainContext;
