/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		container: {
			screens: {
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1200px",
			},
			center: true,
			padding: "1rem",
		},
		extend: {
			colors: {
				primary: "#3E3BF4",
				"primary-dark": "#2C29AB",
				"primary-light-100": "#D8D8FD",
				"primary-light-200": "#7875F7",
				secondary: "#F5F5FE",
				black: "#0C0C31",
				info: "#527AFF",
				success: "#4DFC31",
				warning: "#FFCB3D",
				error: "#F5667A",
				"gray-100": "#E6E6EA",
				"gray-200": "#CECED6",
				"gray-300": "#9E9EAD",
				"gray-400": "#54546E",
			},

			fontFamily: {
				roboto: ["Roboto", "sans-serif"],
				lato: ["Lato", "sans-serif"],
			},
		},
	},
	plugins: [],
};
