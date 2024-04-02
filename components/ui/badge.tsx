import type * as React from "react"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const badgeVariants = cva(
	"inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-outline",
	{
		variants: {
			variant: {
				primary:
					"border-transparent bg-primary text-primary-contrast shadow hover:bg-primary-hover",
				secondary:
					"border-transparent bg-secondary text-secondary-contrast hover:bg-secondary-hover",
				destructive:
					"border-transparent bg-error text-error-contrast shadow hover:bg-error-hover",
				outline: "text-foreground",
				info: "border-transparent bg-info text-info-contrast shadow hover:bg-info-hover",
				success:
					"border-transparent bg-success text-success-contrast shadow hover:bg-success-hover",
				warning:
					"border-transparent bg-warning text-warning-contrast shadow hover:bg-warning-hover",
				error:
					"border-transparent bg-error text-error-contrast shadow hover:bg-error-hover",
			},
		},
		defaultVariants: {
			variant: "outline",
		},
	},
)

export interface BadgeProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
	return (
		<div className={cn(badgeVariants({ variant }), className)} {...props} />
	)
}

export { Badge, badgeVariants }
