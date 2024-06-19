import axios from 'axios';
import { IRadioStation } from '../interfaces';

interface IRemoteStationResponse {
  data: IRadioStation[];
}

const STATION_LIST_REMOTE_URL = 'https://s3-us-west-1.amazonaws.com/cdn-web.tunein.com/stations.json';

export const getRadioStations = async (): Promise<IRadioStation[]> => {
  let res: IRadioStation[] = [];
  try {
    const req = await axios.get<IRemoteStationResponse>(STATION_LIST_REMOTE_URL);
    res  = req?.data?.data || [];
  } catch (e) {
    console.log('Failed fetching stations from remote server');
  }

  return res;
};