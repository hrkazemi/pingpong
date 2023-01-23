import { render } from '@testing-library/react';
import Box, { BOX_NAME } from './Box';

describe('Box', () => {
  it('renders with the correct name', () => {
    const { getByTestId } = render(<Box name={BOX_NAME.BALL} />);
    const boxElement = getByTestId('box');
    expect(boxElement.firstChild).toHaveStyle(`background-color: yellow`);
  });

  it('renders with the correct name for background', () => {
    const { getByTestId } = render(<Box name={BOX_NAME.BACKGROUND} />);
    const boxElement = getByTestId('box');
    expect(boxElement.firstChild).toHaveStyle(`background-color: '`);
  });

  it('renders with the correct name for player', () => {
    const { getByTestId } = render(<Box name={BOX_NAME.PLAYER} />);
    const boxElement = getByTestId('box');
    expect(boxElement.firstChild).toHaveStyle(`background-color: blue`);
  });
});
