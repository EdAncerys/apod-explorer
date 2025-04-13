/*
 * Sidebar component to display favorite articles
 * @param {Object} props - Component properties
 * @param {Array} props.favorites - List of favorite articles
 * @param {Function} props.removeFavorite - Function to remove an article from favorites
 * @returns {JSX.Element} Sidebar component
 */

export function Sidebar({ favorites, removeFavorite }) {
  return (
    <aside className="sidebar">
      <h2>Favorites</h2>
      {/* Favorites list will go here */}
      <ul>
        {favorites.length > 0 ? (
          favorites.map((favorite, index) => (
            <li key={index}>
              <h3>{favorite.title}</h3>
              <p>{favorite.date}</p>
              <button onClick={() => removeFavorite(favorite.date)}>
                Remove
              </button>
            </li>
          ))
        ) : (
          <li>No favorites yet</li>
        )}
      </ul>
    </aside>
  );
}
