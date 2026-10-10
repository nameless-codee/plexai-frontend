// src/components/AuthSidebar.jsx
import React from "react";
import { Building2, Sparkles, Layers, Bell, Star } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function AuthSidebar() {
	const { lang } = useLanguage();

	return (
		<div className="relative hidden lg:flex flex-col justify-between p-10 xl:p-14 bg-[#0A0D14] text-white overflow-hidden border-r border-white/10">
			{/* Background Blueprint Grid & Ambient Blue Glow */}
			<div
				className="absolute inset-0 pointer-events-none opacity-20"
				style={{
					backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)`,
					backgroundSize: "40px 40px",
				}}
			/>
			<div className="absolute top-1/4 left-1/3 w-[360px] h-[360px] bg-[#635BFF]/15 blur-[120px] rounded-full pointer-events-none" />

			{/* Brand Logo Header */}
			<div className="relative z-10">
				<a href="/" className="inline-flex items-center gap-2.5">
					<div className="h-8 w-8 rounded-lg bg-[#111111] dark:bg-white flex items-center justify-center text-white dark:text-[#111111] shadow-xs border border-white/20">
						<Building2 className="h-4 w-4" />
					</div>
					<span className="font-semibold text-xl tracking-tight text-white leading-none">
						PlexAi
					</span>
				</a>
			</div>

			{/* Center Value Proposition & Live Visual Data Card */}
			<div className="relative z-10 my-auto py-8 max-w-md">
				<h1 className="text-3xl xl:text-4xl font-extrabold tracking-tight leading-tight text-white">
					{lang === "FR"
						? "L'avantage injuste pour les investisseurs immobiliers du Québec."
						: "The unfair advantage for Quebec real-estate investors."}
				</h1>

				{/* Featured Property Card[cite: 15, 16] */}
				<div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-4 flex items-center justify-between gap-4">
					<div className="flex items-center gap-3">
						<div className="h-11 w-11 rounded-xl bg-[#635BFF]/30 border border-[#635BFF]/40 flex items-center justify-center text-white">
							<Building2 className="h-5 w-5 text-[#8B5CF6]" />
						</div>
						<div>
							<p className="text-sm font-bold text-white leading-snug">
								1195 Rue Saint-Hubert
							</p>
							<p className="text-xs text-neutral-400">
								Ville-Marie · Triplex · $1,039,000
							</p>
						</div>
					</div>
					<div className="flex flex-col items-end">
						<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
							82
						</span>
						<span className="text-[10px] font-bold text-emerald-400 mt-0.5 tracking-wider uppercase">
							{lang === "FR" ? "Achat Fort" : "Strong Buy"}
						</span>
					</div>
				</div>

				{/* Feature List Items[cite: 15, 16] */}
				<div className="mt-7 flex flex-col gap-3.5 text-xs sm:text-sm text-neutral-300">
					<div className="flex items-center gap-3">
						<Sparkles className="h-4 w-4 text-[#8B5CF6] shrink-0" />
						<span>
							{lang === "FR"
								? "Propriétés scorées par IA à travers tout le Québec"
								: "AI-scored deals across the entire Quebec market"}
						</span>
					</div>
					<div className="flex items-center gap-3">
						<Layers className="h-4 w-4 text-[#8B5CF6] shrink-0" />
						<span>
							{lang === "FR"
								? "Potentiel de densification extrait du zonage officiel"
								: "Development potential from official Quebec zoning"}
						</span>
					</div>
					<div className="flex items-center gap-3">
						<Bell className="h-4 w-4 text-[#8B5CF6] shrink-0" />
						<span>
							{lang === "FR"
								? "Alertes instantanées dès qu'une opportunité apparaît"
								: "Instant alerts when an undervalued property appears"}
						</span>
					</div>
				</div>
			</div>

			{/* Bottom Testimonial Snippet[cite: 15, 16] */}
			<div className="relative z-10 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-4">
				<div className="flex gap-1 text-amber-400 mb-2">
					{[...Array(5)].map((_, i) => (
						<Star
							key={i}
							className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
						/>
					))}
				</div>
				<p className="text-xs text-neutral-300 italic leading-relaxed">
					{lang === "FR"
						? "« J'ai trouvé un triplex 12 % sous le marché dès le matin de sa mise en vente. »"
						: '"I found a triplex 12% under market the morning it was listed."'}
				</p>
				<div className="mt-3 flex items-center gap-2.5">
					<div className="h-7 w-7 rounded-full bg-neutral-700 flex items-center justify-center text-xs font-bold text-white uppercase border border-white/20">
						ML
					</div>
					<div>
						<p className="text-xs font-bold text-white leading-none">
							Marc-André L.
						</p>
						<p className="text-[10px] text-neutral-400 mt-0.5">
							Plex investor · Montréal
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AuthSidebar;
