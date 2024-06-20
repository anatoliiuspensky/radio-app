import { render } from '@testing-library/react';

import { SortByFilter } from './sort-by-filter';

// TODO: complete UT in spare time

describe('SortByFilter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SortByFilter />);
    expect(baseElement).toBeTruthy();
  });
});
