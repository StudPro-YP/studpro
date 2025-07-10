import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase, PartnerCompany } from '@/lib/db/mongodb';

export async function GET(req: NextRequest) {
  try {
    // Connect to the database
    await connectToDatabase();
    
    // Get all partner companies
    const partners = await PartnerCompany.find({ isActive: true }).lean();
    
    return NextResponse.json({
      status: 'success',
      data: partners
    });
  } catch (error) {
    console.error('Error fetching partner companies:', error);
    return NextResponse.json({
      status: 'error',
      message: 'Failed to fetch partner companies',
      error: (error as Error).message
    }, { status: 500 });
  }
}

//Get partner companies by event ID
export async function getPartnerCompanies(eventId?: string) {
  try {
    // Connect to MongoDB
    await connectToDatabase();
    
    // Query parameters
    const query = eventId ? { eventId, isActive: true } : { isActive: true };
    
    // Get partner companies
    const partners = await PartnerCompany.find(query).lean();
    
    return {
      success: true,
      data: partners
    };
  } catch (error) {
    console.error('Error fetching partner companies:', error);
    return {
      success: false,
      error: (error as Error).message
    };
  }
}