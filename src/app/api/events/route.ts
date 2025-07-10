import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase, StudPro } from '@/lib/db/mongodb';

export async function GET(req: NextRequest) {
  try {
    // Connect to the database
    await connectToDatabase();
    
    // Get all StudPro versions with their events
    const studProVersions = await StudPro.find().lean();
    
    return NextResponse.json({
      status: 'success',
      data: studProVersions
    });
  } catch (error) {
    console.error('Error fetching StudPro events:', error);
    return NextResponse.json({
      status: 'error',
      message: 'Failed to fetch StudPro events',
      error: (error as Error).message
    }, { status: 500 });
  }
}

// Get StudPro versions by version or all if no version is specified
export async function getStudProVersions(version?: string) {
  try {
    // Connect to MongoDB
    await connectToDatabase();
    
    // Query parameters
    const query = version ? { version } : {};
    
    // Get StudPro versions
    const versions = await StudPro.find(query).lean();
    
    return {
      success: true,
      data: versions
    };
  } catch (error) {
    console.error('Error fetching StudPro versions:', error);
    return {
      success: false,
      error: (error as Error).message
    };
  }
}

export async function getLatestStudProVersion() {
  try {
    // Connect to MongoDB
    await connectToDatabase();
    
    // Get the latest StudPro version (by year, descending)
    const latestVersion = await StudPro.findOne()
      .sort({ year: -1 })
      .lean();
    
    return {
      success: true,
      data: latestVersion
    };
  } catch (error) {
    console.error('Error fetching latest StudPro version:', error);
    return {
      success: false,
      error: (error as Error).message
    };
  }
}
