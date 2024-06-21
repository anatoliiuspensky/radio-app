import { SortOrder } from "./sort-order";

export interface IStationListQueryParams {
  skip?: number; // for later use for pagination and/or eternal scroll
  take?: number; // for later use for pagination and/or eternal scroll
  filterBy: 'name' | 'tags';
  filter?: string;
  sortOrder: SortOrder;
  sortBy: 'name' | 'popularity' | 'reliability';
}
