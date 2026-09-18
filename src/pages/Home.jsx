// src/pages/Home.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import ProblemSolution from "../components/ProblemSolution";
import ProductShowcase from "../components/ProductShowcase";
import BentoFeatures from "../components/BentoFeatures";
import DealScoreBreakdown from "../components/DealScoreBreakdown";
import Workflow from "../components/Workflow";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

export function Home() {
	return (
		<div className="min-h-screen bg-[#F8F8F5] text-[#111111] selection:bg-[#635BFF] selection:text-white">
			<Navbar />
			<main>
				<Hero />
				<Stats />
				<ProblemSolution />
				<ProductShowcase />
				<BentoFeatures />
				<DealScoreBreakdown />
				<Workflow />
				<Testimonials />
				<FAQ />
				<FinalCTA />
			</main>
			<Footer />
		</div>
	);
}

export default Home;
