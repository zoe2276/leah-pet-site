import * as React from "react";
import "./components.css";

import * as Button from "./buttons/index";

export const NavBar = () => {
    const currentPage = window.location.pathname.substring(1);

    const updateActivePage = React.useCallback(() => {
        !currentPage ? 
            document.querySelectorAll("a").forEach(e => {
                e.innerText.toLowerCase() === "Home".toLowerCase() ?
                    e.classList.add("active") :
                    e.classList.remove("active");
            }) :
            document.querySelectorAll("a").forEach(e => {
                e.innerText.toLowerCase() === currentPage.toLowerCase() ?
                    e.classList.add("active") :
                    e.classList.remove("active");
            });
    }, [currentPage]);

    React.useEffect(updateActivePage);
    
    return (
        <>
            <div className="navbar">
                <div className="nav-button">
                    <Button.Menu />
                </div>
                <div className="nav-info">
                    <div className="nav-title">
                        Leah's Pet Care
                    </div>
                    <div className="nav-description">
                        High quality pet care{/*  in Kansas City */}
                    </div>
                </div>
                <div className="nav-button">
                    <div className="button" />
                </div>
            </div>
            <div className="nav-links">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/services">Services</a>
                <a href="/contact">Contact</a>
            </div>
        </>
    )
}