import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { storeName, name, email, phone, volume, message } = await request.json()

    if (!storeName?.trim() || !name?.trim() || !email?.trim()) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const created = new Date().toISOString().split('T')[0]

    const res = await fetch(
      `https://api.baserow.io/api/database/rows/table/${process.env.BASEROW_TABLE_ID}/?user_field_names=true`,
      {
        method: 'POST',
        headers: {
          Authorization: `Token ${process.env.BASEROW_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'Lead Name': name.trim(),
          'Email': email.trim(),
          'Phone': phone?.trim() || '',
          'Company': storeName.trim(),
          'COD Volume': volume || '',
          'Message': message?.trim() || '',
          'Source': 6514597,
          'Created': created,
        }),
      }
    )

    if (!res.ok) {
      const err = await res.text()
      console.error('[baserow]', err)
      return NextResponse.json({ error: 'Failed to save lead' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[contact]', err)
    return NextResponse.json({ error: 'Failed to save lead' }, { status: 500 })
  }
}
