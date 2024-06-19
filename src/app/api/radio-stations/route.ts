import { NextResponse } from 'next/server';
import { getRadioStations } from '../../../helpers';

export async function GET(request: Request) {
  const data = await getRadioStations();
  return NextResponse.json(data);
}
