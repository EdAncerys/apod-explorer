import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

/*
 * ✅ App Requirements
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
