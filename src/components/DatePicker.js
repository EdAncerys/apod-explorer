/*
 * DatePicker Component
 * @param {Object} props - Component properties
 * @param {string} props.selectedDate - The currently selected date
 * @param {string} props.today - Today's date
 * @param {Function} props.handleChange - Function to handle date change
 * @returns {JSX.Element} DatePicker component
 */

export function DatePicker({ selectedDate, today, handleChange }) {
  return (
    <div className="date-picker">
      <h2>Explore APOD by Date</h2>
      <p>
        Select a date to view the Astronomy Picture of the Day for that day. You
        can explore APODs from June 16, 1995, to today.
      </p>
      <label htmlFor="apod-date">Select Date: </label>
      <input
        type="date"
        id="apod-date"
        // If the default flag 'today' is used, show today's date in the picker
        value={selectedDate === 'today' ? today : selectedDate}
        min="1995-06-16" // Minimum date per API documentation
        max={today} // Maximum date is today
        onChange={handleChange}
      />
    </div>
  );
}
