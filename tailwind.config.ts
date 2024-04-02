import type { Config } from "tailwindcss"
import colors from "tailwindcss/colors"

export default {
	darkMode: ["class"],
	content: ["./**/*.{ts,tsx}"],
	theme: {
		fontFamily: {
			brand: "var(--font-brand)",
			body: ["Arial", "Helvetica", "sans-serif"],
		},

		container: {
			center: true,
			screens: {
				"2xl": "1400px",
			},
		},
		colors: {
			current: colors.current,
			white: colors.white,
			black: colors.black,
			transparent: colors.transparent,
			background: {
				DEFAULT: "hsl(var(--background))",
				muted: "hsl(var(--background-muted))",
			},
			foreground: {
				DEFAULT: "hsl(var(--foreground))",
				muted: "hsl(var(--foreground-muted))",
			},
			hover: "hsl(var(--hover) / 5%)",
			canvas: "hsl(var(--canvas))",
			primary: {
				DEFAULT: "hsl(var(--primary))",
				hover: "hsl(var(--primary-hover))",
				contrast: "hsl(var(--primary-contrast))",
				foreground: "hsl(var(--primary-foreground))",
				muted: "hsl(var(--primary-muted))",
			},
			secondary: {
				DEFAULT: "hsl(var(--secondary))",
				hover: "hsl(var(--secondary-hover))",
				contrast: "hsl(var(--secondary-contrast))",
				foreground: "hsl(var(--secondary-foreground))",
			},
			active: {
				DEFAULT: "hsl(var(--active))",
				hover: "hsl(var(--active-hover))",
				contrast: "hsl(var(--active-contrast))",
			},
			info: {
				DEFAULT: "hsl(var(--info))",
				hover: "hsl(var(--info-hover))",
				contrast: "hsl(var(--info-contrast))",
				foreground: "hsl(var(--info-foreground))",
			},
			success: {
				DEFAULT: "hsl(var(--success))",
				hover: "hsl(var(--success-hover))",
				contrast: "hsl(var(--success-contrast))",
				foreground: "hsl(var(--success-foreground))",
			},
			warning: {
				DEFAULT: "hsl(var(--warning))",
				hover: "hsl(var(--warning-hover))",
				contrast: "hsl(var(--warning-contrast))",
				foreground: "hsl(var(--warning-foreground))",
			},
			error: {
				DEFAULT: "hsl(var(--error))",
				hover: "hsl(var(--error-hover))",
				contrast: "hsl(var(--error-contrast))",
				foreground: "hsl(var(--error-foreground))",
			},
			popover: {
				DEFAULT: "hsl(var(--popover))",
				contrast: "hsl(var(--popover-contrast))",
			},
			tooltip: {
				DEFAULT: "hsl(var(--tooltip) / 90%)",
				contrast: "hsl(var(--tooltip-contrast))",
			},
			overlay: "hsl(var(--overlay) / 10%)",
			border: "hsl(var(--border))",
			input: "hsl(var(--input))",
			outline: "hsl(var(--outline))",
		},
		backdropBlur: {
			"sm": "2px",
			"DEFAULT": "4px",
			"md": "8px",
			"lg": "12px",
			"xl": "16px",
			"2xl": "24px",
			"3xl": "40px",
		},
		boxShadow: {
			DEFAULT: `
			0 1px 1px -0.5px rgb(0 0 0 / 0.03),
			0 2px 2px -1px rgb(0 0 0 / 0.03),
			0 3px 3px -1.5px rgb(0 0 0 / 0.03),
			0 6px 6px -3px rgb(0 0 0 / 0.03),
			0 12px 12px -6px rgb(0 0 0 / 0.03)`,
			sm: `
			0 0.5px 0.5px -0.25px rgb(0 0 0 / 0.04),
			0 1.5px 1.5px -0.75px rgb(0 0 0 / 0.04),
			0 3px 3px -1.5px rgb(0 0 0 / 0.025),
			0 6px 6px -3px rgb(0 0 0 / 0.02),
			0 12px 12px -6px rgb(0 0 0 / 0.02)`,
			md: `
			0 0.5px 0.5px -0.25px rgb(0 0 0 / 0.03),
			0 1.5px 1.5px -0.75px rgb(0 0 0 / 0.035),
			0 3px 3px -1.5px rgb(0 0 0 / 0.04),
			0 6px 6px -3px rgb(0 0 0 / 0.045),
			0 12px 12px -6px rgb(0 0 0 / 0.05)`,
			lg: `
			0 0.5px 0.5px -0.25px rgb(0 0 0 / 0.025),
			0 1.5px 1.5px -0.75px rgb(0 0 0 / 0.035),
			0 3px 3px -1.5px rgb(0 0 0 / 0.045),
			0 6px 6px -3px rgb(0 0 0 / 0.055),
			0 12px 12px -6px rgb(0 0 0 / 0.065)`,
		},
		fontSize: {
			"xs": ["0.675rem", { lineHeight: "0.9rem" }],
			"sm": ["0.7875rem", { lineHeight: "1.125rem" }],
			"base": ["0.9rem", { lineHeight: "1.35rem" }],
			"lg": ["1.0125rem", { lineHeight: "1.575rem" }],
			"xl": ["1.125rem", { lineHeight: "1.575rem" }],
			"2xl": ["1.35rem", { lineHeight: "1.8rem" }],
			"3xl": ["1.6875rem", { lineHeight: "2.025rem" }],
			"4xl": ["2.025rem", { lineHeight: "2.25rem" }],
			"5xl": ["2.7rem", { lineHeight: "0.9rem" }],
			"6xl": ["3.375rem", { lineHeight: "0.9rem" }],
			"7xl": ["4.05rem", { lineHeight: "0.9rem" }],
			"8xl": ["5.4rem", { lineHeight: "0.9rem" }],
			"9xl": ["7.2rem", { lineHeight: "0.9rem" }],
		},
		extend: {
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.3s cubic-bezier(0.87, 0, 0.13, 1)",
				"accordion-up": "accordion-up 0.3s cubic-bezier(0.87, 0, 0.13, 1)",
			},
		},
	},
	plugins: [
		require("tailwindcss-animate"),
		require("@tailwindcss/container-queries"),
	],
} satisfies Config
