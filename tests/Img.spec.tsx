import { render } from '@testing-library/react';

import Img from '../components/Img';

const props = {
  alt: 'image alt',
  className: 'my-image',
  src: 'image/src',
};

describe('App', () => {
  it('renders without crashing', () => {
    const { getByAltText } = render(<Img {...props} />);

    const image = getByAltText('image alt') as HTMLImageElement;

    expect(image.src).toContain('image/src');
  });
});
