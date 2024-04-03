import { NameLabelPair } from "@/types/name-label-pair"

import { Button } from "../ui/button"

interface SelectionSwitcherProps<TData extends string> {
	options: Array<NameLabelPair<TData>>
	selection: TData
	setSelection: (newSelection: TData) => void
}

export function SelectionSwitcher<TData extends string>({
	options,
	selection,
	setSelection,
}: SelectionSwitcherProps<TData>) {
	return (
		<div className="flex w-max flex-row rounded-2xl border-2 border-foreground">
			{options.map((option) => (
				<Button
					size="sm"
					key={option.name}
					variant={selection === option.name ? "primary" : "ghost"}
					onClick={() => setSelection(option.name)}
					className="rounded-2xl"
				>
					{option.label}
				</Button>
			))}
		</div>
	)
}
