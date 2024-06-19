import { IRadioStation } from 'src/interfaces';
import styles from './station-list-item.module.css';
import { useStationSignals } from '../../../../hooks';

export interface StationListItemProps {
  station: IRadioStation;
}

export function StationListItem({ station }: StationListItemProps) {
  const { name } = station;
  const newStationSignal = useStationSignals();
  const onClick = () => {
    newStationSignal.value = { selectedStation: station }; 
  };
  return (
    <div className={styles['container']} onClick={onClick}>
      <div>Name: {name}</div>
    </div>
  );
}
