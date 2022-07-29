import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AuthPageNav from '../AuthPageNav';

jest.mock('../AuthPageNav');

test('should render AuthPageNav component', () => {
  render(<AuthPageNav />);
  const authPageNavElement = screen.queryByTestId('authpagenavtest');
  expect(authPageNavElement);
});
