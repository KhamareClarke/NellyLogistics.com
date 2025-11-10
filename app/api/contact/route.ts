import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, phone, email, pickupPostcode, dropoffPostcode, details, when } = body;

    if (!name || !phone || !email || !pickupPostcode || !dropoffPostcode || !details || !when) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    console.log('Contact form submission:', {
      name,
      company,
      phone,
      email,
      pickupPostcode,
      dropoffPostcode,
      details,
      when,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
