import logoImgHeader from "../../assets/logo.png";
import "./Header.css";
import Navigation from "../navigation/Navigation";

export function Header() {
  return (
    <header className="main-header">
      <div className="header-container">
      <Navigation part="first" />
        <img
          src={logoImgHeader}
          alt="the logo of Pokemigapi"
          className="logo"
        />
      <Navigation part="second" />
      </div>
      <Navigation part="responsive" />
    </header>
  );
}

export default Header;