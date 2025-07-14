import React from "react";
import { Navbar } from "./components";
import { Route, Routes } from "react-router-dom";
import { Landing } from "./pages";
import Footer from "./components/Footer";

const App = () => {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Landing />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
