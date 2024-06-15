import * as React from "react";
import "./buttons.css";

import * as SVG from "./svg";

export const Menu = () => {
    const handleClick = e => {
        const navLinks = document.querySelector(".nav-links");
        navLinks.classList.toggle("open");

        const menuButton = document.querySelector(".menu-button");
        menuButton.classList.toggle("active-button");
    }

    return (
        <>
            <div className="button menu-button" onClick={handleClick}>
                <SVG.Menu />
            </div>
        </>
    )
}