import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>Strio</h1>
      <p>A community of artists and art-lovers.</p>
    </header>
  );
}
