import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { useNavigationLogic} from "./useNavigationLogic";

const Navigation = ({ part }) => {

    const {
        isOpen,
        toggleMenu,
        showPokedex,
        showCategories,
        showHamburger,
    } = useNavigationLogic(part);
  
    return (
      <nav className="nav">

        {showPokedex && (
            <Link className= "nav-link" to="/">
                Pokedex
            </Link>
        )}
        {showCategories && (
            <Link className= "nav-link" to="/categories">
                Categories
            </Link>
        )}
        
        {showHamburger && (
            <>
            <div className="nav-list">
                <div className="nav-toggle">
                    <button aria-label="Toggle navigation menu" onClick={toggleMenu}>
                        <span className="hamburger-icon">&#9776;</span>
                    </button>
                </div>
                <div className={`nav-links ${isOpen ? "open" : ""}`}>
                    <Link className="nav-link" to="/">
                        Pokedex
                    </Link>
                    <Link className="nav-link" to="/categories">
                        Categories
                    </Link>
                </div>
            </div>
            </>
        )}

      </nav>
    );
  };
  
  export default Navigation;