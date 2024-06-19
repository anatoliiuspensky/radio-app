import { render } from '@testing-library/react';

import { StationPlayer } from './station-player';

describe('StationPlayer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StationPlayer />);
    expect(baseElement).toBeTruthy();
  });
});
