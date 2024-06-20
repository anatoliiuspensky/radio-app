'use client';

import { ChangeEvent } from 'react';
import { IUseStationListParams, setStationListParams, useStationListFilters } from '../../../../hooks';
import styles from './sort-by-filter.module.css';

interface ISortByOpt {
  name: string;
  value: IUseStationListParams['sortBy'];
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
      value: 'polularity',
    },
    {
      name: 'Reliability',
      value: 'reliability',
    },
  ];

  const onSelect = (ev: ChangeEvent<HTMLSelectElement>) => {
    const newSortBy = ev.target.value as IUseStationListParams['sortBy'];
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
