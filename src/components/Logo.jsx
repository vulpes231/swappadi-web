import React from "react";
import { logo } from "../assets";
import { Link } from "react-router-dom";

const Logo = () => {
	return (
		<Link
			to="/"
			className="flex items-center gap-2 md:gap-3 hover:opacity-90 transition-opacity"
		>
			<img
				src={logo}
				alt="SwapPadi Logo"
				className="w-8 h-8 md:w-10 md:h-10 object-contain"
			/>
			<h1 className="font-semibold text-2xl md:text-3xl tracking-tight">
				<span className="text-gray-900">Swap</span>
				<span className="text-[#51b6a6]">Padi</span>
			</h1>
		</Link>
	);
};

export default Logo;
