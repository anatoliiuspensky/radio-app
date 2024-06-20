import { render } from '@testing-library/react';

import { StationDetails } from './station-details';
import { IRadioStation } from '../../../../interfaces';
// TODO: complete UT when spare time

const MOCK_STATION: IRadioStation = {
  id: 'foo',
  description: 'Fake station description',
  name: 'Fake Station',
  imgUrl: '/',
  streamUrl: '/',
  reliability: 3,
  popularity: 4,
  tags: ['fake', 'fake radio'],
};

describe('StationDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StationDetails station={MOCK_STATION} />);
    expect(baseElement).toBeTruthy();
  });
});
