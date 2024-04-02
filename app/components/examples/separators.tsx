import { Separator } from "@/components/ui/separator"

export default function SeparatorsExample() {
	return (
		<div className="max-w-xs">
			<div className="space-y-1">
				<h4 className="font-medium leading-none">Radix Primitives</h4>
				<p className="text-foreground-muted">
					An open-source UI component library.
				</p>
			</div>
			<Separator className="my-4" />
			<div className="flex h-5 items-center space-x-4">
				<div>Blog</div>
				<Separator orientation="vertical" />
				<div>Docs</div>
				<Separator orientation="vertical" />
				<div>Source</div>
			</div>
		</div>
	)
}
