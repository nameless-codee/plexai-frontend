// src/components/Workflow.jsx
import React from "react";
import { motion } from "framer-motion";
import { Search, Cpu, Zap } from "lucide-react";
import { fadeUp, staggerContainer } from "../lib/animations";
import { useLanguage } from "../context/LanguageContext";

export function Workflow() {
	const { t } = useLanguage();
	const icons = [Search, Cpu, Zap];

	return (
		<section
			id="how-it-works"
			className="py-24 sm:py-32 bg-[#F8F8F5] border-t border-black/10"
		>
			<div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
				<div className="text-center max-w-2xl mx-auto mb-16">
					<span className="text-xs font-bold uppercase tracking-widest text-[#635BFF]">
						{t.workflow.tag}
					</span>
					<h2 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight text-[#111111]">
						{t.workflow.heading}
					</h2>
				</div>

				<motion.div
					variants={staggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid grid-cols-1 md:grid-cols-3 gap-8"
				>
					{t.workflow.steps.map((s, idx) => {
						const Icon = icons[idx];
						return (
							<motion.div
								key={s.num}
								variants={fadeUp}
								className="bg-white rounded-2xl border border-black/10 p-8 flex flex-col justify-between"
							>
								<div>
									<div className="flex items-center justify-between">
										<span className="text-xs font-bold text-[#635BFF]">
											{s.num}
										</span>
										<div className="h-8 w-8 rounded-lg bg-black/5 flex items-center justify-center text-[#111111]">
											<Icon className="h-4 w-4" />
										</div>
									</div>
									<h3 className="mt-6 text-lg font-semibold text-[#111111]">
										{s.title}
									</h3>
									<p className="mt-2 text-xs sm:text-sm text-[#6B7280] leading-relaxed">
										{s.desc}
									</p>
								</div>
							</motion.div>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
}

export default Workflow;
