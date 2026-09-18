// src/components/Footer.jsx
import React from "react";
import { Building2 } from "lucide-react";

export function Footer() {
	return (
		<footer className="border-t border-black/10 bg-[#F8F8F5] py-16">
			<div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
				<div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12">
					{/* Brand Statement */}
					<div className="col-span-2">
						<div className="flex items-center gap-2 font-semibold text-lg text-[#111111]">
							<div className="h-7 w-7 rounded-lg bg-[#635BFF] flex items-center justify-center text-white">
								<Building2 className="h-3.5 w-3.5" />
							</div>
							PlexAI
						</div>
						<p className="mt-3 text-xs text-[#6B7280] max-w-sm leading-relaxed">
							PlexAI — Quebec real-estate investment intelligence — AI-scored
							deals, development potential from official data, and instant
							alerts.
						</p>
					</div>

					{/* Product Column */}
					<div className="flex flex-col gap-2.5">
						<span className="text-xs font-bold text-[#111111]">Product</span>
						<a
							href="#features"
							className="text-xs text-[#6B7280] hover:text-[#111111]"
						>
							Features
						</a>
						<a
							href="#how-it-works"
							className="text-xs text-[#6B7280] hover:text-[#111111]"
						>
							How it works
						</a>
						<a
							href="#faq"
							className="text-xs text-[#6B7280] hover:text-[#111111]"
						>
							FAQ
						</a>
					</div>

					{/* Account Column */}
					<div className="flex flex-col gap-2.5">
						<span className="text-xs font-bold text-[#111111]">Account</span>
						<a
							href="#signin"
							className="text-xs text-[#6B7280] hover:text-[#111111]"
						>
							Sign in
						</a>
						<a
							href="#get-started"
							className="text-xs text-[#6B7280] hover:text-[#111111]"
						>
							Create account
						</a>
					</div>

					{/* Company Column */}
					<div className="flex flex-col gap-2.5">
						<span className="text-xs font-bold text-[#111111]">Company</span>
						<a
							href="#why"
							className="text-xs text-[#6B7280] hover:text-[#111111]"
						>
							Why PlexAI
						</a>
						<a
							href="#edge"
							className="text-xs text-[#6B7280] hover:text-[#111111]"
						>
							The PlexAI edge
						</a>
						<a
							href="#faq"
							className="text-xs text-[#6B7280] hover:text-[#111111]"
						>
							FAQ
						</a>
					</div>
				</div>

				{/* Disclaimer & Copyright */}
				<div className="border-t border-black/10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6B7280] gap-4">
					<p>© 2026 PlexAI. All rights reserved.</p>
					<p className="text-[11px] text-center sm:text-right">
						Indicative analysis only — confirm with a licensed professional
						before investing.
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
