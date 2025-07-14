import React from "react";
import Logo from "./Logo";
import { navItems } from "../constants";
import { MdClose, MdMenu } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleNav } from "../features/navSlice";
import Mobilemenu from "./Mobilemenu";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

const Navbar = () => {
	const dispatch = useDispatch();
	const { toggle } = useSelector((state) => state.nav);

	return (
		<header className="py-2 px-4 lg:px-6 w-full h-[80px] bg-white fixed top-0 left-0 border-b border-gray-100 shadow-sm z-50">
			<nav className="flex items-center justify-between h-full max-w-7xl mx-auto">
				<div className="flex items-center gap-12">
					<Logo />

					<ul className="hidden md:flex items-center gap-8">
						{navItems.map((menu, index) => (
							<li key={index}>
								<Link
									to={menu.path || "#"}
									className="text-gray-700 hover:text-[#51b6a6] font-medium text-[15px] transition-colors flex items-center gap-1"
								>
									{menu.name}
									{menu.subItems && (
										<svg
											className="w-4 h-4 ml-1"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M19 9l-7 7-7-7"
											/>
										</svg>
									)}
								</Link>
							</li>
						))}
					</ul>
				</div>

				{/* Auth Buttons */}
				<div className="hidden md:flex items-center gap-4">
					<Link
						to="/login"
						className="px-4 py-2 text-gray-700 hover:text-[#51b6a6] font-medium text-[15px] transition-colors flex items-center gap-2"
					>
						<FiLogIn className="w-4 h-4" />
						Sign In
					</Link>
					<Link
						to="/register"
						className="px-4 py-2 bg-[#51b6a6] hover:bg-[#51b6a6]/80 text-white font-medium rounded-lg text-[15px] transition-colors"
					>
						Get Started
					</Link>
				</div>

				{/* Mobile Menu Toggle */}
				<button
					onClick={() => dispatch(toggleNav())}
					className="md:hidden p-2 rounded-lg hover:bg-gray-50 transition-colors"
					aria-label="Toggle menu"
				>
					{!toggle ? (
						<MdMenu className="w-6 h-6 text-gray-700" />
					) : (
						<MdClose className="w-6 h-6 text-gray-700" />
					)}
				</button>
			</nav>

			{/* Mobile Menu */}
			{toggle && <Mobilemenu />}
		</header>
	);
};

export default Navbar;
