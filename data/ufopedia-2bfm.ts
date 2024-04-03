import { ResearchEntry } from "@/types/research-entry"

export const BFM_UFOPEDIA: Array<ResearchEntry> = [
	{
		researchID: "advanced_cannon",
		researchName: "Advanced Cannon",
		researchType: "AircraftEquipment",
		type: "AircraftEquipment",
		description: "",
		prereqs: [],
		reqFor: ["tank_cannon"],
		accuracy: 29,
		damageMin: 11,
		damageMax: 18,
		range: 175,
		reloadTime: 200,
		capacity: 60,
		price: 42000,
		difficulty: "Doable",
	},
	{
		researchID: "laser_technology",
		researchName: "Laser Technology",
		researchType: "Weapons",
		type: "Default",
		description: "",
		prereqs: [],
		reqFor: ["medkit", "laser_pistol"],
	},
]
