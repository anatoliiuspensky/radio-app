'use client';

import { ChangeEvent, useCallback, useState } from 'react';
import { setStationListParams, useStationListFilters } from '../../../../hooks';
import styles from './find-filter.module.css';
import { debounce } from 'lodash';

export function FindFilter() {
  const { filter } = useStationListFilters();
  const [inputVal, setInputVal] = useState(filter ?? '');

  const handleFilterChange = (newFilter: string) => {
    setStationListParams({ filter: newFilter });
  };

  const debouncedHandler = useCallback(debounce(handleFilterChange, 1000), []);

  const onChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const newVal = ev.target.value ?? '';
    setInputVal(newVal);
    debouncedHandler(newVal);
  };

  return (
    <div className={styles.container}>
      <label>Search for:</label>
      <input className={styles.searchInput} value={inputVal} onChange={onChange} />
    </div>
  );
}
