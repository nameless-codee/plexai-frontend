// src/components/Testimonials.jsx
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { fadeUp, staggerContainer } from "../lib/animations";

export function Testimonials() {
	const testimonials = [
		{
			quote:
				"“I found a triplex 12% under market the morning it was listed. PlexAI flagged the development upside I would have completely missed.”",
			author: "Marc-André L.",
			role: "Plex investor · Montréal",
		},
		{
			quote:
				"“The zoning read alone is worth it. Knowing a lot can take four units before I even call the broker changes how I bid.”",
			author: "Sophie T.",
			role: "Real-estate investor · Laval",
		},
		{
			quote:
				"“I used to spend my evenings refreshing listings. Now the good deals just land in my inbox, already analyzed.”",
			author: "David R.",
			role: "Buy-and-hold investor",
		},
	];

	return (
		<section className="py-24 sm:py-32 bg-[#F8F8F5] border-t border-black/10">
			<div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
				<div className="text-center max-w-2xl mx-auto mb-16">
					<span className="text-xs font-bold uppercase tracking-widest text-[#635BFF]">
						INVESTORS
					</span>
					<h2 className="mt-3 text-3xl sm:text-5xl font-semibold tracking-tight text-[#111111]">
						Built for people who move first
					</h2>
				</div>

				<motion.div
					variants={staggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid grid-cols-1 md:grid-cols-3 gap-6"
				>
					{testimonials.map((t) => (
						<motion.div
							key={t.author}
							variants={fadeUp}
							whileHover={{ y: -4 }}
							className="bg-white rounded-2xl border border-black/10 p-6 sm:p-8 flex flex-col justify-between"
						>
							<div>
								<div className="flex gap-1 text-amber-500 mb-4">
									{[...Array(5)].map((_, i) => (
										<Star key={i} className="h-4 w-4 fill-amber-500" />
									))}
								</div>
								<p className="text-xs sm:text-sm text-[#111111] leading-relaxed italic">
									{t.quote}
								</p>
							</div>
							<div className="mt-6 pt-4 border-t border-black/5">
								<p className="text-xs font-bold text-[#111111]">{t.author}</p>
								<p className="text-[11px] text-[#6B7280]">{t.role}</p>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}

export default Testimonials;
