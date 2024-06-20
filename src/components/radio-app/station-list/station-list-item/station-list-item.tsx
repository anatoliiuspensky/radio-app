import { IRadioStation } from 'src/interfaces';
import styles from './station-list-item.module.css';
import { setStation } from '../../../../hooks';

export interface StationListItemProps {
  station: IRadioStation;
}

export function StationListItem({ station }: StationListItemProps) {
  const { name } = station;

  const onClick = () => {
    setStation(station); 
  };

  return (
    <div className={styles['container']} onClick={onClick}>
      <div>Name: {name}</div>
    </div>
  );
}
