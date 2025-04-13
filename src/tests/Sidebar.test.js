import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Sidebar } from '../components/Sidebar';

describe('Sidebar component', () => {
  const mockRemoveFavorite = jest.fn();

  const mockFavorites = [
    { title: 'Andromeda Galaxy', date: '2023-11-10' },
    { title: 'Milky Way Core', date: '2023-11-09' },
  ];

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders Sidebar with heading', () => {
    render(<Sidebar favorites={[]} removeFavorite={mockRemoveFavorite} />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent('Favorites');
  });

  test('displays "No favorites yet" when the list is empty', () => {
    render(<Sidebar favorites={[]} removeFavorite={mockRemoveFavorite} />);
    expect(screen.getByText(/no favorites yet/i)).toBeInTheDocument();
  });

  test('renders a list of favorite items', () => {
    render(
      <Sidebar favorites={mockFavorites} removeFavorite={mockRemoveFavorite} />
    );

    mockFavorites.forEach((fav) => {
      expect(screen.getByText(fav.title)).toBeInTheDocument();
      expect(screen.getByText(fav.date)).toBeInTheDocument();
    });

    const allHeadings = screen.getAllByRole('heading', { level: 3 });
    expect(allHeadings).toHaveLength(mockFavorites.length);
  });

  test('calls removeFavorite with correct date when button is clicked', () => {
    render(
      <Sidebar favorites={mockFavorites} removeFavorite={mockRemoveFavorite} />
    );

    const removeButtons = screen.getAllByRole('button', { name: /remove/i });
    expect(removeButtons).toHaveLength(mockFavorites.length);

    fireEvent.click(removeButtons[0]);

    expect(mockRemoveFavorite).toHaveBeenCalledWith(mockFavorites[0].date);
    expect(mockRemoveFavorite).toHaveBeenCalledTimes(1);
  });

  test('Sidebar is rendered with the correct test ID', () => {
    render(
      <Sidebar favorites={mockFavorites} removeFavorite={mockRemoveFavorite} />
    );
    const sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toBeInTheDocument();
  });
});
