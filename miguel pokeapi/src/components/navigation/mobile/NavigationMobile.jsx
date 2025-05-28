import logoImgHeader from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import "./NavigationMobile.css";
import { useNavigationMobileLogic } from "./useNavigationMobileLogic";

const NavigationMobile = () => {
  const { isOpen, toggleMenu } = useNavigationMobileLogic();
  return (
    <nav className="nav-mobile">
      <div className="nav-header">
        <img src={logoImgHeader} className="logo-mobile" alt="Logo" />
      </div>
      {!isOpen && (
        <button onClick={toggleMenu} className="hamburger-button">
          <span className="hamburger-icon">&#9776;</span>
        </button>
      )}

      {isOpen && <div className="backdrop" onClick={toggleMenu}></div>}

      <div className={`nav-drawer ${isOpen ? "open" : ""}`}>
        <button onClick={toggleMenu} className="hamburger-button-open">
          <span className="hamburger-icon">&#9776;</span>
        </button>
        <div className="nav-links">
          <Link className="nav-link-mobile" to="/" onClick={toggleMenu}>
            Pokedex
          </Link>
          <Link className="nav-link-mobile" to="/regions" onClick={toggleMenu}>
            GeoPokemon
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationMobile;
