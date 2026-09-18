// src/components/ProblemSolution.jsx
import React from "react";
import { motion } from "framer-motion";
import { XCircle, CheckCircle2 } from "lucide-react";
import { fadeUp, staggerContainer } from "../lib/animations";

export function ProblemSolution() {
	return (
		<section className="py-24 sm:py-32 bg-[#F8F8F5]">
			<div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
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
						className="bg-white rounded-2xl border border-black/10 p-8 sm:p-10"
					>
						<span className="text-xs font-bold uppercase tracking-widest text-[#6B7280]">
							The Old Way
						</span>
						<h3 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-[#111111]">
							Fragmented & Disconnected
						</h3>
						<ul className="mt-6 flex flex-col gap-4 text-sm text-[#6B7280]">
							{[
								"Scattered tools and context switching between 12+ browser tabs",
								"Manual synchronization errors and asynchronous data delays",
								"High API latencies and brittle bespoke pipeline maintenance",
							].map((text) => (
								<li key={text} className="flex items-start gap-3">
									<XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
									<span>{text}</span>
								</li>
							))}
						</ul>
					</motion.div>

					{/* New Way */}
					<motion.div
						variants={fadeUp}
						className="bg-white rounded-2xl border border-[#635BFF]/30 p-8 sm:p-10 shadow-sm relative overflow-hidden"
					>
						<div className="absolute top-0 right-0 w-32 h-32 bg-[#635BFF]/5 rounded-bl-full pointer-events-none" />
						<span className="text-xs font-bold uppercase tracking-widest text-[#635BFF]">
							The New Way with PlexAi
						</span>
						<h3 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-[#111111]">
							One Unified Intelligent Layer
						</h3>
						<ul className="mt-6 flex flex-col gap-4 text-sm text-[#111111]">
							{[
								"Direct single-interface control with multi-agent coordination",
								"Automated sub-second context synthesis and state synchronization",
								"Self-healing workflows backed by deterministic execution traces",
							].map((text) => (
								<li key={text} className="flex items-start gap-3">
									<CheckCircle2 className="h-5 w-5 text-[#635BFF] shrink-0 mt-0.5" />
									<span className="font-medium">{text}</span>
								</li>
							))}
						</ul>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
