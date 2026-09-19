// src/App.jsx
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";

export default function App() {
	const [currentPath, setCurrentPath] = useState(window.location.pathname);

	useEffect(() => {
		const handleLocationChange = () => {
			setCurrentPath(window.location.pathname);
		};
		window.addEventListener("popstate", handleLocationChange);
		return () => window.removeEventListener("popstate", handleLocationChange);
	}, []);

	const isAuthPage =
		currentPath === "/login" ||
		currentPath === "/signin" ||
		currentPath === "/register" ||
		currentPath === "/signup";

	return (
		<ThemeProvider>
			<LanguageProvider>
				{currentPath === "/login" || currentPath === "/signin" ? (
					<SignIn />
				) : currentPath === "/register" || currentPath === "/signup" ? (
					<SignUp />
				) : (
					<Home />
				)}
			</LanguageProvider>
		</ThemeProvider>
	);
}
