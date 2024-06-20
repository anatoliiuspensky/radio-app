import { render } from '@testing-library/react';

import { SortOrderFilter } from './sort-order-filter';

describe('SortOrderFilter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SortOrderFilter />);
    expect(baseElement).toBeTruthy();
  });
});
