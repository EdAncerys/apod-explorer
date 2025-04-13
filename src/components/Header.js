import logo from '../logo.svg';

/*
 * Header component
 * Displays the logo and a brief description of the app
 * @returns {JSX.Element} Header component
 */

export function Header() {
  return (
    <header className="header" data-testid="header">
      <img src={logo} alt="logo" />
      <p>Explore the universe with NASA's Astronomy Picture of the Day!</p>
    </header>
  );
}
