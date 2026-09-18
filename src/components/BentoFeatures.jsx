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
import { useLanguage } from "../context/LanguageContext";

export function BentoFeatures() {
	const { t } = useLanguage();
	const icons = [Sparkles, Layers, Map, Calculator, Scale, BellRing];

	return (
		<section
			id="features"
			className="py-24 sm:py-32 bg-[#F8F8F5] dark:bg-[#111111] border-t border-black/10 dark:border-white/10 transition-colors duration-200"
		>
			<div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
				<div className="text-center max-w-2xl mx-auto mb-16">
					<span className="text-xs font-bold uppercase tracking-widest text-[#635BFF]">
						{t.features.tag}
					</span>
					<h2 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight text-[#111111] dark:text-[#F8F8F5]">
						{t.features.heading}
					</h2>
					<p className="mt-3 text-sm sm:text-base text-[#6B7280] dark:text-neutral-400">
						{t.features.subheading}
					</p>
				</div>

				{/* Feature Cards Grid */}
				<motion.div
					variants={staggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
				>
					{t.features.items.map((item, idx) => {
						const Icon = icons[idx];
						const isEdge = idx === 1;
						return (
							<motion.div
								key={item.title}
								variants={fadeUp}
								whileHover={{ y: -4 }}
								className={`rounded-2xl bg-white dark:bg-[#181818] border p-6 flex flex-col justify-between transition-colors duration-200 ${
									isEdge
										? "border-[#635BFF]/40 shadow-xs relative"
										: "border-black/10 dark:border-white/10"
								}`}
							>
								{isEdge && (
									<span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider text-[#635BFF] bg-[#635BFF]/10 px-2 py-0.5 rounded">
										{t.features.biggestEdgeBadge}
									</span>
								)}
								<div>
									<div className="h-10 w-10 rounded-xl bg-[#635BFF]/10 text-[#635BFF] flex items-center justify-center">
										<Icon className="h-5 w-5" />
									</div>
									<h3 className="mt-4 text-lg font-semibold text-[#111111] dark:text-[#F8F8F5]">
										{item.title}
									</h3>
									<p className="mt-2 text-xs sm:text-sm text-[#6B7280] dark:text-neutral-400">
										{item.desc}
									</p>
								</div>
							</motion.div>
						);
					})}
				</motion.div>

				{/* Additional Features Bar */}
				<div className="mt-12 rounded-2xl bg-white dark:bg-[#181818] border border-black/10 dark:border-white/10 p-6 sm:p-8 transition-colors duration-200">
					<p className="text-xs font-bold uppercase tracking-wider text-[#6B7280] dark:text-neutral-400 mb-4">
						{t.features.alsoIncludedTitle}
					</p>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
						{t.features.additional.map((item) => (
							<div
								key={item}
								className="flex items-center gap-2 text-xs sm:text-sm text-[#111111] dark:text-[#F8F8F5]"
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
