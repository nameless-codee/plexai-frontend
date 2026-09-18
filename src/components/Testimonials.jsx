// src/components/Testimonials.jsx
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { fadeUp, staggerContainer } from "../lib/animations";
import { useLanguage } from "../context/LanguageContext";

export function Testimonials() {
	const { t } = useLanguage();

	return (
		<section className="py-24 sm:py-32 bg-[#F8F8F5] dark:bg-[#111111] border-t border-black/10 dark:border-white/10 transition-colors duration-200">
			<div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
				<div className="text-center max-w-2xl mx-auto mb-16">
					<span className="text-xs font-bold uppercase tracking-widest text-[#635BFF]">
						{t.testimonials.tag}
					</span>
					<h2 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight text-[#111111] dark:text-[#F8F8F5]">
						{t.testimonials.heading}
					</h2>
				</div>

				<motion.div
					variants={staggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid grid-cols-1 md:grid-cols-3 gap-6"
				>
					{t.testimonials.items.map((item) => (
						<motion.div
							key={item.author}
							variants={fadeUp}
							whileHover={{ y: -4 }}
							className="bg-white dark:bg-[#181818] rounded-2xl border border-black/10 dark:border-white/10 p-6 sm:p-8 flex flex-col justify-between transition-colors duration-200"
						>
							<div>
								<div className="flex gap-1 text-amber-500 mb-4">
									{[...Array(5)].map((_, i) => (
										<Star key={i} className="h-4 w-4 fill-amber-500" />
									))}
								</div>
								<p className="text-xs sm:text-sm text-[#111111] dark:text-[#F8F8F5] leading-relaxed italic">
									{item.quote}
								</p>
							</div>
							<div className="mt-6 pt-4 border-t border-black/5 dark:border-white/5">
								<p className="text-xs font-bold text-[#111111] dark:text-[#F8F8F5]">
									{item.author}
								</p>
								<p className="text-[11px] text-[#6B7280] dark:text-neutral-400">
									{item.role}
								</p>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}

export default Testimonials;
