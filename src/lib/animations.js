// src/lib/animations.js
export const fadeUp = {
	hidden: { opacity: 0, y: 24 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut" },
	},
};

export const fadeIn = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { duration: 0.5, ease: "easeOut" },
	},
};

export const scaleIn = {
	hidden: { opacity: 0, scale: 0.96 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: { duration: 0.7, ease: "easeOut" },
	},
};

export const staggerContainer = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.08,
		},
	},
};

export const floating = {
	animate: {
		y: [0, -6, 0],
		transition: {
			duration: 4.5,
			ease: "easeInOut",
			repeat: Infinity,
		},
	},
};
