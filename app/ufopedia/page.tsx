"use client"

import { useState } from "react"
import Image from "next/image"
import { BFM_UFOPEDIA } from "@/data/ufopedia-2bfm"
import { GOLD_UFOPEDIA } from "@/data/ufopedia-gold"
import { PLATINUM_UFOPEDIA } from "@/data/ufopedia-platinum"
import { VANILLA_UFOPEDIA } from "@/data/ufopedia-vanilla"
import { cn } from "@/lib/utils"
import { GameType, gameTypeOptions } from "@/types/game-types"
import { displayResearchEntry, ResearchEntry } from "@/types/research-entry"
import { ResearchType, researchTypeOptions } from "@/types/research-type"

import { SelectionSwitcher } from "@/components/shared/selection-switch"
import { Button } from "@/components/ui/button"

export default function UFOpediaPage() {
	const [currentView, setCurrentView] = useState<GameType>("UFO GOLD")
	const [currentFilter, setCurrentFilter] = useState<ResearchType>("All")
	const [selectedItem, setSelectedItem] = useState("")

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

	const displayReqItem = (req: string, imageLeft: boolean) => {
		const research_req = getCurrentData().find(
			(data) => data.researchID === req,
		)
		if (!research_req) return null
		return (
			<div
				className={cn(
					"flex w-full flex-row items-center gap-2",
					imageLeft ? "justify-start" : "justify-end",
				)}
			>
				{imageLeft ? "" : research_req.researchName}
				<Image
					src={`/images/ufopedia/${research_req.image}.jpg`}
					alt={research_req.researchName}
					height={48}
					width={48}
					className="border-1 h-[48px] w-auto rounded-md border-foreground-muted shadow"
				/>
				{imageLeft ? research_req.researchName : ""}
			</div>
		)
	}

	const navigateToSelection = (sel: string) => {
		const selection = getCurrentData().find((data) => data.researchID === sel)
		if (!selection) return
		setCurrentFilter(selection.researchType)
		setSelectedItem(selection.researchID)
	}

	return (
		<div className="flex size-full items-center justify-center">
			<div className="flex flex-col items-center justify-center gap-2">
				<SelectionSwitcher
					options={gameTypeOptions}
					selection={currentView}
					setSelection={setCurrentView}
				/>
				<SelectionSwitcher
					options={researchTypeOptions}
					selection={currentFilter}
					setSelection={setCurrentFilter}
				/>
				<div className="flex max-w-[1000px] flex-col items-center justify-center">
					<div className="grid w-full grid-cols-3 justify-center text-center">
						<div className="grid-cols-1 text-lg font-bold">Prereqs</div>
						<div className="grid-cols-1 text-lg font-bold">UFOpedia</div>
						<div className="grid-cols-1 text-lg font-bold">Req For</div>
					</div>
					<div className="flex flex-col gap-2">
						{getCurrentData()
							.filter(
								(elem) =>
									currentFilter === "All" ||
									elem.researchType === currentFilter,
							)
							.map((elem) => (
								<div
									key={elem.researchID}
									className="grid grid-cols-4 items-center justify-center gap-2 rounded-xl border-2 border-foreground-muted bg-background p-2"
								>
									<div className="col-span-1 flex flex-col items-center justify-start gap-2">
										{(elem.prereqs.length > 0 &&
											elem.prereqs?.map((req) => (
												<Button
													key={`${elem.researchID}needs${req}`}
													variant="primary"
													className="h-[60px] w-full p-2"
													onClick={() => navigateToSelection(req)}
												>
													{displayReqItem(req, true)}
												</Button>
											))) ?? <div className="opacity-75">None</div>}
									</div>
									<Button
										variant={
											selectedItem === elem.researchID ? "primary" : "ghost"
										}
										className="col-span-2 flex size-full flex-col items-center justify-start"
										onClick={() => setSelectedItem(elem.researchID)}
									>
										<div className="flex flex-row items-center gap-1 font-bold opacity-100">
											{elem.researchName}
										</div>
										{elem.image && (
											<Image
												src={`/images/ufopedia/${elem.image}.jpg`}
												alt={elem.researchName}
												height={128}
												width={128}
												className="border-1 rounded-lg border-foreground-muted shadow"
											/>
										)}
										<div className="flex size-full flex-col items-center justify-start gap-1">
											<div>{elem.description}</div>
											<div>
												{elem.researchType} | {elem.type}
											</div>
											<div>{elem.comments}</div>
											{displayResearchEntry(elem).map((entry) => (
												<div key={entry}>{entry}</div>
											))}
										</div>
									</Button>
									<div className="col-span-1 flex flex-col items-center justify-start gap-2">
										{(elem.reqFor.length > 0 &&
											elem.reqFor?.map((unlock) => (
												<Button
													key={`${elem.researchID}unlocks${unlock}`}
													variant="primary"
													className="h-[60px] w-full p-2"
													onClick={() => navigateToSelection(unlock)}
												>
													{displayReqItem(unlock, false)}
												</Button>
											))) ?? <div className="opacity-75">None</div>}
									</div>
								</div>
							))}
					</div>
				</div>
			</div>
		</div>
	)
}
