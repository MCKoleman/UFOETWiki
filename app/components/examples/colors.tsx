import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface ColorBlockProps extends HTMLAttributes<HTMLDivElement> {
	name?: string
}

function ColorBlock({ className, name, ...props }: ColorBlockProps) {
	return (
		<div className="flex items-center gap-x-2" {...props}>
			<div className={cn("size-10 rounded-md", className)} />
			<span className="text-sm uppercase tracking-wider text-foreground-muted">
				{name}
			</span>
		</div>
	)
}

export default function ColorsExample() {
	return (
		<div className="container flex flex-col gap-6">
			<div className="grid gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
				<ColorBlock className="border bg-background" name="Background" />
				<ColorBlock className="bg-canvas" name="Canvas" />
				<ColorBlock className="bg-primary" name="Primary" />
				<ColorBlock className="bg-secondary" name="Secondary" />
				<ColorBlock className="bg-info" name="Info" />
				<ColorBlock className="bg-success" name="Success" />
				<ColorBlock className="bg-warning" name="Warning" />
				<ColorBlock className="bg-error" name="Error" />
				<ColorBlock className="bg-active" name="Active" />
				<ColorBlock className="bg-hover" name=".bg-hover" />
				<ColorBlock className="border bg-popover" name="Popover" />
				<ColorBlock className="bg-tooltip" name="Tooltip" />
				<ColorBlock className="bg-overlay" name="Overlay" />
				<ColorBlock className="border" name="Border" />
				<ColorBlock className="border border-input" name="Input" />
				<ColorBlock
					className="border border-border outline outline-2 outline-offset-1 outline-outline"
					name="Outline"
				/>
			</div>
		</div>
	)
}
