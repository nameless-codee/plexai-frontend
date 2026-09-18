// src/components/DealScoreBreakdown.jsx
import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../lib/animations";
import { useLanguage } from "../context/LanguageContext";

export function DealScoreBreakdown() {
	const { t } = useLanguage();
	const colors = [
		"text-red-600 bg-red-50 border-red-200",
		"text-amber-700 bg-amber-50 border-amber-200",
		"text-blue-700 bg-blue-50 border-blue-200",
		"text-emerald-700 bg-emerald-50 border-emerald-200",
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
							{t.dealScore.tag}
						</span>
						<h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-[#111111]">
							{t.dealScore.heading}
						</h2>
						<p className="mt-3 text-sm sm:text-base text-[#6B7280]">
							{t.dealScore.body}
						</p>
					</div>

					<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
						{t.dealScore.tiers.map((tier, idx) => (
							<div
								key={tier.label}
								className={`rounded-xl border p-4 text-center ${colors[idx]}`}
							>
								<span className="text-2xl font-bold block">{tier.range}</span>
								<span className="text-xs font-semibold uppercase tracking-wider mt-1 block">
									{tier.label}
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
