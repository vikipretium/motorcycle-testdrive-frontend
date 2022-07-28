import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from '../Login';

jest.mock('../Login');

test('should render Login component', () => {
  render(<Login />);
  const loginElement = screen.queryByTestId('logintest');
  expect(loginElement);
});
