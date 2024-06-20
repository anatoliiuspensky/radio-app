import { render } from '@testing-library/react';

import { StationPlayer } from './station-player';
// TODO: complete UT when spare time

describe('StationPlayer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StationPlayer />);
    expect(baseElement).toBeTruthy();
  });
});
