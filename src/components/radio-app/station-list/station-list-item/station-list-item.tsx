import { IRadioStation } from 'src/interfaces';
import styles from './station-list-item.module.css';
import { setStation } from '../../../../hooks';

export interface StationListItemProps {
  station: IRadioStation;
}

export function StationListItem({ station }: StationListItemProps) {
  const { name, tags } = station;

  const onClick = () => {
    setStation(station); 
  };

  const tagsStr = tags.map(t => `#${t}`).join(', ');

  return (
    <button className={styles.container} onClick={onClick}>
      <div>{name}</div>
      {tagsStr && (<div className={styles.tags}>{tagsStr}</div>) }
    </button>
  );
}
