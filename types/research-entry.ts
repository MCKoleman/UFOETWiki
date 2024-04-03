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
