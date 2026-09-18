// src/components/Footer.jsx
import React from "react";
import { Sparkles } from "lucide-react";

export function Footer() {
	const sections = {
		Product: ["Pipelines", "Live Traces", "Security", "Integrations"],
		Solutions: ["Operations", "Product Teams", "Platform Eng", "Enterprise"],
		Resources: ["Documentation", "API Reference", "Status", "Changelog"],
		Company: ["About", "Careers", "Privacy Policy", "Terms of Service"],
	};

	return (
		<footer className="border-t border-black/10 bg-[#F8F8F5] py-16">
			<div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
				<div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12">
					<div className="col-span-2">
						<div className="flex items-center gap-2 font-semibold text-lg text-[#111111]">
							<div className="h-7 w-7 rounded-lg bg-[#635BFF] flex items-center justify-center text-white">
								<Sparkles className="h-3.5 w-3.5" />
							</div>
							PlexAi
						</div>
						<p className="mt-3 text-xs text-[#6B7280] max-w-sm">
							The intelligent workflow orchestration platform built for
							high-throughput teams.
						</p>
					</div>
					{Object.entries(sections).map(([title, links]) => (
						<div key={title} className="flex flex-col gap-2">
							<span className="text-xs font-bold text-[#111111]">{title}</span>
							{links.map((link) => (
								<a
									key={link}
									href="#"
									className="text-xs text-[#6B7280] hover:text-[#111111] transition-colors"
								>
									{link}
								</a>
							))}
						</div>
					))}
				</div>
				<div className="border-t border-black/10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6B7280] gap-4">
					<p>© 2026 PlexAi Inc. All rights reserved.</p>
					<div className="flex gap-6">
						<a href="#" className="hover:text-[#111111]">
							Privacy
						</a>
						<a href="#" className="hover:text-[#111111]">
							Terms
						</a>
						<a href="#" className="hover:text-[#111111]">
							Security
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
