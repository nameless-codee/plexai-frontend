// src/components/ProductMockup.jsx
import React from "react";
import { motion } from "framer-motion";
import { FileCheck2, Layers, Search, ExternalLink } from "lucide-react";
import { floating } from "../lib/animations";
import { useLanguage } from "../context/LanguageContext";

export function ProductMockup() {
	const { t } = useLanguage();

	return (
		<div className="relative mx-auto mt-8 sm:mt-10 w-full max-w-5xl">
			{/* Floating Card: Hero Visual Data Card */}
			<motion.div
				variants={floating}
				animate="animate"
				className="hidden lg:flex flex-col gap-1.5 absolute -top-5 -left-4 z-20 bg-white dark:bg-[#181818] border border-black/10 dark:border-white/10 shadow-xl rounded-xl p-3 w-64 text-left transition-colors duration-200"
			>
				<div className="flex items-center justify-between">
					<span className="text-[10px] font-bold tracking-wider uppercase text-[#6B7280] dark:text-neutral-400">
						{t.mockup.regionTag}
					</span>
					<span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
						{t.mockup.strongBuy}
					</span>
				</div>
				<div>
					<h4 className="text-xs font-bold text-[#111111] dark:text-[#F8F8F5]">
						1195 Rue Saint-Hubert
					</h4>
					<p className="text-[11px] text-[#6B7280] dark:text-neutral-400">
						Ville-Marie · {t.mockup.triplexBadge} · $1,039,000
					</p>
				</div>
				<div className="pt-1.5 border-t border-black/5 dark:border-white/5 grid grid-cols-3 text-center">
					<div>
						<span className="text-[9px] text-[#6B7280] dark:text-neutral-400 block">
							{t.mockup.capRate}
						</span>
						<span className="text-xs font-bold text-[#111111] dark:text-[#F8F8F5]">
							4.8%
						</span>
					</div>
					<div>
						<span className="text-[9px] text-[#6B7280] dark:text-neutral-400 block">
							{t.mockup.cashFlow}
						</span>
						<span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
							+$310
						</span>
					</div>
					<div>
						<span className="text-[9px] text-[#6B7280] dark:text-neutral-400 block">
							{t.mockup.compGap}
						</span>
						<span className="text-xs font-bold text-[#635BFF]">-11%</span>
					</div>
				</div>
			</motion.div>

			{/* Floating Card - Bottom Right */}
			<motion.div
				variants={floating}
				animate="animate"
				className="hidden lg:flex items-center gap-2.5 absolute -bottom-4 -right-4 z-20 bg-white dark:bg-[#181818] border border-black/10 dark:border-white/10 shadow-xl rounded-xl px-3 py-2 transition-colors duration-200"
			>
				<div className="h-7 w-7 bg-[#635BFF]/10 text-[#635BFF] rounded-lg flex items-center justify-center">
					<FileCheck2 className="h-4 w-4" />
				</div>
				<div className="text-left">
					<p className="text-xs font-semibold text-[#111111] dark:text-[#F8F8F5]">
						{t.mockup.officialCheck}
					</p>
					<p className="text-[10px] text-[#6B7280] dark:text-neutral-400">
						{t.mockup.gpsVerified}
					</p>
				</div>
			</motion.div>

			{/* Main Mockup Container */}
			<div className="overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#181818] shadow-xl transition-colors duration-200">
				{/* Top Control Bar */}
				<div className="h-10 border-b border-black/5 dark:border-white/5 bg-[#F8F8F5]/70 dark:bg-[#111111]/70 px-4 flex items-center justify-between">
					<div className="flex items-center gap-1.5">
						<div className="h-2.5 w-2.5 rounded-full bg-black/15 dark:bg-white/20" />
						<div className="h-2.5 w-2.5 rounded-full bg-black/15 dark:bg-white/20" />
						<div className="h-2.5 w-2.5 rounded-full bg-black/15 dark:bg-white/20" />
					</div>
					<div className="flex items-center gap-2 bg-white dark:bg-[#111111] border border-black/10 dark:border-white/10 rounded-md px-2.5 py-1 text-[11px] text-[#6B7280] dark:text-neutral-400 w-60 sm:w-72">
						<Search className="h-3 w-3 text-black/40 dark:text-white/40" />
						<span>{t.mockup.searchPlaceholder}</span>
					</div>
					<span className="text-[10px] font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
						{t.mockup.liveMonitor}
					</span>
				</div>

				{/* Dashboard Content */}
				<div className="p-4 sm:p-5 grid grid-cols-1 lg:grid-cols-3 gap-4">
					<div className="lg:col-span-2 flex flex-col gap-3">
						<div className="rounded-xl border border-black/10 dark:border-white/10 p-3.5 bg-[#F8F8F5]/30 dark:bg-[#111111]/40">
							<div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/5 dark:border-white/5 pb-2.5">
								<div>
									<div className="flex items-center gap-2">
										<h3 className="text-sm font-bold text-[#111111] dark:text-[#F8F8F5]">
											1195 Rue Saint-Hubert
										</h3>
										<span className="text-[11px] bg-[#635BFF]/10 text-[#635BFF] font-semibold px-2 py-0.5 rounded">
											{t.mockup.triplexBadge}
										</span>
									</div>
									<p className="text-[11px] text-[#6B7280] dark:text-neutral-400">
										Ville-Marie, Montréal · $1,039,000
									</p>
								</div>
								<span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-[11px] font-bold rounded-md">
									Score: 82 / 100
								</span>
							</div>

							{/* Financial Snapshot */}
							<div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-2.5">
								<div className="p-2 rounded-lg bg-white dark:bg-[#181818] border border-black/5 dark:border-white/5">
									<span className="text-[10px] text-[#6B7280] dark:text-neutral-400">
										{t.mockup.capRate}
									</span>
									<p className="text-sm font-bold text-[#111111] dark:text-[#F8F8F5]">
										4.8%
									</p>
								</div>
								<div className="p-2 rounded-lg bg-white dark:bg-[#181818] border border-black/5 dark:border-white/5">
									<span className="text-[10px] text-[#6B7280] dark:text-neutral-400">
										{t.mockup.cashFlow}
									</span>
									<p className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
										+$310/mo
									</p>
								</div>
								<div className="p-2 rounded-lg bg-white dark:bg-[#181818] border border-black/5 dark:border-white/5">
									<span className="text-[10px] text-[#6B7280] dark:text-neutral-400">
										{t.mockup.compGap}
									</span>
									<p className="text-sm font-bold text-[#635BFF]">-11%</p>
								</div>
								<div className="p-2 rounded-lg bg-white dark:bg-[#181818] border border-black/5 dark:border-white/5">
									<span className="text-[10px] text-[#6B7280] dark:text-neutral-400">
										{t.mockup.welcomeTax}
									</span>
									<p className="text-sm font-bold text-[#111111] dark:text-[#F8F8F5]">
										$18,450
									</p>
								</div>
							</div>
						</div>

						{/* Cadastre & Development block */}
						<div className="rounded-xl border border-black/10 dark:border-white/10 p-3 bg-white dark:bg-[#181818] flex flex-col gap-2">
							<div className="flex items-center justify-between">
								<span className="text-xs font-bold text-[#111111] dark:text-[#F8F8F5] flex items-center gap-1.5">
									<Layers className="h-3.5 w-3.5 text-[#635BFF]" />
									{t.mockup.zoningTitle}
								</span>
								<span className="text-[11px] text-[#635BFF] flex items-center gap-1 font-medium cursor-pointer">
									{t.mockup.source} <ExternalLink className="h-2.5 w-2.5" />
								</span>
							</div>
							<div className="p-2.5 bg-[#F8F8F5] dark:bg-[#111111]/60 rounded-lg border border-black/5 dark:border-white/5 text-xs flex items-center justify-between">
								<div>
									<p className="font-semibold text-[#111111] dark:text-[#F8F8F5]">
										{t.mockup.officialLot}
									</p>
									<p className="text-[#6B7280] dark:text-neutral-400 text-[10px]">
										{t.mockup.permittedDensity}
									</p>
								</div>
								<span className="text-[10px] font-bold bg-white dark:bg-[#181818] px-2 py-0.5 rounded border border-black/10 dark:border-white/10 text-emerald-700 dark:text-emerald-400">
									{t.mockup.unitPotential}
								</span>
							</div>
						</div>
					</div>

					{/* Right Column: Scanned Feed */}
					<div className="rounded-xl border border-black/10 dark:border-white/10 p-3 bg-[#F8F8F5]/50 dark:bg-[#111111]/40 flex flex-col justify-between gap-2">
						<span className="text-[11px] font-bold text-[#111111] dark:text-[#F8F8F5] uppercase tracking-wider">
							{t.mockup.recentScans}
						</span>
						<div className="divide-y divide-black/5 dark:divide-white/5 flex flex-col">
							{[
								{
									address: "7546 Rue Centrale",
									area: "Le Plateau",
									score: "88",
									flag: "Zone T4.4 Upside",
								},
								{
									address: "3410 Boul. Gouin E",
									area: "Montréal-Nord",
									score: "74",
									flag: "-8% Under Market",
								},
								{
									address: "812 3e Avenue",
									area: "Laval",
									score: "62",
									flag: "Duplex / High Yield",
								},
							].map((item) => (
								<div
									key={item.address}
									className="py-2 flex items-center justify-between text-xs"
								>
									<div>
										<p className="font-semibold text-[#111111] dark:text-[#F8F8F5] text-[11px]">
											{item.address}
										</p>
										<p className="text-[10px] text-[#6B7280] dark:text-neutral-400">
											{item.area}
										</p>
									</div>
									<div className="text-right">
										<span className="font-bold text-[#635BFF] text-xs">
											Score {item.score}
										</span>
										<p className="text-[9px] text-emerald-600 dark:text-emerald-400">
											{item.flag}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductMockup;
