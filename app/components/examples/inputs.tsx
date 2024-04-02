import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

export default function InputsExample() {
	return (
		<div className="grid space-x-4 space-y-4 md:grid-cols-2">
			<div>
				<h4 className="mb-2 mt-8">Radio Group</h4>
				<div className="flex flex-wrap items-center gap-4">
					<RadioGroup defaultValue="option-one">
						<div className="flex items-center space-x-2">
							<RadioGroupItem value="option-one" id="option-one" />
							<Label htmlFor="option-one" className="cursor-pointer">
								Option One
							</Label>
						</div>
						<div className="flex items-center space-x-2">
							<RadioGroupItem value="option-two" id="option-two" />
							<Label htmlFor="option-two" className="cursor-pointer">
								Option Two
							</Label>
						</div>
					</RadioGroup>
				</div>
			</div>
			<div>
				<h4 className="mb-2 mt-8">Checkboxes</h4>
				<div className="flex flex-wrap items-center gap-4">
					<div className="flex space-x-2">
						<Checkbox id="terms1" />
						<div className="grid gap-1.5">
							<Label htmlFor="terms1">Accept terms and conditions</Label>
							<p className="text-sm text-foreground-muted">
								You agree to our Terms of Service and Privacy Policy.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div>
				<h4 className="mb-2 mt-8">Text Input</h4>
				<div className="flex flex-wrap items-center gap-4">
					<div className="grid w-full max-w-sm items-center gap-1.5">
						<Label htmlFor="email">Email</Label>
						<Input
							type="email"
							placeholder="Email"
							id="email"
							autoComplete="email"
						/>
					</div>
				</div>
			</div>
			<div>
				<h4 className="mb-2 mt-8">Textarea</h4>
				<div className="flex flex-wrap items-center gap-4">
					<div className="grid w-full gap-1.5">
						<Label htmlFor="message">Your message</Label>
						<Textarea placeholder="Type your message here." id="message" />
					</div>
				</div>
			</div>
			<div>
				<h4 className="mb-2 mt-8">Select</h4>
				<div className="flex flex-wrap items-center gap-4">
					<Select>
						<SelectTrigger className="w-[180px]">
							<SelectValue placeholder="Select a fruit" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>Fruits</SelectLabel>
								<SelectItem value="apple">Apple</SelectItem>
								<SelectItem value="banana">Banana</SelectItem>
								<SelectItem value="blueberry">Blueberry</SelectItem>
								<SelectItem value="grapes">Grapes</SelectItem>
								<SelectItem value="pineapple">Pineapple</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
			</div>
			<div>
				<h4 className="mb-2 mt-8">Switch</h4>
				<div className="flex flex-wrap items-center gap-4">
					<div className="flex items-center space-x-2">
						<Switch id="airplane-mode" />
						<Label htmlFor="airplane-mode">Airplane Mode</Label>
					</div>
				</div>
			</div>
		</div>
	)
}
