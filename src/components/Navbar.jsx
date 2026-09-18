// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ArrowRight, Building2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const { lang, setLang, t } = useLanguage();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navLinks = [
		{ label: t.nav.features, href: "#features" },
		{ label: t.nav.howItWorks, href: "#how-it-works" },
		{ label: t.nav.faq, href: "#faq" },
	];

	// Smooth scroll with fixed header offset
	const handleScrollTo = (e, href) => {
		if (href.startsWith("#")) {
			e.preventDefault();
			const targetElement = document.querySelector(href);
			if (targetElement) {
				const navHeight = 80;
				const elementPosition = targetElement.getBoundingClientRect().top;
				const offsetPosition = elementPosition + window.pageYOffset - navHeight;

				window.scrollTo({
					top: offsetPosition,
					behavior: "smooth",
				});
			}
			setMobileMenuOpen(false);
		}
	};

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
					onClick={(e) => {
						e.preventDefault();
						window.scrollTo({ top: 0, behavior: "smooth" });
					}}
					className="flex items-center gap-2.5 z-10"
				>
					<div className="h-8 w-8 rounded-lg bg-[#635BFF] flex items-center justify-center text-white shadow-xs">
						<Building2 className="h-4 w-4" />
					</div>
					<span className="font-semibold text-lg tracking-tight text-[#111111] leading-none">
						PlexAI
					</span>
				</a>

				{/* Center: True-Centered Desktop Links */}
				<nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#6B7280] absolute left-1/2 -translate-x-1/2">
					{navLinks.map((link) => (
						<a
							key={link.label}
							href={link.href}
							onClick={(e) => handleScrollTo(e, link.href)}
							className="hover:text-[#111111] transition-colors cursor-pointer"
						>
							{link.label}
						</a>
					))}
				</nav>

				{/* Right: Language Switcher & Action Buttons */}
				<div className="hidden lg:flex items-center gap-4 z-10">
					{/* Smooth animated sliding pill for EN / FR */}
					<div className="flex items-center text-xs font-semibold text-[#6B7280] border border-black/10 rounded-lg p-0.5 bg-white/60 relative">
						{["EN", "FR"].map((option) => (
							<button
								key={option}
								onClick={() => setLang(option)}
								className={`relative px-2.5 py-0.5 rounded transition-colors duration-150 z-10 ${
									lang === option ? "text-[#111111]" : "hover:text-[#111111]"
								}`}
							>
								{lang === option && (
									<motion.div
										layoutId="activeLangIndicator"
										className="absolute inset-0 bg-black/10 rounded"
										transition={{ type: "spring", stiffness: 450, damping: 30 }}
									/>
								)}
								<span className="relative z-10">{option}</span>
							</button>
						))}
					</div>

					<a
						href="#signin"
						className="text-sm font-medium text-[#111111] hover:text-[#635BFF] transition-colors px-2"
					>
						{t.nav.signIn}
					</a>
					<a
						href="#get-started"
						className="inline-flex items-center gap-2 bg-[#635BFF] text-white text-sm font-medium px-4 py-2 rounded-xl hover:bg-[#635BFF]/90 transition-all shadow-xs"
					>
						{t.nav.getStarted}
						<ArrowRight className="h-4 w-4" />
					</a>
				</div>

				{/* Mobile Hamburger */}
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
							onClick={(e) => handleScrollTo(e, link.href)}
							className="text-base font-medium text-[#111111] py-1 cursor-pointer"
						>
							{link.label}
						</a>
					))}

					{/* Mobile Language Switcher */}
					<div className="pt-2 border-t border-black/10 flex items-center justify-between">
						<span className="text-xs text-[#6B7280]">Langue / Language</span>
						<div className="flex items-center text-xs font-semibold text-[#6B7280] border border-black/10 rounded-lg p-0.5 bg-white/60 relative">
							{["EN", "FR"].map((option) => (
								<button
									key={option}
									onClick={() => setLang(option)}
									className={`relative px-3 py-1 rounded transition-colors duration-150 ${
										lang === option ? "text-[#111111]" : "hover:text-[#111111]"
									}`}
								>
									{lang === option && (
										<motion.div
											layoutId="activeLangIndicatorMobile"
											className="absolute inset-0 bg-black/10 rounded"
											transition={{
												type: "spring",
												stiffness: 450,
												damping: 30,
											}}
										/>
									)}
									<span className="relative z-10">{option}</span>
								</button>
							))}
						</div>
					</div>

					<div className="pt-2 border-t border-black/10 flex flex-col gap-3">
						<a
							href="#signin"
							className="w-full text-center text-sm font-medium py-2 rounded-lg border border-black/10"
						>
							{t.nav.signIn}
						</a>
						<a
							href="#get-started"
							className="w-full bg-[#635BFF] text-white text-sm font-medium py-2.5 rounded-lg flex items-center justify-center gap-2"
						>
							{t.nav.getStarted}
							<ArrowRight className="h-4 w-4" />
						</a>
					</div>
				</div>
			)}
		</header>
	);
}

export default Navbar;
