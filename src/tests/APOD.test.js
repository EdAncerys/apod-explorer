import { render, screen, fireEvent } from '@testing-library/react';
import { APOD } from '../components/APOD';

const mockApod = {
  media_type: 'image',
  url: 'https://example.com/image.jpg',
  title: 'Astronomy Pic',
  date: '2025-04-13',
  explanation: 'Some explanation.',
};

test('renders APOD image and details, and handles favorite addition', () => {
  const addToFavorites = jest.fn();
  render(<APOD apod={mockApod} addToFavorites={addToFavorites} />);

  // Check image rendering
  const img = screen.getByRole('img', { name: /astronomy pic/i });
  expect(img).toBeInTheDocument();

  // Check the title with date is rendered
  const title = screen.getByRole('heading', {
    name: /astronomy pic \(2025-04-13\)/i,
  });
  expect(title).toBeInTheDocument();

  // Simulate button click and assert callback is called
  const button = screen.getByRole('button', { name: /add to favorites/i });
  fireEvent.click(button);
  expect(addToFavorites).toHaveBeenCalledWith(mockApod);
});
