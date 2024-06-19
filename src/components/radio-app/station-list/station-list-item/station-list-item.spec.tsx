import { render } from '@testing-library/react';

import StationListItem from './station-list-item';

describe('StationListItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StationListItem />);
    expect(baseElement).toBeTruthy();
  });
});
