"use client";

import { events } from "@/data/events";
import { Event, StudProVersion } from "@/data/events";
import { useState, useEffect } from "react";
import { EventCard } from "@/components/events/EventCard";

// Extended Event interface with additional properties for UI
interface UpcomingEvent extends Event {
	versionTitle: string;
	seriesTitle: string;
}

// Function to get upcoming events
const getUpcomingEvents = (
	eventData: StudProVersion[],
	limit = 3,
): UpcomingEvent[] => {
	const today = new Date();
	const upcomingEvents: UpcomingEvent[] = [];

	// Flatten all events from all versions and series
	eventData.forEach((version) => {
		version.eventSeries.forEach((series) => {
			series.events.forEach((event) => {
				const eventDate = new Date(event.date);
				if (eventDate >= today) {
					upcomingEvents.push({
						...event,
						// Adding extra properties to help with rendering
						versionTitle: version.version,
						seriesTitle: series.title,
					});
				}
			});
		});
	});

	// Sort by date (closest first)
	upcomingEvents.sort(
		(a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
	);

	// Return limited number of events
	return upcomingEvents.slice(0, limit);
};

export const Events = () => {
	const [upcomingEvents, setUpcomingEvents] = useState<UpcomingEvent[]>([]);

	// Find upcoming events on component mount
	useEffect(() => {
		setUpcomingEvents(getUpcomingEvents(events));
	}, []);

	return (
		<div className="min-h-[140vh] flex justify-center">
			<div className="flex flex-col justify-center items-center py-16">
			{/* Upcoming Events Section */}
			{upcomingEvents.length > 0 && (
				<div className="w-full max-w-7xl mb-16">
					<div className="mb-8 text-center ">
						<h2 className="text-4xl uppercase text-secondary font-bold mb-4">
							Upcoming Events
						</h2>
						<p className="text-lg mx-auto text-gray-600">
							Join us for our next exciting events where innovation meets
							inspiration. <br />
							Expand your horizons, connect with like-minded individuals, and
							take your skills to the next level.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
						{upcomingEvents.map((event, idx) => (
							<div key={`upcoming-${idx}`}>
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
