import * as React from "react";
import { NavLink } from "react-router-dom";
import "./components.css";

import * as Button from "./buttons/index";

export const NavBar = () => {
    /*
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
    */

    const handleActiveRoute = (isActive, isPending) => isActive ? "active" : isPending ? "pending" : ""

    return (
        <>
            <div nav-container>
                <div className="navbar">
                    <div className="nav-button">
                        <Button.Menu />
                    </div>
                    <div className="nav-info">
                        <div className="nav-title">
                            The Pet Nanny
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
                    <NavLink to={"/"} className={({isActive, isPending}) => handleActiveRoute(isActive, isPending)}>Home</NavLink>
                    <NavLink to={"/about"} className={({isActive, isPending}) => handleActiveRoute(isActive, isPending)}>About</NavLink>
                    <NavLink to={"/services"} className={({isActive, isPending}) => handleActiveRoute(isActive, isPending)}>Services</NavLink>
                    <NavLink to={"/contact"} className={({isActive, isPending}) => handleActiveRoute(isActive, isPending)}>Contact</NavLink>
                </div>
            </div>
        </>
    )
}