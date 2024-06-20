import { signal } from '@preact/signals-react';
import { useSignals } from '@preact/signals-react/runtime';
import { IRadioStation } from 'src/interfaces';

// TODO: complete UT when spare time

interface ISelectedStationSignal {
  selectedStation: IRadioStation | null;
}

const selectStationSignal = signal<ISelectedStationSignal>({ selectedStation: null });

export const setStation = (newStation: IRadioStation) => {
  selectStationSignal.value = { selectedStation: { ...newStation } }
};

export const useSelectedStation = (): IRadioStation | null => {
  useSignals();
  return selectStationSignal.value.selectedStation;
};
