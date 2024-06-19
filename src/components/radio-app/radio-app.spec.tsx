import { render } from '@testing-library/react';

import  { RadioApp } from './radio-app';

//TODO: complete UT if any spare time

describe('RadioApp', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RadioApp />);
    expect(baseElement).toBeTruthy();
  });
});
