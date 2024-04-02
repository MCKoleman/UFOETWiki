export type ResearchEntry = {
	research_id: string
	research_name: string
	notes: string
	prereqs: Array<string>
	req_for: Array<string>
}
