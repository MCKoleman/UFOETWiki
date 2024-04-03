import { ResearchType } from "./research-type"

type ProductionDifficulty =
	| "None"
	| "Easy"
	| "Doable"
	| "Hard"
	| "Intense"
	| "Nightmare"
type DamageType = "Mechanical" | "Chemical" | "Fire"
type ImageOrientation = "Landscape" | "Portrait"

interface BaseResearchEntry {
	researchID: string
	researchName: string
	researchType: ResearchType
	description: string
	prereqs: Array<string>
	reqFor: Array<string>
	comments?: string
	image?: string
	imageOrientation?: ImageOrientation
}

interface BaseProducableResearchEntry extends BaseResearchEntry {
	price: number
	difficulty: ProductionDifficulty
}

interface BaseBuildingResearchEntry extends BaseResearchEntry {
	cost: number
	monthlyCost: number
	daysToBuild: number
}

interface BaseAircraftResearchEntry extends BaseProducableResearchEntry {
	armor: number
	speed: number
	fuel: number
	monthlyCost: number
}

interface BaseWeaponResearchEntry extends BaseProducableResearchEntry {
	accuracy: number
}

interface BaseVehicleResearchEntry extends BaseProducableResearchEntry {
	ap: number
	hp: number
	armor: number
}

interface TankWeaponResearchEntry {
	name: string
	damage: number
	accuracy: number
}

interface ArmorResearchEntry extends BaseProducableResearchEntry {
	type: "Armor"
	mechanicalProt: number
	chemicalProt: number
	fireProt: number
}

interface MindShieldResearchEntry extends BaseProducableResearchEntry {
	type: "MindShield"
	psiDefense: number
}

interface RocketLauncherResearchEntry extends BaseWeaponResearchEntry {
	type: "RocketLauncher"
}

interface WeaponResearchEntry extends BaseWeaponResearchEntry {
	type: "Weapon"
	damage: number
	capacity: number
}

interface GrenadeResearchEntry extends BaseWeaponResearchEntry {
	type: "Grenade"
	damage: number
}

interface MedkitResearchEntry extends BaseProducableResearchEntry {
	type: "Medkit"
	capacity: number
}

interface AlienLifeFormResearchEntry extends BaseResearchEntry {
	type: "AlienLifeForm"
	xpValue: number
	mechanicalProt: number
	chemicalProt: number
	fireProt: number
}

interface DefaultResearchEntry extends BaseResearchEntry {
	type: "Default"
}

interface AircraftResearchEntry extends BaseAircraftResearchEntry {
	type: "Aircraft"
}

interface TransporterAircraftResearchEntry extends BaseAircraftResearchEntry {
	type: "TransporterAircraft"
	placesForUnits: number
}

interface AircraftEquipmentResearchEntry extends BaseProducableResearchEntry {
	type: "AircraftEquipment"
	accuracy: number
	damageMin: number
	damageMax: number
	range: number
	reloadTime: number
	capacity: number
}

interface ProducableResearchEntry extends BaseProducableResearchEntry {
	type: "Producable"
}

interface BuildingResearchEntry extends BaseBuildingResearchEntry {
	type: "Building"
}

interface DetectionBuildingResearchEntry extends BaseBuildingResearchEntry {
	type: "DetectionBuilding"
	range: number
}

interface DefenseBuildingResearchEntry extends BaseBuildingResearchEntry {
	type: "DefenseBuilding"
	damageMin: number
	damageMax: number
	accuracy: number
}

interface AircraftShieldResearchEntry extends BaseProducableResearchEntry {
	type: "AircraftShield"
	armor: number
}

interface SingleWeaponVehicleResearchEntry extends BaseVehicleResearchEntry {
	type: "SingleWeaponVehicle"
	weapon1: TankWeaponResearchEntry
}

interface DoubleWeaponVehicleResearchEntry extends BaseVehicleResearchEntry {
	type: "DoubleWeaponVehicle"
	weapon1: TankWeaponResearchEntry
	weapon2: TankWeaponResearchEntry
}

export type ResearchEntry =
	| DefaultResearchEntry
	| ProducableResearchEntry
	| AlienLifeFormResearchEntry
	| BuildingResearchEntry
	| DetectionBuildingResearchEntry
	| DefenseBuildingResearchEntry
	| AircraftResearchEntry
	| TransporterAircraftResearchEntry
	| AircraftEquipmentResearchEntry
	| AircraftShieldResearchEntry
	| SingleWeaponVehicleResearchEntry
	| DoubleWeaponVehicleResearchEntry
	| MindShieldResearchEntry
	| ArmorResearchEntry
	| MedkitResearchEntry
	| RocketLauncherResearchEntry
	| WeaponResearchEntry
	| GrenadeResearchEntry

export const displayResearchEntry = (item: ResearchEntry): Array<string> => {
	switch (item.type) {
		case "Aircraft":
			return [
				`Armor: ${item.armor}`,
				`Speed: ${item.speed}`,
				`Fuel: ${item.fuel}`,
				`Monthly Cost: ${item.monthlyCost}`,
				`Price: ${item.price}`,
				`Production Difficulty: ${item.difficulty}`,
			]
		case "TransporterAircraft":
			return [
				`Armor: ${item.armor}`,
				`Speed: ${item.speed}`,
				`Fuel: ${item.fuel}`,
				`Monthly Cost: ${item.monthlyCost}`,
				`Places For Units: ${item.placesForUnits}`,
				`Price: ${item.price}`,
				`Production Difficulty: ${item.difficulty}`,
			]
		case "AircraftEquipment":
			return [
				`Accuracy: ${item.accuracy}`,
				`Damage: ${item.damageMin}-${item.damageMax}`,
				`Range: ${item.range}`,
				`Reload Time: ${item.reloadTime}`,
				`Capacity: ${item.capacity}`,
				`Price: ${item.price}`,
				`Production Difficulty: ${item.difficulty}`,
			]
		case "AircraftShield":
			return [
				`Armor: ${item.armor}`,
				`Price: ${item.price}`,
				`Production Difficulty: ${item.difficulty}`,
			]
		case "AlienLifeForm":
			return [
				`Value: ${item.xpValue}xp`,
				`Mechanical Protection: ${item.mechanicalProt}`,
				`Chemical Protection: ${item.chemicalProt}`,
				`Fire Protection: ${item.fireProt}`,
			]
		case "Armor":
			return [
				`Mechanical Protection: ${item.mechanicalProt}`,
				`Chemical Protection: ${item.chemicalProt}`,
				`Fire Protection: ${item.fireProt}`,
			]
		case "Medkit":
			return [
				`Capacity: ${item.capacity}`,
				`Price: ${item.price}`,
				`Production Difficulty: ${item.difficulty}`,
			]
		case "MindShield":
			return [
				`Psi Defense: ${item.psiDefense}`,
				`Price: ${item.price}`,
				`Production Difficulty: ${item.difficulty}`,
			]
		case "Grenade":
			return [
				`Accuracy: ${item.accuracy}`,
				`Damage: ${item.damage}`,
				`Price: ${item.price}`,
				`Production Difficulty: ${item.difficulty}`,
			]
		case "Weapon":
			return [
				`Accuracy: ${item.accuracy}`,
				`Damage: ${item.damage}`,
				`Capacity: ${item.capacity}`,
				`Price: ${item.price}`,
				`Production Difficulty: ${item.difficulty}`,
			]
		case "RocketLauncher":
			return [
				`Accuracy: ${item.accuracy}`,
				`Price: ${item.price}`,
				`Production Difficulty: ${item.difficulty}`,
			]
		case "Building":
			return [
				`Cost: ${item.cost}`,
				`Monthly Cost: ${item.monthlyCost}`,
				`Days to Build: ${item.daysToBuild}`,
			]
		case "DefenseBuilding":
			return [
				`Cost: ${item.cost}`,
				`Monthly Cost: ${item.monthlyCost}`,
				`Damage: ${item.damageMin}-${item.damageMax}`,
				`Accuracy: ${item.accuracy}%`,
				`Days to Build: ${item.daysToBuild}`,
			]
		case "DetectionBuilding":
			return [
				`Cost: ${item.cost}`,
				`Monthly Cost: ${item.monthlyCost}`,
				`Range: ${item.range}`,
				`Days to Build: ${item.daysToBuild}`,
			]
		case "DoubleWeaponVehicle":
			return [
				`AP: ${item.ap}`,
				`HP: ${item.hp}`,
				`Armor: ${item.armor}`,
				`Weapon1: ${item.weapon1.name}`,
				`Accuracy: ${item.weapon1.accuracy}`,
				`Damage: ${item.weapon1.damage}`,
				`Weapon2: ${item.weapon2.name}`,
				`Accuracy: ${item.weapon2.accuracy}`,
				`Damage: ${item.weapon2.damage}`,
				`Price: ${item.price}`,
				`Production Difficulty: ${item.difficulty}`,
			]
		case "SingleWeaponVehicle":
			return [
				`AP: ${item.ap}`,
				`HP: ${item.hp}`,
				`Armor: ${item.armor}`,
				`Weapon1: ${item.weapon1.name}`,
				`Accuracy: ${item.weapon1.accuracy}`,
				`Damage: ${item.weapon1.damage}`,
				`Price: ${item.price}`,
				`Production Difficulty: ${item.difficulty}`,
			]
		case "Producable":
			return [
				`Price: ${item.price}`,
				`Production Difficulty: ${item.difficulty}`,
			]
		case "Default":
			return []
	}
}
