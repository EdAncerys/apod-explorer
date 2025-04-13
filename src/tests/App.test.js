import { render, screen } from '@testing-library/react';
import App from '../App';

test('Renders Main header component', () => {
  render(<App />);
  const headerElement = screen.getByTestId('header');
  expect(headerElement).toBeInTheDocument();
});

test('Renders Sidebar component', () => {
  render(<App />);
  const sidebarElement = screen.getByTestId('sidebar');
  expect(sidebarElement).toBeInTheDocument();
});

test('Renders DatePicker component', () => {
  render(<App />);
  const datePickerElement = screen.getByTestId('datepicker');
  expect(datePickerElement).toBeInTheDocument();
});
