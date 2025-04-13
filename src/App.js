import './App.css';
import { useState } from 'react';
import { useGetAPOD } from './hooks/useGetAPOD';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { DatePicker } from './components/DatePicker';

function App() {
  const [selectedDate, setSelectedDate] = useState('today');
  const [favorites, setFavorites] = useState([]);
  const { apod, loading, error } = useGetAPOD(selectedDate);
  const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

  console.log('apodData', apod);
  console.log('loading', loading);
  console.log('error', error);
  console.log('favorites', favorites);
  console.log('selectedDate', selectedDate);

  function removeFavorite(dateToRemove) {
    /*
     * Remove a favorite from the favorites list based on its date
     * This function filters out the favorite with the specified date and updates the favorites state
     */

    if (!dateToRemove) {
      alert('No date provided to remove from favorites');
      return;
    }
    setFavorites(favorites.filter((item) => item.date !== dateToRemove));
    alert('Removed from favorites!');
  }

  function handleChange(e) {
    /*
     * Handle date picker change
     * Update the selected date state based on user input
     * This will trigger a re-fetch of the APOD data for the selected date
     */
    setSelectedDate(e.target.value);
  }

  function addToFavorites(data) {
    /*
     * Add the current APOD to favorites
     * Check if the APOD is already in favorites
     * If not, add it to the favorites list
     */
    const isFavorite = favorites.some((item) => item.date === data.date);
    if (isFavorite) {
      alert('This APOD is already in your favorites!');
    } else {
      // If not, add it to favorites
      setFavorites([...favorites, data]);
      alert('Added to favorites!');
    }
  }

  return (
    <div className="main">
      {/* Header Component */}
      <Header />

      {/* Main Container */}
      <main className="root-container">
        {/* Sidebar Component */}
        <Sidebar favorites={favorites} removeFavorite={removeFavorite} />

        {/* Main Content */}
        <section className="content">
          {/* Loading and error states */}
          {loading && <p className="apod-loading">Loading data...</p>}
          {error && <p className="apod-error">Error: {error}</p>}

          {!loading && !error && (
            <>
              <h1>NASA APOD</h1>
              <p>
                Discover the wonders of the universe with NASA's Astronomy
                Picture of the Day.
              </p>
              <h2>Today's Astronomy Picture</h2>
            </>
          )}
          {/* APOD Component */}
          {apod && !loading && !error && (
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
                <button onClick={() => addToFavorites(apod)}>
                  Add to Favorites
                </button>
              </div>

              <p>{apod?.explanation}</p>
            </div>
          )}

          {/* Date Picker Component */}
          <DatePicker
            selectedDate={selectedDate}
            today={today}
            handleChange={handleChange}
          />
        </section>
      </main>

      {/* Optional Footer */}
    </div>
  );
}

export default App;

/*
 * ✅ Main Requirements
 * Use React (with Create React App or Vite)
 * No UI frameworks – use only plain CSS or styled-components
 * Use NASA APOD API with DEMO_KEY
 * Display today’s APOD (image/video, title, date, explanation)
 * Add a date picker to explore APODs from June 16, 1995, to today
 * Allow users to mark APODs as favourites
 * Display a favourites list (title and date)
 * Bonus: Add a Remove button to delete items from favourites
 * Handle loading and error states
 * Use React Hooks (useState, useEffect)
 * Break app into reusable components
 * Ensure responsive design with CSS
 * Submit via GitHub repo with:
 * README (with setup instructions)
 * Live demo (optional)
 */
