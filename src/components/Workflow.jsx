// src/components/Workflow.jsx
import React from "react";
import { motion } from "framer-motion";
import { Search, Cpu, Zap } from "lucide-react";
import { fadeUp, staggerContainer } from "../lib/animations";

export function Workflow() {
	const steps = [
		{
			num: "01",
			icon: Search,
			title: "Step 1: We scan, around the clock",
			desc: "PlexAI continuously monitors the Quebec market and merges duplicate listings into one clean record.",
		},
		{
			num: "02",
			icon: Cpu,
			title: "Step 2: AI scores & checks zoning",
			desc: "Each property gets a deal score, full financials, comparable analysis, and its development potential.",
		},
		{
			num: "03",
			icon: Zap,
			title: "Step 3: You get the edge",
			desc: "Browse the ranked dashboard, or let alerts bring the best matching deals straight to your inbox.",
		},
	];

	return (
		<section
			id="how-it-works"
			className="py-24 sm:py-32 bg-[#F8F8F5] border-t border-black/10"
		>
			<div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
				<div className="text-center max-w-2xl mx-auto mb-16">
					<span className="text-xs font-bold uppercase tracking-widest text-[#635BFF]">
						HOW IT WORKS
					</span>
					<h2 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight text-[#111111]">
						From the whole market to a verdict — in seconds
					</h2>
				</div>

				<motion.div
					variants={staggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid grid-cols-1 md:grid-cols-3 gap-8"
				>
					{steps.map((s) => {
						const Icon = s.icon;
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
