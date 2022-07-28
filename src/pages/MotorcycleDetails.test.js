import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MotorcycleDetails from './MotorcycleDetails';

jest.mock('./MotorcycleDetails');

test('should render MotorcycleDetails', () => {
  render(<MotorcycleDetails />);
  const motorcycleDetailsElement = screen.queryByTestId('motorcycledetailstest');
  expect(motorcycleDetailsElement);
});
