import { render } from '@testing-library/react';

import { StationListFilters } from './station-list-filters';

describe('StationListFilters', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StationListFilters />);
    expect(baseElement).toBeTruthy();
  });
});
