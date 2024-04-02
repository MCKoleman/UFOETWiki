import type { Metadata, Viewport } from "next"

export const metadata: Metadata = {
	title: "UFO ET Wiki",
	description:
		"Wiki for the UFO: Extraterrestrials Gold/Platinum and UFO2: Extraterrestrials Battle for Mercury games by Chaos Concept.",
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
	// themeColor: '#0A78CD'
}
