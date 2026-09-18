// src/components/FinalCTA.jsx
import React from "react";
import { useLanguage } from "../context/LanguageContext";

export function FinalCTA() {
	const { t } = useLanguage();

	return (
		<section className="py-20 sm:py-28 bg-[#F8F8F5] dark:bg-[#111111] transition-colors duration-200">
			<div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
				<div className="bg-[#111111] dark:bg-[#181818] border border-transparent dark:border-white/10 rounded-3xl p-10 sm:p-16 text-center text-[#F8F8F5] relative overflow-hidden shadow-2xl transition-colors duration-200">
					<div className="relative z-10 max-w-2xl mx-auto">
						<h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#F8F8F5]">
							{t.finalCta.heading}
						</h2>
						<p className="mt-4 text-sm sm:text-base text-[#9CA3AF]">
							{t.finalCta.subheading}
						</p>
						<div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
							<a
								href="#get-started"
								className="w-full sm:w-auto bg-[#635BFF] text-white text-sm font-medium px-6 py-3.5 rounded-xl hover:bg-[#635BFF]/90 transition-all flex items-center justify-center gap-2"
							>
								{t.finalCta.startFree}
							</a>
							<a
								href="#signin"
								className="w-full sm:w-auto bg-white/10 text-white text-sm font-medium px-6 py-3.5 rounded-xl hover:bg-white/15 transition-all flex items-center justify-center border border-white/5"
							>
								{t.finalCta.signIn}
							</a>
						</div>
						<p className="mt-6 text-xs text-white/50">{t.finalCta.note}</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default FinalCTA;
