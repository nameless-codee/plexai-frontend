// src/pages/Home.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
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
	const { lang } = useLanguage();

	return (
		<div className="min-h-screen bg-[#F8F8F5] text-[#111111] selection:bg-[#635BFF] selection:text-white">
			{/* Navbar stays mounted and smooth */}
			<Navbar />

			{/* Smooth transition container keyed by language */}
			<AnimatePresence mode="wait">
				<motion.div
					key={lang}
					initial={{ opacity: 0, y: 6 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -6 }}
					transition={{ duration: 0.25, ease: "easeInOut" }}
				>
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
				</motion.div>
			</AnimatePresence>
		</div>
	);
}

export default Home;
