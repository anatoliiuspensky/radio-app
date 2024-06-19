import { render } from '@testing-library/react';

import { RadioPlayer } from './radio-player';

describe('RadioPlayer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RadioPlayer />);
    expect(baseElement).toBeTruthy();
  });
});
