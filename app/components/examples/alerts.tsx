import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, CheckCircle } from "lucide-react"

export default function AlertsExample() {
	return (
		<div className="xs:grid-cols-12 grid gap-4">
			<Alert>
				<CheckCircle className="size-4" />
				<AlertTitle>Just so you know.</AlertTitle>
				<AlertDescription>
					You can add components and dependencies to your app using the cli.
				</AlertDescription>
			</Alert>
			<Alert variant="destructive">
				<AlertCircle className="size-4" />
				<AlertTitle>Great job.</AlertTitle>
				<AlertDescription>
					You can add components and dependencies to your app using the cli.
				</AlertDescription>
			</Alert>
		</div>
	)
}
