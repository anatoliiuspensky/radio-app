import { Signal, signal } from '@preact/signals-react';
import { useSignals } from '@preact/signals-react/runtime';
import { IRadioStation } from 'src/interfaces';

export interface ISelectedStationSignal {
  selectedStation: IRadioStation | null;
}

const selectStationSignal = signal({ selectedStation: null });

export const useStationSignals = (): Signal<ISelectedStationSignal> => {
  useSignals();

  return selectStationSignal;
};
