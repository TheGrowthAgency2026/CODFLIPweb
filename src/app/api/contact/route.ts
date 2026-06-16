import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { storeName, name, email, countryCode, phone, volume, message } = await request.json()

    if (!storeName?.trim() || !name?.trim() || !email?.trim()) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const messageBody = [
      volume ? `COD Volume: ${volume}` : '',
      message?.trim() || '',
    ].filter(Boolean).join('\n\n')

    const tableName = encodeURIComponent(process.env.AIRTABLE_TABLE_NAME || '')

    const res = await fetch(
      `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${tableName}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields: {
            'Lead Name': name.trim(),
            'Store Name': storeName.trim(),
            'Email': email.trim(),
            'Phone': phone?.trim() ? `${countryCode} ${phone.trim()}` : '',
            'Message': messageBody,
            'Lead Source': 'Website',
            'Submission Timestamp': new Date().toISOString(),
          },
        }),
      }
    )

    if (!res.ok) {
      const err = await res.text()
      console.error('[airtable]', err)
      return NextResponse.json({ error: 'Failed to save lead' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[contact]', err)
    return NextResponse.json({ error: 'Failed to save lead' }, { status: 500 })
  }
}
