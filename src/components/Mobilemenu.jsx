import React from "react";
import { navItems } from "../constants";
import { Link } from "react-router-dom";
import { FiChevronRight, FiLogIn, FiUserPlus } from "react-icons/fi";

const Mobilemenu = () => {
	return (
		<div className="fixed top-[80px] inset-x-0 bottom-0 bg-white z-40 shadow-lg overflow-y-auto transition-all duration-300 ease-in-out">
			{/* Menu Items */}
			<div className="flex flex-col divide-y divide-gray-100">
				{navItems.map((menu, index) => (
					<Link
						key={index}
						to={menu.path || "#"}
						className="px-6 py-4 text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-between"
					>
						<span className="font-medium">{menu.name}</span>
						{menu.subItems && <FiChevronRight className="text-gray-400" />}
					</Link>
				))}
			</div>

			{/* Auth Buttons */}
			<div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 flex gap-3">
				<Link
					to="/login"
					className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-gray-200 rounded-lg text-gray-700 font-medium"
				>
					<FiLogIn className="w-5 h-5" />
					Sign In
				</Link>
				<Link
					to="/register"
					className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#51b6a6] hover:bg-[#51b6a6]/70 text-white rounded-lg font-medium transition-colors"
				>
					<FiUserPlus className="w-5 h-5" />
					Sign Up
				</Link>
			</div>
		</div>
	);
};

export default Mobilemenu;
