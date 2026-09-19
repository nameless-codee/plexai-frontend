// src/components/FinalCTA.jsx
import React from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function FinalCTA() {
	const { t } = useLanguage();

	return (
		<section className="py-20 sm:py-28 bg-[#F8F8F5] dark:bg-[#111111] transition-colors duration-200">
			<div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
				<div className="bg-white dark:bg-[#181818] border border-black/10 dark:border-white/10 rounded-3xl p-10 sm:p-16 text-center text-[#111111] dark:text-[#F8F8F5] relative overflow-hidden shadow-xl transition-colors duration-200">
					<div className="relative z-10 max-w-2xl mx-auto">
						<h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#111111] dark:text-[#F8F8F5]">
							{t.finalCta.heading}
						</h2>
						<p className="mt-4 text-sm sm:text-base text-[#6B7280] dark:text-neutral-400">
							{t.finalCta.subheading}
						</p>

						<div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
							{/* Primary action button: Pure Black in light mode, White in dark mode */}
							<a
								href="#get-started"
								className="w-full sm:w-auto bg-[#111111] hover:bg-black dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-[#111111] text-sm font-semibold px-6 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-xs"
							>
								{t.finalCta.startFree}
								<ArrowRight className="h-4 w-4" />
							</a>

							{/* Secondary button: Outline card style */}
							<a
								href="#signin"
								className="w-full sm:w-auto bg-transparent hover:bg-black/5 dark:hover:bg-white/10 text-[#111111] dark:text-[#F8F8F5] text-sm font-medium px-6 py-3.5 rounded-xl transition-all flex items-center justify-center border border-black/10 dark:border-white/10"
							>
								{t.finalCta.signIn}
							</a>
						</div>

						<p className="mt-6 text-xs text-[#6B7280] dark:text-neutral-400">
							{t.finalCta.note}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default FinalCTA;
