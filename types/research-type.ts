import { NameLabelPair } from "./name-label-pair"

export type ResearchType =
	| "Buildings"
	| "Vehicles"
	| "Weapons"
	| "Armor"
	| "Aircrafts"
	| "AircraftEquipment"
	| "AlienLifeForms"
	| "AlienVesselsEquipment"
	| "AlienIntentions"
	| "Centaurus"
	| "None"

export const gameTypeOptions: Array<NameLabelPair<ResearchType>> = [
	{
		name: "Buildings",
		label: "Buildings",
	},
	{
		name: "Vehicles",
		label: "Vehicles",
	},
	{
		name: "Weapons",
		label: "Weapons",
	},
	{
		name: "Armor",
		label: "Armor",
	},
	{
		name: "Aircrafts",
		label: "Aircrafts",
	},
	{
		name: "AircraftEquipment",
		label: "Aircraft Equipment",
	},
	{
		name: "AlienLifeForms",
		label: "Alien Life Forms",
	},
	{
		name: "AlienVesselsEquipment",
		label: "Alien Vessels & Equipment",
	},
	{
		name: "AlienIntentions",
		label: "Alien Intentions",
	},
	{
		name: "Centaurus",
		label: "Centaurus",
	},
]
