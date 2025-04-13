/*
 * APOD Component
 * @param {Object} props - Component properties
 * @param {Object} props.apod - The Astronomy Picture of the Day data
 * @param {Function} props.addToFavorites - Function to add APOD to favorites
 * 🚧 Implement image placeholders
 * @returns {JSX.Element} APOD component
 */

export function APOD({ apod, addToFavorites, removeFavorite }) {
  return (
    <div className="apod-wrapper">
      <div className="apod-content">
        {/* Render image or video based on API response */}
        {apod?.media_type === 'image' && (
          <img
            src={apod?.url}
            alt={apod?.title}
            className="apod-image"
            loading="lazy"
          />
        )}
        {apod?.media_type === 'video' && (
          <iframe
            src={apod?.url}
            title={apod?.title}
            className="apod-video"
            loading="lazy"
          ></iframe>
        )}
        {/* Render title and date */}
        {apod?.title && (
          <h2>
            {apod?.title} ({apod?.date || 'No date available'})
          </h2>
        )}
        {/* Button to add | remove current APOD to favorites */}
        <button
          onClick={() => {
            if (removeFavorite) {
              removeFavorite(apod?.date);
            } else {
              addToFavorites(apod);
            }
          }}
        >
          {removeFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      </div>

      <p>{apod?.explanation}</p>
    </div>
  );
}
