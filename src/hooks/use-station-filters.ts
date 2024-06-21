import { signal } from '@preact/signals-react';
import { SortOrder, IStationListQueryParams } from '../interfaces';
import { useSignals } from '@preact/signals-react/runtime';


const PAGE_SIZE_DEFAULT = 100;
const SORT_BY_DEFAULT = 'name' as const;
const SORT_ORDER_DEFAULT = SortOrder.ASC;
const FILTER_BY_DEFAULT = 'name' as const;

const DEFAULT_PARAMS = { skip: 0, take: PAGE_SIZE_DEFAULT, sortBy: SORT_BY_DEFAULT, sortOrder: SORT_ORDER_DEFAULT, filterBy: FILTER_BY_DEFAULT };

const stationListParamsSignal = signal<IStationListQueryParams>({ ...DEFAULT_PARAMS });

export const setStationListParams = (newParams: Partial<IStationListQueryParams>) => {
  stationListParamsSignal.value = { ...stationListParamsSignal.value, ...newParams };
};

export const useStationListFilters = (): IStationListQueryParams => {
  useSignals();
  return stationListParamsSignal.value;
};
