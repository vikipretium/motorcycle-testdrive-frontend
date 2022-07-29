import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MainPage from './mainpage';

jest.mock('./mainpage');

test('should render Login component', () => {
  render(<MainPage />);
  const mainPageElement = screen.queryByTestId('mainpagetest');
  expect(mainPageElement);
});
