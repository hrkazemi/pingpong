import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the GameBoard component', () => {
    const { getByTestId } = render(<App />);
    const gameBoard = getByTestId('game-board');
    expect(gameBoard).toBeInTheDocument();
    expect(gameBoard.children.length).toBeGreaterThan(0);
  });
});
