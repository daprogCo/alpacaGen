import React, { useContext } from "react";
import { Context } from "./Context";
import alpacas from "./alpacas.json";

const Attributes = () => {
    const attributes = Object.keys(alpacas);
    const { actions, activeStyle } = useContext(Context);

    return (
        <div className="choices">
            <h2>attributes</h2>
            {attributes.map(attr =>
                <button 
                    onClick={() => actions.changeAttr(attr)}
                    className={attr === activeStyle ? "selected" : "button-choice"}
                    key={attr}
                >
                    {attr}
                </button>
            )}
        </div>
    );
}

export default Attributes;
