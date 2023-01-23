import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import GameBoard from './GameBoard';

describe('GameBoard', () => {
  it('renders with the correct initial state', () => {
    const { getByText } = render(<GameBoard />);
    const pauseText = getByText('PAUSED');
    expect(pauseText).toBeInTheDocument();
    const playerScore = getByText('0');
    expect(playerScore).toBeInTheDocument();
    const opponentScore = getByText('0');
    expect(opponentScore).toBeInTheDocument();
  });
  it('should move the board', async () => {
    const { getByText } = render(<GameBoard />);
    fireEvent.keyDown(document, { keyCode: 38 });
    const playerScore = getByText('1');
    expect(playerScore).toBeInTheDocument();
  });
  it('should reset the game', async () => {
    const { getByText } = render(<GameBoard />);
    fireEvent.keyDown(document, { keyCode: 32 });
    const pauseText = getByText('RESUMED');
    expect(pauseText).toBeInTheDocument();
  });
});
