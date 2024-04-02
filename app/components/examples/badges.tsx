import { Badge } from '@/components/ui/badge'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function BadgesExample() {
	return (
		<div className='flex flex-wrap gap-4'>
			<Badge>Default</Badge>
			<Badge variant='primary'>Primary</Badge>
			<Badge variant='secondary'>Secondary</Badge>
			<Badge variant='info'>Info</Badge>
			<Badge variant='success'>Success</Badge>
			<Badge variant='warning'>Warning</Badge>
			<Badge variant='error'>Error</Badge>
			<Tabs defaultValue='messages' className='w-[400px]'>
				<TabsList>
					<TabsTrigger value='messages'>
						Messages
						<Badge className='relative bottom-1 flex aspect-square h-3.5 justify-center p-0 text-[10px]'>
							2
						</Badge>
					</TabsTrigger>
					<TabsTrigger value='contacts'>Contacts</TabsTrigger>
					<TabsTrigger value='alerts'>
						Alerts
						<Badge
							variant='error'
							className='relative bottom-1 flex aspect-square h-3.5 justify-center p-0 text-[10px]'
						>
							2
						</Badge>
					</TabsTrigger>
				</TabsList>
			</Tabs>
		</div>
	)
}
