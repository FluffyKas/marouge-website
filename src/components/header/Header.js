import { Link } from "react-router-dom";
import "./Header.scss";

export const Header = () => {
  return (
    <header>
      <h1>Logo</h1>
      <nav className="header-nav">
        <Link to="/" className="nav-link">Rolam</Link>
        <Link to="/katalogus" className="nav-link">Katalogus</Link>
        <Link to="/rendeles" className="nav-link">Rendeles</Link>
      </nav>
    </header>
  );
}