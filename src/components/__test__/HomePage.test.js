import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HomePage from '../HomePage';


test('should render AuthPageNav component', () => {
  render(<HomePage />);
  const homepageElement = screen.getByTestId('homepagetest');
  expect(homepageElement).toBeInTheDocument()
  expect(homepageElement).toHaveTextContent('HomePage');
})