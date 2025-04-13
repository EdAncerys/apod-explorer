/*
 * Custom hook to fetch the Astronomy Picture of the Day (APOD) from NASA's API.
 * @param {string} date - The date for which to fetch the APOD.
 * @returns {Object} - An object containing the APOD data, loading state, and error state.
 * TODO:
 * 🚧 Implement axios for enhanced data fetching
 * 🚧 Implement error handling with custom error messages
 * 🚧 Implement SWR, React Query for data fetching
 */

import { useState, useEffect } from 'react';

export const useGetAPOD = (selectedDate) => {
  const [apod, setApod] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    /*
     * Effect hook to fetch APOD
     * Fetch APOD data from NASA API
     * Handle loading and error states
     * Validate date input
     * Handle random error for testing
     * User abort controller to cancel fetch request if needed
     * Cleanup function to abort fetch request
     */
    const controller = new AbortController(); // Create an AbortController to cancel the fetch request if needed
    async function fetchAPOD() {
      setLoading(true);
      try {
        // Check the API key existence and warn if missing
        const API_KEY = process.env.REACT_APP_APOD_API_KEY;
        if (!API_KEY) {
          throw new Error(
            'API key is missing. Please provide a valid NASA API key.'
          );
        }

        // Use NASAs APOD API with DEMO_KEY. If a specific date is selected, pass it as a query parameter.
        let url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;
        if (selectedDate !== 'today') {
          url += `&date=${selectedDate}`;
        }

        const date = new Date(selectedDate);
        const minDate = new Date('1995-06-16');
        if (date < minDate) {
          /*
           * Validate date input
           * Check if the selected date is before June 16, 1995
           * If so, throw an error
           * This is to ensure the date is within the valid range
           * of the NASA APOD API
           */
          throw new Error('Date must be after June 16, 1995');
        }
        const response = await fetch(url, {
          signal: controller.signal, // Pass the abort signal to the fetch request
        });

        if (!response.ok) {
          /*
           * Handle HTTP errors
           * If the response is not OK, throw an error
           * This will be caught in the catch block
           */
          const status = response.status; // HTTP status code
          const errorMsg = await response.json(); // Parse the error message
          throw new Error(
            `Error ${status}: ${errorMsg?.error?.message}` ||
              'Failed to fetch data'
          );
        }

        const data = await response.json();
        setApod(data); // Set the fetched APOD data to state
        setError(null); // Reset error state
      } catch (err) {
        /*
         * Handle errors
         * If the error is not an AbortError, set the error state
         * This will trigger the error message to be displayed
         */
        if (err.name !== 'AbortError') {
          setError(err.message);
        } else {
          // Only log if not in test environment
          if (process.env.NODE_ENV !== 'test') {
            console.error('Fetch aborted');
          }
        }
      } finally {
        setLoading(false);
      }
    }
    fetchAPOD();

    return () => {
      /*
       * Cleanup function to abort fetch request if the component unmounts
       * This prevents memory leaks and ensures the fetch request is cancelled
       */
      controller.abort();
    };
  }, [selectedDate]);

  return { apod, loading, error };
};
