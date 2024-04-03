import { ResearchEntry } from "@/types/research-entry"

export const GOLD_UFOPEDIA: Array<ResearchEntry> = [
	{
		researchID: "advanced_cannon",
		researchName: "Advanced Cannon",
		researchType: "AircraftEquipment",
		description: "",
		prereqs: [],
		type: "AircraftEquipment",
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
		researchID: "tank_cannon",
		researchName: "Tank Cannon",
		researchType: "Vehicles",
		description: "",
		prereqs: ["advanced_cannon"],
		reqFor: ["fire_hammer"],
	},
	{
		researchID: "fire_hammer",
		researchName: "Fire hammer",
		researchType: "AircraftEquipment",
		description: "",
		prereqs: ["tank_cannon"],
		reqFor: ["tank_rocket_launcher"],
		type: "AircraftEquipment",
		accuracy: 0,
		damageMin: 0,
		damageMax: 0,
		range: 0,
		reloadTime: 0,
		capacity: 0,
		price: 0,
		difficulty: "None",
	},
	{
		researchID: "tank_rocket_launcher",
		researchName: "Tank Rocket Launcher",
		researchType: "Vehicles",
		description: "",
		prereqs: ["fire_hammer"],
		reqFor: ["advanced_rocket_defense"],
	},
	{
		researchID: "advanced_rocket_defense",
		researchName: "Advanced Rocket Defense",
		researchType: "Buildings",
		description: "",
		prereqs: ["tank_rocket_launcher"],
		reqFor: [],
	},
	{
		researchID: "laser_technology",
		researchName: "Laser Technology",
		researchType: "Weapons",
		description: "",
		prereqs: [],
		reqFor: ["medkit", "laser_pistol"],
	},
	{
		researchID: "medkit",
		researchName: "Medkit",
		researchType: "Armor",
		description: "",
		prereqs: ["laser_technology"],
		reqFor: [],
	},
	{
		researchID: "laser_pistol",
		researchName: "Laser Pistol",
		researchType: "Weapons",
		description: "",
		prereqs: ["laser_technology"],
		reqFor: ["laser_rifle"],
	},
	{
		researchID: "laser_rifle",
		researchName: "Laser Rifle",
		researchType: "Weapons",
		description: "",
		prereqs: ["laser_pistol"],
		reqFor: ["heavy_laser"],
	},
	{
		researchID: "heavy_laser",
		researchName: "Heavy Laser",
		researchType: "Weapons",
		description: "",
		prereqs: ["laser_rifle"],
		reqFor: ["laser_cannon"],
	},
	{
		researchID: "laser_cannon",
		researchName: "Laser Cannon",
		researchType: "AircraftEquipment",
		description: "",
		prereqs: ["heavy_laser"],
		reqFor: ["laser_defense"],
		type: "AircraftEquipment",
		accuracy: 0,
		damageMin: 0,
		damageMax: 0,
		range: 0,
		reloadTime: 0,
		capacity: 0,
		price: 0,
		difficulty: "None",
	},
	{
		researchID: "laser_defense",
		researchName: "Laser Defense",
		researchType: "Buildings",
		description: "",
		prereqs: ["laser_cannon"],
		reqFor: ["laser_shield", "akew_technology"],
	},
	{
		researchID: "laser_shield",
		researchName: "Laser Shield",
		researchType: "AircraftEquipment",
		description: "",
		prereqs: ["laser_defense"],
		reqFor: [],
		type: "AircraftShield",
		armor: 0,
		price: 0,
		difficulty: "None",
	},
	{
		researchID: "plasma_technology",
		researchName: "Plasma Technology",
		researchType: "Weapons",
		description: "",
		prereqs: ["alien_origins"],
		reqFor: ["plasma_grenade", "plasma_pistol"],
	},
	{
		researchID: "plasma_grenade",
		researchName: "Plasma Grenade",
		researchType: "Weapons",
		description: "",
		prereqs: ["plasma_technology"],
		reqFor: [],
	},
	{
		researchID: "plasma_pistol",
		researchName: "Plasma Pistol",
		researchType: "Weapons",
		description: "",
		prereqs: ["plasma_technology"],
		reqFor: ["plasma_rifle"],
	},
	{
		researchID: "plasma_rifle",
		researchName: "Plasma Rifle",
		researchType: "Weapons",
		description: "",
		prereqs: ["plasma_pistol"],
		reqFor: ["heavy_plasma"],
	},
	{
		researchID: "heavy_plasma",
		researchName: "Heavy Plasma",
		researchType: "Weapons",
		description: "",
		prereqs: ["plasma_rifle"],
		reqFor: ["plasma_cannon"],
	},
	{
		researchID: "plasma_cannon",
		researchName: "Plasma Cannon",
		researchType: "AircraftEquipment",
		description: "",
		prereqs: ["heavy_plasma"],
		reqFor: ["desert_hunter"],
		type: "AircraftEquipment",
		accuracy: 0,
		damageMin: 0,
		damageMax: 0,
		range: 0,
		reloadTime: 0,
		capacity: 0,
		price: 0,
		difficulty: "None",
	},
	{
		researchID: "desert_hunter",
		researchName: "Desert Hunter",
		researchType: "Vehicles",
		description: "",
		prereqs: ["plasma_cannon"],
		reqFor: [],
	},
	{
		researchID: "plasma_defense",
		researchName: "Plasma Defense",
		researchType: "Buildings",
		description: "",
		prereqs: ["plasma_cannon"],
		reqFor: ["green_thorn_launcher", "ion_technology", "akew_technology"],
	},
	{
		researchID: "green_thorn_launcher",
		researchName: "Green Thorn Launcher",
		researchType: "AircraftEquipment",
		description: "",
		prereqs: ["plasma_defense"],
		reqFor: [],
		type: "AircraftEquipment",
		accuracy: 0,
		damageMin: 0,
		damageMax: 0,
		range: 0,
		reloadTime: 0,
		capacity: 0,
		price: 0,
		difficulty: "None",
	},
	{
		researchID: "ion_technology",
		researchName: "Ion Technology",
		researchType: "Weapons",
		description: "",
		prereqs: ["plasma_defense", "dead_destroyer"],
		reqFor: ["ion_pistol"],
	},
	{
		researchID: "ion_pistol",
		researchName: "Ion Pistol",
		researchType: "Weapons",
		description: "",
		prereqs: ["ion_technology"],
		reqFor: ["ion_rifle"],
	},
	{
		researchID: "ion_rifle",
		researchName: "Ion Rifle",
		researchType: "Weapons",
		description: "",
		prereqs: ["ion_pistol"],
		reqFor: ["heavy_ion"],
	},
	{
		researchID: "heavy_ion",
		researchName: "Heavy Ion",
		researchType: "Weapons",
		description: "",
		prereqs: ["ion_rifle"],
		reqFor: ["ion_cannon", "cyclops"],
	},
	{
		researchID: "ion_cannon",
		researchName: "Ion Cannon",
		researchType: "AircraftEquipment",
		description: "",
		prereqs: ["heavy_ion"],
		reqFor: ["ion_defense"],
		type: "AircraftEquipment",
		accuracy: 0,
		damageMin: 0,
		damageMax: 0,
		range: 0,
		reloadTime: 0,
		capacity: 0,
		price: 0,
		difficulty: "None",
	},
	{
		researchID: "ion_defense",
		researchName: "Ion Defense",
		researchType: "Buildings",
		description: "",
		prereqs: ["ion_cannon"],
		reqFor: ["ion_shield", "thunderbolt_launcher", "akew_technology"],
	},
	{
		researchID: "ion_shield",
		researchName: "Ion Shield",
		researchType: "AircraftEquipment",
		description: "",
		prereqs: ["ion_defense"],
		reqFor: [],
		type: "AircraftShield",
		armor: 0,
		price: 0,
		difficulty: "None",
	},
	{
		researchID: "thunderbolt_launcher",
		researchName: "Thunderbolt Launcher",
		researchType: "AircraftEquipment",
		description: "",
		prereqs: ["ion_defense"],
		reqFor: [],
		type: "AircraftEquipment",
		accuracy: 0,
		damageMin: 0,
		damageMax: 0,
		range: 0,
		reloadTime: 0,
		capacity: 0,
		price: 0,
		difficulty: "None",
	},
	{
		researchID: "cyclops",
		researchName: "Cyclops",
		researchType: "Vehicles",
		description: "",
		prereqs: ["heavy_ion", "ufo_advanced_craft_armor"],
		reqFor: [],
	},
	{
		researchID: "akew_technology",
		researchName: "AKEW Technology",
		researchType: "Weapons",
		description: "",
		prereqs: ["plasma_defense", "laser_defense", "ion_defense"],
		reqFor: ["akew_pistol"],
	},
	{
		researchID: "akew_pistol",
		researchName: "AKEW Pistol",
		researchType: "Weapons",
		description: "",
		prereqs: ["akew_technology"],
		reqFor: ["akew_rifle"],
	},
	{
		researchID: "akew_rifle",
		researchName: "AKEW Rifle",
		researchType: "Weapons",
		description: "",
		prereqs: ["akew_pistol"],
		reqFor: ["akew_cannon"],
	},
	{
		researchID: "akew_cannon",
		researchName: "AKEW Cannon",
		researchType: "AircraftEquipment",
		description: "",
		prereqs: ["akew_rifle"],
		reqFor: ["akew_defense", "anaconda"],
		type: "AircraftEquipment",
		accuracy: 0,
		damageMin: 0,
		damageMax: 0,
		range: 0,
		reloadTime: 0,
		capacity: 0,
		price: 0,
		difficulty: "None",
	},
	{
		researchID: "akew_defense",
		researchName: "AKEW Defense",
		researchType: "Buildings",
		description: "",
		prereqs: ["akew_cannon"],
		reqFor: ["eeew_technology"],
	},
	{
		researchID: "anaconda",
		researchName: "Anaconda",
		researchType: "Vehicles",
		description: "",
		prereqs: ["akew_cannon", "ufo_craft_armor"],
		reqFor: [],
	},
	{
		researchID: "eeew_technology",
		researchName: "EEEW Technology",
		researchType: "Weapons",
		description: "",
		prereqs: ["akew_defense"],
		reqFor: ["stasis_grenade"],
	},
	{
		researchID: "stasis_grenade",
		researchName: "Stasis Grenade",
		researchType: "Weapons",
		description: "",
		prereqs: ["eeew_technology"],
		reqFor: ["eeew_rifle"],
	},
	{
		researchID: "eeew_rifle",
		researchName: "EEEW Rifle",
		researchType: "Weapons",
		description: "",
		prereqs: ["stasis_grenade"],
		reqFor: ["long_lance_launcher", "eeew_shield", "particle_technology"],
	},
	{
		researchID: "long_lance_launcher",
		researchName: "Long Lance Launcher",
		researchType: "AircraftEquipment",
		description: "",
		prereqs: ["eeew_rifle", "dead_trilobyte"],
		reqFor: [],
		type: "AircraftEquipment",
		accuracy: 0,
		damageMin: 0,
		damageMax: 0,
		range: 0,
		reloadTime: 0,
		capacity: 0,
		price: 0,
		difficulty: "None",
	},
	{
		researchID: "eeew_shield",
		researchName: "EEEW Shield",
		researchType: "AircraftEquipment",
		description: "",
		prereqs: ["eeew_rifle", "dead_trilobyte"],
		reqFor: [],
		type: "AircraftShield",
		armor: 0,
		price: 0,
		difficulty: "None",
	},
	{
		researchID: "particle_technology",
		researchName: "Particle Technology",
		researchType: "Weapons",
		description: "",
		prereqs: ["eeew_rifle", "dead_phantom"],
		reqFor: ["particle_pistol"],
	},
	{
		researchID: "particle_pistol",
		researchName: "Particle Pistol",
		researchType: "Weapons",
		description: "",
		prereqs: ["particle_technology"],
		reqFor: ["particle_rifle"],
	},
	{
		researchID: "particle_rifle",
		researchName: "Particle Rifle",
		researchType: "Weapons",
		description: "",
		prereqs: ["particle_pistol"],
		reqFor: ["particle_cannon"],
	},
	{
		researchID: "particle_cannon",
		researchName: "Particle Cannon",
		researchType: "AircraftEquipment",
		description: "",
		prereqs: ["particle_rifle"],
		reqFor: ["hammer", "particle_shield"],
		type: "AircraftEquipment",
		accuracy: 0,
		damageMin: 0,
		damageMax: 0,
		range: 0,
		reloadTime: 0,
		capacity: 0,
		price: 0,
		difficulty: "None",
	},
	{
		researchID: "hammer",
		researchName: "Hammer",
		researchType: "Vehicles",
		description: "",
		prereqs: ["particle_cannon"],
		reqFor: [],
	},
	{
		researchID: "particle_defense",
		researchName: "Particle Defense",
		researchType: "Buildings",
		description: "",
		prereqs: ["particle_cannon"],
		reqFor: ["particle_shield"],
	},
	{
		researchID: "particle_shield",
		researchName: "Particle Shield",
		researchType: "AircraftEquipment",
		description: "",
		prereqs: ["particle_defense"],
		reqFor: [],
		type: "AircraftShield",
		armor: 0,
		price: 0,
		difficulty: "None",
	},
	{
		researchID: "scout",
		researchName: "Scout",
		researchType: "AlienVesselsEquipment",
		description: "",
		prereqs: [],
		reqFor: ["ufo_flight_control", "ufo_craft_armor"],
	},
	{
		researchID: "ufo_flight_control",
		researchName: "UFO Flight Control",
		researchType: "AlienVesselsEquipment",
		description: "",
		prereqs: ["scout"],
		reqFor: ["advanced_detection_system"],
	},
	{
		researchID: "advanced_detection_system",
		researchName: "Advanced Detection System",
		researchType: "Buildings",
		description: "",
		prereqs: ["ufo_flight_control"],
		reqFor: [],
	},
	{
		researchID: "ufo_craft_armor",
		researchName: "UFO Craft Armor",
		researchType: "AlienVesselsEquipment",
		description: "",
		prereqs: ["scout"],
		reqFor: ["thunder", "beekeeper_bk01"],
	},
	{
		researchID: "fighter",
		researchName: "Fighter",
		researchType: "AlienVesselsEquipment",
		description: "",
		prereqs: [],
		reqFor: ["ufo_alien_berth"],
	},
	{
		researchID: "ufo_alien_berth",
		researchName: "UFO Alien Berth",
		researchType: "AlienVesselsEquipment",
		description: "",
		prereqs: ["fighter"],
		reqFor: ["surgery"],
	},
	{
		researchID: "surgery",
		researchName: "Surgery",
		researchType: "Buildings",
		description: "",
		prereqs: ["ufo_alien_berth"],
		reqFor: ["advanced_laboratory", "advanced_medkit"],
	},
	{
		researchID: "advanced_laboratory",
		researchName: "Advanced Laboratory",
		researchType: "Buildings",
		description: "",
		prereqs: ["surgery"],
		reqFor: ["laboratory"],
	},
	{
		researchID: "advanced_medkit",
		researchName: "Advanced Medkit",
		researchType: "Armor",
		description: "",
		prereqs: ["surgery"],
		reqFor: [],
	},
	{
		researchID: "cruiser",
		researchName: "Cruiser",
		researchType: "AlienVesselsEquipment",
		description: "",
		prereqs: [],
		reqFor: ["ufo_power_distribution", "ufo_gravity_control"],
	},
	{
		researchID: "ufo_power_distribution",
		researchName: "UFO Power Distribution",
		researchType: "AlienVesselsEquipment",
		description: "",
		prereqs: ["cruiser"],
		reqFor: ["distribution_point"],
	},
	{
		researchID: "ufo_gravity_control",
		researchName: "UFO Gravity Control",
		researchType: "AlienVesselsEquipment",
		description: "",
		prereqs: ["cruiser", "ufo_gravity_engine"],
		reqFor: ["nightwolf", "exterminator"],
	},
	{
		researchID: "ufo_gravity_engine",
		researchName: "UFO Gravity Engine",
		researchType: "AlienVesselsEquipment",
		description: "",
		prereqs: ["avonium"],
		reqFor: ["ufo_gravity_control"],
	},
	{
		researchID: "battlecruiser",
		researchName: "Battlecruiser",
		researchType: "AlienVesselsEquipment",
		description: "",
		prereqs: [],
		reqFor: [
			"ufo_reactor",
			"ufo_advanced_flight_control",
			"ufo_advanced_craft_armor",
		],
	},
	{
		researchID: "ufo_reactor",
		researchName: "UFO Reactor",
		researchType: "AlienVesselsEquipment",
		description: "",
		prereqs: ["battlecruiser"],
		reqFor: ["exterminator", "ufo_energy_accumulator"],
	},
	{
		researchID: "ufo_energy_accumulator",
		researchName: "UFO Energy Accumulator",
		researchType: "AlienVesselsEquipment",
		description: "",
		prereqs: ["ufo_reactor", "ufo_gravity_engine"],
		reqFor: ["engine"],
	},
	{
		researchID: "ufo_advanced_flight_control",
		researchName: "UFO Advanced Flight Control",
		researchType: "AlienVesselsEquipment",
		description: "",
		prereqs: ["battlecruiser"],
		reqFor: [],
	},
	{
		researchID: "ufo_advanced_craft_armor",
		researchName: "UFO Advanced Craft Armor",
		researchType: "AlienVesselsEquipment",
		description: "",
		prereqs: ["battlecruiser"],
		reqFor: ["desert_viper", "spaceship_alloys", "exterminator"],
	},
	{
		researchID: "spaceship_alloys",
		researchName: "Spaceship Alloys",
		researchType: "AlienVesselsEquipment",
		description: "",
		prereqs: ["ufo_advanced_craft_armor"],
		reqFor: ["jag_d1", "project_centaurus", "desert_tortoise"],
	},
	{
		researchID: "battleship",
		researchName: "Battleship",
		researchType: "AlienVesselsEquipment",
		description: "",
		prereqs: [],
		reqFor: ["ufo_space_flight_computer", "ufo_freezing_unit"],
	},
	{
		researchID: "ufo_space_flight_computer",
		researchName: "UFO Space Flight Computer",
		researchType: "AlienVesselsEquipment",
		description: "",
		prereqs: ["battleship"],
		reqFor: ["navigation_room"],
	},
	{
		researchID: "ufo_freezing_unit",
		researchName: "UFO Freezing Unit",
		researchType: "AlienVesselsEquipment",
		description: "",
		prereqs: ["battleship"],
		reqFor: ["hibernation_room"],
	},
	{
		researchID: "dead_larva",
		researchName: "Dead Larva",
		researchType: "AlienLifeForms",
		description: "",
		prereqs: [],
		reqFor: ["chemical_grenade"],
	},
	{
		researchID: "chemical_grenade",
		researchName: "Chemical Grenade",
		researchType: "Weapons",
		description: "",
		prereqs: ["dead_larva"],
		reqFor: ["stun_grenade", "chemical_rocket"],
	},
	{
		researchID: "stun_grenade",
		researchName: "Stun Grenade",
		researchType: "Weapons",
		description: "",
		prereqs: ["chemical_grenade"],
		reqFor: [],
	},
	{
		researchID: "chemical_rocket",
		researchName: "Chemical Rocket",
		researchType: "Weapons",
		description: "",
		prereqs: ["chemical_grenade"],
		reqFor: ["ignitable_rocket", "chemogun"],
	},
	{
		researchID: "ignitable_rocket",
		researchName: "Ignitable Rocket",
		researchType: "Weapons",
		description: "",
		prereqs: ["chemical_rocket"],
		reqFor: ["flamethrower"],
	},
	{
		researchID: "chemogun",
		researchName: "Chemogun",
		researchType: "Weapons",
		description: "",
		prereqs: ["chemical_rocket"],
		reqFor: [],
	},
	{
		researchID: "flamethrower",
		researchName: "Flamethrower",
		researchType: "Weapons",
		description: "",
		prereqs: ["ignitable_rocket"],
		reqFor: [],
	},
	{
		researchID: "dead_chaser",
		researchName: "Dead Chaser",
		researchType: "AlienLifeForms",
		description: "",
		prereqs: [],
		reqFor: [],
	},
	{
		researchID: "dead_vipon",
		researchName: "Dead Vipon",
		researchType: "AlienLifeForms",
		description: "",
		prereqs: [],
		reqFor: [],
	},
	{
		researchID: "dead_inquisitor",
		researchName: "Dead Inquisitor",
		researchType: "AlienLifeForms",
		description: "",
		prereqs: [],
		reqFor: [],
	},
	{
		researchID: "dead_king_larva",
		researchName: "Dead King Larva",
		researchType: "AlienLifeForms",
		description: "",
		prereqs: [],
		reqFor: [],
	},
	{
		researchID: "dead_observer",
		researchName: "Dead Observer",
		researchType: "AlienLifeForms",
		description: "",
		prereqs: [],
		reqFor: [],
	},
	{
		researchID: "dead_sentinel",
		researchName: "Dead Sentinel",
		researchType: "AlienLifeForms",
		description: "",
		prereqs: [],
		reqFor: [],
	},
	{
		researchID: "dead_terror_floater",
		researchName: "Dead Terror Floater",
		researchType: "AlienLifeForms",
		description: "",
		prereqs: [],
		reqFor: [],
	},
	{
		researchID: "dead_preacher",
		researchName: "Dead Preacher",
		researchType: "AlienLifeForms",
		description: "",
		prereqs: [],
		reqFor: ["advanced_mind_shield"],
	},
	{
		researchID: "advanced_mind_shield",
		researchName: "Advanced Mind Shield",
		researchType: "Armor",
		description: "",
		prereqs: ["dead_preacher"],
		reqFor: [],
	},
	{
		researchID: "dead_hallucinoid",
		researchName: "Dead Hallucinoid",
		researchType: "AlienLifeForms",
		description: "",
		prereqs: [],
		reqFor: ["mind_shield"],
	},
	{
		researchID: "mind_shield",
		researchName: "Mind Shield",
		researchType: "Armor",
		description: "",
		prereqs: ["dead_hallucinoid"],
		reqFor: [],
	},
	{
		researchID: "dead_telemat",
		researchName: "Dead Telemat",
		researchType: "AlienLifeForms",
		description: "",
		prereqs: [],
		reqFor: ["advanced_chem_grenade", "waspkeeper_vk02"],
	},
	{
		researchID: "advanced_chem_grenade",
		researchName: "Advanced Chem Grenade",
		researchType: "Weapons",
		description: "",
		prereqs: ["dead_telemat"],
		reqFor: [],
	},
	{
		researchID: "dead_phantom",
		researchName: "Dead Phantom",
		researchType: "AlienLifeForms",
		description: "",
		prereqs: [],
		reqFor: ["particle_technology"],
	},
	{
		researchID: "dead_destroyer",
		researchName: "Dead Destroyer",
		researchType: "AlienLifeForms",
		description: "",
		prereqs: [],
		reqFor: ["ion_technology"],
	},
	{
		researchID: "dead_trilobyte",
		researchName: "Dead Trilobyte",
		researchType: "AlienLifeForms",
		description: "",
		prereqs: [],
		reqFor: ["eeew_shield", "long_lance_launcher"],
	},
	{
		researchID: "live_alien",
		researchName: "Live Alien",
		researchType: "AlienIntentions",
		description: "",
		prereqs: [],
		reqFor: [],
	},
	{
		researchID: "living_aliens",
		researchName: "Living Aliens",
		researchType: "AlienIntentions",
		description: "",
		prereqs: ["live_alien"],
		reqFor: [],
	},
	{
		researchID: "commander",
		researchName: "Alien Commander",
		researchType: "AlienIntentions",
		description: "",
		prereqs: [],
		reqFor: [
			"alien_origins",
			"the_alien_mothership",
			"avonium",
			"aliens_attack_on_earth",
			"avonium_supply_container",
			"energy_crisis",
			"avonium_on_esperanza",
			"starport",
			"shuttle",
			"sro-2_device",
			"revolt_on_earth",
			"vampire_engine",
		],
	},
	{
		researchID: "alien_origins",
		researchName: "Alien Origins",
		researchType: "AlienIntentions",
		description: "",
		prereqs: ["commander"],
		reqFor: ["plasma_technology"],
	},
	{
		researchID: "the_alien_mothership",
		researchName: "The Alien Mothership",
		researchType: "AlienIntentions",
		description: "",
		prereqs: ["commander"],
		reqFor: [],
	},
	{
		researchID: "avonium",
		researchName: "Avonium",
		researchType: "AlienIntentions",
		description: "",
		prereqs: ["commander"],
		reqFor: ["ufo_gravity_engine"],
	},
	{
		researchID: "aliens_attack_on_earth",
		researchName: "Aliens Attack on Earth",
		researchType: "AlienIntentions",
		description: "",
		prereqs: ["commander"],
		reqFor: [],
	},
	{
		researchID: "avonium_supply_container",
		researchName: "Avonium Supply Container",
		researchType: "AlienIntentions",
		description: "",
		prereqs: ["commander"],
		reqFor: [],
	},
	{
		researchID: "energy_crisis",
		researchName: "Energy Crisis",
		researchType: "AlienIntentions",
		description: "",
		prereqs: ["commander"],
		reqFor: [],
	},
	{
		researchID: "avonium_on_esperanza",
		researchName: "Avonium On Esperanza",
		researchType: "AlienIntentions",
		description: "",
		prereqs: ["commander"],
		reqFor: [],
	},
	{
		researchID: "starport",
		researchName: "Starport",
		researchType: "AlienIntentions",
		description: "",
		prereqs: ["commander"],
		reqFor: [],
	},
	{
		researchID: "shuttle",
		researchName: "Shuttle",
		researchType: "AlienIntentions",
		description: "",
		prereqs: ["commander"],
		reqFor: [],
	},
	{
		researchID: "sro-2_device",
		researchName: "SRO-2 Device",
		researchType: "AlienIntentions",
		description: "",
		prereqs: ["commander"],
		reqFor: ["the_infiltration_plan"],
	},
	{
		researchID: "the_infiltration_plan",
		researchName: "The Infiltration Plan",
		researchType: "AlienIntentions",
		description: "",
		prereqs: ["sro-2_device"],
		reqFor: [],
	},
	{
		researchID: "revolt_on_earth",
		researchName: "Revolt on Earth",
		researchType: "AlienIntentions",
		description: "",
		prereqs: ["commander"],
		reqFor: [],
	},
	{
		researchID: "vampire_engine",
		researchName: "Vampire Engine",
		researchType: "AlienIntentions",
		description: "",
		prereqs: ["commander"],
		reqFor: ["generator"],
	},
	{
		researchID: "project_centaurus",
		researchName: "Project Centaurus",
		researchType: "Centaurus",
		description: "",
		prereqs: ["spaceship_alloys"],
		reqFor: [
			"engine",
			"hibernation_room",
			"distribution_point",
			"navigation_room",
			"generator",
			"centaurus_intergalactic_spaceship",
		],
	},
	{
		researchID: "engine",
		researchName: "Engine",
		researchType: "Centaurus",
		description: "",
		prereqs: ["project_centaurus", "ufo_energy_accumulator"],
		reqFor: [
			"landing_and_storage_platform",
			"engine_injector",
			"jag_d1",
			"centaurus_intergalactic_spaceship",
		],
	},
	{
		researchID: "landing_and_storage_platform",
		researchName: "Landing and Storage Platform",
		researchType: "Centaurus",
		description: "",
		prereqs: ["engine", "centaurus_intergalactic_spaceship"],
		reqFor: ["centaurus_intergalactic_spaceship"],
	},
	{
		researchID: "living_quarters",
		researchName: "Living Quarters",
		researchType: "Centaurus",
		description: "",
		prereqs: ["landing_and_storage_platform"],
		reqFor: ["centaurus_intergalactic_spaceship"],
	},
	{
		researchID: "engine_injector",
		researchName: "Engine Injector",
		researchType: "Centaurus",
		description: "",
		prereqs: ["engine"],
		reqFor: ["centaurus_intergalactic_spaceship"],
	},
	{
		researchID: "hibernation_room",
		researchName: "Hibernation Room",
		researchType: "Centaurus",
		description: "",
		prereqs: ["project_centaurus", "ufo_freezing_unit"],
		reqFor: ["advanced_workshop", "centaurus_intergalactic_spaceship"],
	},
	{
		researchID: "advanced_workshop",
		researchName: "Advanced Workshop",
		researchType: "Buildings",
		description: "",
		prereqs: ["hibernation_room"],
		reqFor: [],
	},
	{
		researchID: "distribution_point",
		researchName: "Distribution Point",
		researchType: "Centaurus",
		description: "",
		prereqs: ["ufo_power_distribution", "project_centaurus"],
		reqFor: ["laboratory", "centaurus_intergalactic_spaceship"],
	},
	{
		researchID: "laboratory",
		researchName: "Laboratory",
		researchType: "Centaurus",
		description: "",
		prereqs: ["distribution_point", "advanced_laboratory"],
		reqFor: ["centaurus_intergalactic_spaceship"],
	},
	{
		researchID: "navigation_room",
		researchName: "Navigation Room",
		researchType: "Centaurus",
		description: "",
		prereqs: ["project_centaurus", "ufo_space_flight_computer"],
		reqFor: ["pilots_cabin", "centaurus_intergalactic_spaceship"],
	},
	{
		researchID: "pilots_cabin",
		researchName: "Pilot's Cabin",
		researchType: "Centaurus",
		description: "",
		prereqs: ["navigation_room"],
		reqFor: ["nightwolf", "centaurus_intergalactic_spaceship"],
	},
	{
		researchID: "generator",
		researchName: "Generator",
		researchType: "Centaurus",
		description: "",
		prereqs: ["project_centaurus", "vampire_engine"],
		reqFor: ["centaurus_intergalactic_spaceship"],
	},
	{
		researchID: "centaurus_intergalactic_spaceship",
		researchName: "Centaurus Intergalactic Spaceship",
		researchType: "Centaurus",
		description: "",
		prereqs: [
			"project_centaurus",
			"engine",
			"landing_and_storage_platform",
			"living_quarters",
			"engine_injector",
			"hibernation_room",
			"distribution_point",
			"laboratory",
			"navigation_room",
			"pilots_cabin",
			"generator",
		],
		reqFor: [],
		comments: "Completion of Centaurus Research",
	},

	{
		researchID: "beekeeper_bk01",
		researchName: "Beekeeper BK01",
		researchType: "Armor",
		description: "",
		prereqs: ["ufo_craft_armor"],
		reqFor: [],
	},
	{
		researchID: "desert_viper",
		researchName: "Desert Viper",
		researchType: "Armor",
		description: "",
		prereqs: ["ufo_advanced_craft_armor"],
		reqFor: [],
	},
	{
		researchID: "waspkeeper_vk02",
		researchName: "Waspkeeper VK02",
		researchType: "Armor",
		description: "",
		prereqs: ["dead_telemat", "avonium"],
		reqFor: ["desert_tortoise"],
	},
	{
		researchID: "desert_tortoise",
		researchName: "Desert Tortoise",
		researchType: "Armor",
		description: "",
		prereqs: ["waspkeeper_vk02", "spaceship_alloys"],
		reqFor: [],
	},

	{
		researchID: "thunder",
		researchName: "Thunder",
		researchType: "Aircrafts",
		description: "",
		prereqs: ["ufo_craft_armor"],
		reqFor: ["lightning"],
	},
	{
		researchID: "lightning",
		researchName: "Lightning",
		researchType: "Aircrafts",
		description: "",
		prereqs: ["thunder"],
		reqFor: [],
	},
	{
		researchID: "stormbringer",
		researchName: "Stormbringer",
		researchType: "Aircrafts",
		description: "",
		prereqs: ["ufo_gravity_engine"],
		reqFor: ["sky_diver"],
	},
	{
		researchID: "sky_diver",
		researchName: "Sky Diver",
		researchType: "Aircrafts",
		description: "",
		prereqs: ["stormbringer"],
		reqFor: [],
	},
	{
		researchID: "exterminator",
		researchName: "Exterminator",
		researchType: "Aircrafts",
		description: "",
		prereqs: ["ufo_advanced_craft_armor", "ufo_gravity_control", "ufo_reactor"],
		reqFor: [],
	},
	{
		researchID: "nightwolf",
		researchName: "Nightwolf",
		researchType: "Aircrafts",
		description: "",
		prereqs: ["ufo_energy_accumulator", "ufo_gravity_control", "pilots_cabin"],
		reqFor: [],
	},
	{
		researchID: "jag_d1",
		researchName: "Jag D1",
		researchType: "Aircrafts",
		description: "",
		prereqs: ["engine", "pilots_cabin", "spaceship_alloys"],
		reqFor: ["devil_fish"],
	},
	{
		researchID: "devil_fish",
		researchName: "Devil Fish",
		researchType: "Aircrafts",
		description: "",
		prereqs: ["jag_d1"],
		reqFor: [],
	},
]
