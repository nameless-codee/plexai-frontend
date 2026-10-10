// src/components/Pricing.jsx
import React from "react";
import { Check, ArrowRight } from "lucide-react";

export function Pricing() {
	const plans = [
		{
			name: "Starter",
			desc: "For small teams validating automated operations.",
			price: "$29",
			features: [
				"Up to 10,000 runs/mo",
				"3 active pipelines",
				"Community support",
			],
			featured: false,
		},
		{
			name: "Pro",
			desc: "For growing teams that demand high-speed synthesis.",
			price: "$89",
			features: [
				"Up to 250,000 runs/mo",
				"Unlimited pipelines",
				"Sub-100ms execution SLA",
				"Priority support",
			],
			featured: true,
		},
		{
			name: "Enterprise",
			desc: "Custom governance and dedicated cluster infrastructure.",
			price: "Custom",
			features: [
				"Unlimited runs",
				"Dedicated VPC hosting",
				"Custom SLAs",
				"Dedicated engineer",
			],
			featured: false,
		},
	];

	return (
		<section
			id="pricing"
			className="py-24 sm:py-32 bg-[#F8F8F5] border-t border-black/10"
		>
			<div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
				<div className="text-center max-w-2xl mx-auto mb-16">
					<span className="text-xs font-bold uppercase tracking-widest text-[#635BFF]">
						Pricing Plans
					</span>
					<h2 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight text-[#111111]">
						Predictable and transparent
					</h2>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
					{plans.map((p) => (
						<div
							key={p.name}
							className={`rounded-2xl p-8 bg-white flex flex-col justify-between border transition-all ${
								p.featured
									? "border-[#635BFF] ring-2 ring-[#635BFF]/10 shadow-lg"
									: "border-black/10"
							}`}
						>
							<div>
								<div className="flex items-center justify-between">
									<h3 className="text-lg font-semibold text-[#111111]">
										{p.name}
									</h3>
									{p.featured && (
										<span className="text-[11px] font-bold uppercase tracking-wider text-[#635BFF] bg-[#635BFF]/10 px-2.5 py-0.5 rounded-full">
											Most Popular
										</span>
									)}
								</div>
								<p className="mt-2 text-xs text-[#6B7280]">{p.desc}</p>
								<div className="mt-6 flex items-baseline gap-1">
									<span className="text-4xl font-bold tracking-tight text-[#111111]">
										{p.price}
									</span>
									{p.price !== "Custom" && (
										<span className="text-xs text-[#6B7280]">/month</span>
									)}
								</div>
								<ul className="mt-8 flex flex-col gap-3">
									{p.features.map((f) => (
										<li
											key={f}
											className="text-xs text-[#111111] flex items-center gap-2.5"
										>
											<Check className="h-4 w-4 text-[#635BFF] shrink-0" />
											<span>{f}</span>
										</li>
									))}
								</ul>
							</div>
							<button
								className={`mt-8 w-full py-2.5 rounded-xl font-medium text-xs flex items-center justify-center gap-2 transition-all ${
									p.featured
										? "bg-[#635BFF] text-white hover:bg-[#635BFF]/90"
										: "border border-black/10 hover:bg-black/5 text-[#111111]"
								}`}
							>
								Choose {p.name}
								<ArrowRight className="h-3.5 w-3.5" />
							</button>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
