"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EventTimeline } from "@/components/EventTimeline";
import { events } from "@/data/events";

export function TabsSwitcher() {
	// Group events by year and get unique versions
	const yearVersionMap: { [key: number]: string } = {};
	events.forEach((event) => {
		yearVersionMap[event.year] = event.version;
	});

	// Get unique years from events and sort them
	const uniqueYears = [...new Set(events.map((event) => event.year))].sort(
		(a, b) => a - b,
	);

	return (
		<div className="w-full">
			<Tabs defaultValue={uniqueYears[0]?.toString()} className="w-full">
				<TabsList
					className="grid w-full mb-8 bg-primary/30"
					style={{
						gridTemplateColumns: `repeat(${uniqueYears.length}, minmax(0, 1fr))`,
					}}
				>
					{uniqueYears.map((year) => (
						<TabsTrigger
							key={year}
							value={year.toString()}
							className="text-sm font-medium bg-none text-secondary data-[state=active]:text-white data-[state=active]:bg-primary"
						>
							{yearVersionMap[year]}
						</TabsTrigger>
					))}
				</TabsList>

				{uniqueYears.map((year) => (
					<TabsContent key={year} value={year.toString()} className="mt-0">
						<EventTimeline events={events} selectedYear={year} />
					</TabsContent>
				))}
			</Tabs>
		</div>
	);
}
