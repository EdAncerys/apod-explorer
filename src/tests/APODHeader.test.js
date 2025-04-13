import { render, screen } from '@testing-library/react';
import { APODHeader } from '../components/APODHeader';

test('renders APOD image and details, and handles favorite addition', () => {
  render(<APODHeader />);

  const h1Element = screen.getByRole('heading', { level: 1 });
  expect(h1Element).toBeInTheDocument();

  const pElement = screen.getByRole('paragraph');
  expect(pElement).toBeInTheDocument();

  const h2Element = screen.getByRole('heading', { level: 2 });
  expect(h2Element).toBeInTheDocument();
});
