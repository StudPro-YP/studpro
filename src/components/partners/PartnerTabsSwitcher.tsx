"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PartnerTimeline } from "@/components/partners/PartnerTimeline";
import { partners } from "@/data/partners";

export function PartnerTabsSwitcher() {
	// Group partners by year and get unique versions
	const yearVersionMap: { [key: number]: string } = {};
	partners.forEach((yearGroup) => {
		yearVersionMap[yearGroup.year] = yearGroup.version;
	});

	// Get unique years from partners and sort them
	const uniqueYears = [
		...new Set(partners.map((yearGroup) => yearGroup.year)),
	].sort((a, b) => a - b);

	return (
		<div className="w-full">
			<Tabs defaultValue={uniqueYears[0]?.toString()} className="w-full">
				<TabsList
					className="grid w-full mb-8 bg-primary/30"
					style={{
						gridTemplateColumns: `repeat(${uniqueYears.length}, minmax(0, 1fr))`,
					}}
				>
					{" "}
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
						<PartnerTimeline partnersByYear={partners} selectedYear={year} />
					</TabsContent>
				))}
			</Tabs>
		</div>
	);
}
