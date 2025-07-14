import React, { useState } from "react";
import { Link } from "react-router-dom";

// Nigerian-themed SVG illustrations (inline for performance)
const NairaIllustration = () => (
	<svg className="w-24 h-24 mx-auto" viewBox="0 0 100 100">
		<circle cx="50" cy="50" r="45" fill="#F9C80E" />
		<text
			x="50"
			y="55"
			textAnchor="middle"
			fill="#1F8A7A"
			fontSize="40"
			fontWeight="bold"
		>
			₦
		</text>
	</svg>
);

const CryptoIllustration = () => (
	<svg className="w-24 h-24 mx-auto" viewBox="0 0 100 100">
		<path d="M50 10L80 30V70L50 90L20 70V30Z" fill="#51B6A6" />
		<text x="50" y="60" textAnchor="middle" fill="white" fontSize="20">
			BTC
		</text>
	</svg>
);

const Landing = () => {
	const [amount, setAmount] = useState("");
	const [currency, setCurrency] = useState("BTC");
	const [converted, setConverted] = useState("");

	// Mock conversion rates
	const rates = {
		BTC: 50000000, // 1 BTC = ₦50,000,000
		ETH: 3000000, // 1 ETH = ₦3,000,000
		USDT: 1500, // 1 USDT = ₦1,500
	};

	const handleConvert = () => {
		if (!amount || isNaN(amount)) return;
		const result = (parseFloat(amount) / rates[currency]).toFixed(8);
		setConverted(`${result} ${currency}`);
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-[#51b6a6] to-[#1f8a7a] text-white mt-[70px]">
			{/* Hero Section with Nigerian Elements */}
			<section className="container mx-auto px-6 py-20 text-center">
				{/* <div className="flex justify-center mb-6">
					<NairaIllustration />
					<CryptoIllustration />
				</div> */}
				<h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
					Buy/Sell Crypto in Nigeria <br />
					<span className="text-[#f9c80e]">Fast & Easy</span>
				</h1>
				<p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
					Swap BTC, ETH, and USDT instantly with the lowest fees in Nigeria
				</p>
				<Link
					to="/signup"
					className="inline-block bg-[#f9c80e] hover:bg-[#ffd83d] text-gray-900 font-bold px-8 py-4 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-200"
				>
					Get Started
				</Link>
			</section>

			{/* Naira to Crypto Calculator */}
			<section className="container mx-auto px-6 py-12 bg-white text-[#000] bg-opacity-10 backdrop-blur-sm rounded-xl max-w-2xl">
				<h2 className="text-2xl font-bold mb-6 text-center text-[#f9c80e]">
					Naira to Crypto Calculator
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					<div>
						<label className="block text-sm font-medium mb-1">
							Amount in ₦
						</label>
						<input
							type="number"
							value={amount}
							onChange={(e) => setAmount(e.target.value)}
							placeholder="e.g. 50000"
							className="w-full p-3 rounded-lg bg-white bg-opacity-20 border border-[#51b6a6] border-opacity-30 text-[#505050] placeholder-gray-300"
						/>
					</div>
					<div>
						<label className="block text-sm font-medium mb-1">Currency</label>
						<select
							value={currency}
							onChange={(e) => setCurrency(e.target.value)}
							className="w-full p-3 rounded-lg bg-white bg-opacity-20 border border-[#51b6a6] border-opacity-30 text-[#505050]"
						>
							<option value="BTC">Bitcoin (BTC)</option>
							<option value="ETH">Ethereum (ETH)</option>
							<option value="USDT">USDT</option>
						</select>
					</div>
					<div className="flex items-end">
						<button
							onClick={handleConvert}
							className="w-full bg-[#51b6a6] hover:bg-[#51b6a6]/70 text-[#fff] font-bold py-3 px-4 rounded-lg transition-colors"
						>
							Convert
						</button>
					</div>
				</div>
				{converted && (
					<div className="mt-6 p-4 bg-[#1f8a7a] rounded-lg text-center">
						<p className="text-xl font-semibold text-[#fff]">
							₦{amount} = {converted}
						</p>
					</div>
				)}
			</section>

			{/* Features Grid */}
			<section className="container mx-auto px-6 py-12">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[#000]">
					{[
						{
							icon: "⚡",
							title: "Instant Trades",
							desc: "30-second swaps with Nigerian liquidity",
							nigerianTouch: "Supports all Nigerian banks",
						},
						{
							icon: "💸",
							title: "Lowest Fees",
							desc: "5x cheaper than competitors",
							nigerianTouch: "No hidden charges in Naira",
						},
						{
							icon: "🔒",
							title: "Bank-Grade Security",
							desc: "Your funds stay protected",
							nigerianTouch: "NDIC-compliant processes",
						},
					].map((feature, index) => (
						<div
							key={index}
							className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-20 hover:bg-opacity-20 transition-all"
						>
							<span className="text-3xl block mb-3">{feature.icon}</span>
							<h3 className="text-xl font-bold mb-2">{feature.title}</h3>
							<p className="mb-2 opacity-80">{feature.desc}</p>
							<p className="text-sm text-[#51b6a6]">{feature.nigerianTouch}</p>
						</div>
					))}
				</div>
			</section>

			{/* Final CTA with Nigerian Pattern */}
			<section className="container mx-auto px-6 py-16 text-center relative overflow-hidden">
				<div className="absolute inset-0 opacity-10">
					{/* Nigerian pattern dots */}
					<svg className="w-full h-full" viewBox="0 0 100 20">
						<pattern id="pattern" x="0" y="0" width="0.1" height="0.1">
							<circle cx="1" cy="1" r="0.5" fill="#f9c80e" />
						</pattern>
						<rect x="0" y="0" width="100" height="20" fill="url(#pattern)" />
					</svg>
				</div>
				<div className="relative">
					<h2 className="text-3xl font-bold mb-6">
						Ready to Trade Like a Pro?
					</h2>
					<Link
						to="/signup"
						className="inline-block bg-[#f9c80e] hover:bg-[#ffd83d] text-gray-900 font-bold px-8 py-3 rounded-full text-lg shadow-md transition-all"
					>
						Start Trading – It's Free
					</Link>
					<p className="mt-4 text-sm opacity-80">
						Trusted by 50,000+ Nigerian traders
					</p>
				</div>
			</section>
		</div>
	);
};

export default Landing;
