import { IRadioStation } from 'src/interfaces';
import styles from './station-list-item.module.css';
import { setStation } from '../../../../hooks';
import { getStationPopularityDescription } from '../../../../helpers';

export interface StationListItemProps {
  station: IRadioStation;
}

export function StationListItem({ station }: StationListItemProps) {
  const { name, tags, popularity, reliability } = station;

  const onClick = () => {
    setStation(station); 
  };

  const tagsStr = tags.map(t => `#${t}`).join(', ');

  return (
    <button className={styles.container} onClick={onClick}>
      <div>{name}</div>
      <div className={styles.details}>
        <span>Popularity: {getStationPopularityDescription(popularity)}</span>
        <span>Reliabilty: {reliability}</span>
      </div>
      {tagsStr && (<div className={styles.tags}>{tagsStr}</div>) }
    </button>
  );
}
