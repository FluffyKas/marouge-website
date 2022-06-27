import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/images/logo.jpg";

export const Header = () => {
  return (
    <header>
      <img src={logo} className="logo" alt="Marouge" />
      <nav className="header-nav">
        <Link to="/" className="nav-link">Rolam</Link>
        <Link to="/katalogus" className="nav-link">Katalogus</Link>
        <Link to="/rendeles" className="nav-link">Rendeles</Link>
      </nav>
    </header>
  );
}