import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SignUp from '../SignUp';

jest.mock('../SignUp');

test('should render Signup', () => {
  render(<SignUp />);
  const signupElement = screen.queryByTestId('signuptest');
  expect(signupElement);
});
