import { render, screen } from '@testing-library/react';
import { Header } from '../components/Header';

test('renders Header with correct title and description', () => {
  render(<Header />);

  // expect to have img element
  const imgElement = screen.getByRole('img', { name: /logo/i });
  expect(imgElement).toBeInTheDocument();
  const pElement = screen.getByText(
    /explore the universe with nasa's astronomy picture of the day!/i
  );
  expect(pElement).toBeInTheDocument();
});
