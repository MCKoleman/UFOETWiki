"use client"

import * as TogglePrimitive from "@radix-ui/react-toggle"
import { type VariantProps, cva } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
	"hover:bg-muted data-[state=on]: focus-visible:outline-outline inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:text-foreground-muted focus-visible:outline focus-visible:outline-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-hover",
	{
		variants: {
			variant: {
				default: "bg-transparent",
				outline:
					"hover: border border-input bg-transparent shadow-sm hover:bg-hover",
			},
			size: {
				default: "h-9 px-3",
				sm: "h-8 px-2",
				lg: "h-10 px-3",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
)

const Toggle = React.forwardRef<
	React.ElementRef<typeof TogglePrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
		VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
	<TogglePrimitive.Root
		ref={ref}
		className={cn(toggleVariants({ variant, size, className }))}
		{...props}
	/>
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
