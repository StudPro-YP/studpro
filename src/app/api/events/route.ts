import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase, StudPro } from "@/lib/db/mongodb";

export async function GET(req: NextRequest) {
	try {
		// Connect to the database
		await connectToDatabase();

		// Get all StudPro versions with their events
		const studProVersions = await StudPro.find().lean();

		return NextResponse.json({
			status: "success",
			data: studProVersions,
		});
	} catch (error) {
		console.error("Error fetching StudPro events:", error);
		return NextResponse.json(
			{
				status: "error",
				message: "Failed to fetch StudPro events",
				error: (error as Error).message,
			},
			{ status: 500 },
		);
	}
}
