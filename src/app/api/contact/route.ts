import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

type Lead = {
  id: string
  timestamp: string
  storeName: string
  name: string
  email: string
  volume: string
  message: string
}

const LEADS_FILE = path.join(process.cwd(), 'data', 'leads.json')

function readLeads(): Lead[] {
  try {
    if (!fs.existsSync(LEADS_FILE)) return []
    return JSON.parse(fs.readFileSync(LEADS_FILE, 'utf-8'))
  } catch {
    return []
  }
}

function writeLeads(leads: Lead[]): void {
  const dir = path.dirname(LEADS_FILE)
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), 'utf-8')
}

export async function POST(request: NextRequest) {
  try {
    const { storeName, name, email, volume, message } = await request.json()

    if (!storeName?.trim() || !name?.trim() || !email?.trim()) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const lead: Lead = {
      id: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
      storeName: storeName.trim(),
      name: name.trim(),
      email: email.trim(),
      volume: volume || '',
      message: message?.trim() || '',
    }

    const leads = readLeads()
    leads.push(lead)
    writeLeads(leads)

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[contact]', err)
    return NextResponse.json({ error: 'Failed to save lead' }, { status: 500 })
  }
}