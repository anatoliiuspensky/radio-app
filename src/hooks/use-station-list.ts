import axios, { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { IRadioStation, SortOrder } from 'src/interfaces';

const URL = '/api/radio-stations';

export interface IUseStationListParams {
  skip?: number; // use for pagination and/or eternal scroll
  take?: number; // use for pagination and/or eternal scroll
  filterBy?: 'name' | 'tags';
  filter?: any;
  sortOrder?: SortOrder;
  sortBy?: keyof IRadioStation;
}

const PAGE_SIZE_DEFAULT = 100;
const SORT_BY_DEFAULT = 'name';
const SORT_ORDER_DEFAULT = SortOrder.ASC;

const getAxiosConfigFromParams = ({ skip = 0, take = PAGE_SIZE_DEFAULT, sortBy = SORT_BY_DEFAULT, sortOrder = SORT_ORDER_DEFAULT, filter, filterBy }: IUseStationListParams): AxiosRequestConfig => ({
  params: {
    skip,
    take,
    sortBy,
    sortOrder,
    filter,
    filterBy,
  }
});

export function useStationList(params: IUseStationListParams): IRadioStation[] {
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