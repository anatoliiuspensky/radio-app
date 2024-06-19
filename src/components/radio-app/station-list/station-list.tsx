
'use client';

import { useStationList } from '../../../hooks/use-station-list';
import styles from './station-list.module.css';
import { StationListItem } from './station-list-item/station-list-item';
import { useState } from 'react';

export function StationList() {
  const [statioListState, setStationListState] = useState<any>({}); // TODO: complete filter/sort/pagination etc
  const stations = useStationList(statioListState);

  return (
    <ol className={styles['container']}>
      {stations.map((s, i) => (<li key={`${s.id}-${i}`}>
        <StationListItem  station={s} />
      </li>))}
    </ol>
  );
}
