import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Card from './card';

jest.mock('./card');

test('should render card component', () => {
  render(<Card />);
  const cardElement = screen.queryByTestId('cardtest');
  expect(cardElement);
});
