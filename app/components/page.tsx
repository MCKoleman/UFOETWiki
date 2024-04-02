import type { ReactNode } from "react"

import AlertsExample from "./examples/alerts"
import BadgesExample from "./examples/badges"
import ButtonsExample from "./examples/buttons"
import ColorsExample from "./examples/colors"
import DialogsExample from "./examples/dialogs"
import FormsExample from "./examples/forms"
import InputsExample from "./examples/inputs"
import SeparatorsExample from "./examples/separators"
import SkeletonsExample from "./examples/skeletons"
import TabsExample from "./examples/tabs"

export default function ComponentsPage() {
	return (
		<div className="rounded-lg bg-background p-4 sm:p-6 md:p-8">
			<Example title="Colors">
				<ColorsExample />
			</Example>
			<Example title="Form Inputs">
				<InputsExample />
			</Example>
			<Example title="Buttons">
				<ButtonsExample />
			</Example>
			<div className="grid gap-4 md:grid-cols-2">
				<Example title="Separators">
					<SeparatorsExample />
				</Example>
				<Example title="Badges">
					<BadgesExample />
				</Example>
				<Example title="Skeletons">
					<SkeletonsExample />
				</Example>
				<Example title="Tabs">
					<TabsExample />
				</Example>
			</div>
			<div className="grid gap-4 md:grid-cols-2">
				<Example title="Dialogs">
					<DialogsExample />
				</Example>
				<Example title="Alerts">
					<AlertsExample />
				</Example>
				<Example title="Forms">
					<FormsExample />
				</Example>
			</div>
		</div>
	)
}

function Example({ children, title }: { children: ReactNode; title: string }) {
	return (
		<section className="mb-20">
			<header className="mb-6">
				<h3>{title}</h3>
			</header>
			<main>{children}</main>
		</section>
	)
}
