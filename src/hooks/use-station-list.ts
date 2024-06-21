import { useSignals } from '@preact/signals-react/runtime';
import axios, { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { IRadioStation, IStationListQueryParams } from '../interfaces';
import { useStationListFilters } from './use-station-filters';

const URL = '/api/radio-stations';

// TODO: add hook UT when spare time

const getAxiosConfigFromParams = ({ skip, take, sortBy, sortOrder, filter, filterBy }: IStationListQueryParams): AxiosRequestConfig => ({
  params: {
    skip,
    take,
    sortBy,
    sortOrder,
    filter,
    filterBy,
  }
});

export function useStationList(): IRadioStation[] {
  useSignals();
  const params = useStationListFilters();
  const [stationList, setStations] = useState<IRadioStation[]>([]);

  // TODO: consider adding loading indicator

  useEffect(() => {
    const config = getAxiosConfigFromParams(params);
    const req = async () => axios.get<IRadioStation[]>(URL, config);

    const setDataFn = async () => {
      const res = await req();
      const data = res.data;
      setStations(data);
    };

    setDataFn();
  }, [params])

  return stationList;
} 