import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function TabsExample() {
	return (
		<Tabs defaultValue='account' className='w-[400px]'>
			<TabsList>
				<TabsTrigger value='account'>Account</TabsTrigger>
				<TabsTrigger value='password'>Password</TabsTrigger>
				<TabsTrigger value='more'>More</TabsTrigger>
				<TabsTrigger value='more2'>Even More</TabsTrigger>
			</TabsList>
			<TabsContent value='account'>
				Make changes to your account here.
			</TabsContent>
			<TabsContent value='password'>Change your password here.</TabsContent>
			<TabsContent value='more'>This is more.</TabsContent>
			<TabsContent value='more2'>This is more...2.</TabsContent>
		</Tabs>
	)
}
