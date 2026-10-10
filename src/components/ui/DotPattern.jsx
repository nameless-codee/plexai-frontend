// src/components/ui/DotPattern.jsx
import React from "react";

export function DotPattern({
	size = 15,
	radius = 1,
	className = "opacity-[0.06] dark:opacity-[0.1]",
	...props
}) {
	return (
		<div
			aria-hidden="true"
			className={`absolute inset-0 pointer-events-none ${className}`}
			style={{
				backgroundImage: `radial-gradient(circle at center, currentColor ${radius}px, transparent ${radius + 0.5}px)`,
				backgroundSize: `${size}px ${size}px`,
			}}
			{...props}
		/>
	);
}

export default DotPattern;
