// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";

export function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navLinks = [
		{ label: "Product", href: "#product" },
		{ label: "Solutions", href: "#solutions" },
		{ label: "Workflow", href: "#workflow" },
		{ label: "Pricing", href: "#pricing" },
	];

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
				isScrolled
					? "bg-[#F8F8F5]/80 backdrop-blur-xl border-b border-black/10 py-3 shadow-xs"
					: "bg-transparent border-transparent py-5"
			}`}
		>
			<div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 flex items-center justify-between">
				{/* Left: Brand Logo */}
				<a
					href="#"
					className="flex items-center gap-2 font-semibold text-lg tracking-tight z-10"
				>
					<div className="h-8 w-8 rounded-lg bg-[#635BFF] flex items-center justify-center text-white">
						<Sparkles className="h-4 w-4" />
					</div>
					<span className="text-[#111111]">PlexAi</span>
				</a>

				{/* Center: True-Centered Desktop Nav Links */}
				<nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#6B7280] absolute left-1/2 -translate-x-1/2">
					{navLinks.map((link) => (
						<a
							key={link.label}
							href={link.href}
							className="hover:text-[#111111] transition-colors"
						>
							{link.label}
						</a>
					))}
				</nav>

				{/* Right: Actions */}
				<div className="hidden lg:flex items-center gap-4 z-10">
					<button className="text-sm font-medium text-[#111111] hover:text-[#635BFF] transition-colors px-3 py-2">
						Log in
					</button>
					<a
						href="#get-started"
						className="inline-flex items-center gap-2 bg-[#635BFF] text-white text-sm font-medium px-4 py-2 rounded-xl hover:bg-[#635BFF]/90 transition-all shadow-sm"
					>
						Get Started
						<ArrowRight className="h-4 w-4" />
					</a>
				</div>

				{/* Mobile Hamburger Button */}
				<button
					onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					className="lg:hidden p-2 rounded-lg text-[#111111] hover:bg-black/5"
					aria-label="Toggle Menu"
				>
					{mobileMenuOpen ? (
						<X className="h-6 w-6" />
					) : (
						<Menu className="h-6 w-6" />
					)}
				</button>
			</div>

			{/* Mobile Drawer */}
			{mobileMenuOpen && (
				<div className="lg:hidden px-5 pt-4 pb-6 bg-[#F8F8F5] border-b border-black/10 flex flex-col gap-4">
					{navLinks.map((link) => (
						<a
							key={link.label}
							href={link.href}
							onClick={() => setMobileMenuOpen(false)}
							className="text-base font-medium text-[#111111] py-1"
						>
							{link.label}
						</a>
					))}
					<div className="pt-2 border-t border-black/10 flex flex-col gap-3">
						<button className="w-full text-center text-sm font-medium py-2 rounded-lg border border-black/10">
							Log in
						</button>
						<button className="w-full bg-[#635BFF] text-white text-sm font-medium py-2.5 rounded-lg flex items-center justify-center gap-2">
							Get Started
							<ArrowRight className="h-4 w-4" />
						</button>
					</div>
				</div>
			)}
		</header>
	);
}

export default Navbar;
