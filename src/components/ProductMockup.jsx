// src/components/ProductMockup.jsx
import React from "react";
import { motion } from "framer-motion";
import {
	Building2,
	TrendingUp,
	MapPin,
	CheckCircle2,
	FileCheck2,
	Layers,
	Search,
	SlidersHorizontal,
	ExternalLink,
} from "lucide-react";
import { fadeUp, floating } from "../lib/animations";

export function ProductMockup() {
	return (
		<div className="relative mx-auto mt-14 sm:mt-16 lg:mt-20 w-full max-w-6xl">
			{/* Floating Card: Hero Visual Data Card (Specification Item 2) */}
			<motion.div
				variants={floating}
				animate="animate"
				className="hidden lg:flex flex-col gap-2 absolute -top-8 -left-6 z-20 bg-white border border-black/10 shadow-xl rounded-2xl p-4 w-72"
			>
				<div className="flex items-center justify-between">
					<span className="text-[10px] font-bold tracking-wider uppercase text-[#6B7280]">
						Quebec Real Estate
					</span>
					<span className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-bold bg-emerald-100 text-emerald-800">
						82 - STRONG BUY
					</span>
				</div>
				<div>
					<h4 className="text-sm font-bold text-[#111111]">
						1195 Rue Saint-Hubert
					</h4>
					<p className="text-xs text-[#6B7280]">
						Ville-Marie · Triplex · $1,039,000
					</p>
				</div>
				<div className="mt-1 pt-2 border-t border-black/5 grid grid-cols-3 text-center">
					<div>
						<span className="text-[10px] text-[#6B7280] block">Cap Rate</span>
						<span className="text-xs font-bold text-[#111111]">4.8%</span>
					</div>
					<div>
						<span className="text-[10px] text-[#6B7280] block">Cash Flow</span>
						<span className="text-xs font-bold text-emerald-600">+$310</span>
					</div>
					<div>
						<span className="text-[10px] text-[#6B7280] block">vs. Market</span>
						<span className="text-xs font-bold text-[#635BFF]">-11%</span>
					</div>
				</div>
			</motion.div>

			{/* Floating Card - Bottom Right */}
			<motion.div
				variants={floating}
				animate="animate"
				className="hidden lg:flex items-center gap-3 absolute -bottom-6 -right-6 z-20 bg-white border border-black/10 shadow-xl rounded-2xl p-3.5"
			>
				<div className="h-9 w-9 bg-[#635BFF]/10 text-[#635BFF] rounded-xl flex items-center justify-center">
					<FileCheck2 className="h-5 w-5" />
				</div>
				<div>
					<p className="text-xs font-semibold text-[#111111]">
						Official Cadastral Check
					</p>
					<p className="text-[11px] text-[#6B7280]">
						Zoning Polygon Verified by GPS
					</p>
				</div>
			</motion.div>

			{/* Main Mockup Container */}
			<div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-black/10 bg-white shadow-2xl">
				{/* Top Control Bar */}
				<div className="h-12 border-b border-black/5 bg-[#F8F8F5]/60 px-4 sm:px-6 flex items-center justify-between">
					<div className="flex items-center gap-2">
						<div className="h-3 w-3 rounded-full bg-black/15" />
						<div className="h-3 w-3 rounded-full bg-black/15" />
						<div className="h-3 w-3 rounded-full bg-black/15" />
					</div>
					<div className="flex items-center gap-2 bg-white border border-black/10 rounded-lg px-3 py-1 text-xs text-[#6B7280] w-64 sm:w-80">
						<Search className="h-3.5 w-3.5 text-black/40" />
						<span>Search Montréal, Laval, Ville-Marie, Triplex...</span>
					</div>
					<div className="flex items-center gap-2">
						<span className="text-[11px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
							Live Monitor
						</span>
					</div>
				</div>

				{/* Dashboard Content */}
				<div className="p-5 sm:p-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
					{/* Main Inspection View (Left 2 cols) */}
					<div className="lg:col-span-2 flex flex-col gap-4">
						<div className="rounded-xl border border-black/10 p-4 bg-[#F8F8F5]/30">
							<div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/5 pb-3">
								<div>
									<div className="flex items-center gap-2">
										<h3 className="text-base font-bold text-[#111111]">
											1195 Rue Saint-Hubert
										</h3>
										<span className="text-xs bg-[#635BFF]/10 text-[#635BFF] font-semibold px-2 py-0.5 rounded">
											Triplex
										</span>
									</div>
									<p className="text-xs text-[#6B7280] mt-0.5">
										Ville-Marie, Montréal · $1,039,000
									</p>
								</div>
								<span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-lg">
									Score: 82 / 100
								</span>
							</div>

							{/* Financial Snapshot */}
							<div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
								<div className="p-2.5 rounded-lg bg-white border border-black/5">
									<span className="text-[11px] text-[#6B7280]">Cap Rate</span>
									<p className="text-base font-bold text-[#111111] mt-0.5">
										4.8%
									</p>
								</div>
								<div className="p-2.5 rounded-lg bg-white border border-black/5">
									<span className="text-[11px] text-[#6B7280]">
										Net Cash Flow
									</span>
									<p className="text-base font-bold text-emerald-600 mt-0.5">
										+$310/mo
									</p>
								</div>
								<div className="p-2.5 rounded-lg bg-white border border-black/5">
									<span className="text-[11px] text-[#6B7280]">
										Comparable Gap
									</span>
									<p className="text-base font-bold text-[#635BFF] mt-0.5">
										-11% ($128k)
									</p>
								</div>
								<div className="p-2.5 rounded-lg bg-white border border-black/5">
									<span className="text-[11px] text-[#6B7280]">
										Welcome Tax Est.
									</span>
									<p className="text-base font-bold text-[#111111] mt-0.5">
										$18,450
									</p>
								</div>
							</div>
						</div>

						{/* Cadastre & Development potential block */}
						<div className="rounded-xl border border-black/10 p-4 bg-white flex flex-col gap-3">
							<div className="flex items-center justify-between">
								<span className="text-xs font-bold text-[#111111] flex items-center gap-1.5">
									<Layers className="h-4 w-4 text-[#635BFF]" />
									Cadastral Analysis & Official Municipal Zoning
								</span>
								<span className="text-[11px] text-[#635BFF] flex items-center gap-1 font-medium cursor-pointer">
									Source Document <ExternalLink className="h-3 w-3" />
								</span>
							</div>
							<div className="p-3 bg-[#F8F8F5] rounded-lg border border-black/5 text-xs text-[#111111] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
								<div>
									<p className="font-semibold">
										Official Lot Area: 3,420 sq ft
									</p>
									<p className="text-[#6B7280] text-[11px]">
										Permitted density allows up to 4 units
									</p>
								</div>
								<span className="text-[11px] font-bold bg-white px-2.5 py-1 rounded border border-black/10 text-emerald-700">
									+1 Unit Potential
								</span>
							</div>
						</div>
					</div>

					{/* Right Column: Live Feed of Quebec Scored Listings */}
					<div className="rounded-xl border border-black/10 p-4 bg-[#F8F8F5]/50 flex flex-col gap-3">
						<span className="text-xs font-bold text-[#111111] uppercase tracking-wider">
							Recent Market Scans
						</span>
						<div className="divide-y divide-black/5 flex flex-col">
							{[
								{
									address: "7546 Rue Centrale",
									area: "Le Plateau-Mont-Royal",
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
									area: "Laval (Chomedey)",
									score: "62",
									flag: "Duplex / High Yield",
								},
							].map((item) => (
								<div
									key={item.address}
									className="py-2.5 flex items-center justify-between text-xs"
								>
									<div>
										<p className="font-semibold text-[#111111]">
											{item.address}
										</p>
										<p className="text-[11px] text-[#6B7280]">{item.area}</p>
									</div>
									<div className="text-right">
										<span className="font-bold text-[#635BFF]">
											Score {item.score}
										</span>
										<p className="text-[10px] text-emerald-600">{item.flag}</p>
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
