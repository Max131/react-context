import React from "react";
import Father from "./components/Father";
import Son from "./components/Son";
import GrandSon from "./components/GrandSon";
import { MainProvider } from "./context/MainContext";

const App = () => {
	return (
		<>
			<h1>Hello World!</h1>
			<MainProvider>
				<Father>
					<Son>
						<GrandSon>
							<p>Lorem ipsum dolor sit amet.</p>
						</GrandSon>
					</Son>
				</Father>
			</MainProvider>
		</>
	);
};

export default App;
