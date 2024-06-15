import * as React from "react";
import "./components.css";

import * as Button from "./buttons/index";

export const NavBar = () => {
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
                        High quality pet care in Kansas City
                    </div>
                </div>
                <div className="nav-button">
                    <div className="button" />
                </div>
            </div>
            <div className="nav-links">
                <a href="/" className="active" >Home</a>
                <a href="/about">About</a>
                <a href="/services">Services</a>
                <a href="/contact">Contact</a>
            </div>
        </>
    )
}