
'use client';

import { useStationList } from '../../../hooks/use-station-list';
import styles from './station-list.module.css';
import { StationListItem } from './station-list-item/station-list-item';

export function StationList() {
  const stations = useStationList();

  // TODO: figure out why two stations have the same ID returned. Was it intentional?

  return (
    <ol className={styles['container']}>
      {stations.map((s, i) => (
        <li className={styles.item} key={`${s.id}-${i}`}>
          <StationListItem  station={s} />
        </li>
      ))}
    </ol>
  );
}
