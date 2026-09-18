// src/components/LogoCloud.jsx
import React from "react";

export function LogoCloud() {
	const brands = [
		"HyperScale",
		"Synthetix",
		"EdgeVector",
		"Kinetica",
		"AeroStack",
	];

	return (
		<section className="py-12 sm:py-16 border-y border-black/10 bg-[#F8F8F5]">
			<div className="max-w-7xl mx-auto px-5 text-center">
				<p className="text-xs font-semibold uppercase tracking-widest text-[#6B7280]">
					Powering modern technical teams globally
				</p>
				<div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
					{brands.map((brand) => (
						<span
							key={brand}
							className="text-base sm:text-lg font-semibold tracking-tight text-black/40 hover:text-black/70 transition-colors"
						>
							{brand}
						</span>
					))}
				</div>
			</div>
		</section>
	);
}
