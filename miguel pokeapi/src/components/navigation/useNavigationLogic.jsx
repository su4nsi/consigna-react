import { useState, useEffect } from "react";

export const useNavigationLogic = (part) => {
    const [isOpen, setIsOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, 
      []);

    const hamburgerDisplay = windowWidth < 1024;

    const showPokedex = (part === "first" && !hamburgerDisplay) || (!part && !hamburgerDisplay);
    const showCategories = (part === "second" && !hamburgerDisplay) || (!part && !hamburgerDisplay);
    const showHamburger = (part === "responsive" && hamburgerDisplay) || (!part && hamburgerDisplay);

    return {
        isOpen,
        toggleMenu,
        showPokedex,
        showCategories,
        showHamburger,
    };
};

