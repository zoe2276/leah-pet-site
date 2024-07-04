import * as React from "react";
import * as Components from "../components/index";

export const Home = () => {
    const panel1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam donec adipiscing tristique risus nec feugiat in fermentum posuere. Commodo quis imperdiet massa tincidunt nunc."
    const panel2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor eget dolor morbi non arcu risus quis varius quam. Nec feugiat in fermentum posuere."
    const panel3 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse sed nisi lacus sed viverra tellus in. Donec adipiscing tristique risus nec feugiat in."

    return (
        <>
            <div className="page-info page-home">
                <div className="page-container">
                    <Components.Panel textComp={panel1} />
                    <Components.Panel textComp={panel2} />
                    <Components.Panel textComp={panel3} />
                </div>
            </div>
        </>
    )
}