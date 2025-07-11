import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase, PartnerCompany } from "@/lib/db/mongodb";

export async function GET(req: NextRequest) {
	try {
		// Connect to the database
		await connectToDatabase();

		// Get query parameters
		const url = new URL(req.url);
		const eventId = url.searchParams.get("eventId");
		const isActiveParam = url.searchParams.get("isActive");

		// Build query based on parameters
		const query: any = {};

		if (eventId) {
			// Find partners where the eventId array contains this eventId
			query.eventId = { $in: [eventId] };
		}

		// Version filter
		const version = url.searchParams.get("version");
		if (version) {
			// Find partners where the versions array contains this version
			query.versions = { $in: [version] };
		}

		// Default to active partners only unless explicitly set to false
		query.isActive = isActiveParam === "false" ? false : true;

		// Get partners based on query
		const partners = await PartnerCompany.find(query).lean();

		return NextResponse.json({
			status: "success",
			data: partners,
		});
	} catch (error) {
		console.error("Error fetching partner companies:", error);
		return NextResponse.json(
			{
				status: "error",
				message: "Failed to fetch partner companies",
				error: (error as Error).message,
			},
			{ status: 500 },
		);
	}
}
