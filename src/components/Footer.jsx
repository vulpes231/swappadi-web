import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaInstagram, FaTelegram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-white pt-12 pb-8">
			<div className="container mx-auto px-6">
				{/* Main Footer Content */}
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
					{/* Brand Column */}
					<div className="md:col-span-1">
						<div className="flex items-center gap-2 mb-4">
							<img src="/splogo.png" alt="SwapPadi" className="w-8 h-8" />
							<span className="text-2xl font-bold">
								<span className="text-[#51b6a6]">Swap</span>
								<span className="text-[#f9c80e]">Padi</span>
							</span>
						</div>
						<p className="text-gray-400 mb-4">
							Nigeria's fastest crypto trading platform
						</p>
						<div className="flex gap-4">
							<a
								href="#"
								className="text-gray-400 hover:text-[#51b6a6] transition"
							>
								<FaTwitter size={20} />
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-[#51b6a6] transition"
							>
								<FaInstagram size={20} />
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-[#51b6a6] transition"
							>
								<FaTelegram size={20} />
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-[#51b6a6] transition"
							>
								<FaLinkedin size={20} />
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="text-lg font-semibold mb-4 text-[#f9c80e]">Trade</h3>
						<ul className="space-y-2">
							<li>
								<Link
									to="/buy"
									className="text-gray-400 hover:text-white transition"
								>
									Buy Crypto
								</Link>
							</li>
							<li>
								<Link
									to="/sell"
									className="text-gray-400 hover:text-white transition"
								>
									Sell Crypto
								</Link>
							</li>
							<li>
								<Link
									to="/prices"
									className="text-gray-400 hover:text-white transition"
								>
									Market Prices
								</Link>
							</li>
							<li>
								<Link
									to="/wallet"
									className="text-gray-400 hover:text-white transition"
								>
									Wallet
								</Link>
							</li>
						</ul>
					</div>

					{/* Company */}
					<div>
						<h3 className="text-lg font-semibold mb-4 text-[#f9c80e]">
							Company
						</h3>
						<ul className="space-y-2">
							<li>
								<Link
									to="/about"
									className="text-gray-400 hover:text-white transition"
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									to="/careers"
									className="text-gray-400 hover:text-white transition"
								>
									Careers
								</Link>
							</li>
							<li>
								<Link
									to="/blog"
									className="text-gray-400 hover:text-white transition"
								>
									Blog
								</Link>
							</li>
							<li>
								<Link
									to="/contact"
									className="text-gray-400 hover:text-white transition"
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>

					{/* Support */}
					<div>
						<h3 className="text-lg font-semibold mb-4 text-[#f9c800]">
							Support
						</h3>
						<ul className="space-y-2">
							<li>
								<Link
									to="/help"
									className="text-gray-400 hover:text-white transition"
								>
									Help Center
								</Link>
							</li>
							<li>
								<Link
									to="/fees"
									className="text-gray-400 hover:text-white transition"
								>
									Fees
								</Link>
							</li>
							<li>
								<Link
									to="/security"
									className="text-gray-400 hover:text-white transition"
								>
									Security
								</Link>
							</li>
							<li>
								<Link
									to="/legal"
									className="text-gray-400 hover:text-white transition"
								>
									Legal
								</Link>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
					<p className="text-gray-500 text-sm mb-4 md:mb-0">
						© {new Date().getFullYear()} SwapPadi. All rights reserved.
					</p>
					<div className="flex gap-6">
						<Link
							to="/terms"
							className="text-gray-500 hover:text-gray-300 text-sm transition"
						>
							Terms
						</Link>
						<Link
							to="/privacy"
							className="text-gray-500 hover:text-gray-300 text-sm transition"
						>
							Privacy
						</Link>
						<Link
							to="/cookies"
							className="text-gray-500 hover:text-gray-300 text-sm transition"
						>
							Cookies
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
