// src/components/ProductShowcase.jsx
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Check, ArrowRight, Layers } from "lucide-react";
import { fadeUp } from "../lib/animations";

export function ProductShowcase() {
	return (
		<section className="py-24 sm:py-32 bg-[#F8F8F5] border-t border-black/10">
			<div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					{/* Text Left */}
					<motion.div
						variants={fadeUp}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
					>
						<span className="text-xs font-bold uppercase tracking-widest text-[#635BFF]">
							THE PLEXAI EDGE
						</span>
						<h2 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight text-[#111111]">
							Turn a single-family lot into a development opportunity
						</h2>
						<p className="mt-4 text-base text-[#6B7280] leading-relaxed">
							A property listed as a house might sit on land the city already
							allows you to build several units on. PlexAI reads the official
							zoning code and the government lot record, then estimates what
							could be built — right on the listing, with the source document
							one click away.
						</p>

						<ul className="mt-6 flex flex-col gap-3 text-sm text-[#111111]">
							<li className="flex items-start gap-2.5">
								<Check className="h-4 w-4 text-[#635BFF] shrink-0 mt-0.5" />
								<span>
									An interactive map matches the exact zoning polygon by GPS
								</span>
							</li>
							<li className="flex items-start gap-2.5">
								<Check className="h-4 w-4 text-[#635BFF] shrink-0 mt-0.5" />
								<span>
									Real lot size from official records — not the listing
								</span>
							</li>
							<li className="flex items-start gap-2.5">
								<Check className="h-4 w-4 text-[#635BFF] shrink-0 mt-0.5" />
								<span>
									Framed honestly: a guide, always “confirm with the city”
								</span>
							</li>
						</ul>

						<p className="mt-6 text-xs text-[#6B7280] font-medium">
							Live for Montréal & Laval — more cities on the way.
						</p>
					</motion.div>

					{/* Interactive Card Right (Specification Item 5 Example Card) */}
					<motion.div
						variants={fadeUp}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="rounded-2xl border border-black/10 bg-white p-6 sm:p-8 shadow-xl"
					>
						<div className="flex items-center justify-between border-b border-black/5 pb-4">
							<div>
								<span className="text-xs font-bold text-[#635BFF]">
									7546 Rue Centrale
								</span>
								<p className="text-xs text-[#6B7280] mt-0.5">
									Le Plateau-Mont-Royal ·{" "}
									<span className="font-semibold text-[#111111]">
										Zone T4.4 (Verified)
									</span>
								</p>
							</div>
							<span className="text-xs font-semibold px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded border border-emerald-200">
								Official Polygon Matched
							</span>
						</div>

						<div className="grid grid-cols-2 gap-4 my-6">
							<div className="rounded-xl border border-black/5 bg-[#F8F8F5] p-4 text-center">
								<span className="text-xs text-[#6B7280]">Built today</span>
								<div className="text-3xl font-bold text-[#111111] mt-1">1</div>
								<span className="text-[11px] text-[#6B7280]">
									Single family
								</span>
							</div>
							<div className="rounded-xl border border-[#635BFF]/20 bg-[#635BFF]/5 p-4 text-center">
								<span className="text-xs text-[#635BFF] font-semibold">
									Zoning potential
								</span>
								<div className="text-3xl font-bold text-[#635BFF] mt-1">~4</div>
								<span className="text-[11px] text-[#635BFF]">
									Permitted units
								</span>
							</div>
						</div>

						<div className="text-[11px] text-[#6B7280] italic border-t border-black/5 pt-3">
							Estimated from official lot area × permitted density. A guide, not
							a permit.
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

export default ProductShowcase;
