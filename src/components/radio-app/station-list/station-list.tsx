
'use client';

import { useStationList } from '../../../hooks/use-station-list';
import styles from './station-list.module.css';
import { StationListItem } from './station-list-item/station-list-item';

export function StationList() {
  const stations = useStationList();

  return (
    <ol className={styles['container']}>
      {stations.map((s, i) => (<li key={`${s.id}-${i}`}>
        <StationListItem  station={s} />
      </li>))}
    </ol>
  );
}
