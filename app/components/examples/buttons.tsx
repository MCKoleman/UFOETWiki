import Link from "next/link"

import { Button, buttonVariants } from "@/components/ui/button"
import { Bell, EyeOff, HelpCircle, Loader2, Plus, X } from "lucide-react"

export default function ButtonsExample() {
	return (
		<div>
			<h4 className="mb-2 mt-8">Variants</h4>
			<div className="flex flex-wrap items-center gap-4">
				<Button>Default / Outline</Button>
				<Button variant="primary">Primary</Button>
				<Button variant="secondary">Secondary</Button>
				<Button variant="ghost">Ghost Button</Button>
				<Button variant="destructive">Destructive</Button>
			</div>
			<h4 className="mb-2 mt-8">Icons and Sizing</h4>
			<div className="flex flex-wrap items-center gap-4">
				<Button>
					<Bell className="mr-2 size-4" />
					With Icon
				</Button>
				<Button disabled>
					<Loader2 className="mr-2 size-4 animate-spin" />
					Disabled + Loading
				</Button>
				<Button size="lg">Large Button</Button>
				<Button variant="secondary" size="sm">
					Small Button
				</Button>
			</div>
			<h4 className="mb-2 mt-8">Icon Buttons</h4>
			<div className="flex flex-wrap items-center gap-4">
				<Button variant="ghost" size="icon">
					<X className="size-4" />
				</Button>
				<Button size="icon">
					<EyeOff className="size-4" />
				</Button>
				<Button variant="ghost" size="icon">
					<HelpCircle className="size-4" />
				</Button>
				<Button size="icon">
					<Plus className="size-4" />
				</Button>
			</div>
			<h4 className="mb-2 mt-8">Visually Swap Buttons/Links</h4>
			<div className="flex flex-wrap items-center gap-4">
				<Button variant="link">Button Looks Like Link</Button>
				<Link href="#" className={buttonVariants()}>
					Link Looks Like Button Method #1
				</Link>
				<Button variant="secondary" asChild>
					<Link href="#">Link Looks Like Button Method #2</Link>
				</Button>
			</div>
		</div>
	)
}
