import { render, screen } from '@testing-library/react';
import { DatePicker } from '../components/DatePicker';

test('renders DatePicker with default date', () => {
  const today = new Date();
  const formattedDate = today.toISOString().split('T')[0];

  render(<DatePicker selectedDate={formattedDate} handleChange={() => {}} />);

  const dateInput = screen.getByTestId('date-input');
  expect(dateInput).toBeInTheDocument();

  expect(dateInput.value).toBe(formattedDate);
});
