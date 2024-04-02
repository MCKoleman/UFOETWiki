"use client"

import { useState } from "react"
import { BFM_UFOPEDIA } from "@/data/ufopedia-2bfm"
import { GOLD_UFOPEDIA } from "@/data/ufopedia-gold"
import { PLATINUM_UFOPEDIA } from "@/data/ufopedia-platinum"
import { VANILLA_UFOPEDIA } from "@/data/ufopedia-vanilla"
import { GameType } from "@/types/game-types"

import { Button } from "@/components/ui/button"

export default function UFOpediaPage() {
	const [currentView, setCurrentView] = useState<GameType>("UFO GOLD")

	const getCurrentData = () => {
		switch (currentView) {
			case "UFO":
				return VANILLA_UFOPEDIA
			case "UFO GOLD":
				return GOLD_UFOPEDIA
			case "UFO PLATINUM":
				return PLATINUM_UFOPEDIA
			case "UFO2 BFM":
				return BFM_UFOPEDIA
		}
	}

	return (
		<div className="flex size-full flex-col items-center justify-center">
			<div className="text-lg font-bold">UFOpedia</div>
			<div className="flex flex-col">
				{getCurrentData().map((elem) => (
					<div
						key={elem.research_id}
						className="flex flex-col items-center justify-center p-2"
					>
						<div className="flex flex-row items-center gap-1">
							<div className="font-medium">{elem.research_name}</div>
							<div className="text-sm opacity-75">({elem.research_id})</div>
						</div>
						<div>{elem.notes}</div>
						<div className="flex flex-col items-center justify-center gap-1">
							<div className="font-medium">Prerequisites:</div>
							<div className="flew-row flex items-center justify-center gap-2">
								{(elem.prereqs.length > 0 &&
									elem.prereqs?.map((req) => (
										<Button key={`${elem.research_id}needs${req}`}>
											{
												getCurrentData().find(
													(data) => data.research_id === req,
												)?.research_name
											}
										</Button>
									))) ??
									"-"}
							</div>
						</div>
						<div className="flex flex-col items-center justify-center gap-1">
							<div className="font-medium">Prerequisite For:</div>
							<div className="flex flex-row items-center justify-center gap-2">
								{(elem.req_for.length > 0 &&
									elem.req_for?.map((unlock) => (
										<Button key={`${elem.research_id}unlocks${unlock}`}>
											{
												getCurrentData().find(
													(data) => data.research_id === unlock,
												)?.research_name
											}
										</Button>
									))) ??
									"-"}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
