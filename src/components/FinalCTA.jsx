// src/components/FinalCTA.jsx
import React from "react";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
	return (
		<section className="py-20 sm:py-28 bg-[#F8F8F5]">
			<div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
				<div className="bg-[#111111] rounded-3xl p-10 sm:p-16 text-center text-[#F8F8F5] relative overflow-hidden shadow-2xl">
					<div className="relative z-10 max-w-2xl mx-auto">
						<h2 className="text-3xl sm:text-5xl font-semibold tracking-tight">
							Ready to simplify your workflow?
						</h2>
						<p className="mt-4 text-sm sm:text-base text-[#6B7280]">
							Join thousands of forward-looking engineers and product leaders
							shipping unified intelligence with PlexAi.
						</p>
						<div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
							<button className="w-full sm:w-auto bg-[#635BFF] text-white text-sm font-medium px-6 py-3 rounded-xl hover:bg-[#635BFF]/90 transition-all flex items-center justify-center gap-2">
								Get Started for Free
								<ArrowRight className="h-4 w-4" />
							</button>
							<button className="w-full sm:w-auto bg-white/10 text-white text-sm font-medium px-6 py-3 rounded-xl hover:bg-white/15 transition-all">
								Contact Enterprise Sales
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
