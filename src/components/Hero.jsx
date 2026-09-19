// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { Check, ShieldCheck, ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer } from "../lib/animations";
import { ProductMockup } from "./ProductMockup";
import { useLanguage } from "../context/LanguageContext";
import { navigateTo } from "../lib/navigation";

export function Hero() {
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
		<section className="relative overflow-hidden pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-12 bg-[#F8F8F5] dark:bg-[#111111] transition-colors duration-200">
			{/* Ambient glow */}
			<div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#635BFF]/5 blur-[100px] rounded-full pointer-events-none" />

			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<motion.div
					variants={staggerContainer}
					initial="hidden"
					animate="visible"
					className="max-w-3xl mx-auto text-center"
				>
					{/* Pre-title Badge */}
					<motion.div variants={fadeUp} className="inline-flex">
						<span className="inline-flex items-center gap-1.5 rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-[#181818] px-3 py-1 text-xs font-medium text-[#111111] dark:text-[#F8F8F5] shadow-xs">
							<ShieldCheck className="h-3.5 w-3.5 text-[#635BFF]" />
							{t.hero.badge}
						</span>
					</motion.div>

					{/* Headline */}
					<motion.h1
						variants={fadeUp}
						className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.04em] leading-[1.06] text-[#111111] dark:text-[#F8F8F5]"
					>
						{t.hero.headline}
					</motion.h1>

					{/* Sub-headline */}
					<motion.p
						variants={fadeUp}
						className="mt-3.5 max-w-2xl mx-auto text-sm sm:text-base text-[#6B7280] dark:text-neutral-400 leading-relaxed"
					>
						{t.hero.subheadline}
					</motion.p>

					{/* Action CTAs */}
					<motion.div
						variants={fadeUp}
						className="mt-5 flex flex-row items-center justify-center gap-3"
					>
						<button
							type="button"
							onClick={() => navigateTo("/register")}
							className="inline-flex items-center justify-center gap-1.5 bg-[#111111] hover:bg-black dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-[#111111] text-sm font-semibold px-5 py-2.5 rounded-xl transition-all shadow-xs cursor-pointer"
						>
							{t.hero.startFree}
							<ArrowRight className="h-4 w-4" />
						</button>
						<a
							href="#how-it-works"
							onClick={(e) => handleSmoothScroll(e, "#how-it-works")}
							className="inline-flex items-center justify-center gap-1.5 bg-white dark:bg-[#181818] border border-black/10 dark:border-white/10 text-[#111111] dark:text-[#F8F8F5] text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition-all shadow-xs cursor-pointer"
						>
							{t.hero.seeHowItWorks}
						</a>
					</motion.div>

					{/* Trust Badges */}
					<motion.div
						variants={fadeUp}
						className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-xs text-[#6B7280] dark:text-neutral-400"
					>
						{t.hero.badges.map((b) => (
							<span key={b} className="flex items-center gap-1 font-medium">
								<Check className="h-3.5 w-3.5 text-[#635BFF]" /> {b}
							</span>
						))}
					</motion.div>
				</motion.div>

				{/* Product Visual Mockup */}
				<ProductMockup />
			</div>
		</section>
	);
}

export default Hero;
