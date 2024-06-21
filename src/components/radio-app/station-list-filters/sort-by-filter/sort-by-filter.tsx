'use client';

import { ChangeEvent } from 'react';
import { setStationListParams, useStationListFilters } from '../../../../hooks';
import styles from './sort-by-filter.module.css';
import { IStationListQueryParams } from '../../../../interfaces';

interface ISortByOpt {
  name: string;
  value: IStationListQueryParams['sortBy'];
}

export function SortByFilter() {
  const { sortBy } = useStationListFilters();

  const opts: ISortByOpt[] = [
    {
      name: 'Name',
      value: 'name',
    },
    {
      name: 'Popularity',
      value: 'popularity',
    },
    {
      name: 'Reliability',
      value: 'reliability',
    },
  ];

  const onSelect = (ev: ChangeEvent<HTMLSelectElement>) => {
    const newSortBy = ev.target.value as IStationListQueryParams['sortBy'];
    setStationListParams({ sortBy: newSortBy });
  };

  return (
    <div className={styles['container']}>
      <label>Sort by:</label>
      <select name="find-by" onChange={onSelect} defaultValue={sortBy}>{
          opts.map(o => (<option value={o.value} key={o.name}>{o.name}</option>))
      }</select>
    </div>
  );
}
