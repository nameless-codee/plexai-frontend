// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { Check, ShieldCheck } from "lucide-react";
import { fadeUp, staggerContainer } from "../lib/animations";
import { ProductMockup } from "./ProductMockup";
import { useLanguage } from "../context/LanguageContext";

export function Hero() {
	const { t } = useLanguage();

	return (
		<section className="relative overflow-hidden pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-12 bg-[#F8F8F5] dark:bg-[#111111] transition-colors duration-200">
			{/* Subtle blue accent glow */}
			<div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#635BFF]/5 blur-[100px] rounded-full pointer-events-none" />

			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<motion.div
					variants={staggerContainer}
					initial="hidden"
					animate="visible"
					className="max-w-3xl mx-auto text-center"
				>
					{/* Pre-title Badge (Blue Icon) */}
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

					{/* Action CTAs: Button in Black / White */}
					<motion.div
						variants={fadeUp}
						className="mt-5 flex flex-row items-center justify-center gap-3"
					>
						<a
							href="#get-started"
							className="inline-flex items-center justify-center gap-2 bg-[#111111] hover:bg-black dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-[#111111] text-sm font-semibold px-5 py-2.5 rounded-xl transition-all shadow-xs"
						>
							{t.hero.startFree}
						</a>
						<a
							href="#how-it-works"
							className="inline-flex items-center justify-center gap-2 bg-white dark:bg-[#181818] border border-black/10 dark:border-white/10 text-[#111111] dark:text-[#F8F8F5] text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition-all shadow-xs"
						>
							{t.hero.seeHowItWorks}
						</a>
					</motion.div>

					{/* Badges: Checkmarks in Blue */}
					<motion.div
						variants={fadeUp}
						className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-xs text-[#6B7280] dark:text-neutral-400"
					>
						{t.hero.badges.map((b) => (
							<span key={b} className="flex items-center gap-1 font-medium">
								<Check className="h-3.5 w-3.5 text-[#635BFF]" /> {b}
							</span>
						))}
					</motion.div>
				</motion.div>

				{/* Product Mockup (Kept in clean black & white theme) */}
				<ProductMockup />
			</div>
		</section>
	);
}

export default Hero;
