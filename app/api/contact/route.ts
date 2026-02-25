import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  // Only allow POST requests
  if (request.method !== 'POST') {
    return NextResponse.json(
      { message: 'Method Not Allowed' },
      { status: 405 }
    );
  }

  try {
    const body = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Prepare the payload for Google Apps Script
    const googlePayload = {
      ...body,
      secret: process.env.GOOGLE_SCRIPT_SECRET,
    };

    // Get the Google Apps Script URL from environment variables
    const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL;
    
    if (!googleScriptUrl) {
      console.error('GOOGLE_SCRIPT_URL is not configured');
      return NextResponse.json(
        { message: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Forward the data to Google Apps Script using global fetch
    const response = await fetch(googleScriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(googlePayload),
    });

    if (!response.ok) {
      throw new Error(`Google Apps Script returned status ${response.status}`);
    }

    const result = await response.json();

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { 
        message: 'Internal Server Error',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
