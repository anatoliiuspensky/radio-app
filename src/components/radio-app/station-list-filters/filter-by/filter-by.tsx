'use client';

import { ChangeEvent } from 'react';
import { useStationListFilters, setStationListParams } from '../../../../hooks';
import { IStationListQueryParams } from '../../../../interfaces';
import styles from './filter-by.module.css';

interface IFilterByOpt {
  name: string;
  value: IStationListQueryParams['filterBy'];
}

export function FilterBy() {
  const { filterBy } = useStationListFilters();

  const opts: IFilterByOpt[] = [
    {
      name: 'Name',
      value: 'name',
    },
    {
      name: 'Tags',
      value: 'tags',
    },
  ];

  const onSelect = (ev: ChangeEvent<HTMLSelectElement>) => {
    const newFilterBy = ev.target.value as IStationListQueryParams['filterBy'];
    setStationListParams({ filterBy: newFilterBy });
  };

  return (
    <div className={styles['container']}>
      <label>Search by:</label>
      <select name="find-by" onChange={onSelect} defaultValue={filterBy}>{
          opts.map(o => (<option value={o.value} key={o.name}>{o.name}</option>))
      }</select>
    </div>
  );
}
