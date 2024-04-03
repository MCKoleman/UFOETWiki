import { NameLabelPair } from "./name-label-pair"

export type GameType = "UFO" | "UFO GOLD" | "UFO PLATINUM" | "UFO2 BFM"

export const gameTypeOptions: Array<NameLabelPair<GameType>> = [
	{
		name: "UFO",
		label: "Vanilla",
	},
	{
		name: "UFO GOLD",
		label: "Gold",
	},
	{
		name: "UFO PLATINUM",
		label: "Platinum",
	},
	{
		name: "UFO2 BFM",
		label: "BFM",
	},
]
