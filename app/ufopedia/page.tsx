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
		<div className="flex size-full items-center justify-center">
			<div className="flex max-w-[1000px] flex-col items-center justify-center">
				<div className="grid w-full grid-cols-3 justify-center text-center">
					<div className="grid-cols-1 text-lg font-bold">Prereqs</div>
					<div className="grid-cols-1 text-lg font-bold">UFOpedia</div>
					<div className="grid-cols-1 text-lg font-bold">Req For</div>
				</div>
				<div className="flex flex-col gap-2">
					{getCurrentData().map((elem) => (
						<div
							key={elem.research_id}
							className="grid grid-cols-3 items-center justify-center rounded-xl border-2 border-foreground-muted bg-background p-2"
						>
							<div className="flex grid-cols-1 flex-col items-center justify-start gap-1">
								<div className="flex flex-col items-center justify-center gap-2">
									{(elem.prereqs.length > 0 &&
										elem.prereqs?.map((req) => (
											<Button key={`${elem.research_id}needs${req}`}>
												{
													getCurrentData().find(
														(data) => data.research_id === req,
													)?.research_name
												}
											</Button>
										))) ?? <div className="opacity-75">None</div>}
								</div>
							</div>
							<div className="flex grid-cols-1 flex-col items-center justify-start">
								<div className="flex flex-row items-center gap-1 font-medium">
									{elem.research_name}
								</div>
								<div>{elem.notes}</div>
							</div>
							<div className="flex grid-cols-1 flex-col items-center justify-start gap-1">
								<div className="flex flex-col items-center justify-center gap-2">
									{(elem.req_for.length > 0 &&
										elem.req_for?.map((unlock) => (
											<Button key={`${elem.research_id}unlocks${unlock}`}>
												{
													getCurrentData().find(
														(data) => data.research_id === unlock,
													)?.research_name
												}
											</Button>
										))) ?? <div className="opacity-75">None</div>}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
