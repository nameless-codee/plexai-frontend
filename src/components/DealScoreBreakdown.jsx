// src/components/DealScoreBreakdown.jsx
import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../lib/animations";

export function DealScoreBreakdown() {
	const tiers = [
		{
			label: "Skip",
			range: "0–39",
			color: "text-red-600 bg-red-50 border-red-200",
		},
		{
			label: "Fair",
			range: "40–59",
			color: "text-amber-700 bg-amber-50 border-amber-200",
		},
		{
			label: "Worth checking",
			range: "60–79",
			color: "text-blue-700 bg-blue-50 border-blue-200",
		},
		{
			label: "Strong buy",
			range: "80–100",
			color: "text-emerald-700 bg-emerald-50 border-emerald-200",
		},
	];

	return (
		<section className="py-20 sm:py-28 bg-[#F8F8F5]">
			<div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
				<motion.div
					variants={fadeUp}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="rounded-3xl bg-white border border-black/10 p-8 sm:p-12"
				>
					<div className="max-w-2xl">
						<span className="text-xs font-bold uppercase tracking-widest text-[#635BFF]">
							THE SCORE
						</span>
						<h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-[#111111]">
							One number tells you if it's worth your time
						</h2>
						<p className="mt-3 text-sm sm:text-base text-[#6B7280]">
							Every property gets a 0–100 deal score that blends cash flow, cap
							rate, discount to market and risk. Sort your whole market by it
							and the best opportunities float to the top instantly.
						</p>
					</div>

					<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
						{tiers.map((t) => (
							<div
								key={t.label}
								className={`rounded-xl border p-4 text-center ${t.color}`}
							>
								<span className="text-2xl font-bold block">{t.range}</span>
								<span className="text-xs font-semibold uppercase tracking-wider mt-1 block">
									{t.label}
								</span>
							</div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}

export default DealScoreBreakdown;
