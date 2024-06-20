'use client';

import { ChangeEvent } from 'react';
import { IUseStationListParams, setStationListParams, useStationListFilters } from '../../../../hooks';
import { SortOrder } from '../../../../interfaces';
import styles from './sort-order-filter.module.css';

interface ISortByOpt {
  name: string;
  value: SortOrder;
}

export function SortOrderFilter() {
  const { sortOrder } = useStationListFilters();

  const opts: ISortByOpt[] = [
    {
      name: 'Ascending',
      value: SortOrder.ASC,
    },
    {
      name: 'Descending',
      value: SortOrder.DESC,
    },
  ];

  const onSelect = (ev: ChangeEvent<HTMLSelectElement>) => {
    const newSortOrder = ev.target.value as IUseStationListParams['sortOrder'];
    setStationListParams({ sortOrder: newSortOrder });
  };

  return (
    <div className={styles['container']}>
      <label>Sort order:</label>
      <select name="find-by" onChange={onSelect} defaultValue={sortOrder}>{
          opts.map(o => (<option value={o.value} key={o.name}>{o.name}</option>))
      }</select>
    </div>
  );
}
