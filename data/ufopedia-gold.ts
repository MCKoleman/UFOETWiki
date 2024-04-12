import { ResearchEntry } from "@/types/research-entry"

import { VANILLA_UFOPEDIA } from "./ufopedia-vanilla"

export const GOLD_UFOPEDIA: Array<ResearchEntry> = [
	...VANILLA_UFOPEDIA,
	{
		researchID: "personal_jet_pack",
		researchName: "Personal Jet Pack",
		researchType: "Armor",
		description: "",
		prereqs: ["sentinel"],
		reqFor: [],
		type: "Armor",
		mechanicalProt: 0,
		chemicalProt: 0,
		fireProt: 0,
		price: 0,
		difficulty: "Easy",
		image: "personal_jetpack",
	},
]
