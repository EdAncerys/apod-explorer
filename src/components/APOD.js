/*
 * APOD Component
 * @param {Object} props - Component properties
 * @param {Object} props.apod - The Astronomy Picture of the Day data
 * @param {Function} props.addToFavorites - Function to add APOD to favorites
 * @returns {JSX.Element} APOD component
 */

export function APOD({ apod, addToFavorites }) {
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
        {apod?.title && (
          <h2>
            {apod?.title} ({apod?.date || 'No date available'})
          </h2>
        )}
        {/* Button to add current APOD to favorites */}
        <button onClick={() => addToFavorites(apod)}>Add to Favorites</button>
      </div>

      <p>{apod?.explanation}</p>
    </div>
  );
}
