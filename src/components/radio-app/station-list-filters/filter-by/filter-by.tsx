'use client';

import { ChangeEvent } from 'react';
import { IUseStationListParams, useStationListFilters, setStationListParams } from '../../../../hooks';
import styles from './filter-by.module.css';

interface IFilterByOpt {
  name: string;
  value: IUseStationListParams['filterBy'];
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
    const newFilterBy = ev.target.value as IUseStationListParams['filterBy'];
    setStationListParams({ filterBy: newFilterBy });
  };

  return (
    <div className={styles['container']}>
      <label>Find by:</label>
      <select name="find-by" onChange={onSelect}>{
          opts.map(o => (<option value={o.value} key={o.name} selected={o.value === filterBy}>{o.name}</option>))
      }</select>
    </div>
  );
}
