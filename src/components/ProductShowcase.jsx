// src/components/ProductShowcase.jsx
import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { fadeUp } from "../lib/animations";
import { useLanguage } from "../context/LanguageContext";

export function ProductShowcase() {
	const { t } = useLanguage();

	return (
		<section
			id="edge"
			className="py-24 sm:py-32 bg-[#F8F8F5] dark:bg-[#111111] border-t border-black/10 dark:border-white/10 transition-colors duration-200"
		>
			<div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					<motion.div
						variants={fadeUp}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
					>
						<span className="text-xs font-bold uppercase tracking-widest text-[#635BFF]">
							{t.showcase.tag}
						</span>
						<h2 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight text-[#111111] dark:text-[#F8F8F5]">
							{t.showcase.heading}
						</h2>
						<p className="mt-4 text-base text-[#6B7280] dark:text-neutral-400 leading-relaxed">
							{t.showcase.body}
						</p>

						<ul className="mt-6 flex flex-col gap-3 text-sm text-[#111111] dark:text-[#F8F8F5]">
							{t.showcase.bullets.map((b) => (
								<li key={b} className="flex items-start gap-2.5">
									<Check className="h-4 w-4 text-[#635BFF] shrink-0 mt-0.5" />
									<span>{b}</span>
								</li>
							))}
						</ul>

						<p className="mt-6 text-xs text-[#6B7280] dark:text-neutral-400 font-medium">
							{t.showcase.availability}
						</p>
					</motion.div>

					{/* Right Card */}
					<motion.div
						variants={fadeUp}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#181818] p-6 sm:p-8 shadow-xl transition-colors duration-200"
					>
						<div className="flex items-center justify-between border-b border-black/5 dark:border-white/5 pb-4">
							<div>
								<span className="text-xs font-bold text-[#635BFF]">
									7546 Rue Centrale
								</span>
								<p className="text-xs text-[#6B7280] dark:text-neutral-400 mt-0.5">
									Le Plateau-Mont-Royal ·{" "}
									<span className="font-semibold text-[#111111] dark:text-[#F8F8F5]">
										Zone T4.4 (Verified)
									</span>
								</p>
							</div>
							<span className="text-xs font-semibold px-2.5 py-1 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 rounded border border-emerald-200 dark:border-emerald-800">
								{t.showcase.polygonMatched}
							</span>
						</div>

						<div className="grid grid-cols-2 gap-4 my-6">
							<div className="rounded-xl border border-black/5 dark:border-white/5 bg-[#F8F8F5] dark:bg-[#111111]/60 p-4 text-center">
								<span className="text-xs text-[#6B7280] dark:text-neutral-400">
									{t.showcase.builtToday}
								</span>
								<div className="text-3xl font-bold text-[#111111] dark:text-[#F8F8F5] mt-1">
									1
								</div>
								<span className="text-[11px] text-[#6B7280] dark:text-neutral-400">
									{t.showcase.singleFamily}
								</span>
							</div>
							<div className="rounded-xl border border-[#635BFF]/30 bg-[#635BFF]/5 dark:bg-[#635BFF]/10 p-4 text-center">
								<span className="text-xs text-[#635BFF] font-semibold">
									{t.showcase.zoningPotential}
								</span>
								<div className="text-3xl font-bold text-[#635BFF] mt-1">~4</div>
								<span className="text-[11px] text-[#635BFF]">
									{t.showcase.permittedUnits}
								</span>
							</div>
						</div>

						<div className="text-[11px] text-[#6B7280] dark:text-neutral-400 italic border-t border-black/5 dark:border-white/5 pt-3">
							{t.showcase.disclaimer}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

export default ProductShowcase;
