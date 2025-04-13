import logo from '../logo.svg';

export function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo" />
      <p>Explore the universe with NASA's Astronomy Picture of the Day!</p>
    </header>
  );
}
