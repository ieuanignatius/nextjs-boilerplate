import { render, screen } from '@testing-library/react';

import First from '../../pages/post/first';

describe('App', () => {
  it('renders without crashing', () => {
    render(<First />);

    expect(screen.getByRole('link', { name: 'Go back' })).toBeInTheDocument();
  });
});
