import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function DialogsExample() {
	return (
		<div>
			<h4 className="mb-2 mt-8">Dialog</h4>
			<div className="flex flex-wrap items-center gap-4">
				<Dialog>
					<DialogTrigger asChild>
						<Button variant="outline">Edit Profile</Button>
					</DialogTrigger>
					<DialogContent className="sm:max-w-[425px]">
						<DialogHeader>
							<DialogTitle>Edit profile</DialogTitle>
							<DialogDescription>
								Make changes to your profile here. Click save when you&apos;re
								done.
							</DialogDescription>
						</DialogHeader>
						<div className="grid gap-4 p-5">
							<div className="grid grid-cols-4 items-center gap-4">
								<Label htmlFor="name" className="text-right">
									Name
								</Label>
								<Input
									id="name"
									defaultValue="Shaman Ahuja"
									className="col-span-3"
								/>
							</div>
							<div className="grid grid-cols-4 items-center gap-4">
								<Label htmlFor="username" className="text-right">
									Username
								</Label>
								<Input
									id="username"
									defaultValue="@ShamanAhuja"
									className="col-span-3"
								/>
							</div>
						</div>
						<DialogFooter>
							<Button variant="primary">Save changes</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			</div>
			<h4 className="mb-2 mt-8">Alert Dialog</h4>
			<div className="flex flex-wrap items-center gap-4">
				<AlertDialog>
					<AlertDialogTrigger asChild>
						<Button variant="destructive">Delete Account</Button>
					</AlertDialogTrigger>
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
							<AlertDialogAction asChild>
								<Button variant="destructive">Delete</Button>
							</AlertDialogAction>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialog>
			</div>
		</div>
	)
}
