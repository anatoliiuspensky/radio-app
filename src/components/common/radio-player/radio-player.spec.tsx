import { render } from '@testing-library/react';

import { RadioPlayer } from './radio-player';

// TODO: complete UT when spare time

describe('RadioPlayer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RadioPlayer />);
    expect(baseElement).toBeTruthy();
  });
});
