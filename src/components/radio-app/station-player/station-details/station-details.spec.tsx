import { render } from '@testing-library/react';

import { StationDetails } from './station-details';

describe('StationDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StationDetails station={null} />);
    expect(baseElement).toBeTruthy();
  });
});
