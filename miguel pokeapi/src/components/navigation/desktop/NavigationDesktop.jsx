import logoImgHeader from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import "./NavigationDesktop.css";

const NavigationDesktop = () => {
  return (
    <nav className="nav-desktop">
      <Link className="nav-link-desktop" to="/">
        Pokedex
      </Link>

      <img src={logoImgHeader} className="logo-desktop" alt="Logo" />

      <Link className="nav-link-desktop" to="/categories">
        GeoPokemon
      </Link>
    </nav>
  );
};

export default NavigationDesktop;
