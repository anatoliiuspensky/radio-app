import { render } from '@testing-library/react';

import { StationListItem } from './station-list-item';
import { IRadioStation } from 'src/interfaces';

const MOCK_STATION: IRadioStation = {
  id: 'id',
  description: 'mock radion station',
  name: 'fake_station',
  imgUrl: '#',
  streamUrl: '#',
  reliability: 1,
  popularity: 2,
  tags: ['mock_station']
};

describe('StationListItem', () => {
  it('should render successfully', () => {
    const station = {...MOCK_STATION};
    const { baseElement } = render(<StationListItem station= {station} />);
    expect(baseElement).toBeTruthy();
  });
});
