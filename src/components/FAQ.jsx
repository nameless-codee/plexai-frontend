// src/components/FAQ.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function FAQ() {
	const [openIndex, setOpenIndex] = useState(null);

	const faqs = [
		{
			q: "How accurate is the data?",
			a: "Lot size, dwelling counts and zoning come from official government records, with the source document linked on each property so you can verify it yourself. Financials use live Quebec tax rates. Any development estimate is framed as a guide — always confirm with the city before acting.",
		},
		{
			q: "What makes the development-potential feature different?",
			a: "Cross-references municipal zoning bylaws, cadastral lot plans, and allowed floor-space ratio / maximum allowed dwellings against existing construction automatically.",
		},
		{
			q: "Which cities are covered?",
			a: "Full coverage across Greater Montréal, Laval, and expanding to major municipalities across Quebec.",
		},
		{
			q: "How fast are the alerts?",
			a: "Listings and price alterations are ingested continuously, delivering instant alerts via email or WhatsApp within minutes of publication.",
		},
		{
			q: "Can I tune what counts as a “good deal”?",
			a: "Yes, customizable filters for minimum cap rate, expected cash flow, target regions, property types, and minimum deal score thresholds.",
		},
		{
			q: "Do I need a credit card to start?",
			a: "No credit card required for initial access and trial evaluation.",
		},
	];

	return (
		<section
			id="faq"
			className="py-24 sm:py-32 bg-[#F8F8F5] border-t border-black/10"
		>
			<div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-10">
				<div className="text-center mb-16">
					<span className="text-xs font-bold uppercase tracking-widest text-[#635BFF]">
						FAQ
					</span>
					<h2 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight text-[#111111]">
						Questions, answered
					</h2>
				</div>

				<div className="flex flex-col gap-3">
					{faqs.map((item, idx) => (
						<div
							key={item.q}
							className="rounded-xl border border-black/10 bg-white overflow-hidden"
						>
							<button
								onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
								className="w-full text-left p-5 flex items-center justify-between text-sm font-semibold text-[#111111] hover:bg-black/5 transition-colors"
							>
								<span>{item.q}</span>
								<ChevronDown
									className={`h-4 w-4 text-[#6B7280] transition-transform duration-200 ${
										openIndex === idx ? "rotate-180" : ""
									}`}
								/>
							</button>
							<AnimatePresence>
								{openIndex === idx && (
									<motion.div
										initial={{ height: 0, opacity: 0 }}
										animate={{ height: "auto", opacity: 1 }}
										exit={{ height: 0, opacity: 0 }}
										transition={{ duration: 0.2 }}
									>
										<div className="px-5 pb-5 text-xs sm:text-sm text-[#6B7280] leading-relaxed border-t border-black/5 pt-3">
											{item.a}
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default FAQ;
