'use client';

import { RadioPlayer } from 'src/components/common';
import { IRadioStation } from '../../../../src/interfaces';
import styles from './station-player.module.css';
import { StationDetails } from './station-details/station-details';
import { useStationSignals } from '../../../hooks';

export interface StationPlayerProps {
  station?: IRadioStation;
}

export function StationPlayer(props: StationPlayerProps) {
  const { value: { selectedStation } } = useStationSignals();
  if (!selectedStation) {
    return null;
  }
  return (
    <>
      <RadioPlayer src={selectedStation.streamUrl}/>
      <StationDetails station={selectedStation} />
    </>
  );
}

export default StationPlayer;
