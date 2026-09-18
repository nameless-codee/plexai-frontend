// src/components/FAQ.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function FAQ() {
	const [openIndex, setOpenIndex] = useState(null);
	const { t } = useLanguage();

	return (
		<section
			id="faq"
			className="py-24 sm:py-32 bg-[#F8F8F5] border-t border-black/10"
		>
			<div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-10">
				<div className="text-center mb-16">
					<span className="text-xs font-bold uppercase tracking-widest text-[#635BFF]">
						{t.faq.tag}
					</span>
					<h2 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight text-[#111111]">
						{t.faq.heading}
					</h2>
				</div>

				<div className="flex flex-col gap-3">
					{t.faq.items.map((item, idx) => (
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
