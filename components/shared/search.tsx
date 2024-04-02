"use client"

import { useEffect, useState } from "react"
import { BellPlus, MessageCircleWarning, Moon, Search, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { toast } from "sonner"

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "@/components/ui/alert-dialog"

import { Button } from "../ui/button"
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "../ui/command"
import { Dialog, DialogContent } from "../ui/dialog"

export const SearchDialog = () => {
	const [open, setOpen] = useState(false)
	const [showAlertDialog, setShowAlertDialog] = useState(false)
	const { theme, setTheme } = useTheme()

	// Toggle the menu when ⌘K is pressed
	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault()
				setOpen((open) => !open)
			}
		}
		document.addEventListener("keydown", down)
		return () => document.removeEventListener("keydown", down)
	}, [])

	return (
		<>
			<div className="ml-auto flex-1 sm:flex-initial">
				<Button
					className="w-[140px] cursor-text items-center justify-between px-3 text-foreground-muted sm:w-[300px] md:w-[200px] lg:w-[300px]"
					variant="outline"
					onClick={() => setOpen(true)}
				>
					<span className="flex items-center">
						<Search className="mr-2 size-4" />
						<span>Search...</span>
					</span>
					<span className="text-xs">⌘K</span>
				</Button>
			</div>
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogContent
					className="w-[42rem] max-w-[80dvw] overflow-hidden rounded-md p-0"
					hideClose
				>
					<Command
						loop
						className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-foreground-muted [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]]:px-4 [&_[cmdk-input-wrapper]_svg]:size-5 [&_[cmdk-input]]:h-16 [&_[cmdk-item]]:rounded [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]]:text-base [&_[cmdk-item]_svg]:size-5"
					>
						<CommandInput className="h-16 text-xl" />
						<CommandList>
							<CommandEmpty>No results found.</CommandEmpty>
							<CommandGroup heading="Components">
								<CommandItem
									onSelect={() => {
										toast.warning("This is a test warning", {
											description: "Do you want to try again?",
											action: {
												label: "Retry",
												onClick: () =>
													toast.success("You clicked the retry button!"),
											},
										})
										setOpen(false)
									}}
								>
									<BellPlus className="mr-2 size-4" />
									Show Toast
								</CommandItem>
								<CommandItem
									onSelect={() => {
										setShowAlertDialog(true)
										setOpen(false)
									}}
								>
									<MessageCircleWarning className="mr-2 size-4" />
									Show Alert Dialog
								</CommandItem>
							</CommandGroup>
							<CommandGroup heading="Commands">
								<CommandItem
									onSelect={() => {
										setTheme(theme === "dark" ? "light" : "dark")
										setOpen(false)
									}}
								>
									{theme === "dark" ? (
										<Sun className="mr-2 size-4" />
									) : (
										<Moon className="mr-2 size-4" />
									)}
									Set {theme === "dark" ? "light" : "dark"} mode
								</CommandItem>
							</CommandGroup>
						</CommandList>
					</Command>
				</DialogContent>
			</Dialog>
			<AlertDialog open={showAlertDialog} onOpenChange={setShowAlertDialog}>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
						<AlertDialogDescription>
							This action cannot be undone. This will permanently delete your
							account and remove your data from our servers.
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel>Cancel</AlertDialogCancel>
						<AlertDialogAction>Continue</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</>
	)
}
