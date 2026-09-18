// src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";
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
			{/* Navbar stays fixed and independent */}
			<Navbar />

			{/* 
        Smooth content transition triggered only when `lang` toggles:
        - We animate opacity from 0.65 to 1 over 220ms.
        - Because we don't unmount the page, the browser does NOT re-flow 
          the layout, retaining the exact scroll position smoothly.
      */}
			<motion.div
				key={lang}
				initial={{ opacity: 0.65 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.22, ease: "easeOut" }}
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
		</div>
	);
}

export default Home;
