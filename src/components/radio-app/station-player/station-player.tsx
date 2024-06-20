'use client';

import { RadioPlayer } from '../../common';
import { IRadioStation } from '../../../../src/interfaces';
import styles from './station-player.module.css';
import { StationDetails } from './station-details/station-details';
import { useSelectedStation } from '../../../hooks';

export interface StationPlayerProps {
  station?: IRadioStation;
}

export function StationPlayer(props: StationPlayerProps) {
  const selectedStation = useSelectedStation();

  if (!selectedStation) {
    return null;
  }

  return (
    <>
      <h1 className={styles.header}>
        <img className={styles.logo} src={selectedStation.imgUrl} alt={`${name} image`}/>
        <span>{selectedStation.name}</span>
      </h1>
      <RadioPlayer src={selectedStation.streamUrl}/>
      <StationDetails station={selectedStation} />
    </>
  );
}
