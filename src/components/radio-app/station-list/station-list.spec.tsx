import { render } from '@testing-library/react';

import { StationList } from './station-list';

// TODO: complete UT when spare time

describe('StationList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StationList />);
    expect(baseElement).toBeTruthy();
  });
});
