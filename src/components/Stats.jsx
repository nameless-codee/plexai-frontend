// src/components/Stats.jsx
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../lib/animations";

export function Stats() {
	const stats = [
		{ value: "10x", label: "Faster Pipeline Turnaround" },
		{ value: "99.98%", label: "Trace Execution Uptime" },
		{ value: "4.2M+", label: "Tasks Automated Daily" },
		{ value: "< 80ms", label: "Edge Response Latency" },
	];

	return (
		<section className="py-20 sm:py-24 border-t border-black/10 bg-[#F8F8F5]">
			<div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
				<motion.div
					variants={staggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
				>
					{stats.map((s) => (
						<motion.div key={s.label} variants={fadeUp}>
							<div className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#111111]">
								{s.value}
							</div>
							<div className="mt-2 text-sm sm:text-base text-[#6B7280]">
								{s.label}
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
