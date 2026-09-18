// src/App.jsx
import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import { Home } from "./pages/Home";

export default function App() {
	return (
		<ThemeProvider>
			<LanguageProvider>
				<Home />
			</LanguageProvider>
		</ThemeProvider>
	);
}
