// src/components/ProductMockup.jsx
import React from "react";
import { motion } from "framer-motion";
import {
	LayoutDashboard,
	Zap,
	Users,
	BarChart3,
	Settings,
	Bell,
	Search,
	CheckCircle2,
	TrendingUp,
	Activity,
} from "lucide-react";
import { fadeUp, staggerContainer, floating } from "../lib/animations";

export function ProductMockup() {
	const metrics = [
		{ label: "Active Pipelines", value: "24.8K", change: "+14.2%" },
		{ label: "Synthesis Rate", value: "87.4%", change: "+4.1%" },
		{ label: "Completed Steps", value: "3,420", change: "+28.5%" },
	];

	const activities = [
		{ text: "Workflow orchestrator deployed", time: "2m ago" },
		{ text: "Vector context synchronized", time: "18m ago" },
		{ text: "Lead synthesis enrichment completed", time: "1h ago" },
	];

	return (
		<div className="relative mx-auto mt-14 sm:mt-16 lg:mt-20 w-full max-w-6xl">
			{/* Floating Card - Top Left */}
			<motion.div
				variants={floating}
				animate="animate"
				className="hidden lg:flex items-center gap-3 absolute -top-8 -left-6 z-20 bg-white border border-black/10 shadow-xl rounded-2xl p-3.5"
			>
				<div className="h-9 w-9 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center">
					<Activity className="h-5 w-5" />
				</div>
				<div>
					<p className="text-xs font-semibold text-[#111111]">
						Auto-optimization
					</p>
					<p className="text-[11px] text-[#6B7280]">Latency reduced by 42ms</p>
				</div>
			</motion.div>

			{/* Floating Card - Bottom Right */}
			<motion.div
				variants={floating}
				animate="animate"
				className="hidden lg:flex items-center gap-3 absolute -bottom-6 -right-6 z-20 bg-white border border-black/10 shadow-xl rounded-2xl p-3.5"
			>
				<div className="h-9 w-9 bg-[#635BFF]/10 text-[#635BFF] rounded-xl flex items-center justify-center">
					<TrendingUp className="h-5 w-5" />
				</div>
				<div>
					<p className="text-xs font-semibold text-[#111111]">Sync Status</p>
					<p className="text-[11px] text-[#6B7280]">Real-time edge streaming</p>
				</div>
			</motion.div>

			{/* Mockup Window Shell */}
			<div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-black/10 bg-white shadow-2xl">
				{/* Top App Header */}
				<div className="h-12 border-b border-black/5 bg-[#F8F8F5]/60 px-4 sm:px-6 flex items-center justify-between">
					<div className="flex items-center gap-2">
						<div className="h-3 w-3 rounded-full bg-black/15" />
						<div className="h-3 w-3 rounded-full bg-black/15" />
						<div className="h-3 w-3 rounded-full bg-black/15" />
					</div>
					<div className="hidden sm:flex items-center gap-2 bg-white/80 border border-black/5 rounded-lg px-3 py-1 text-xs text-[#6B7280] w-64">
						<Search className="h-3.5 w-3.5 text-black/40" />
						<span>Search workflows, traces, metrics...</span>
					</div>
					<div className="flex items-center gap-3 text-[#6B7280]">
						<Bell className="h-4 w-4" />
						<div className="h-6 w-6 rounded-full bg-black/10 text-[10px] font-bold text-black/60 flex items-center justify-center">
							PX
						</div>
					</div>
				</div>

				{/* Dashboard Body */}
				<div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] min-h-[480px]">
					{/* Sidebar */}
					<aside className="hidden lg:flex flex-col justify-between border-r border-black/5 p-4 bg-[#F8F8F5]/30">
						<nav className="flex flex-col gap-1 text-xs font-medium text-[#6B7280]">
							<div className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-black/5 text-[#111111] font-semibold">
								<LayoutDashboard className="h-4 w-4 text-[#635BFF]" />
								Overview
							</div>
							<div className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-black/5 transition-colors">
								<Zap className="h-4 w-4" />
								Workflows
							</div>
							<div className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-black/5 transition-colors">
								<Users className="h-4 w-4" />
								Contacts
							</div>
							<div className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-black/5 transition-colors">
								<BarChart3 className="h-4 w-4" />
								Analytics
							</div>
						</nav>
						<div className="flex items-center gap-2.5 px-3 py-2 text-xs text-[#6B7280] font-medium">
							<Settings className="h-4 w-4" />
							Settings
						</div>
					</aside>

					{/* Main Dashboard Screen */}
					<main className="p-5 sm:p-8 flex flex-col gap-6">
						{/* Metric Row */}
						<motion.div
							variants={staggerContainer}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							className="grid grid-cols-1 sm:grid-cols-3 gap-3"
						>
							{metrics.map((m) => (
								<motion.div
									key={m.label}
									variants={fadeUp}
									className="rounded-xl border border-black/5 bg-[#F8F8F5]/50 p-4"
								>
									<p className="text-xs text-[#6B7280] font-medium">
										{m.label}
									</p>
									<div className="mt-2 flex items-baseline justify-between">
										<span className="text-2xl font-bold tracking-tight text-[#111111]">
											{m.value}
										</span>
										<span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
											{m.change}
										</span>
									</div>
								</motion.div>
							))}
						</motion.div>

						{/* Visual Trace Chart / Node Mockup */}
						<div className="rounded-xl border border-black/5 p-4 flex flex-col gap-3 bg-white">
							<div className="flex items-center justify-between border-b border-black/5 pb-2">
								<span className="text-xs font-semibold text-[#111111]">
									Pipeline Execution Graph
								</span>
								<span className="text-[11px] text-emerald-600 flex items-center gap-1 font-medium">
									<span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
									Live trace
								</span>
							</div>
							<div className="h-32 rounded-lg bg-gradient-to-b from-[#F8F8F5]/60 to-transparent p-4 flex items-center justify-around">
								{["Ingestion", "Embedding", "Synthesis", "Delivery"].map(
									(step, idx) => (
										<div key={step} className="flex items-center gap-3">
											<div className="flex flex-col items-center gap-1.5">
												<div className="h-8 w-8 rounded-full border border-[#635BFF]/30 bg-[#635BFF]/10 text-[#635BFF] flex items-center justify-center text-xs font-bold">
													{idx + 1}
												</div>
												<span className="text-[11px] font-medium text-[#6B7280]">
													{step}
												</span>
											</div>
											{idx < 3 && (
												<div className="h-[1px] w-8 sm:w-16 bg-black/10" />
											)}
										</div>
									),
								)}
							</div>
						</div>

						{/* Recent Activity List */}
						<div className="flex flex-col gap-2">
							<span className="text-xs font-semibold text-[#111111]">
								Recent Executions
							</span>
							<div className="divide-y divide-black/5 border-t border-black/5">
								{activities.map((act) => (
									<div
										key={act.text}
										className="py-2.5 flex items-center justify-between text-xs"
									>
										<div className="flex items-center gap-2 text-[#111111]">
											<CheckCircle2 className="h-4 w-4 text-[#635BFF]" />
											<span>{act.text}</span>
										</div>
										<span className="text-[#6B7280] text-[11px]">
											{act.time}
										</span>
									</div>
								))}
							</div>
						</div>
					</main>
				</div>
			</div>
		</div>
	);
}
