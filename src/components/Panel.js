import * as React from "react";

export const Panel = ({textComp = '', imgComp = '', overlay = false}) => {
    return (
        <>
            <div className="panel">
                <div className="image-container">
                    {imgComp && imgComp}
                    
                </div>
                <div className="text-container">
                    {textComp && textComp}
                </div>
            </div>
        </>
    )
}