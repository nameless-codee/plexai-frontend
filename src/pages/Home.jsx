// src/pages/Home.jsx
import React from "react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { LogoCloud } from "../components/LogoCloud";
import { ProblemSolution } from "../components/ProblemSolution";
import { Stats } from "../components/Stats";
import { BentoFeatures } from "../components/BentoFeatures";
import { Pricing } from "../components/Pricing";
import { FinalCTA } from "../components/FinalCTA";
import { Footer } from "../components/Footer";

export function Home() {
	return (
		<div className="min-h-screen bg-[#F8F8F5] text-[#111111] selection:bg-[#635BFF] selection:text-white">
			<Navbar />
			<main>
				<Hero />
				<LogoCloud />
				<ProblemSolution />
				<Stats />
				<BentoFeatures />
				<Pricing />
				<FinalCTA />
			</main>
			<Footer />
		</div>
	);
}
