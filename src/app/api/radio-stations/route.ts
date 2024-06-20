import { NextResponse } from 'next/server';
import { getRadioStations } from '../../../helpers';

export async function GET(request: Request) {
  // TODO: apply radio station sort/filter here. Ideally it should be handled by the provided Backend API
  const data = await getRadioStations();
  return NextResponse.json(data);
}
