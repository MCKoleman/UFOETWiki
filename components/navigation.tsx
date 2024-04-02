"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { navigation } from "@/config/navigation"
import { cn } from "@/lib/utils"
import { CircleUser, Menu, Package2 } from "lucide-react"

import { SearchDialog } from "@/components/shared/search"
import { Button } from "@/components/ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export const Navigation = () => {
	const pathname = usePathname()
	const isActivePath = (href: string) => pathname === href
	return (
		<header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
			<nav className="hidden shrink-0 flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
				<div className="flex items-center gap-2 text-lg font-semibold md:text-base">
					<Package2 className="h-6 w-6" />
					<span className="sr-only">Tephra</span>
				</div>
				{navigation.map((item) => (
					<Link
						key={item.href}
						href={item.href}
						className={cn(
							"transition-colors hover:text-foreground",
							isActivePath(item.href)
								? "text-foreground"
								: "text-foreground-muted",
						)}
					>
						{item.title}
					</Link>
				))}
			</nav>
			<Sheet>
				<SheetTrigger asChild>
					<Button variant="outline" size="icon" className="shrink-0 md:hidden">
						<Menu className="h-5 w-5" />
						<span className="sr-only">Toggle navigation menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side="left">
					<nav className="grid gap-6 text-lg font-medium">
						<div className="flex items-center gap-2 text-lg font-semibold">
							<Package2 className="h-6 w-6" />
							<span className="sr-only">Tephra</span>
						</div>
						<Link href="#" className="hover:text-foreground">
							Dashboard
						</Link>
						<Link
							href="/components"
							className="text-foreground-muted hover:text-foreground"
						>
							Components
						</Link>
					</nav>
				</SheetContent>
			</Sheet>
			<div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
				<SearchDialog />
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="secondary" size="icon" className="rounded-full">
							<CircleUser className="h-5 w-5" />
							<span className="sr-only">Toggle user menu</span>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>My Account</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem>Settings</DropdownMenuItem>
						<DropdownMenuItem>Support</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>Logout</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</header>
	)
}
