// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { fadeUp, staggerContainer } from "../lib/animations";
import { ProductMockup } from "./ProductMockup";

export function Hero() {
	return (
		<section className="relative overflow-hidden pt-28 sm:pt-36 lg:pt-44 pb-16 sm:pb-24 lg:pb-32 bg-[#F8F8F5]">
			{/* Subtle background glow */}
			<div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#635BFF]/5 blur-[120px] rounded-full pointer-events-none" />

			<div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 relative z-10">
				<motion.div
					variants={staggerContainer}
					initial="hidden"
					animate="visible"
					className="max-w-4xl mx-auto text-center"
				>
					{/* Pre-title / Badge */}
					<motion.div variants={fadeUp} className="inline-flex">
						<span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3.5 py-1.5 text-xs font-medium text-[#111111] shadow-xs">
							<ShieldCheck className="h-3.5 w-3.5 text-[#635BFF]" />
							Quebec real-estate investment intelligence
						</span>
					</motion.div>

					{/* Headline */}
					<motion.h1
						variants={fadeUp}
						className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-[-0.04em] leading-[0.95] text-[#111111]"
					>
						Spot the undervalued Quebec property before anyone else.
					</motion.h1>

					{/* Sub-headline */}
					<motion.p
						variants={fadeUp}
						className="mt-6 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-[#6B7280] leading-relaxed"
					>
						PlexAI watches the entire Quebec market around the clock, scores
						every listing with AI, uncovers hidden development potential from
						official records, and pings you the second a real opportunity
						appears.
					</motion.p>

					{/* Action CTAs */}
					<motion.div
						variants={fadeUp}
						className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5"
					>
						<a
							href="#get-started"
							className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#635BFF] text-white text-base font-medium px-6 py-3.5 rounded-xl hover:bg-[#635BFF]/90 transition-all shadow-xs"
						>
							Start free →
						</a>
						<a
							href="#how-it-works"
							className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border border-black/10 text-[#111111] text-base font-medium px-6 py-3.5 rounded-xl hover:bg-black/5 transition-all shadow-xs"
						>
							See how it works
						</a>
					</motion.div>

					{/* Trust Badges / Micro-copy */}
					<motion.div
						variants={fadeUp}
						className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-[#6B7280]"
					>
						<span className="flex items-center gap-1.5 font-medium">
							<Check className="h-4 w-4 text-[#635BFF]" /> 2,000+ listings
							analyzed
						</span>
						<span className="flex items-center gap-1.5 font-medium">
							<Check className="h-4 w-4 text-[#635BFF]" /> Full analysis in
							seconds
						</span>
						<span className="flex items-center gap-1.5 font-medium">
							<Check className="h-4 w-4 text-[#635BFF]" /> Backed by official
							data
						</span>
					</motion.div>
				</motion.div>

				{/* Product Visual Mockup */}
				<ProductMockup />
			</div>
		</section>
	);
}

export default Hero;
