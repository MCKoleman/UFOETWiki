import type { Metadata, Viewport } from "next"

export const metadata: Metadata = {
	title: "Tephra UI v2.0",
	description:
		"Tephra UI is a design system for building and rapidly iterating on modern web applications by the LavaVein™ team.",
	formatDetection: {
		telephone: false,
		address: false,
		email: false,
		date: false,
		url: false,
	},
}

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
	// themeColor: '#0A78CD', Optym primary color
}
