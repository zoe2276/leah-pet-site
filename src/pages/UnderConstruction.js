import * as React from "react";

import logo from '../logo.svg';

export const UnderConstruction = () => {
    return (
        <>
            <div className="App">
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    <span className="header">This site is under construction.</span><br />Check back soon!
                </p>
                </header>
            </div>
        </>
    )
}