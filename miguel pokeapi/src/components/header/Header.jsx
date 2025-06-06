import "./Header.css";
import NavigationDesktop from "../navigation/desktop/NavigationDesktop";
import NavigationResponsive from "../navigation/mobile/NavigationMobile";
import { useHeaderLogic } from "./UseHeaderLogic.jsx";

export function Header() {
  const { isMobile } = useHeaderLogic();
  return (
    <header className="main-header">
      {isMobile ? <NavigationResponsive /> : <NavigationDesktop />}
    </header>
  );
}

export default Header;
