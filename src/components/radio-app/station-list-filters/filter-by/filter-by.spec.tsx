import { render } from '@testing-library/react';

import { FilterBy } from './filter-by';

describe('FindBy', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FilterBy />);
    expect(baseElement).toBeTruthy();
  });
});
