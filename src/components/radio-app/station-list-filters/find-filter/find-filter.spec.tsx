import { render } from '@testing-library/react';

import { FindFilter } from './find-filter';
// TODO: complete UT in spare time

describe('FindFilter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FindFilter />);
    expect(baseElement).toBeTruthy();
  });
});
