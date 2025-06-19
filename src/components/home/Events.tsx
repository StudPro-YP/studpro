"use client";

import { events } from "@/data/events";
import { Event, StudProVersion } from "@/data/events";
import { useState, useEffect } from "react";
import { EventCard } from "@/components/events/EventCard";

// Extended Event interface with additional properties for UI
interface LatestEvent extends Event {
	versionTitle: string;
	seriesTitle: string;
}

// Function to get latest events
const getLatestEvents = (
	eventData: StudProVersion[],
	limit = 3,
): LatestEvent[] => {
	const today = new Date();
	const latestEvents: LatestEvent[] = [];

	// Flatten all events from all versions and series
	eventData.forEach((version) => {
		version.eventSeries.forEach((series) => {
			series.events.forEach((event) => {
				const eventDate = new Date(event.date);
				if (eventDate <= today) {
					latestEvents.push({
						...event,
						// Adding extra properties to help with rendering
						versionTitle: version.version,
						seriesTitle: series.title,
					});
				}
			});
		});
	});

	// Sort by date (most recent first)
	latestEvents.sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
	);

	// Return limited number of events
	return latestEvents.slice(0, limit);
};

export const Events = () => {
	const [latestEvents, setLatestEvents] = useState<LatestEvent[]>([]);

	// Find latest events on component mount
	useEffect(() => {
		setLatestEvents(getLatestEvents(events));
	}, []);

	return (
		<div className="py-40 flex justify-center items-center">
			<div className="flex flex-col justify-center items-center py-8 md:py-16 px-4 md:px-6 w-full">
				{/* Latest Events Section */}
				{latestEvents.length > 0 && (
					<div className="w-full max-w-7xl mb-8 md:mb-16">
						<div className="mb-6 md:mb-16 text-center">
							<h2 className="text-2xl md:text-3xl lg:text-4xl uppercase text-secondary font-bold mb-4 md:mb-6">
								Latest Events
							</h2>
							<p className="text-base md:text-lg mx-auto text-gray-600 px-2">
								Explore our most recent events where innovation meets
								inspiration. <br className="hidden md:block" />
								Catch up with what you missed and stay tuned for more exciting
								opportunities.
							</p>
						</div>
						<div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8 justify-items-center">
							{latestEvents.map((event, idx) => (
								<div key={`latest-${idx}`}>
									<EventCard session={event} version={event.versionTitle} />
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
