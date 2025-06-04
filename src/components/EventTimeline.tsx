import { EventCard } from "./EventCard";
import type { StudProCommunity } from "@/data/events";

interface EventTimelineProps {
	events: StudProCommunity[];
	selectedYear?: number;
}

export function EventTimeline({ events, selectedYear }: EventTimelineProps) {
	// Filter events by selected year or show all if no year selected
	const filteredEvents = selectedYear
		? events.filter((event) => event.year === selectedYear)
		: events;

	// Sort events by year to ensure proper timeline order
	const sortedEvents = [...filteredEvents].sort((a, b) => a.year - b.year);

	// Helper function to get month number for sorting
	const getMonthNumber = (dateStr: string) => {
		const months = {
			January: 1,
			February: 2,
			March: 3,
			April: 4,
			May: 5,
			June: 6,
			July: 7,
			August: 8,
			September: 9,
			October: 10,
			November: 11,
			December: 12,
		};
		const month = dateStr.split(" ")[0];
		return months[month as keyof typeof months] || 0;
	};

	// Helper function to determine icon type by index
	const getEventIcon = (index: number) => {
		// Toggle between star and computer icons
		return (
			<div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center shadow-md">
				<svg
					width="20"
					height="20"
					fill="currentColor"
					className="text-white"
					viewBox="0 0 16 16"
				>
					<path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75c.167-.333.25-.833.25-1.5H2s-2 0-2-2V4zm1.398-.855a.758.758 0 0 0-.254.302A1.46 1.46 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145z" />
				</svg>
			</div>
		);
	};

	return (
		<div className="max-w-6xl mx-auto px-4 py-8">
			{/* Header */}
			<div className="text-center mb-16">
				<h1 className="text-4xl font-bold text-black mb-4">
					<span className="text-primary">Stud</span>
					<span className="text-secondary me-4">Pro 5.0</span>
					Event Timeline
				</h1>
			</div>

			{/* Timeline */}
			<div className="relative">
				{/* Main timeline line */}
				<div className="absolute left-16 top-8 bottom-0 w-0.5 bg-secondary"></div>
				{/* Create a flat array of all important dates */}
				{(() => {
					const allTimelinePoints: {
						year: number;
						month: string;
						isFirstOfYear: boolean;
						sessions: any[];
						monthIndex: number;
						version: string;
						description: string;
					}[] = [];

					// Process each event and extract months with sessions
					sortedEvents.forEach((event) => {
						// Group sessions by month
						const monthsWithSessions = Object.entries(
							event.sessions.reduce(
								(acc, session) => {
									const month = session.date.split(" ")[0];
									if (!acc[month]) acc[month] = [];
									acc[month].push(session);
									return acc;
								},
								{} as Record<string, typeof event.sessions>,
							),
						).sort(
							([monthA], [monthB]) =>
								getMonthNumber(monthA) - getMonthNumber(monthB),
						);

						// Add each month as a timeline point
						monthsWithSessions.forEach(([month, sessions], idx) => {
							allTimelinePoints.push({
								year: event.year,
								month,
								isFirstOfYear: idx === 0,
								sessions,
								monthIndex: idx,
								version: event.version,
								description: event.description,
							});
						});
					});

					// Sort chronologically
					allTimelinePoints.sort((a, b) => {
						if (a.year !== b.year) return a.year - b.year;
						return getMonthNumber(a.month) - getMonthNumber(b.month);
					});

					return (
						<div className="ml-16">
							{allTimelinePoints.map((point, index) => (
								<div
									key={`${point.year}-${point.month}`}
									className="relative mb-28 last:mb-0"
								>
									<div className="flex">
										{/* Timeline icon */}
										<div className="absolute -left-5 z-10">
											{getEventIcon(index)}
										</div>

										{/* Content section */}
										<div className="ml-12 max-w-3xl">
											{/* Sessions for this month */}
											<div className="rounded-xl shadow-sm border border-secondary/20 overflow-hidden">
												{/* Month header */}
												<div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 border-b">
													<h4 className="text-xl font-semibold text-">
														{point.month} {point.year}
													</h4>
												</div>

												{/* Sessions */}
												<div className="p-6">
													<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
														{point.sessions.map((session, sessionIndex) => (
															<div key={sessionIndex} className="group">
																<EventCard 
																	session={session} 
																	version={point.version}
																/>
															</div>
														))}
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					);
				})()}
				{/* Empty state when no events found */}{" "}
				{sortedEvents.length === 0 && (
					<div className="text-center py-16">
						<div className="text-secondary mb-4">
							<svg
								className="w-16 h-16 mx-auto"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={1.5}
									d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
								/>
							</svg>
						</div>
						<h3 className="text-lg font-medium text-black mb-2">
							No events found
						</h3>
						<p className="text-primary">
							{selectedYear
								? `No events found for ${selectedYear}`
								: "No events available"}
						</p>
					</div>
				)}
			</div>
		</div>
	);
}
