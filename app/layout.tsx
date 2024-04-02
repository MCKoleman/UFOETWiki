import { Navigation } from "@/components/navigation"
import "./globals.css"
export { metadata } from "@/config/metadata"

import { ThemeProvider } from "@/components/providers/theme"
import { Toaster } from "@/components/ui/sonner"
import { cn } from "@/lib/utils"
import { Inter as FontSans } from "next/font/google"
import type { ReactNode } from "react"

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
})

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					"font-sans min-h-screen bg-canvas antialiased",
					fontSans.variable,
				)}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					disableTransitionOnChange
				>
					<div className="min-h-screen">
						<Navigation />
						<main className="container flex flex-1 flex-col gap-4 p-4 lg:gap-8 lg:p-8">
							{children}
						</main>
					</div>
					<Toaster richColors />
				</ThemeProvider>
			</body>
		</html>
	)
}
