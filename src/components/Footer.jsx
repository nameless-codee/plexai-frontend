// src/components/Footer.jsx
import React from "react";
import { Building2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { navigateTo } from "../lib/navigation";

export function Footer() {
	const { t } = useLanguage();

	const handleSmoothScroll = (e, targetId) => {
		e.preventDefault();
		const targetElement = document.querySelector(targetId);
		if (targetElement) {
			const navHeight = 80;
			const elementPosition = targetElement.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.pageYOffset - navHeight;

			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth",
			});
		}
	};

	return (
		<footer className="border-t border-white/10 bg-[#111111] text-white py-16 transition-colors duration-200">
			<div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
				<div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12">
					{/* Brand Column */}
					<div className="col-span-2">
						<a
							href="/"
							onClick={(e) => {
								e.preventDefault();
								navigateTo("/");
							}}
							className="inline-flex items-center gap-2 font-semibold text-lg text-white"
						>
							<div className="h-7 w-7 rounded-lg bg-white flex items-center justify-center text-[#111111] shadow-xs">
								<Building2 className="h-3.5 w-3.5" />
							</div>
							PlexAI
						</a>
						<p className="mt-3 text-xs text-neutral-400 max-w-sm leading-relaxed">
							{t.footer.brandDesc}
						</p>
					</div>

					{/* Product */}
					<div className="flex flex-col gap-2.5">
						<span className="text-xs font-bold text-white">
							{t.footer.colProduct}
						</span>
						<a
							href="#features"
							onClick={(e) => handleSmoothScroll(e, "#features")}
							className="text-xs text-neutral-400 hover:text-white transition-colors"
						>
							{t.nav.features}
						</a>
						<a
							href="#how-it-works"
							onClick={(e) => handleSmoothScroll(e, "#how-it-works")}
							className="text-xs text-neutral-400 hover:text-white transition-colors"
						>
							{t.nav.howItWorks}
						</a>
						<a
							href="#faq"
							onClick={(e) => handleSmoothScroll(e, "#faq")}
							className="text-xs text-neutral-400 hover:text-white transition-colors"
						>
							{t.nav.faq}
						</a>
					</div>

					{/* Account */}
					<div className="flex flex-col gap-2.5">
						<span className="text-xs font-bold text-white">
							{t.footer.colAccount}
						</span>
						<button
							type="button"
							onClick={() => navigateTo("/login")}
							className="text-left text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer"
						>
							{t.nav.signIn}
						</button>
						<button
							type="button"
							onClick={() => navigateTo("/register")}
							className="text-left text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer"
						>
							{t.footer.createAccount}
						</button>
					</div>

					{/* Company */}
					<div className="flex flex-col gap-2.5">
						<span className="text-xs font-bold text-white">
							{t.footer.colCompany}
						</span>
						<a
							href="#why"
							onClick={(e) => handleSmoothScroll(e, "#why")}
							className="text-xs text-neutral-400 hover:text-white transition-colors"
						>
							{t.footer.whyPlex}
						</a>
						<a
							href="#edge"
							onClick={(e) => handleSmoothScroll(e, "#edge")}
							className="text-xs text-neutral-400 hover:text-white transition-colors"
						>
							{t.footer.theEdge}
						</a>
						<a
							href="#faq"
							onClick={(e) => handleSmoothScroll(e, "#faq")}
							className="text-xs text-neutral-400 hover:text-white transition-colors"
						>
							{t.nav.faq}
						</a>
					</div>
				</div>

				{/* Disclaimer & Copyright */}
				<div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
					<p>{t.footer.rights}</p>
					<p className="text-[11px] text-center sm:text-right">
						{t.footer.disclaimer}
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
