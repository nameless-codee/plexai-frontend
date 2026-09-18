// src/components/BentoFeatures.jsx
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, BarChart3, Workflow, ShieldCheck } from "lucide-react";
import { fadeUp, staggerContainer } from "../lib/animations";

export function BentoFeatures() {
	return (
		<section id="solutions" className="py-24 sm:py-32 bg-[#F8F8F5]">
			<div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
				<div className="text-center max-w-2xl mx-auto mb-16">
					<span className="text-xs font-bold uppercase tracking-widest text-[#635BFF]">
						Architecture
					</span>
					<h2 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight text-[#111111]">
						Engineered for precision execution
					</h2>
				</div>

				<motion.div
					variants={staggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
				>
					{/* Card 1: 3-column span */}
					<motion.div
						variants={fadeUp}
						whileHover={{ y: -4 }}
						className="lg:col-span-3 rounded-2xl bg-white border border-black/10 p-6 sm:p-8 flex flex-col justify-between"
					>
						<div>
							<div className="h-10 w-10 rounded-xl bg-[#635BFF]/10 text-[#635BFF] flex items-center justify-center">
								<Sparkles className="h-5 w-5" />
							</div>
							<h3 className="mt-4 text-xl font-semibold text-[#111111]">
								AI Orchestration Engine
							</h3>
							<p className="mt-2 text-sm text-[#6B7280] max-w-lg">
								Deterministic LLM routing and parallel tool calling coordinate
								high-velocity business flows without hallucinations or manual
								validation.
							</p>
						</div>
						<div className="mt-6 rounded-xl bg-[#F8F8F5] border border-black/5 p-4 flex items-center justify-between text-xs text-[#6B7280]">
							<span>
								Latency overhead: <strong>21ms</strong>
							</span>
							<span>
								Vector hit-ratio: <strong>99.4%</strong>
							</span>
						</div>
					</motion.div>

					{/* Card 2: 1-column span */}
					<motion.div
						variants={fadeUp}
						whileHover={{ y: -4 }}
						className="lg:col-span-1 rounded-2xl bg-white border border-black/10 p-6 sm:p-8 flex flex-col justify-between"
					>
						<div>
							<div className="h-10 w-10 rounded-xl bg-[#635BFF]/10 text-[#635BFF] flex items-center justify-center">
								<BarChart3 className="h-5 w-5" />
							</div>
							<h3 className="mt-4 text-xl font-semibold text-[#111111]">
								Live Traces
							</h3>
							<p className="mt-2 text-sm text-[#6B7280]">
								Real-time telemetry and granular execution logs.
							</p>
						</div>
						<div className="mt-6 font-semibold text-2xl text-[#111111]">
							340k calls/sec
						</div>
					</motion.div>

					{/* Card 3: 1-column span */}
					<motion.div
						variants={fadeUp}
						whileHover={{ y: -4 }}
						className="lg:col-span-1 rounded-2xl bg-white border border-black/10 p-6 sm:p-8 flex flex-col justify-between"
					>
						<div>
							<div className="h-10 w-10 rounded-xl bg-[#635BFF]/10 text-[#635BFF] flex items-center justify-center">
								<ShieldCheck className="h-5 w-5" />
							</div>
							<h3 className="mt-4 text-xl font-semibold text-[#111111]">
								Zero Trust
							</h3>
							<p className="mt-2 text-sm text-[#6B7280]">
								End-to-end data isolation with automated token scrubbers.
							</p>
						</div>
						<div className="mt-6 text-xs font-semibold text-emerald-600">
							SOC2 Type II Ready
						</div>
					</motion.div>

					{/* Card 4: 3-column span */}
					<motion.div
						variants={fadeUp}
						whileHover={{ y: -4 }}
						className="lg:col-span-3 rounded-2xl bg-white border border-black/10 p-6 sm:p-8 flex flex-col justify-between"
					>
						<div>
							<div className="h-10 w-10 rounded-xl bg-[#635BFF]/10 text-[#635BFF] flex items-center justify-center">
								<Workflow className="h-5 w-5" />
							</div>
							<h3 className="mt-4 text-xl font-semibold text-[#111111]">
								Autonomous Workflows
							</h3>
							<p className="mt-2 text-sm text-[#6B7280] max-w-lg">
								Trigger workflows on inbound events, batch operations, or
								scheduled webhooks. Integrate with existing CRMs, datastores,
								and notification buses seamlessly.
							</p>
						</div>
						<div className="mt-6 flex items-center gap-3 text-xs text-[#111111] font-medium">
							<span className="px-3 py-1 bg-[#F8F8F5] rounded-md border border-black/5">
								CRMs
							</span>
							<span>→</span>
							<span className="px-3 py-1 bg-[#F8F8F5] rounded-md border border-black/5">
								PlexAi
							</span>
							<span>→</span>
							<span className="px-3 py-1 bg-[#F8F8F5] rounded-md border border-black/5">
								Datastores
							</span>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
