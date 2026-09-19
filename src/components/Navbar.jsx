// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Building2, Sun, Moon } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { navigateTo } from "../lib/navigation";

export function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const { lang, setLang, t } = useLanguage();
	const { theme, toggleTheme } = useTheme();

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
					? "bg-[#F8F8F5]/80 dark:bg-[#111111]/85 backdrop-blur-xl border-b border-black/10 dark:border-white/10 py-3 shadow-xs"
					: "bg-transparent border-transparent py-5"
			}`}
		>
			<div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 flex items-center justify-between">
				{/* Left: Brand Logo */}
				<a
					href="/"
					onClick={(e) => {
						e.preventDefault();
						navigateTo("/");
					}}
					className="flex items-center gap-2.5 z-10"
				>
					<div className="h-8 w-8 rounded-lg bg-[#111111] dark:bg-white flex items-center justify-center text-white dark:text-[#111111] shadow-xs">
						<Building2 className="h-4 w-4" />
					</div>
					<span className="font-semibold text-lg tracking-tight text-[#111111] dark:text-[#F8F8F5] leading-none">
						PlexAI
					</span>
				</a>

				{/* Center: Desktop Navigation */}
				<nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#6B7280] dark:text-neutral-400 absolute left-1/2 -translate-x-1/2">
					{navLinks.map((link) => (
						<a
							key={link.label}
							href={link.href}
							onClick={(e) => handleScrollTo(e, link.href)}
							className="hover:text-[#635BFF] dark:hover:text-[#635BFF] transition-colors cursor-pointer"
						>
							{link.label}
						</a>
					))}
				</nav>

				{/* Right: Desktop Controls */}
				<div className="hidden lg:flex items-center gap-3 z-10">
					{/* Language Toggle */}
					<div
						role="group"
						aria-label="Language selection"
						className="relative flex items-center h-8 bg-white/70 dark:bg-[#181818] border border-black/10 dark:border-white/10 rounded-full p-0.5 shadow-2xs select-none"
					>
						<div
							className={`absolute top-0.5 bottom-0.5 left-0.5 w-[34px] rounded-full bg-black/10 dark:bg-white/15 transition-transform duration-200 ease-out will-change-transform ${
								lang === "FR" ? "translate-x-[34px]" : "translate-x-0"
							}`}
						/>
						<button
							type="button"
							onClick={() => setLang("EN")}
							className={`relative z-10 w-[34px] h-full flex items-center justify-center text-xs font-semibold rounded-full transition-colors duration-150 ${
								lang === "EN"
									? "text-[#111111] dark:text-[#F8F8F5]"
									: "text-[#6B7280] dark:text-neutral-400 hover:text-[#111111] dark:hover:text-[#F8F8F5]"
							}`}
						>
							EN
						</button>
						<button
							type="button"
							onClick={() => setLang("FR")}
							className={`relative z-10 w-[34px] h-full flex items-center justify-center text-xs font-semibold rounded-full transition-colors duration-150 ${
								lang === "FR"
									? "text-[#111111] dark:text-[#F8F8F5]"
									: "text-[#6B7280] dark:text-neutral-400 hover:text-[#111111] dark:hover:text-[#F8F8F5]"
							}`}
						>
							FR
						</button>
					</div>

					{/* Theme Toggle */}
					<button
						type="button"
						onClick={toggleTheme}
						aria-label="Toggle theme"
						className="h-8 w-8 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-[#181818] flex items-center justify-center text-[#111111] dark:text-[#F8F8F5] hover:bg-black/5 dark:hover:bg-white/10 transition-colors shadow-2xs shrink-0"
					>
						{theme === "dark" ? (
							<Sun className="h-4 w-4 text-amber-400" />
						) : (
							<Moon className="h-4 w-4 text-neutral-600" />
						)}
					</button>

					{/* Sign in Button -> routes to /login */}
					<button
						type="button"
						onClick={() => navigateTo("/login")}
						className="text-sm font-medium text-[#111111] dark:text-[#F8F8F5] hover:text-[#635BFF] transition-colors px-1 cursor-pointer"
					>
						{t.nav.signIn}
					</button>

					{/* Get started Button -> routes to /register */}
					<button
						type="button"
						onClick={() => navigateTo("/register")}
						className="inline-flex items-center gap-2 bg-[#111111] hover:bg-black dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-[#111111] text-sm font-medium px-4 py-2 rounded-xl transition-all shadow-xs cursor-pointer"
					>
						{t.nav.getStarted}
						<ArrowRight className="h-4 w-4" />
					</button>
				</div>

				{/* Mobile Hamburger */}
				<button
					onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					className="lg:hidden p-2 rounded-lg text-[#111111] dark:text-[#F8F8F5] hover:bg-black/5 dark:hover:bg-white/10"
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
				<div className="lg:hidden px-5 pt-4 pb-6 bg-[#F8F8F5] dark:bg-[#111111] border-b border-black/10 dark:border-white/10 flex flex-col gap-4">
					{navLinks.map((link) => (
						<a
							key={link.label}
							href={link.href}
							onClick={(e) => handleScrollTo(e, link.href)}
							className="text-base font-medium text-[#111111] dark:text-[#F8F8F5] py-1 cursor-pointer hover:text-[#635BFF]"
						>
							{link.label}
						</a>
					))}

					<div className="pt-2 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
						<span className="text-xs text-[#6B7280] dark:text-neutral-400">
							Theme & Lang
						</span>
						<div className="flex items-center gap-2">
							<div className="relative flex items-center h-8 bg-white/70 dark:bg-[#181818] border border-black/10 dark:border-white/10 rounded-full p-0.5 select-none">
								<div
									className={`absolute top-0.5 bottom-0.5 left-0.5 w-[36px] rounded-full bg-black/10 dark:bg-white/15 transition-transform duration-200 ease-out will-change-transform ${
										lang === "FR" ? "translate-x-[36px]" : "translate-x-0"
									}`}
								/>
								<button
									type="button"
									onClick={() => setLang("EN")}
									className={`relative z-10 w-[36px] h-full flex items-center justify-center text-xs font-semibold rounded-full transition-colors duration-150 ${
										lang === "EN"
											? "text-[#111111] dark:text-[#F8F8F5]"
											: "text-[#6B7280] dark:text-neutral-400"
									}`}
								>
									EN
								</button>
								<button
									type="button"
									onClick={() => setLang("FR")}
									className={`relative z-10 w-[36px] h-full flex items-center justify-center text-xs font-semibold rounded-full transition-colors duration-150 ${
										lang === "FR"
											? "text-[#111111] dark:text-[#F8F8F5]"
											: "text-[#6B7280] dark:text-neutral-400"
									}`}
								>
									FR
								</button>
							</div>

							<button
								type="button"
								onClick={toggleTheme}
								aria-label="Toggle theme"
								className="h-8 w-8 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-[#181818] flex items-center justify-center text-[#111111] dark:text-[#F8F8F5] shrink-0"
							>
								{theme === "dark" ? (
									<Sun className="h-4 w-4 text-amber-400" />
								) : (
									<Moon className="h-4 w-4 text-neutral-600" />
								)}
							</button>
						</div>
					</div>

					<div className="pt-2 border-t border-black/10 dark:border-white/10 flex flex-col gap-3">
						<button
							type="button"
							onClick={() => {
								setMobileMenuOpen(false);
								navigateTo("/login");
							}}
							className="w-full text-center text-sm font-medium py-2 rounded-lg border border-black/10 dark:border-white/10 text-[#111111] dark:text-[#F8F8F5] cursor-pointer"
						>
							{t.nav.signIn}
						</button>
						<button
							type="button"
							onClick={() => {
								setMobileMenuOpen(false);
								navigateTo("/register");
							}}
							className="w-full bg-[#111111] dark:bg-white text-white dark:text-[#111111] text-sm font-medium py-2.5 rounded-lg flex items-center justify-center gap-2 cursor-pointer"
						>
							{t.nav.getStarted}
							<ArrowRight className="h-4 w-4" />
						</button>
					</div>
				</div>
			)}
		</header>
	);
}

export default Navbar;
