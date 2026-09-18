// src/components/BentoFeatures.jsx
import React from "react";
import { motion } from "framer-motion";
import {
	Sparkles,
	Map,
	Calculator,
	Scale,
	BellRing,
	Layers,
	CheckCircle,
} from "lucide-react";
import { fadeUp, staggerContainer } from "../lib/animations";

export function BentoFeatures() {
	const additionalFeatures = [
		"5-year cash-flow projection",
		"Live Quebec taxes & welcome tax",
		"Deal-killer overlays (flood, agricultural)",
		"Full price history per listing",
		"Risk assessment on every deal",
		"Neighbourhood context & benchmarks",
	];

	return (
		<section
			id="features"
			className="py-24 sm:py-32 bg-[#F8F8F5] border-t border-black/10"
		>
			<div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
				<div className="text-center max-w-2xl mx-auto mb-16">
					<span className="text-xs font-bold uppercase tracking-widest text-[#635BFF]">
						FEATURES
					</span>
					<h2 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight text-[#111111]">
						Everything you need to move faster than the market
					</h2>
					<p className="mt-3 text-sm sm:text-base text-[#6B7280]">
						One dashboard that replaces hours of manual research — built for
						investors who value their time.
					</p>
				</div>

				{/* 6 Primary Cards */}
				<motion.div
					variants={staggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
				>
					{/* Card 1 */}
					<motion.div
						variants={fadeUp}
						whileHover={{ y: -4 }}
						className="rounded-2xl bg-white border border-black/10 p-6 flex flex-col justify-between"
					>
						<div>
							<div className="h-10 w-10 rounded-xl bg-[#635BFF]/10 text-[#635BFF] flex items-center justify-center">
								<Sparkles className="h-5 w-5" />
							</div>
							<h3 className="mt-4 text-lg font-semibold text-[#111111]">
								AI deal score, 0–100
							</h3>
							<p className="mt-2 text-xs sm:text-sm text-[#6B7280]">
								Every listing graded on cap rate, cash flow, discount vs.
								comparable sales and risk — so you know in seconds whether it
								deserves a closer look.
							</p>
						</div>
					</motion.div>

					{/* Card 2: Development Potential (BIGGEST EDGE) */}
					<motion.div
						variants={fadeUp}
						whileHover={{ y: -4 }}
						className="rounded-2xl bg-white border border-[#635BFF]/40 p-6 flex flex-col justify-between shadow-xs relative"
					>
						<span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider text-[#635BFF] bg-[#635BFF]/10 px-2 py-0.5 rounded">
							BIGGEST EDGE
						</span>
						<div>
							<div className="h-10 w-10 rounded-xl bg-[#635BFF]/10 text-[#635BFF] flex items-center justify-center">
								<Layers className="h-5 w-5" />
							</div>
							<h3 className="mt-4 text-lg font-semibold text-[#111111]">
								Development potential
							</h3>
							<p className="mt-2 text-xs sm:text-sm text-[#6B7280]">
								See what could be built on any lot from official zoning + lot
								data — the upside most investors never check, surfaced
								automatically.
							</p>
						</div>
					</motion.div>

					{/* Card 3 */}
					<motion.div
						variants={fadeUp}
						whileHover={{ y: -4 }}
						className="rounded-2xl bg-white border border-black/10 p-6 flex flex-col justify-between"
					>
						<div>
							<div className="h-10 w-10 rounded-xl bg-[#635BFF]/10 text-[#635BFF] flex items-center justify-center">
								<Map className="h-5 w-5" />
							</div>
							<h3 className="mt-4 text-lg font-semibold text-[#111111]">
								Interactive zoning map
							</h3>
							<p className="mt-2 text-xs sm:text-sm text-[#6B7280]">
								The property pinned inside its exact zone boundary on a live
								map, with the official bylaw and source document one click away.
							</p>
						</div>
					</motion.div>

					{/* Card 4 */}
					<motion.div
						variants={fadeUp}
						whileHover={{ y: -4 }}
						className="rounded-2xl bg-white border border-black/10 p-6 flex flex-col justify-between"
					>
						<div>
							<div className="h-10 w-10 rounded-xl bg-[#635BFF]/10 text-[#635BFF] flex items-center justify-center">
								<Calculator className="h-5 w-5" />
							</div>
							<h3 className="mt-4 text-lg font-semibold text-[#111111]">
								Rebuild & profit calculator
							</h3>
							<p className="mt-2 text-xs sm:text-sm text-[#6B7280]">
								Model a teardown-and-rebuild with your own construction costs
								and rents — PlexAI computes the numbers and the net upside live.
							</p>
						</div>
					</motion.div>

					{/* Card 5 */}
					<motion.div
						variants={fadeUp}
						whileHover={{ y: -4 }}
						className="rounded-2xl bg-white border border-black/10 p-6 flex flex-col justify-between"
					>
						<div>
							<div className="h-10 w-10 rounded-xl bg-[#635BFF]/10 text-[#635BFF] flex items-center justify-center">
								<Scale className="h-5 w-5" />
							</div>
							<h3 className="mt-4 text-lg font-semibold text-[#111111]">
								Comparable-sales value gap
							</h3>
							<p className="mt-2 text-xs sm:text-sm text-[#6B7280]">
								We find nearby comparable sales and show exactly how far below
								(or above) market the asking price really is.
							</p>
						</div>
					</motion.div>

					{/* Card 6 */}
					<motion.div
						variants={fadeUp}
						whileHover={{ y: -4 }}
						className="rounded-2xl bg-white border border-black/10 p-6 flex flex-col justify-between"
					>
						<div>
							<div className="h-10 w-10 rounded-xl bg-[#635BFF]/10 text-[#635BFF] flex items-center justify-center">
								<BellRing className="h-5 w-5" />
							</div>
							<h3 className="mt-4 text-lg font-semibold text-[#111111]">
								Instant deal alerts
							</h3>
							<p className="mt-2 text-xs sm:text-sm text-[#6B7280]">
								Set your criteria once. The moment a matching property — or a
								price drop — appears, PlexAI pings you by email or WhatsApp.
							</p>
						</div>
					</motion.div>
				</motion.div>

				{/* Additional Features Bar */}
				<div className="mt-12 rounded-2xl bg-white border border-black/10 p-6 sm:p-8">
					<p className="text-xs font-bold uppercase tracking-wider text-[#6B7280] mb-4">
						Also included on every property:
					</p>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
						{additionalFeatures.map((item) => (
							<div
								key={item}
								className="flex items-center gap-2 text-xs sm:text-sm text-[#111111]"
							>
								<CheckCircle className="h-4 w-4 text-[#635BFF] shrink-0" />
								<span>{item}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default BentoFeatures;
