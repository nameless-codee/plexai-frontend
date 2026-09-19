// src/pages/SignUp.jsx
import React, { useState } from "react";
import {
	ArrowLeft,
	Building2,
	Eye,
	EyeOff,
	ShieldCheck,
	Star,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { navigateTo } from "../lib/navigation";

export function SignUp() {
	const { lang, setLang } = useLanguage();
	const [formData, setFormData] = useState({
		inviteCode: "",
		name: "",
		email: "",
		password: "",
	});
	const [showPassword, setShowPassword] = useState(false);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className="min-h-screen bg-[#F8F8F5] dark:bg-[#111111] text-[#111111] dark:text-[#F8F8F5] flex flex-col justify-between items-center px-4 py-8 sm:py-12 relative transition-colors duration-200">
			{/* Subtle Dot Matrix Background */}
			<div
				className="absolute inset-0 pointer-events-none opacity-[0.25] dark:opacity-[0.1]"
				style={{
					backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
					backgroundSize: "24px 24px",
				}}
			/>

			{/* Top Header: Brand Logo & Navigation */}
			<div className="w-full max-w-5xl flex items-center justify-between z-10 mb-6">
				<button
					type="button"
					onClick={() => navigateTo("/")}
					className="inline-flex items-center gap-2 text-xs font-semibold text-[#6B7280] dark:text-neutral-400 hover:text-[#111111] dark:hover:text-white transition-colors cursor-pointer"
				>
					<ArrowLeft className="h-4 w-4" />
					{lang === "FR" ? "Retour à l'accueil" : "Back to home"}
				</button>

				{/* Center Brand */}
				<button
					type="button"
					onClick={() => navigateTo("/")}
					className="flex items-center gap-2.5 font-bold text-lg text-[#111111] dark:text-white cursor-pointer"
				>
					<div className="h-7 w-7 rounded-lg bg-[#111111] dark:bg-white flex items-center justify-center text-white dark:text-[#111111] shadow-xs">
						<Building2 className="h-4 w-4" />
					</div>
					<span>PlexAi</span>
				</button>

				{/* Language Switcher */}
				<div className="flex items-center text-xs font-semibold text-[#6B7280] dark:text-neutral-400 border border-black/10 dark:border-white/10 rounded-full p-0.5 bg-white dark:bg-[#181818] shadow-2xs">
					<button
						type="button"
						onClick={() => setLang("EN")}
						className={`px-3 py-1 rounded-full transition-colors cursor-pointer ${
							lang === "EN"
								? "bg-[#111111] text-white dark:bg-white dark:text-[#111111]"
								: ""
						}`}
					>
						EN
					</button>
					<button
						type="button"
						onClick={() => setLang("FR")}
						className={`px-3 py-1 rounded-full transition-colors cursor-pointer ${
							lang === "FR"
								? "bg-[#111111] text-white dark:bg-white dark:text-[#111111]"
								: ""
						}`}
					>
						FR
					</button>
				</div>
			</div>

			{/* Main Centered Card Container */}
			<div className="w-full max-w-4xl bg-white dark:bg-[#181818] border border-black/10 dark:border-white/10 rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 p-6 sm:p-10 gap-8 z-10 my-auto">
				{/* Left Column: Form Content */}
				<div className="flex flex-col justify-center">
					<div>
						<h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111] dark:text-white">
							{lang === "FR"
								? "Créer un compte gratuit"
								: "Create free account"}
						</h1>
						<p className="mt-1.5 text-xs sm:text-sm text-[#6B7280] dark:text-neutral-400">
							{lang === "FR"
								? "Choisissez votre méthode d'inscription pour débuter."
								: "Registration is invite-only. Enter your code to get started."}
						</p>
					</div>

					{/* Google Sign-up Button */}
					<button
						type="button"
						className="mt-6 w-full flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#222222] hover:bg-black/5 dark:hover:bg-white/5 text-xs sm:text-sm font-semibold text-[#111111] dark:text-white transition-all shadow-2xs cursor-pointer"
					>
						<svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
							<path
								fill="#4285F4"
								d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
							/>
							<path
								fill="#34A853"
								d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
							/>
							<path
								fill="#FBBC05"
								d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
							/>
							<path
								fill="#EA4335"
								d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
							/>
						</svg>
						<span>
							{lang === "FR" ? "S'inscrire avec Google" : "Sign up with Google"}
						</span>
					</button>

					{/* Divider */}
					<div className="relative my-4 flex items-center justify-center">
						<div className="w-full border-t border-black/10 dark:border-white/10" />
						<span className="absolute bg-white dark:bg-[#181818] px-3 text-[11px] text-[#6B7280] dark:text-neutral-400">
							{lang === "FR" ? "Ou continuer avec" : "Or continue with"}
						</span>
					</div>

					{/* Registration Form */}
					<form onSubmit={handleSubmit} className="flex flex-col gap-3">
						{/* Invite Code Field */}
						<div>
							<label className="block text-xs font-semibold text-[#111111] dark:text-neutral-300 mb-1">
								{lang === "FR" ? "Code d'invitation" : "Invite code"}
							</label>
							<input
								type="text"
								name="inviteCode"
								required
								value={formData.inviteCode}
								onChange={handleChange}
								placeholder="e.g. PLX-XXXX-XXXX"
								className="w-full px-3.5 py-2 rounded-xl border border-black/10 dark:border-white/10 bg-[#F8F8F5]/60 dark:bg-[#111111]/60 text-xs sm:text-sm text-[#111111] dark:text-white placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#111111] dark:focus:ring-white transition-all shadow-2xs"
							/>
						</div>

						{/* Name Field */}
						<div>
							<label className="block text-xs font-semibold text-[#111111] dark:text-neutral-300 mb-1">
								{lang === "FR" ? "Nom complet" : "Name"}
							</label>
							<input
								type="text"
								name="name"
								required
								value={formData.name}
								onChange={handleChange}
								placeholder="Jane Doe"
								className="w-full px-3.5 py-2 rounded-xl border border-black/10 dark:border-white/10 bg-[#F8F8F5]/60 dark:bg-[#111111]/60 text-xs sm:text-sm text-[#111111] dark:text-white placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#111111] dark:focus:ring-white transition-all shadow-2xs"
							/>
						</div>

						{/* Email Field */}
						<div>
							<label className="block text-xs font-semibold text-[#111111] dark:text-neutral-300 mb-1">
								{lang === "FR" ? "Courriel" : "Email"}
							</label>
							<input
								type="email"
								name="email"
								required
								value={formData.email}
								onChange={handleChange}
								placeholder="you@example.com"
								className="w-full px-3.5 py-2 rounded-xl border border-black/10 dark:border-white/10 bg-[#F8F8F5]/60 dark:bg-[#111111]/60 text-xs sm:text-sm text-[#111111] dark:text-white placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#111111] dark:focus:ring-white transition-all shadow-2xs"
							/>
						</div>

						{/* Password Field */}
						<div>
							<label className="block text-xs font-semibold text-[#111111] dark:text-neutral-300 mb-1">
								{lang === "FR" ? "Mot de passe" : "Password"}
							</label>
							<div className="relative">
								<input
									type={showPassword ? "text" : "password"}
									name="password"
									required
									value={formData.password}
									onChange={handleChange}
									placeholder={
										lang === "FR"
											? "Au moins 8 caractères"
											: "At least 8 characters"
									}
									className="w-full px-3.5 py-2 rounded-xl border border-black/10 dark:border-white/10 bg-[#F8F8F5]/60 dark:bg-[#111111]/60 text-xs sm:text-sm text-[#111111] dark:text-white placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#111111] dark:focus:ring-white transition-all shadow-2xs pr-10"
								/>
								<button
									type="button"
									onClick={() => setShowPassword(!showPassword)}
									className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-[#111111] dark:hover:text-white cursor-pointer"
								>
									{showPassword ? (
										<EyeOff className="h-4 w-4" />
									) : (
										<Eye className="h-4 w-4 text-neutral-400" />
									)}
								</button>
							</div>
						</div>

						{/* Submit Button */}
						<button
							type="submit"
							className="mt-2 w-full bg-[#111111] hover:bg-black dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-[#111111] text-sm font-semibold py-2.5 rounded-xl transition-all shadow-xs cursor-pointer"
						>
							{lang === "FR" ? "Créer un compte" : "Get started"}
						</button>
					</form>

					<p className="mt-4 text-center text-xs text-[#6B7280] dark:text-neutral-400">
						{lang === "FR"
							? "Vous avez déjà un compte ? "
							: "Already have an account? "}
						<button
							type="button"
							onClick={() => navigateTo("/login")}
							className="font-bold text-[#111111] dark:text-white hover:underline cursor-pointer ml-1"
						>
							{lang === "FR" ? "Se connecter" : "Sign in"}
						</button>
					</p>
				</div>

				{/* Right Column: Inset Testimonial Card */}
				<div className="rounded-2xl bg-[#F8F8F5] dark:bg-[#111111] border border-black/5 dark:border-white/5 p-6 sm:p-8 flex flex-col justify-between text-center">
					<div className="flex flex-col items-center justify-center my-auto py-4">
						<div className="flex gap-1 text-amber-500 mb-5">
							{[...Array(5)].map((_, i) => (
								<Star
									key={i}
									className="h-4 w-4 fill-amber-500 text-amber-500"
								/>
							))}
						</div>
						<blockquote className="text-sm sm:text-base font-medium text-[#111111] dark:text-[#F8F8F5] leading-relaxed max-w-xs">
							{lang === "FR"
								? "« L'analyse du zonage à elle seule justifie la plateforme. Savoir qu'un lot peut accueillir 4 logements avant même d'appeler le courtier change complètement la donne. »"
								: "“The zoning read alone is worth it. Knowing a lot can take four units before I even call the broker changes how I bid.”"}
						</blockquote>
						<div className="mt-6 flex flex-col items-center">
							<div className="h-10 w-10 rounded-full bg-neutral-800 text-white flex items-center justify-center font-bold text-xs uppercase shadow-xs mb-2">
								ST
							</div>
							<p className="text-xs font-bold text-[#111111] dark:text-white">
								Sophie T.
							</p>
							<p className="text-[11px] text-[#6B7280] dark:text-neutral-400">
								Real-estate investor · Laval
							</p>
						</div>
					</div>

					<div className="pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-center gap-1.5 text-[11px] text-[#6B7280] dark:text-neutral-400">
						<ShieldCheck className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
						<span>
							{lang === "FR"
								? "Sur invitation uniquement · Codes fournis par votre instructeur."
								: "Invite-only · Codes provided by your instructor."}
						</span>
					</div>
				</div>
			</div>

			{/* Terms & Privacy Footer */}
			<div className="text-center text-[11px] text-[#6B7280] dark:text-neutral-400 z-10 mt-6">
				{lang === "FR"
					? "En continuant, vous acceptez nos "
					: "By continuing, you agree to our "}
				<a
					href="#terms"
					className="underline hover:text-[#111111] dark:hover:text-white"
				>
					Terms of Service
				</a>
				{lang === "FR" ? " et " : " and "}
				<a
					href="#privacy"
					className="underline hover:text-[#111111] dark:hover:text-white"
				>
					Privacy Policy
				</a>
				.
			</div>
		</div>
	);
}

export default SignUp;
