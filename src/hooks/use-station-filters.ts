import { signal } from '@preact/signals-react';
import { SortOrder } from '../interfaces';
import { useSignals } from '@preact/signals-react/runtime';

export interface IUseStationListParams {
  skip?: number; // for later use for pagination and/or eternal scroll
  take?: number; // for later use for pagination and/or eternal scroll
  filterBy: 'name' | 'tags';
  filter?: string;
  sortOrder: SortOrder;
  sortBy: 'name' | 'polularity' | 'reliability';
}


const PAGE_SIZE_DEFAULT = 100;
const SORT_BY_DEFAULT = 'name' as const;
const SORT_ORDER_DEFAULT = SortOrder.ASC;
const FILTER_BY_DEFAULT = 'name' as const;

const DEFAULT_PARAMS = { skip: 0, take: PAGE_SIZE_DEFAULT, sortBy: SORT_BY_DEFAULT, sortOrder: SORT_ORDER_DEFAULT, filterBy: FILTER_BY_DEFAULT };

const stationListParamsSignal = signal<IUseStationListParams>({ ...DEFAULT_PARAMS });

export const setStationListParams = (newParams: Partial<IUseStationListParams>) => {
  stationListParamsSignal.value = { ...stationListParamsSignal.value, ...newParams };
};

export const useStationListFilters = (): IUseStationListParams => {
  useSignals();
  return stationListParamsSignal.value;
};
