// src/components/ProblemSolution.jsx
import React from "react";
import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { fadeUp, staggerContainer } from "../lib/animations";
import { useLanguage } from "../context/LanguageContext";

export function ProblemSolution() {
	const { t } = useLanguage();

	return (
		<section id="why" className="py-24 sm:py-32 bg-[#F8F8F5]">
			<div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
				<div className="text-center max-w-2xl mx-auto mb-16">
					<span className="text-xs font-bold uppercase tracking-widest text-[#635BFF]">
						{t.problemSolution.tag}
					</span>
					<h2 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight text-[#111111]">
						{t.problemSolution.heading}
					</h2>
					<p className="mt-3 text-sm sm:text-base text-[#6B7280]">
						{t.problemSolution.subheading}
					</p>
				</div>

				<motion.div
					variants={staggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid grid-cols-1 lg:grid-cols-2 gap-8"
				>
					{/* Old Way */}
					<motion.div
						variants={fadeUp}
						className="bg-white rounded-2xl border border-black/10 p-8 sm:p-10 flex flex-col justify-between"
					>
						<div>
							<span className="text-xs font-bold uppercase tracking-widest text-[#6B7280]">
								{t.problemSolution.oldWayTitle}
							</span>
							<ul className="mt-6 flex flex-col gap-4 text-sm text-[#6B7280]">
								{t.problemSolution.oldWayItems.map((item) => (
									<li key={item} className="flex items-start gap-3">
										<div className="h-5 w-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
											<X className="h-3 w-3 stroke-[3]" />
										</div>
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>
					</motion.div>

					{/* New Way */}
					<motion.div
						variants={fadeUp}
						className="bg-white rounded-2xl border border-[#635BFF]/30 p-8 sm:p-10 shadow-sm relative overflow-hidden flex flex-col justify-between"
					>
						<div className="absolute top-0 right-0 w-32 h-32 bg-[#635BFF]/5 rounded-bl-full pointer-events-none" />
						<div>
							<span className="text-xs font-bold uppercase tracking-widest text-[#635BFF]">
								{t.problemSolution.newWayTitle}
							</span>
							<ul className="mt-6 flex flex-col gap-4 text-sm text-[#111111]">
								{t.problemSolution.newWayItems.map((item) => (
									<li key={item} className="flex items-start gap-3">
										<div className="h-5 w-5 rounded-full bg-[#635BFF]/10 text-[#635BFF] flex items-center justify-center shrink-0 mt-0.5">
											<Check className="h-3 w-3 stroke-[3]" />
										</div>
										<span className="font-medium">{item}</span>
									</li>
								))}
							</ul>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}

export default ProblemSolution;
