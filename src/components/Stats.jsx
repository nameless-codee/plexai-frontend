// src/components/Stats.jsx
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../lib/animations";
import { useLanguage } from "../context/LanguageContext";

export function Stats() {
	const { t } = useLanguage();

	return (
		<section className="py-16 sm:py-20 border-y border-black/10 dark:border-white/10 bg-[#F8F8F5] dark:bg-[#111111] transition-colors duration-200">
			<div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
				<motion.div
					variants={staggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
				>
					{t.stats.map((m) => (
						<motion.div key={m.label} variants={fadeUp}>
							<div className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#111111] dark:text-[#F8F8F5]">
								{m.value}
							</div>
							<div className="mt-2 text-sm sm:text-base text-[#6B7280] dark:text-neutral-400 font-medium">
								{m.label}
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}

export default Stats;
